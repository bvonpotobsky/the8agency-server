const { Model, DataTypes, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

const ADMIN_TABLE = "admins";

const AdminSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  recoveryToken: {
    field: "recovery_token",
    allowNull: true,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "admin",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Admin extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ADMIN_TABLE,
      modelName: "Admin",
      timestamps: false,
      hooks: {
        beforeCreate: async (admin, options) => {
          const password = await bcrypt.hash(admin.password, 10);
          admin.password = password;
        },
      },
    };
  }
}

module.exports = { ADMIN_TABLE, AdminSchema, Admin };
