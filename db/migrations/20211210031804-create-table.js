"use strict";

const {
  AssistantSchema,
  ASSISTANTS_TABLE,
} = require("../models/assistant.model");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ASSISTANTS_TABLE, AssistantSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ASSISTANTS_TABLE);
  },
};
