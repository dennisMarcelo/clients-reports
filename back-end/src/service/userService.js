const isValid = require('../utils/validateFields');
const userModel = require('../model/userModel');

const userService = {}

userService.getUserByCPF = async (cpf) => userModel.getUserByCPF(cpf);

userService.create = async (user) => {
  isValid.user(user);

  const response = await userModel.create(user);
  return response;
};

userService.update = async (user) => {
  isValid.user(user);

  const response = await userModel.update(user);
  return response;
};

userService.remove = async (cpf) => userModel.remove(cpf);

userService.getAllUsers = async (page) => userModel.getAllUsers(page);

userService.getUserByName = async (name) => userModel.getUserByName(name);

module.exports = userService
