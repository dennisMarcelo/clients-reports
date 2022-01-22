const express = require('express');
const userController = require('./src/controller/userController');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
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

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`ouvindo na porta ${port}`);
})

