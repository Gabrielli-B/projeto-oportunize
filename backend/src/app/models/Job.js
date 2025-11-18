import Sequelize, { Model } from 'sequelize';

class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        descricao: Sequelize.TEXT,
        requisitos: Sequelize.TEXT,
        localizacao: Sequelize.STRING,
        tipo_contrato: Sequelize.STRING,
        email_contato: Sequelize.STRING,
        empresaId: Sequelize.INTEGER, // FK para Empresa
      },
      {
        sequelize,
        modelName: 'Job',
        tableName: 'jobs',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Empresa, { foreignKey: 'empresaId', as: 'empresa' });
  }
}

export default Job;
