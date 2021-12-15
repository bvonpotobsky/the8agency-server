const boom = require("@hapi/boom");

const { models } = require("./../libs/sequelize");

class AdminService {
  constructor() {}

  async createAdmin(data) {
    const newAdmin = await models.Admin.create(data);
    delete newAdmin.dataValues.password;

    return newAdmin;
  }

  async findAdminById(id) {
    const admin = await models.Admin.findByPk(id);

    if (!admin) {
      throw boom.notFound("Admin not found");
    }
    return admin;
  }

  async findAdminByEmail(email) {
    const admin = await models.Admin.findOne({
      where: { email },
    });

    return admin;
  }

  async updateAdmin(id, changes) {
    const admin = await this.findOne(id);
    const updatedAdmin = await admin.update(changes);

    return updatedAdmin;
  }

  async deleteAdmin(id) {
    const admin = await this.findOne(id);
    await admin.destroy();

    return { id };
  }
}

module.exports = AdminService;
