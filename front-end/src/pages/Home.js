import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

function Home() {
  return (
    <div className="home">
      <div className="conteiner-links">
        <Link className="primary-button" to="/register">Cadastrar Cliente</Link>
        <Link className="primary-button" to="/clients">Listar Clientes</Link>
        <Link className="primary-button" to="/reports">Relatório</Link>
      </div>
    </div>
  );
}

export default Home;
