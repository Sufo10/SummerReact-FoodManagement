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

const postsSchema = Joi.object({
    name: Joi.string().required(),
    title: Joi.string(),
    phone: Joi.number(),
    address: Joi.string()
});

module.exports = { userSchema, postsSchema };
