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

        empresa_id: Sequelize.INTEGER, 
      },
      {
        sequelize,
        tableName: 'jobs',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Empresa, {
      foreignKey: 'empresa_id',
      as: 'empresa',
    });
  }
}

export default Job;
