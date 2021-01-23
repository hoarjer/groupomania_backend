'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const config = require('../config/config');
const db = {};

console.log(config);

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  dialect: 'mysql',
  host: config.db.host
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//////// ASSOCIATIONS

// user
db.user.hasMany(db.post);
db.user.hasMany(db.comment);

// post
db.post.belongsTo(db.user);
db.post.hasMany(db.comment);

// comment
db.comment.belongsTo(db.user);
db.comment.belongsTo(db.post);


sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(error => {
  console.error('Unable to connect to the database.');
})

module.exports = db;
