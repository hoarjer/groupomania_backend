'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    _id: {
      type: DataTypes.INTEGER(9).UNSIGNED.ZEROFILL,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
    // updated_at: {
    //   type: DataTypes.DATE
    // },
    // deleted_at: {
    //   type: DataTypes.DATE
    // }
  },
    {
      underscored: true,
      paranoid: true
    });
};