# Boas vindas ao Projeto To Do List

Este projeto cria API e endpoints para manipulação de dados e renderização através da conexão com a aplicação front end.

## Funcionalidades da aplicação

Cria banco de dados List, com informações sobre tarefas, status e prioridade.
Desenvolvida para interagir com o banco de dados MySQL, armazenado remotamente na plataforma supabase,retornando API com todos os dados armazenados na tabela List ao realizar consulta (GET) a rota /list.
Arquitetura do back end sobre estrutura de camadas, sendo a camada se controller, service e models funcionais e aplicadas.

### Tecnologias utilizadas

A aplicação consiste no desenvolvimento com `Node.js` do back-end, utilizando o pacote `sequelize` do `npm`, criando e associando tabelas usando `models` do `sequelize`. 
A aplicação esta desenvolvimento, criando `CRUD` (Create, Read, Update and Delete) de `API`.

### Acesso ao Deploy completo do projeto

Realizado deploy da aplicação na plataforma Surge e disponível em:
* https://welckson_todo.surge.sh/

Realizado deploy da aplicação Back End na plataforma Heroku e disponível em:
* https://to-do-list-welckson.herokuapp.com/list

Aplicação Front End disponível no repositório:
* https://github.com/welcksonvalentim/toDoList-FrontEnd


## Para rodar a aplicação localmente

1. Clone o repositório, com o comando:
* `git@github.com:welcksonvalentim/toDoList-BackEnd.git`

2. Entre na pasta do repositório que você acabou de clonar:
* `cd toDoList-BackEnd`

3. Instale as dependências e inicialize o projeto:
* `npm install`

4. Inicialize o projeto:
* `npm run dev`

4. Utilize simuladores de requisição (exemplo: Insomnia):
* Faça requisição do tipo `GET` para: `http://localhost:3005/list`


### Próximos Passos do Projeto

* Desenvolver testes unitários;

