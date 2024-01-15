'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("emails", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DataTypes.DATE
      },
      content: {
        type: Sequelize.DataTypes.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('emails')
  }
};
