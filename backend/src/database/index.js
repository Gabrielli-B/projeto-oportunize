import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../app/models/User.js';
import Empresa from '../app/models/Empresa.js';
import Job from '../app/models/Job.js';

const models = [User, Empresa, Job];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Pegando a configuração de development
    const config = databaseConfig.development;

    this.connection = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: config.dialect,
        define: config.define,
      }
    );

    models.forEach(model => model.init(this.connection));
  }
}

export default new Database();
