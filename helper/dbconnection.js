'use strict';
var config = require('config');
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize(config.get('db.database'), config.get('db.user'), config.get('db.password'), {
    host: config.get('db.host'),
    port: config.get('db.port'),
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
});

//Checking connection status
/*sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  */

module.exports = sequelize;