const { Assistant, AssistantSchema } = require("../models/assistant.model");

function setUpModels(sequelize) {
  Assistant.init(AssistantSchema, Assistant.config(sequelize));
}

module.exports = setUpModels;
