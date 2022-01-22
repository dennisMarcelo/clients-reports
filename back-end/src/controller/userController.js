const express = require('express');
const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.post('/', rescue(async (req, res) => {
  const response = await userService.create(req.body);

  res.status(200).json({ teste: 'voltei' });
}));

module.exports = router;
