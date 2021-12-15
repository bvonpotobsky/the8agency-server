const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(3).max(30);
const role = Joi.string().min(4);

const createAdminSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateAdminSchema = Joi.object({
  email: email,
  role: role,
});

const getAdminSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAdminSchema, updateAdminSchema, getAdminSchema };
