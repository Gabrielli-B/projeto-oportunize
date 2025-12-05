import Job from '../models/Job.js';
import * as Yup from 'yup';
import Empresa from '../models/Empresa.js'; 

class JobController {
  
  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string().required(),
      requisitos: Yup.string().nullable(), 
      localizacao: Yup.string().nullable(),
      tipo_contrato: Yup.string().nullable(),
      email_contato: Yup.string().email().nullable(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados da vaga.' });
    }

    const job = await Job.create({
      ...req.body,
      empresa_id: req.empresaId, 
    });

    return res.status(201).json(job);
  }

 
  async update(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string(),
      descricao: Yup.string(),
      requisitos: Yup.string().nullable(),
      localizacao: Yup.string().nullable(),
      tipo_contrato: Yup.string().nullable(),
      email_contato: Yup.string().email().nullable(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação para atualização.' });
    }

    const job = await Job.findByPk(req.params.id);

    if (!job) return res.status(404).json({ error: 'Vaga não encontrada.' });

    if (job.empresa_id !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão. Esta vaga não foi criada por sua empresa.' });

    const updated = await job.update(req.body);
    return res.json(updated);
  }

  async delete(req, res) {
    const job = await Job.findByPk(req.params.id);

    if (!job) return res.status(404).json({ error: 'Vaga não encontrada.' });

    if (job.empresa_id !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão para deletar esta vaga.' });

    await job.destroy();
    return res.status(204).send(); 
  }

  async index(req, res) {
  try {
    const jobs = await Job.findAll({
      include: [
        { 
          model: Empresa, 
          as: 'empresa', 
          attributes: ['empresa_id', 'nome', 'email'] 
        }
      ],
    });
    return res.json(jobs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao listar vagas' });
  }
}
}

export default new JobController();