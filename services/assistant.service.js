const { models } = require("../libs/sequelize");

class AssistantService {
  constructor() {}

  async createAssistant(data) {
    const newAssistant = await models.Assistant.create(data);
    return newAssistant;
  }

  async getAllAssistants() {
    const assistants = await models.Assistant.findAll();
    return assistants;
  }
}

module.exports = AssistantService;
