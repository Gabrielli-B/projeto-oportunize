import { Sequelize } from 'sequelize';
import dbConfig from '../config/database.js';
 
import User from '../app/models/User.js';
import Job from '../app/models/Job.js';
 
const models = [User, Job];
 
// cria a conexão com o banco
const connection = new Sequelize(dbConfig);
 
// inicializa cada model
models.forEach((model) => model.init(connection));
 
// executa as associações (se existirem)
models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});
 
export default connection;