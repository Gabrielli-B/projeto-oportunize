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
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    models.map(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
      return model;
    });
  }
}

export default new Database();

