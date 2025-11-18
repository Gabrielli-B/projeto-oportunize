import Job from '../models/Job.js';
import database from "../../database/index.js";
import * as Yup from 'yup';

class JobController {
  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validação falhou' });
    }

    // req.empresaId vem do middleware de autenticação da empresa
    const job = await Job.create({
      ...req.body,
      empresaId: req.empresaId,
    });

    return res.status(201).json(job);
  }

  async update(req, res) {
    const job = await Job.findByPk(req.params.id);

    if (!job) return res.status(404).json({ error: 'Vaga não encontrada' });

    if (job.empresaId !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão' });

    const updated = await job.update(req.body);
    return res.json(updated);
  }

  async delete(req, res) {
    const job = await Job.findByPk(req.params.id);

    if (!job) return res.status(404).json({ error: 'Vaga não encontrada' });

    if (job.empresaId !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão' });

    await job.destroy();
    return res.status(204).send();
  }

  async index(req, res) {
    const jobs = await Job.findAll({ include: ['empresa'] });
    return res.json(jobs);
  }
}

export default new JobController();
