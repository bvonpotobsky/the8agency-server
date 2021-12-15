const express = require("express");

const assistantRouter = require("./assistant.router");
const authRouter = require("./auth.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/assistant", assistantRouter);
  router.use("/auth", authRouter);
}

module.exports = routerAPI;
