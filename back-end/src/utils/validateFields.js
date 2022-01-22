const Joi = require('joi');
const CustomError = require('./CustomError');

const user = (data) => {
  const { error } = Joi.object({
    cpf: Joi.string()
      .min(11)
      .max(11)
      .pattern(/\d/)
      .required(),
    userName: Joi.string().min(3).max(150).required(),
    birth: Joi.string().pattern(/\d{4}-\d{2}-\d{2}/).required(),
    registrationDate: Joi.string().pattern(/\d{4}-\d{2}-\d{2}/).required(),
    familyIncome: Joi.number().min(0).required(),
  }).validate(data);

  if (error) throw new CustomError(error.message, 400);
};

module.exports = {
  user,
};
