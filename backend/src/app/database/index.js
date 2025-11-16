import { Sequelize } from 'sequelize';
import dbConfig from '../../config/database.js';

import Empresa from '../models/Empresa.js';
import User from '../models/User.js';
import Job from '../models/Job.js';

const models = [Empresa, User, Job];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});

export default connection;