# ThegCine -- Projeto-A3
API de um catalogo de filmes com gerenciamento integrado

Endpoints
1. Registrar Usuário
Método: POST
URL: /registrar
Descrição: Registra um novo usuário com nome e senha.


2. Login
Método: POST 
URL: /login
Descrição: Realiza o login de um usuário com nome e senha.


3. Listar Filmes
Método: GET
URL: /filmes
Descrição: Retorna uma lista de todos os filmes cadastrados.


4. Buscar Filme por ID
Método: GET
URL: /filmes/:id
Descrição: Retorna os detalhes de um filme específico com base no ID fornecido.


5. Adicionar Filme
Método: POST
URL: /filmes
Descrição: Adiciona um novo filme ao banco de dados.


6. Editar Filme
Método: PUT
URL: /filmes/:id
Descrição: Atualiza as informações de um filme existente, identificado pelo ID.


7. Excluir Filme
Método: DELETE
URL: /filmes/:id
Descrição: Exclui um filme do banco de dados com base no ID fornecido.  


Dependências
express: Framework web para Node.js.
bcrypt: Biblioteca para criptografar senhas.
cors: Middleware para permitir solicitações de origens diferentes.
mssql (assumido pela função connect): Para conexão com o banco de dados SQL Server.
