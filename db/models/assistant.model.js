const { Model, DataTypes, Sequelize } = require("sequelize");

const ASSISTANTS_TABLE = "assistants";
const MODEL_NAME = "Assistant";

const AssistantSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "job_title",
  },
};

class Assistant extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSISTANTS_TABLE,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { AssistantSchema, Assistant, ASSISTANTS_TABLE };
