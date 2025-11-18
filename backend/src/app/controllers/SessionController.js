import jwt from 'jsonwebtoken';
import Empresa from '../models/Empresa';
import database from "../../database/index.js";
import authConfig from '../../config/auth'; // certifique-se de ter este arquivo

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const empresa = await Empresa.findOne({ where: { email } });

    if (!empresa) {
      return res.status(401).json({ error: 'usuario nao existe' });
    }

    if (!(await empresa.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, nome, cnpj, email: empresaEmail } = empresa;

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      empresa: {
        id,
        nome,
        cnpj,
        email: empresaEmail,
      },
      token,
    });
  }
}

export default new SessionController();

