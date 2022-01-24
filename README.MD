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

# Back-end!

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
![home-small](https://user-images.githubusercontent.com/37647447/150786580-a370fea2-a5fe-4b0a-80f6-58155ad526ef.png)
![add-cliente-small](https://user-images.githubusercontent.com/37647447/150786722-249aaf9e-b3cd-49fb-b7f0-afdf7b63ef42.png)
![update-small](https://user-images.githubusercontent.com/37647447/150786775-95c6ae1f-245c-457e-b585-1f5f4e8d2ccd.png)
![remove-small](https://user-images.githubusercontent.com/37647447/150786812-09ab7f3f-6ad9-46c8-9134-c5c09245e1de.png)
![clientes-small](https://user-images.githubusercontent.com/37647447/150786858-19e35b3f-fc2d-4411-a9b2-6a7a6262b279.png)
![reports-small](https://user-images.githubusercontent.com/37647447/150786909-026a697f-f356-4f3b-9d82-270b2bb29dcf.png)

# Layout desktop
![home-large](https://user-images.githubusercontent.com/37647447/150785025-375497a2-1fe6-4df3-9b50-16a6a698e5f0.png)
![add-cliente-large](https://user-images.githubusercontent.com/37647447/150785167-a3faf2eb-a91d-4fec-98a6-3c4dc3dfd707.png)
![update-large](https://user-images.githubusercontent.com/37647447/150785364-1a19e7f2-0baf-46e2-9a37-0ba7114e070f.png)
![remove-large](https://user-images.githubusercontent.com/37647447/150785453-794d85e0-74d5-471e-a233-fe4ce46ccbe7.png)
![clients-large](https://user-images.githubusercontent.com/37647447/150785671-b9c92641-983b-47df-8980-042971675948.png)
![reports-large](https://user-images.githubusercontent.com/37647447/150785706-dff8f334-754d-4e7c-9469-42ee73060ff4.png)

# Contato
Caso tenha ficado alguma dúvida entre em contato com través desse email: dennismarcelo15@gmail.com

