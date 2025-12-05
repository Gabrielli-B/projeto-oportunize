'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('jobs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      empresa_id: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'empresas',
          key: 'empresa_id', 
        },
        allowNull: true, 
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('jobs');
  },
};
