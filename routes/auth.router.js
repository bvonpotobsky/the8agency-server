const express = require("express");
const passport = require("passport");

const validatorHandler = require("../middlewares/validator.handler");
const { createAdminSchema } = require("../schemas/admin.schema");

const AdminService = require("../services/admin.service");
const serviceAdmin = new AdminService();

const AuthService = require("./../services/auth.service");
const service = new AuthService();

const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const admin = req.user;
      console.log(admin);
      res.json({ token: (await service.signToken(admin)).token });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/admin", async (req, res, next) => {
  try {
    const { email } = req.query;
    const admin = await serviceAdmin.findAdminByEmail(email);
    if (!admin) {
      throw boom.unauthorized("Invalid credentials");
    }
    res.json(admin);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/new-admin",
  validatorHandler(createAdminSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAdmin = await serviceAdmin.createAdmin(body);
      res.status(201).json(newAdmin);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/recovery", async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecovery(email);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.post("/change-password", async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const rta = await service.changePassword(token, newPassword);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
