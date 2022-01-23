const express = require('express');
const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.get('/page/:index', rescue(async (req, res) => {
  const { index: page } = req.params;
  const response = await userService.getAllUsers(page);

  res.status(response.statusCode).send(response);
}));

router.get('/name/:name', rescue(async (req, res) => {
  const { name } = req.params;
  const response = await userService.getUserByName(name);

  res.status(response.statusCode).send(response);
}));

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

router.delete('/', rescue(async (req, res) => {
  const response = await userService.remove(req.body);

  res.status(response.statusCode).json(response);
}));

module.exports = router;
