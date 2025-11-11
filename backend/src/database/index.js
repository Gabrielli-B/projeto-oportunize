import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.js'
 
import Empresa from '../app/models/Empresa.js';
 
const models = [Empresa];
 
class Database{
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection))
  }
}

export default new Database();