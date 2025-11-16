import User from '../models/User.js';
import * as Yup from 'yup';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou' });
    }

    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });

    if (userExists) return res.status(400).json({ error: 'Usuário já existe' });

    const user = await User.create(req.body);

    return res.status(201).json({
      id: user.id,
      nome: user.nome,
      email: user.email,
    });
  }
}

export default new UserController();