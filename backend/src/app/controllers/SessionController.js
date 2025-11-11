import jwt from 'jsonwebtoken';
import Empresa from '../models/Empresa.js';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const empresa = await Empresa.findOne({ where: { email } });

    if (!empresa) {
      return res.status(401).json({ error: 'Empresa não encontrada' });
    }

    if (!(await empresa.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, nome } = empresa;

    return res.json({
      empresa: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
