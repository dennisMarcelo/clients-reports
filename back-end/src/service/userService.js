const isValid = require('../utils/validateFields');

const create = async (user) => {
  isValid.newUser(user);
};

module.exports = {
  create,
};
