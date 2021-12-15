const { Assistant, AssistantSchema } = require("../models/assistant.model");
const { Admin, AdminSchema } = require("../models/admin.model");

function setUpModels(sequelize) {
  Assistant.init(AssistantSchema, Assistant.config(sequelize));
  Admin.init(AdminSchema, Admin.config(sequelize));
}

module.exports = setUpModels;
