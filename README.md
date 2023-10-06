

<h1 align="center">📞 Lista Telefônica Full Stack - TeleContacts</h1>

<p align="center">
  <strong>TeleContacts</strong> é uma aplicação de Lista Telefônica Full Stack que oferece funcionalidades completas para gerenciar seus contatos e seus números de telefone. Ela permite que os usuários realizem operações de <strong>CRUD</strong> (Criar, Ler, Atualizar, Excluir) para manter seus contatos organizados.
</p>

<p align="center">
  O projeto é construído com tecnologias modernas e poderosas, incluindo <strong>NestJS</strong> no backend e <strong>ReactJS</strong> no frontend.
</p>

# 🚀 Como executar o projeto

```bash
 - Primeiro clone o repositório:
    - ``` git@github.com:Tiagoabranges/TeleContacts.git ```
 - Entre no repositório: 
   - ``` cd davinti ```


### Front end

  1. `$ cd front`
  2. `$ npm install` 
  3. `$ npm run dev`
  
### Back end
voce pode utilizar um container docker para rodar o seu banco de dados postgres

`docker run -d --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=sua-senha -v pgdata:/var/lib/postgresql/data postgres`

Altere os dados do banco postgres no arquivo `.env` e remova a extensao example

  1. `$ cd back`
  2. `$ npm install`
  3. `$ npx prisma generate` para criar as tabelas no banco
  4. `$ npm run start:dev`

```
[Passo a Passo: Como criar e executar um container Postgres com Docker](https://www.gasparbarancelli.com/post/passo-a-passo-como-criar-e-executar-um-container-postgres-com-docker)


# :books: Tecnologias Utilizadas

Backend
 
+ `NestJS` Um framework Node.js eficiente para construir aplicativos escaláveis.
+ `PostgreSQL` Um banco de dados relacional robusto para armazenar dados de contatos.
+ `Prisma` Um ORM (Object-Relational Mapping) que simplifica a interação com o banco de dados.
+ `Docker` Para criar e gerenciar containers do PostgreSQL.
+ `ESLint` Ferramenta para padronizar o estilo de código JavaScript/TypeScript.
+ `CORS` Middleware para habilitar comunicação entre o frontend e o backend.
+ `Node`: A plataforma de tempo de execução JavaScript utilizada no servidor.
+ `Git` Sistema de controle de versão para rastreamento de alterações de código.
+ `Prettier` Ferramenta para manter um estilo de código consistente e bem formatado.

Frontend

+ `ReactJS` Biblioteca JavaScript para construir interfaces de usuário interativas.
+ `HTML/CSS` Linguagens padrão da web para estruturar e estilizar a interface.
+ `Axios` Cliente HTTP para realizar chamadas de API para o backend.

  

#  :thumbsup: Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para criar issues, pull requests ou sugerir melhorias para este projeto.

# 🐛 Encontrou um problema?
Se você encontrar algum problema, por favor me avise [aqui](https://www.linkedin.com/in/tiagoabranges/).


# 📝 Licença
Desenvolvido por [Tiago Abranges](https://www.linkedin.com/in/tiagoabranges/).
