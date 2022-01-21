import React, { useState } from 'react';
import Header from '../components/Header';
import './css/ManageClient.css';

const getCurrentDateFormated = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const monthFormated = month > 10 ? month : `0${month}`;
  const dayFormated = day > 10 ? day : `0${day}`;

  return `${year}-${monthFormated}-${dayFormated}`;
};

function ManageClient() {
  const [CPF, setCPF] = useState('');
  const [userName, setUserName] = useState('');
  const [birth, setBirth] = useState('');
  const [familyIncome, setFamilyIncome] = useState('');
  const [manageOpition, setManageOpition] = useState('Adicionar');

  const formatCPF = (value) => {
    let cpf = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // de novo (para o segundo bloco de números)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos

    setCPF(cpf);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const dataUser = {
      cpf: CPF.replace(/\D/g, ''),
      userName,
      familyIncome,
      birth,
      registrationDate: getCurrentDateFormated(),
    };

    console.log(dataUser);
  };

  return (
    <>
      <Header />
      <div className="manage-client">
        <select name="manage-options" value={manageOpition} onChange={({ target: { value } }) => setManageOpition(value)} className="manage-client_options">
          <option value="Adicionar">Adicionar</option>
          <option value="Atualizar">Atualizar</option>
          <option value="Remover">Remover</option>
        </select>

        <form className="manage-client_form" onSubmit={(event) => submitForm(event)}>
          <input
            type="text"
            value={CPF}
            onChange={({ target: { value } }) => formatCPF(value)}
            placeholder="CPF"
            maxLength="14"
            required
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
          />

          <input
            type="text"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            placeholder="Nome Completo"
            maxLength="150"
            required
          />

          <label htmlFor="birth-date">
            Data de nascimento:
            <input
              id="birth-date"
              type="date"
              value={birth}
              onChange={({ target: { value } }) => setBirth(value)}
              max={getCurrentDateFormated()}
              required
            />
          </label>

          <input
            type="number"
            value={familyIncome}
            onChange={({ target: { value } }) => setFamilyIncome(value)}
            placeholder="Renda familiar"
            min="0"
            step="0.01"
          />

          <button className="primary-button manage-btn" type="submit">{`${manageOpition} Usuário`}</button>
        </form>
      </div>
    </>
  );
}

export default ManageClient;

// Creditos para o código de validação de cpf:
// https://pt.stackoverflow.com/questions/348030/como-fazer-um-mask-em-javascript-puro
