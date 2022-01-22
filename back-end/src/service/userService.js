const isValid = require('../utils/validateFields');
const userModel = require('../model/userModel');

const getUserByCPF = async (cpf) => userModel.getUserByCPF(cpf);

const create = async (user) => {
  isValid.user(user);

  const response = await userModel.create(user);
  return response;
};

const update = async (user) => {
  isValid.user(user);
  
  const response = await userModel.update(user);
  return response;
};

module.exports = {
  create,
  getUserByCPF,
  update,
};
