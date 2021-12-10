const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    username: USER,
    password: PASSWORD,
    database: config.dbName,
    host: config.dbHost,
    dialect: config.dbDialect,
    port: config.dbPort,
  },
  test: {
    username: USER,
    password: PASSWORD,
    database: config.dbName,
    host: config.dbHost,
    dialect: config.dbDialect,
    port: config.dbPort,
  },
  production: {
    url: URI,
    dialect: config.dbDialect,
  },
};
