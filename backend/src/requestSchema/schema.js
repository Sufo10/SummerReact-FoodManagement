const Joi = require('joi');

const userSchema = {
    registerUser: Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().min(8).required(),
    }),
    loginUser: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().required(),
    }),
};

module.exports = userSchema;
