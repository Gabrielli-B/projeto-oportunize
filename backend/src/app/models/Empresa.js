import Sequelize, { Model } from 'sequelize';
import bcrypt from "bcryptjs";

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        empresa_id: { 
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        tableName: 'empresas',
      }
    );

    this.addHook('beforeSave', async (empresa) => {
      if (empresa.password) {
        empresa.password_hash = await bcrypt.hash(empresa.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Job, { foreignKey: 'empresa_id', as: 'jobs' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Empresa;
