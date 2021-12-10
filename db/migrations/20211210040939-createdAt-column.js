"use strict";

const {
  AssistantSchema,
  ASSISTANTS_TABLE,
} = require("../models/assistant.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      ASSISTANTS_TABLE,
      "created_at",
      AssistantSchema.createdAt
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(ASSISTANTS_TABLE, "created_at");
  },
};
