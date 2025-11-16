import Sequelize, { Model } from 'sequelize';

class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        requisitos: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        localizacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        tipo_contrato: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        email_contato: {
          type: Sequelize.STRING,
          allowNull: true,
        },
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
    this.belongsTo(models.Empresa, { foreignKey: 'company_id', as: 'empresa' });
  }
}

export default Job;