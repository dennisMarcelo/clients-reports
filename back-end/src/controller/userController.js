const express = require('express');
const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.get('/getByCPF/:cpf', rescue(async (req, res) => {
  const { cpf } = req.params;
  const response = await userService.getUserByCPF(cpf);

  res.status(response.statusCode).json(response);
}));

router.post('/', rescue(async (req, res) => {
  const response = await userService.create(req.body);

  res.status(response.statusCode).json(response);
}));

router.put('/', rescue(async (req, res) => {
  const response = await userService.update(req.body);
  
  res.status(response.statusCode).json(response);
}));

module.exports = router;
