const reportsModel = require('../model/reportsModel');

const reportsService = {};

reportsService.getAllDates = async () => reportsModel.getAllDates();

reportsService.getCurrentReport = async (option) => reportsModel.getReport(option, true);

reportsService.getReport = async (date) => reportsModel.getReport(date, false);

module.exports = reportsService;
