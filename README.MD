<h1 align='center'>Clients Reports</h1>

# Tecnologias utilizadas
  - JavaScript
  - ReactJS
  - React-router-dom
  - Eslint (Utilizado para padronizar o código)
  - cors
  - express
  - express-rescue
  - joi
  - mysql2
  - nodemon

# Dependências
  - para clonar o repositório `$ git clone git@github.com:dennisMarcelo/clients-reports_Tempus.git`
  - MySQL:
    - Como instalar no linux [vidio](https://www.youtube.com/watch?v=TG6WAnyeDRw);
    - Como instalar no Windows [vidio](https://www.youtube.com/watch?v=fmerTu7dWk8);
    - Execute a query localizada no arquivo `database_tempus.sql` na raiz do projeto para criar as tabelas e popular com alguns dados.
  - Execute o script `$ ./dependencies.sh` para instalar as outras Dependências.
    - Caso não esteja utilizando alum sistema linux:
      - Dentro da pasta front-end execute: `$ npm install`;
      - Dentro da pasta front-end execute: `$ npm install`;

# Back-end
  - Para que o back-end funcione é preciso criar um arquivo `.env` na raiz da pasta back-end com o seguinte formato:
    ```
      PORT=3001
      USER_DATABASE=seu_nome
      PASSWORD=sua_senha
      HOST=localhost
      DATABASE=tempus_database
    ```
  - Para subir o servidor utilize `$ npm start` na raiz da pasta back-end
  - Arquitetura utilizada MVC

# Front-End
  - Para subir o servidor utilize `$ npm start` na raiz da pasta front-end
  - Explicando as páginas:
    - Na página ***home*** é possiviel escolher para qual página deseja ir diretamente.
    - Na página ***manage-client*** 
      - É possivel adicionar, atualizar e excluir clientes;
      - A opção atualizar preenche com os valores do usuário automaticamente quando adiciona o CPF e muda o texto do botão;
      - A opção excluir deixa somente o campo CPF visivel e muda a o texto do botão.
    - Na página ***clients*** 
      - É possivel buscar clientes através do nome;
      - É possivel visualizar a listagem de todos os clientes;
      - Ela esta ordenada de acordo com os últimos clientes cadastrados.
    - Na página ***reports*** 
      - É possivel visualizar os relatórios através do dia, semana e mês atual;
      - Também é possivel visualizar os relatórios dos meses passados;
      - No campo onde é possivel escolher o mês e ano, ele só mostra os meses em que teve clientes cadastrados.
      - Os relatórios são capazes de mostrar os dados dos cliente cadastrados no periodo escolhido.

# Layout mobile

# Layout desktop

# Contato
Caso tenha ficado alguma dúvida entre em contato com través desse email: dennismarcelo15@gmail.com
