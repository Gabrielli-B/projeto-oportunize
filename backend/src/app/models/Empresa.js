import Sequelize, { Model } from 'sequelize';
import bcrypt from "bcryptjs";

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING, // aqui salvamos o hash
        password: Sequelize.VIRTUAL, // campo temporário para senha
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (empresa) => {
      if (empresa.password) {
        empresa.password_hash = await bcrypt.hash(empresa.password, 8);
      }
    });

    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Empresa;
