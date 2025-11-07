import { Model, DataTypes } from 'sequelize';
 
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cnpj: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'companies', // nome da tabela criada pela migration
      }
    );
  }
 
  static associate(models) {
    // Uma empresa pode ter várias vagas
    this.hasMany(models.Job, { foreignKey: 'company_id', as: 'jobs' });
  }
}
 
export default User;