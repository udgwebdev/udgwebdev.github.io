![Realtime com RethinkDB](images/rethinkdb-logo.png "Realtime com RethinkDB")

Se você precisa de um banco NoSQL que trabalhe com JSON, tenha suporte a consultas realtime e você quer expandir seus horizontes em conhecimentos que vão além de trabalhar apenas com MongoDB, uma boa opção é conhecer o RethinkDB.

RethinkDB é um banco open-source, que trabalha com dados JSON, porém ele organiza os dados em tabelas igual um banco SQL tradicional, permitindo também realizar consultas entre várias tabelas através do clássico comando join. Ele também oferece persistência de arrays e sub-documentos dentro de um registro, que é algo muito utilizado no MongoDB e CouchDB, que também é muito útil quando pretende persistir dados complexos em uma única tabela, ao invés de fazer joins entre múltiplas tabelas.

Abaixo veja algumas características legais do RethinkDB:

*   Suporte Geospartial;
*   API para tratamento de Strings, Dates, Booleans e Documentos (objetos);
*   API para realizar cálculos matemáticos;
*   Map-reduce;
*   Possui cliente HTTP
*   Dashboard admin de databases via [localhost:8080](http://localhost:8080)
*   Consulta via streaming realtime através do changefeeds;
*   Criação de index simples, index composto e multi index (baseado em arrays);

Partindo para o lado prático, que tal criarmos uma simples aplicação usando RethinkDB? Para explorarmos o suporte changefeed de consultas realtime, vamos criar uma simples timeline, em que todo mundo posta mensagens para uma timeline global.

**Atenção:** Em primeiro lugar, é necessário que você tenha em sua máquina o RethinkDB instalado e rodando corretamente para em seguida criarmos o projeto abaixo, caso não tenha instalado, recomendo que você [siga as instruções do site oficial do RethinkDB](http://rethinkdb.com/docs/install/), afinal lá tem um vasto tutorial para instalação em diversos sistemas operacionais

Para começar o projeto, rode os seguintes comandos no seu terminal:

``` bash
 mkdir timeline
 cd timeline
 npm init
``` 

Responda como quiser as perguntas do `npm init`, afinal será usado apenas para criar o `package.json`, em seguida instale as seguintes dependências:

``` bash
 npm install --save express socket.io rethinkdb
``` 

Agora mãos a obra! Como será uma aplicação simples, vamos codar todo projeto em um único arquivo e **usaremos algumas features do ES6 nativas do Node v6.x**. Caso precise um projeto bem estruturado que utilize RethinkDB + Express como base para seus novos projetos, recentemente criei novo projetinho chamado [node-api-examples](https://github.com/caio-ribeiro-pereira/node-api-examples) que é um conjunto de APIs simples e bem estruturada, em que cada projeto tem usa uma variação de web router e banco de dados, lá temos algumas versões de APIs usando RethinkDB com Express, Koa.js e Hapi.js. Da uma olhada lá!
Voltando ao foco desse post, crie o `index.js` da seguinte maneira:

``` javascript
 const http = require('http');
 const fs = require('fs');
 const express = require('express');
 const socketIO = require('socket.io');
 const r = require('rethinkdb');
 const config = require('./config.json');
 // Carregando Express, HTTP, SocketIO e DB config
 const db = Object.assign(config.rethinkdb, { db: 'timeline' });
 const app = express();
 const server = http.Server(app);
 const io = socketIO(server);
 r.connect(db)
   .then(conn => {
     // Rota para carregar pagina inicial
     app.get('/', (req, res) => {
       fs.readFile(`${__dirname}/index.html`, (err, html) => {
         res.end(html || err);
       });
     });
     // Listando novas mensagens via changefeed + socket.io
     r.table('messages')
       .changes()
       .run(conn)
       .then(cursor => {
         cursor.each((err, data) => {
           const message = data.new_val;
           io.sockets.emit('/messages', message);
         });
       })
     ;
     // Cadastro de novas mensagens via socket.io
     io.on('connection', (client) => {
       r.table('messages')
         .run(conn)
         .then(cursor => {
           cursor.each((err, message) => {
             io.sockets.emit('/messages', message);
           });
         })
       ;
       client.on('/messages', (body) => {
         const { name, message } = body;
         const data = { name, message, date: new Date() };
         r.table('messages').insert(data).run(conn);
       });
     });
     server.listen(3000, () => console.log('Timeline Server!'));
   })
   .error(err => {
     console.log('Erro ao se conectar com rethinkdb');
     throw err;
   })
 ;
``` 

Alguns detalhes são importantes saber quando vai trabalhar com RethinkDB
Em primeiro lugar, praticamente grande parte das funções desse módulo é baseado em [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) e nisso vai te permitir escrever um código assícrono mais estruturado e com melhor controle no tratamento de erros.

A query que realiza um [changefeed](http://rethinkdb.com/docs/changefeeds/javascript/) é praticamente um subscriber do banco, em que registra uma query observadora para retornar qualquer alteração de dados de uma tabela, a combinação disso junto com a função `io.sockets.emit()` vai permitir que a aplicação retorne dados em tempo real para o cliente.

Para preparar o banco de dados dessa aplicação, vamos criar um simples script que cria database e tables para usarmos nesse projeto, crie o arquivo `database.js` da seguinte maneira:

``` javascript
 const r = require('rethinkdb');
 const config = require('./config.json');
 let conn;
 r.connect(config.rethinkdb)
   .then(connection => {
     console.log('Conectado no RethinkDB...');
     conn = connection;
     return r.dbCreate('timeline').run(conn);
   })
   .then(() => {
     console.log('Database "timeline" criado com sucesso!');
     return r.db('timeline').tableCreate('messages').run(conn);
   })
   .then(() => console.log('Tabela "messages" criada com sucesso!'))
   .error(err => console.log(err))
   .finally(() => process.exit(0))
 ;
``` 

Em seguida, crie também o arquivo `config.json` que vai conter dados de conexão com banco RethinkDB:

``` javascript
 {
   "rethinkdb": {
     "host": "localhost",
     "port": 28015
   }
 }
``` 

Para finalizar nossa aplicação, crie a página `index.html` que será a interface da timeline para os usuários brincarem:

``` html
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>Timeline</title>
     <meta name="viewport" content="width=device-width,initial-scale=1">
     <script src="/socket.io/socket.io.js"></script>
   </head>
   <body>
     <form style="text-align:center;margin:50px 0">
       <label for="name">Nome:</label>
       <input type="text" id="name"/>
       <label for="message">Mensagem:</label>
       <input type="text" id="message"/>
       <button type="submit">Enviar</button>
     </form>
     <fieldset style="padding: 20px;width:50%;margin:0 auto">
       <legend style="text-align:center">Timeline</legend>
       <p id="messages"></p>
     </fieldset>
     <script>
       (function() {
         var socket = io();
         var form = document.querySelector('form');
         form.addEventListener('submit', function(e) {
           e.preventDefault();
           var name = e.target.querySelector('#name');
           var message = e.target.querySelector('#message');
           var data = {
             name: name.value,
             message: message.value
           };
           socket.emit('/messages', data);
           e.target.reset();
         });
         socket.on('/messages', function(data) {
           var messages = document.querySelector('#messages');
           var message = '<b>'+ data.name +':</b> '+ data.message +'<br />';
           messages.innerHTML += message;
         });
       })();
     </script>
   </body>
 </html>
``` 

Pronto! Finalizamos a implementação de nossa timeline! Agora falta rodar a aplicação, para isso, na primeira vez será necessário rodar os scripts de preparação do database do projeto, então rode:

``` bash
 node database.js
``` 

Se tudo estiver, ok! Então você já pode iniciar o server rodando comando:

``` bash
 node index.js
``` 

E brincar com sua nova aplicação realtime acessando [http://localhost:3000](http://localhost:3000).

See ya!