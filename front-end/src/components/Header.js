import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/header.css';

function Header() {
  return (
    <header className="header-menu">
      <NavLink className="primary-button" to="/register">Cadastrar Cliente</NavLink>
      <NavLink className="primary-button" to="/clients">Lista de Clientes</NavLink>
      <NavLink className="primary-button" to="/reports">Relatório</NavLink>
    </header>
  );
}

export default Header;
