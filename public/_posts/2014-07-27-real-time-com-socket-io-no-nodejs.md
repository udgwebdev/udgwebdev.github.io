# Real-time com Socket.IO no Node.js

![Real-time com Socket.IO](../images/socket-io.jpg "Real-time com Socket.IO")

Que tal implementar um simples contador de visitas que apresenta em **tempo real** o número de visitantes online, e seu respectivo browser e sistema operacional em seu site?

Você pode fazer isso, utilizando Node.js e um módulo chamado: **Socket.IO**. O Socket.IO permite realizar comunicação bidirecional utilizando uma das APIs de transporte na seguinte ordem: **WebSockets, FlashSockets, AJAX long polling, AJAX multipart streaming, Forever Iframe ou JSONP Polling**. O motivo dessa ordem é garantir compatibilidade cross-browser.

Na prática o **Socket.IO** abre uma conexão com servidor pelo qual possibilita realizar troca de mensagens entre ambos sem a necessidade de dar um refresh na página, ou seja, sem a necessidade de solicitar uma nova request para o servidor. Com isso é possível explorar o conceito de **real-time** em uma aplicação, pelo qual basicamente o cliente envia uma mensagem e o servidor processa e responde via **broadcast** (para todos os clientes de conexão aberta com servidor) através de um **long pooling de conexão**.

Esse conceito é muito aplicado em aplicações de geração de relatórios em tempo real, chats, jogos multiplayer online, aplicações de interação em tempo real com diversos usuários **(Google Docs, Facebook, Twitter são exemplo disso)** e muito mais.

Abaixo apresentarei como criar um simples contador de usuários online. Para isso instale o Socket.IO:

``` bash
 npm install socket.io --save
``` 

Em seguida crie o backend da aplicação **(app.js)** com o seguite código:

``` javascript
 // Servidor: app.js
 // Iniciando servidor HTTP
 var app = require('http').createServer(index)
   , io = require('socket.io').listen(app)
   , fs = require('fs')
 ;
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });
 function index(req, res){
   fs.readFile(__dirname + '/index.html', function(err, data){
 res.writeHead(200);
     res.end(data);
   });
 };
 // Iniciando Socket.IO
 var visitas = 0;
 // Evento connection ocorre quando entra um novo usuário.
 io.on('connection', function(socket){
   // Incrementa o total de visitas no site.
   visitas++;
   // Envia o total de visitas para o novo usuário.
   socket.emit('visits', visitas);
   // Envia o total de visitas para os demais usuários.
   socket.broadcast.emit('visits', visitas);
   // Evento disconnect ocorre quando sai um usuário.
   socket.on('disconnect', function(){
     visitas--;
     // Atualiza o total de visitas para os demais usuários.
     socket.broadcast.emit('message', visitas);
   });
 });
``` 

Resumindo, criei um servidor para ler um arquivo index.html em sua rota principal, instanciei e configurei dois eventos do **Socket.IO** pelo qual utilizei o evento padrão **"disconnect"** e criei um evento chamado **"visits"**, ambos os eventos trabalham a variável **visitas**, incrementando o valor quando surgir um novo usuário e decrementando quando um usuário sair da página. Por fim, o Socket.IO envia para o cliente o total de visitas através dos métodos: **socket.emit()** que envia o total de visitas para o usuário atual, e **socket.broadcast.emit()** que envia o total de visitas para todos os demais usuários.

Agora no lado cliente, crie a página **index.html**, adicione o scripts do cliente socket.io: **"/socket.io/socket.io.js"** na tag script, e faça o seguinte código:

``` javascript
 <html>
   <head>
     <script src=/socket.io/socket.io.js></script>
     <script>
     var socket = io('http://localhost:3000');
     socket.on('visits', function(visitas){
       document.getElementById('visitas').innerHTML = visitas;
     });
     </script>
   </head>
   <body>
     <p>Contador de visitas online com Socket.io</p>
     <p>Número de visitas: <span id="visitas">0</span></p>
   </body>
 </html>
``` 

Após incluir o scripts do cliente Socket.IO, executamos a função: **var socket = io('http://localhost:3000')** que inicia uma conexão com o servidor. Esta conexão inicia o evento **io.on('connection')** e lá atualizamos o total de visitas e emitimos o evento **socket.emit('visits')**, pelo qual tratamos este evento no cliente através da função **socket.on('visits')** que recebe em seu callback o total de visitas e atualiza na página do site.

Para testar esse app, basta rodar o comando:

``` bash
 node app.js
``` 

Em seguida acesse em vários browsers ou abas do mesmo browser (para simular múltiplos usuários acessando o site) o endereço: **http://localhost:3000**

Esta foi uma simples demonstração do poder real-time oferecido pelo [Node.js]({{site.url}}/nodejs) com **Socket.IO**.

Para melhores referências, recomendo que estude a fundo o Socket.IO através de seu site oficial: [http://socket.io](http://socket.io/ "Site oficial do Socket.io")