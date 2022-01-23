const CustomError = require('../utils/CustomError');
const connection = require('./connection');

const getUserByCPF = async (cpf) => {
  const [clients] = await connection.execute(`
      SELECT *
      FROM clients
      WHERE cpf = ?
    `, [cpf]);

  if (clients.length === 0) {
    return { success: false, statusCode: 404, message: 'Usuário não encontrado!', user: null };
  }

  return {
    success: true, statusCode: 200, message: 'Usuário encontrado!', user: clients[0],
  };
};

const create = async ({ cpf, userName, birth, registrationDate, familyIncome }) => {
  try {
    await connection.execute(
      `
        INSERT INTO clients(cpf, userName, birth, registrationDate, familyIncome)
        VALUES(?,?,?,?,?)
      `,
      [cpf, userName, birth, registrationDate, familyIncome],
    );

    return {
      success: true,
      statusCode: 201,
      message: 'Usuário cadastrado com sucesso!',
      user: { cpf, userName, birth, registrationDate, familyIncome },
    };
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      throw new CustomError('Este CPf já esta sendo utilizado!', 422);
    } else {
      throw new CustomError(err.message, 500);
    }
  }
};

const update = async ({ cpf, userName, birth, familyIncome }) => {
  try {
    await connection.execute(`
      UPDATE clients 
      SET 
        userName = ?,
        birth = ?,
        familyIncome = ?
      WHERE
        cpf = ?
    `, [userName, birth, familyIncome, cpf]);

    return {
      success: true,
      statusCode: 200,
      message: 'Usuário Atualizado!',
      user: { cpf, userName, birth, familyIncome },
    };
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

const remove = async ({ cpf }) => {
  try {
    await connection.execute(`
      DELETE FROM clients WHERE cpf = ?
    `, [cpf]);

    return {
      success: true,
      statusCode: 200,
      message: 'Usuário Removido!',
      user: {},
    };
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

const getAllUsers = async (page) => {
  const start = 10 * page;
  const end = 10 * (page + 1);
  try {
    const [users] = await connection.execute(`
      SELECT *
      FROM clients
      ORDER BY registrationDate DESC, userName ASC
      LIMIT ${start}, ${end}
    `);

    return {
      success: true,
      statusCode: 200,
      message: `Página: ${parseInt(page, 10) + 1}`,
      users,
    };
  } catch (err) {
    console.log(err);
    throw new CustomError(err.message, 500);
  }
};

const getUserByName = async (name) => {
  try {
    const [users] = await connection.execute(`
      SELECT *
      FROM clients
      WHERE userName LIKE '%${name}%'
      ORDER BY registrationDate DESC, userName ASC
      LIMIT 0, 10
    `);

    return {
      success: true,
      statusCode: 200,
      message: 'Lista de usuários',
      users,
    };
  } catch (err) {
    throw new CustomError(err.message, 500);
  }
};

module.exports = {
  create,
  getUserByCPF,
  update,
  remove,
  getAllUsers,
  getUserByName,
};

// referencia status Code
// https://pt.stackoverflow.com/questions/394699/status-http-para-usu%C3%A1rio-j%C3%A1-cadastrado
