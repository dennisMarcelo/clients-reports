const express = require('express');
const userController = require('./src/controller/userController');
const reportsController = require('./src/controller/reportsController');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
require('dotenv').config()

const cors = require('cors')
const port = process.env.PORT || 3001;
const app = express();

// Configurações
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
  res.status(200).send('One Piece é o melhor anime de todos!')
})

app.use('/user', userController)
app.use('/reports', reportsController);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`ouvindo na porta ${port}`);
})

