const express = require("express");

const assistantRouter = require("./assistant.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/assistant", assistantRouter);
}

module.exports = routerAPI;
