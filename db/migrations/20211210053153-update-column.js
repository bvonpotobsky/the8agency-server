"use strict";

const {
  AssistantSchema,
  ASSISTANTS_TABLE,
} = require("../models/assistant.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      ASSISTANTS_TABLE,
      "email",
      AssistantSchema.email
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(ASSISTANTS_TABLE, "email", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
