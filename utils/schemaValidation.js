const Joi = require('joi');
module.exports = Joi.object({ 
    id: Joi.number().integer(),
    full_name: Joi.string().min(6).max(255).required().trim(),
    date_of_birth: Joi.date().max('1-1-2004').iso().required(),
    gender: Joi.string().trim().max(10).required(),
    role: Joi.string().max(100).trim().required(),
    email: Joi.string().email().required().trim(),
    phone_number: Joi.string().required().min(11).max(11).trim(),
    password: Joi.string().min(6).required()
});