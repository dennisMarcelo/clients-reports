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

const remove = async (cpf) => userModel.remove(cpf);

const getAllUsers = async (page) => userModel.getAllUsers(page);

const getUserByName = async (name) => userModel.getUserByName(name);

module.exports = {
  create,
  getUserByCPF,
  update,
  remove,
  getAllUsers,
  getUserByName,
};
