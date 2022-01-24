import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import fetchAPI from '../utils/fetchApi';
import formaDate from '../utils/formatDate';
import './css/Reports.css';

const formatMoney = (value) => {
  if (value) {
    return value.toFixed(2).replace('.', ',');
  }
  return value;
};

function Reports() {
  const [registrationDates, setRegistrationDates] = useState([]);
  const [indexDate, setIndexDate] = useState(0);
  const [report, setReport] = useState({});
  useEffect(() => {
    fetchAPI('http://localhost:3001/reports/getAllDates', 'GET')
      .then(({ dates }) => {
        setRegistrationDates(dates);
        setIndexDate(dates.length - 1);
      });

    fetchAPI('http://localhost:3001/reports/getCurrentReport/month', 'GET')
      .then(({ reports: data }) => {
        setReport(data);
      });
  }, []);

  const getCurrentReport = async (option) => {
    const { reports: data } = await fetchAPI(
      `http://localhost:3001/reports/getCurrentReport/${option}`,
      'GET',
    );
    setReport(data);
  };

  const getReport = async (url) => {
    const { reports: data } = await fetchAPI(url, 'GET');
    setReport(data);
  };

  const previousDate = () => {
    if (indexDate > 0) {
      setIndexDate(indexDate - 1);
      getReport(`http://localhost:3001/reports/getReport/${registrationDates[indexDate - 1]}`);
    }
  };

  const nexDate = () => {
    if (registrationDates.length > indexDate - 1 && indexDate < registrationDates.length - 1) {
      setIndexDate(indexDate + 1);
      getReport(`http://localhost:3001/reports/getReport/${registrationDates[indexDate + 1]}`);
    }
  };

  return (
    <>
      <Header />
      <div className="reports">

        <div className="header-reports">
          <div className="reports-controller">
            <button
              type="button"
              className="btn-previous primary-button"
              onClick={() => previousDate()}
            >
              {'<'}
            </button>
            <span>{`Relatório | ${formaDate(registrationDates[indexDate])}`}</span>
            <button
              type="button"
              className="btn-next primary-button"
              onClick={() => nexDate()}
            >
              {'>'}
            </button>
          </div>

          <div className="date-conttoller">
            <button
              type="button"
              onClick={() => getCurrentReport('month')}
              className="btn-month primary-button"
            >
              Mês
            </button>
            <button
              type="button"
              onClick={() => getCurrentReport('week')}
              className="btn-week primary-button"
            >
              Semana
            </button>
            <button
              type="button"
              onClick={() => getCurrentReport('day')}
              className="btn-today primary-button"
            >
              Hoje
            </button>
          </div>
        </div>

        <div className="body-reports">
          <div className="card-info-registered-customers">
            <div className="card-qtd-customers">
              <span>Clientes Cadastrados</span>
              <span className="font-bold">{report.clientesCadastrados}</span>
            </div>

            <div className="card-info-class-custurmes">
              <span className="background-red">{`Classe A - ${report.clientsClassA}`}</span>
              <span className="background-yellow">{`Classe B - ${report.clientsClassB}`}</span>
              <span className="background-green">{`Classe C - ${report.clientsClassC}`}</span>
            </div>
          </div>

          <div className="card-info">
            <span>Clientes com renda familiar maior que a média</span>
            <span className="font-bold">{report.aboveAverageCustomers}</span>
          </div>

          <div className="card-info">
            <span>Média de renda familiar do periodo</span>
            <span className="font-bold">{`R$ ${formatMoney(report.average)}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
