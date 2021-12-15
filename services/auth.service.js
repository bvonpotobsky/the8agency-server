const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { config } = require("../config/config");

const AdminService = require("./admin.service");
const service = new AdminService();

class AuthService {
  async getAdmin(email, password) {
    const admin = await service.findAdminByEmail(email);

    if (!admin) {
      throw (boom.unauthorized("Invalid credentials"), false);
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw boom.unauthorized("Invalid credentials");
    }

    delete admin.dataValues.password;
    return admin;
  }

  async signToken(admin) {
    const payload = {
      sub: admin.id,
      role: admin.role,
    };

    const token = jwt.sign(payload, config.jwtSecret);
    return {
      admin,
      token,
    };
  }
}

module.exports = AuthService;
