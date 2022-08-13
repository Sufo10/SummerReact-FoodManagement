const Joi = require('joi');

const userSchema = {
  registerUser: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().alphanum().required(),
  }),
  loginUser: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().required(),
  }),
};

module.exports = userSchema;
