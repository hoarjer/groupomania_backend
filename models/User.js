'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(50),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    firs_tname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    updated_at: {
      type: DataTypes.DATE
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  },
    {
      underscored: true,
      paranoid: true
    });
};