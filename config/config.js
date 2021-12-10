require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3005,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbDialect: process.env.DB_DIALECT,
  nodemailerEmail: process.env.NODEMAILER_EMAIL,
  nodemailerPassword: process.env.NODEMAILER_PASSWORD,
};

module.exports = { config };
