const { Sequelize } = require("sequelize");

const { config } = require("../config/config");
const setUpModels = require("../db/models/");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbDialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: config.dbDialect,
  logging: false,
});

setUpModels(sequelize);

module.exports = sequelize;
