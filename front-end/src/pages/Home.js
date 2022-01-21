import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';

function Home() {
  return (
    <div className="home">
      <div className="conteiner-links">
        <Link to="/register">Cadastrar Cliente</Link>
        <Link to="/clients">Listar Clientes</Link>
        <Link to="/reports">Relatório</Link>
      </div>
    </div>
  );
}

export default Home;
