'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Email.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    content: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Email',
    tableName: 'emails',
    timestamps: false,
    createdAt: 'created_at'
  });
  return Email;
};