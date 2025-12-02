import Job from '../models/Job.js';
import * as Yup from 'yup';
// ✅ Importação correta do Model Empresa para uso no include.
import Empresa from '../models/Empresa.js'; 

class JobController {
  
  /**
   * Cria uma nova vaga de emprego.
   * Requer autenticação (token) de uma Empresa.
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string().required(),
      requisitos: Yup.string().nullable(), // Nullable se não for obrigatório
      localizacao: Yup.string().nullable(),
      tipo_contrato: Yup.string().nullable(),
      email_contato: Yup.string().email().nullable(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados da vaga.' });
    }

    // Cria a vaga, associando automaticamente ao ID da empresa logada
    const job = await Job.create({
      ...req.body,
      empresa_id: req.empresaId, // Obtido do token via middleware de autenticação
    });

    return res.status(201).json(job);
  }

  /**
   * Atualiza uma vaga de emprego existente.
   * Apenas a Empresa criadora da vaga pode fazer a alteração.
   */
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

    // Verifica se a vaga pertence à empresa logada
    if (job.empresa_id !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão. Esta vaga não foi criada por sua empresa.' });

    const updated = await job.update(req.body);
    return res.json(updated);
  }

  /**
   * Exclui uma vaga de emprego.
   * Apenas a Empresa criadora da vaga pode excluí-la.
   */
  async delete(req, res) {
    const job = await Job.findByPk(req.params.id);

    if (!job) return res.status(404).json({ error: 'Vaga não encontrada.' });

    // Verifica se a vaga pertence à empresa logada
    if (job.empresa_id !== req.empresaId)
      return res.status(401).json({ error: 'Sem permissão para deletar esta vaga.' });

    await job.destroy();
    // Resposta 204 indica sucesso e nenhum conteúdo
    return res.status(204).send(); 
  }

  /**
   * Lista todas as vagas de emprego disponíveis.
   * Inclui os dados da Empresa associada.
   */
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