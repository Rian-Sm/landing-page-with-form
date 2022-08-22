# Avaliação Teste Desenvolvedor 2022

---

## Conteudo

O __software__ desenvolvido foi uma __landing page__ com uma api para receber os dados enviados do formulário na página web.

O código foi dividido em três partes:
* back      -> API 
* database  -> sql do bando de dados
* front     -> página web

---

## Instalação

### 1. Criação do banco

No MySql instalado na máquina abrir o "rodar" o comando de dentro do diretório **database** com o script no **localhost**.

Assim criará a estrutura de banco de dados necessaria para "rodar" o back-end.

### 2. Back-end API

Entrar dentro do diretório **./back** e "rodar" os comandos de instalação do nodeJS para instalar as dependencisas

````
npm install
````
ou
````
yarn
````

Após instalar as dependências vericar se o .env está correto apontando para o banco de dados devidamente. Caso não esteja vai retornar erro ao iniciar a API.

Os Comandos para iniciar a API são:

````
npm run start
````
ou
````
yarn start
````

O endpoint criado para geração de cliente foi:

(**POST**): http://localhost:5000/api/clients/create

Caso queria "rodar" um teste no postman foi criado uma coleção localizada no diretorio **./database**

### 3. Front-end

Entrar dentro do diretório **./front** e "rodar" os comandos de instalação do nodeJS para instalar as dependencisas

````
npm install
````
ou
````
yarn
````

Após a instalação das dependências verificar o **.env** está apontando para o link certo da API e "rodar" o comando:

````
npm run start
````
ou
````
yarn start
````

---