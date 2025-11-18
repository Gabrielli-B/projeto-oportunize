import jwt from 'jsonwebtoken';
import User from '../models/User';
import database from "../../database/index.js";
import authConfig from '../../config/auth'; // certifique-se de ter este arquivo

class SessionUserController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'usuario nao existe' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, nome, email: userEmail } = user;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      user: {
        id,
        nome,
        email: userEmail,
      },
      token,
    });
  }
}

export default new SessionUserController();
