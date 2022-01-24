const CustomError = require('../utils/CustomError');
const connection = require('./connection');

const reportsModel = {};
const query = {
  day: 'registrationDate = CURDATE()',
  week: 'yearweek(registrationDate, 1) = yearweek(CURDATE(), 1)',
  month: 'MONTH(registrationDate) = MONTH(CURDATE())',
};

const formatDate = (dates) => {
  const dateFormated = [];
  dates.forEach(({ date }) => {
    dateFormated.push(date);
  });
  return dateFormated;
};

reportsModel.getAllDates = async () => {
  try {
    const [dates] = await connection.execute(`
      SELECT DISTINCT
        concat(Year(registrationDate), '-', Month(registrationDate)) as date
      FROM tempus_database.clients
      ORDER BY date ASC
    `);

    const datesFormated = formatDate(dates);

    return {
      success: true,
      statusCode: 200,
      message: 'Datas encontradas!',
      dates: datesFormated,
    };
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

reportsModel.getReport = async (option, isCurrent) => {
  try {
    let optionSelected = '';
    if (isCurrent) {
      optionSelected = query[option];
    } else {
      const year = option.split('-')[0];
      const month = option.split('-')[1];

      optionSelected = `MONTH(registrationDate) = ${month} AND YEAR(registrationDate) = ${year}`;
    }

    const [report] = await connection.execute(`
      SELECT
        (
          SELECT COUNT(ID)
          FROM tempus_database.clients
          WHERE ${optionSelected}
          ) as clientesCadastrados,
          (
          SELECT COUNT(ID)
              FROM tempus_database.clients
              WHERE  ${optionSelected} AND familyIncome <= 980
          ) AS clientsClassA,
              (
          SELECT COUNT(ID)
              FROM tempus_database.clients
              WHERE  ${optionSelected} AND familyIncome > 980 AND familyIncome <= 2500
          ) AS clientsClassB,
        (
          SELECT COUNT(ID)
              FROM tempus_database.clients
              WHERE  ${optionSelected} AND familyIncome > 2500
          ) AS clientsClassC,
            (
          SELECT AVG(familyIncome)
              FROM tempus_database.clients
              WHERE  ${optionSelected}
          ) AS average,
          (
          SELECT COUNT(ID)
              FROM tempus_database.clients
              WHERE  ${optionSelected} AND familyIncome > average
          ) AS aboveAverageCustomers
    `);

    return {
      success: true,
      statusCode: 200,
      message: 'Relatórios Encontrados',
      reports: report[0],
    };
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

module.exports = reportsModel;
