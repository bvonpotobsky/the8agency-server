const express = require("express");

const router = express.Router();

const AssistantService = require("../services/assistant.service");
const service = new AssistantService();

const validatorHandler = require("../middlewares/validator.handler");
const { createAssistantSchema } = require("../schemas/assistant.schema");

router.post(
  "/",
  validatorHandler(createAssistantSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const newAssistant = await service.createAssistant(body);
      res.status(201).json(newAssistant);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req, res, next) => {
  try {
    const assistants = await service.getAllAssistants();
    res.status(200).json(assistants);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
