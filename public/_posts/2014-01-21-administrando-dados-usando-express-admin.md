# Administrando dados usando Express Admin

[![Express Admin](../images/express-admin-small.jpg "Express Admin")]({{site.url}}/images/express-admin.jpg)

Se você precisa de uma interface admin para seu app, neste post explicarei como usar o [Express Admin](http://simov.github.io/express-admin-site).

Este framework ainda tem muito a evoluir, porém seus recursos atuais já quebram muito bem o galho. A começar o Express Admin é compatível com [MySQL](http://www.mysql.com), [MariaDB](https://mariadb.org), [SQLite](http://www.sqlite.org) e [PostgresSQL](http://www.postgresql.org), possui diversos temas e possui também suporte a multi-idioma.

E implementar ele é tranquilo! Basta primeiro ter uma aplicação independente de qual linguagem esta construída, mas utilizando um dos bancos de dados compatíveis.

Para implantar o Express Admin, basta instalar via comando:

``` bash
 npm install -g express-admin
``` 

Agora na raíz do seu projeto crie um diretório qualquer para armazenar os arquivos de configuração dele, por exemplo, crie a pasta: `express-admin`. Em seguida execute o comando:

``` bash
 admin ./express-admin
``` 

Responda todas as perguntas que são referentes a configuração do banco de dados, login de usuário e servidor do admin. Essas perguntas no final criarão os arquivos:

*   **config.json** - mantém configurações de conexão com banco de dados e do servidor admin.
*   **settings.json** - define configurações de tabelas e seus respectivos campos, é aqui que você define regras de quais campos apresentar e como eles serão apresentados, em casos de chaves estrangeiras que permitem mostrar detalhes de um **JOIN TABLE**.
*   **users.json** - arquivo com login e senha de usuários que podem acessar o admin.

Se tudo deu certo você já terá o admin rodando, caso ocorra algum problema, acesse o arquivo `config.json` e reconfigure diretamente este arquivo.

Abaixo segue um config.json de exemplo:

``` javascript
 {
   "mysql": {
     "database": "my_app",
     "user": "root",
     "password": "123456"
   },
   "server": {
     "port": 9000
   },
   "app": {
     "layouts": true,
     "themes": true,
     "languages": true
   }
 }
``` 

Baseado nesses atributos, ao rodar novamente o comando: `admin ./express-admin` você poderá acessar a interface admin através do endereço: [http://localhost:9000](http://localhost:9000)<a></a>

<a></a>