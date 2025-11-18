import Empresa from "../models/Empresa.js";
import database from '../../database/index.js';
import * as Yup from 'yup';

class EmpresaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      cnpj: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação" });
    }

    const { nome, cnpj, email, password } = req.body;

    const empresaExists = await Empresa.findOne({ where: { email } });
    if (empresaExists) {
      return res.status(400).json({ error: "Empresa já existe" });
    }

    const empresa = await Empresa.create({ nome, cnpj, email, password });

    return res.json({
      id: empresa.id,
      nome: empresa.nome,
      cnpj: empresa.cnpj,
      email: empresa.email,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      cnpj: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6)
        .when('oldPassword', (oldPassword, field) => oldPassword ? field.required() : field),
      confirmPassword: Yup.string()
        .when('password', (password, field) => password ? field.required().oneOf([Yup.ref('password')]) : field),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação" });
    }

    const { email, oldPassword } = req.body;
    const empresa = await Empresa.findByPk(req.userId);

    if (email !== empresa.email) {
      const empresaExists = await Empresa.findOne({ where: { email } });
      if (empresaExists) {
        return res.status(400).json({ error: "Empresa já existe" });
      }
    }

    if (oldPassword && !(await empresa.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const { id, nome, cnpj, email: updatedEmail } = await empresa.update(req.body);

    return res.json({
      id,
      nome,
      cnpj,
      email: updatedEmail,
    });
  }
}

export default new EmpresaController();
