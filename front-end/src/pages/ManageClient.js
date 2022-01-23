import React, { useState } from 'react';
import Header from '../components/Header';
import fetchAPI from '../utils/fetchApi';
import getCurrentDateFormated from '../utils/getCurrentDateFormated';
import './css/ManageClient.css';

function ManageClient() {
  const [CPF, setCPF] = useState('');
  const [userName, setUserName] = useState('');
  const [birth, setBirth] = useState('');
  const [familyIncome, setFamilyIncome] = useState(0);
  const [manageOpition, setManageOpition] = useState('Adicionar');

  const resetFilds = () => {
    setCPF('');
    setUserName('');
    setBirth('');
    setFamilyIncome(0);
  };

  const setAndFormatCPF = (value) => {
    let cpf = value.replace(/\D/g, ''); // Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // de novo (para o segundo bloco de números)
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos

    setCPF(cpf);
  };

  const getUserByCPF = async (cpf) => {
    if (manageOpition === 'Atualizar' && CPF.length === 14) {
      const response = await fetchAPI(
        `http://localhost:3001/user/getByCPF/${cpf.replace(/\D/g, '')}`,
        'GET',
      );

      if (response.success) {
        setUserName(response.user.userName);
        setBirth(response.user.birth.slice(0, 10));
        setFamilyIncome(response.user.familyIncome);
      }
    }
  };

  const createUser = async () => {
    const dataUser = {
      cpf: CPF.replace(/\D/g, ''),
      userName,
      familyIncome: !familyIncome ? 0 : familyIncome,
      birth,
      registrationDate: getCurrentDateFormated(),
    };

    const response = await fetchAPI('http://localhost:3001/user/', 'POST', dataUser);

    if (response.success) {
      alert(response.message);
      resetFilds();
    } else {
      alert(response.message);
    }
  };

  const updateUser = async () => {
    const dataUser = {
      cpf: CPF.replace(/\D/g, ''),
      userName,
      familyIncome: !familyIncome ? 0 : familyIncome,
      birth,
      registrationDate: getCurrentDateFormated(),
    };

    const response = await fetchAPI('http://localhost:3001/user/', 'PUT', dataUser);
    if (response.success) {
      alert(response.message);
      resetFilds();
    } else {
      alert(response.message);
    }
  };

  const removeUser = async () => {
    const dataUser = { cpf: CPF.replace(/\D/g, '') };

    const response = await fetchAPI('http://localhost:3001/user/', 'DELETE', dataUser);

    if (response.success) {
      alert(response.message);
      resetFilds();
    } else {
      alert(response.message);
    }
  };

  const submitFormSelectOpetion = async (event) => {
    event.preventDefault();
    switch (manageOpition) {
      case 'Adicionar':
        createUser();
        break;
      case 'Atualizar':
        updateUser();
        break;
      case 'Remover':
        removeUser();
        break;
      default:
        alert('Só aceito 3 opções!');
    }
  };

  return (
    <>
      <Header />
      <div className="manage-client">
        <select
          name="manage-options"
          value={manageOpition}
          onChange={({ target: { value } }) => setManageOpition(value)}
          className="manage-client_options"
        >
          <option value="Adicionar">Adicionar</option>
          <option value="Atualizar">Atualizar</option>
          <option value="Remover">Remover</option>
        </select>

        <form className="manage-client_form" onSubmit={(event) => submitFormSelectOpetion(event)}>
          <input
            type="text"
            value={CPF}
            onChange={({ target: { value } }) => setAndFormatCPF(value)}
            onBlur={({ target: { value } }) => getUserByCPF(value)}
            placeholder="CPF"
            maxLength="14"
            required
            pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
          />

          {manageOpition === 'Remover' ? '' : (
            <>
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
            </>
          )}

          <button className="primary-button manage-btn" type="submit">{`${manageOpition} Usuário`}</button>
        </form>
      </div>
    </>
  );
}

export default ManageClient;

// Creditos para o código de validação de cpf:
// https://pt.stackoverflow.com/questions/348030/como-fazer-um-mask-em-javascript-puro
