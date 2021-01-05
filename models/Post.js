'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('post', {
    _id: {
      type: DataTypes.INTEGER(50),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER(50),
        required: true,
        allowNull: false
     },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gif_url: {
      type: DataTypes.STRING(255),
      allowNull: false
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