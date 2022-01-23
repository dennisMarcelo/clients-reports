import React, { useEffect, useState } from 'react';
import fetchAPI from '../utils/fetchApi';
import Header from '../components/Header';
import userClassType from '../utils/userClassType';
import userClassTypeColor from '../utils/userClassTypeColor';
import './css/Client.css';

function Clients() {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [nameSearched, setNameSearched] = useState('');

  useEffect(() => {
    const url = `http://localhost:3001/user/page/${page}`;
    fetchAPI(url, 'GET')
      .then(({ success, users: usersRequested }) => {
        if (success) {
          setUsers(usersRequested);
        }
      });
  }, []);

  const previousPage = async () => {
    const counter = 1;

    if (page > 0) {
      const url = `http://localhost:3001/user/page/${page - counter}`;
      const { success, users: usersRequested } = await fetchAPI(url, 'GET');

      if (success) {
        setPage(page - counter);
        setUsers(usersRequested);
      }
    }
  };

  const nexPage = async () => {
    const counter = 1;

    const url = `http://localhost:3001/user/page/${page + counter}`;
    const { success, users: usersRequested } = await fetchAPI(url, 'GET');

    if (success && usersRequested.length > 0) {
      setPage(page + counter);
      setUsers(usersRequested);
    }
  };

  const getUser = async (name) => {
    setNameSearched(name);
    if (name) {
      const url = `http://localhost:3001/user/name/${name}`;
      const { success, users: usersRequested } = await fetchAPI(url, 'GET');

      if (success && usersRequested) {
        setUsers(usersRequested);
      }
    } else {
      const url = `http://localhost:3001/user/page/${page}`;
      const { success, users: usersRequested } = await fetchAPI(url, 'GET');
      if (success) {
        setUsers(usersRequested);
      }
    }
  };

  const renderUserList = ({ ID, userName, familyIncome }) => (
    <tr className="client" key={ID}>
      <td className="user-name">{userName}</td>
      <td className="class-type">{userClassType(familyIncome)}</td>
      <td>
        <span className={`income ${userClassTypeColor(familyIncome)}`}>
          {`R$ ${parseInt(familyIncome, 10)}`}
        </span>
      </td>
    </tr>
  );

  return (
    <>
      <Header />
      <div className="client-page">

        <input
          type="text"
          className="search-client"
          placeholder="Search User"
          value={nameSearched}
          onChange={({ target: { value } }) => getUser(value)}
        />

        <table className="client-list">
          <tbody>
            {users.map((data) => renderUserList(data))}
          </tbody>
        </table>

        <div className="page-controller">
          <button type="button" className="btn-previous primary-button" onClick={previousPage}>{'<'}</button>
          <button type="button" className="btn-next primary-button" onClick={nexPage}>{'>'}</button>
        </div>
      </div>
    </>
  );
}

export default Clients;
