const Joi = require("joi");

const id = Joi.number().integer();
const firstName = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const email = Joi.string().email();
const country = Joi.string();
const phone = Joi.string();
const jobTitle = Joi.string();

const createAssistantSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  country: country.required(),
  phone: phone.required(),
  jobTitle: jobTitle.required(),
});

const getAssistantSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAssistantSchema, getAssistantSchema };
