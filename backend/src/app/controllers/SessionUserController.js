import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';
import authConfig from '../../config/auth.js';

class SessionUserController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: 'Senha inválida' });

    const { id, nome } = user;

    return res.json({
      user: { id, nome, email },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionUserController();