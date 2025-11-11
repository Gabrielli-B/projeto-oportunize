import Empresa from "../models/Empresa.js";
import bcrypt from "bcryptjs";
import * as Yup from "yup";

class EmpresaController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required(),
        cnpj: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validação falhou" });
      }

      const { email } = req.body;

      const empresaExistente = await Empresa.findOne({ where: { email } });

      if (empresaExistente) {
        return res.status(400).json({ error: "Empresa já existe" });
      }

      const empresa = await Empresa.create(req.body);

      return res.status(201).json({
        id: empresa.id,
        nome: empresa.nome,
        cnpj: empresa.cnpj,
        email: empresa.email,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao cadastrar empresa" });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string(),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
          .min(6)
          .when("oldPassword", (oldPassword, field) =>
            oldPassword ? field.required() : field
          ),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validação falhou" });
      }

      const { email, oldPassword } = req.body;

      const empresa = await Empresa.findByPk(req.empresaId);

      if (!empresa) {
        return res.status(404).json({ error: "Empresa não encontrada" });
      }

      if (email && email !== empresa.email) {
        const empresaExiste = await Empresa.findOne({ where: { email } });
        if (empresaExiste) {
          return res.status(400).json({ error: "E-mail já em uso" });
        }
      }

      if (oldPassword && !(await empresa.checkPassword(oldPassword))) {
        return res.status(401).json({ error: "Senha antiga incorreta" });
      }

      const { id, nome, cnpj } = await empresa.update(req.body);

      return res.json({
        id,
        nome,
        cnpj,
        email: empresa.email,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar empresa" });
    }
  }
}

export default new EmpresaController();
