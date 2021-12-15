const express = require("express");

const assistantRouter = require("./assistant.router");
const authRouter = require("./auth.router");
const downloadRouter = require("./download.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/assistant", assistantRouter);
  router.use("/auth", authRouter);
  router.use("/download", downloadRouter);
}

module.exports = routerAPI;
