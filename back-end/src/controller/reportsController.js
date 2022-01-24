const express = require('express');
const rescue = require('express-rescue');
const reportsService = require('../service/reportsService');

const router = express.Router();

router.get('/getAllDates', rescue(async (req, res) => {
  const response = await reportsService.getAllDates();

  res.status(response.statusCode).json(response);
}));

router.get('/getCurrentReport/:option', rescue(async (req, res) => {
  const response = await reportsService.getCurrentReport(req.params.option);

  res.status(response.statusCode).json(response);
}));

router.get('/getReport/:date', rescue(async (req, res) => {
  const response = await reportsService.getReport(req.params.date);
  res.status(response.statusCode).json(response);
}));

module.exports = router;
