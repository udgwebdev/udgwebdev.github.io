![Curso de Node.js](../images/nodejs-para-leigos.jpg "Curso de Node.js")

Fala galera! O capítulo de hoje será muito interessante, falarei sobre um assunto que esta muito emergente nos sistemas web, que esta sendo largamente utilizado no [Node.js]({{site.url}}/nodejs), **o assunto é Real-time.**
Quando se fala de aplicações real-time, estamos técnicamente falando de **conexões bi-direcionais**, que na prática, é uma **conexão que se mantem aberta (keep-alive)** para que os clientes interajam com o servidor em uma única conexão aberta. A grande vantagem disso é de não precisar mais das **requisições assíncronas (AJAX)** para simular uma **“ação quase real-time”**, digo quase pois **AJAX não é uma conexão bi-direcional** capaz de se manter aberta até o término de seu processamento.

Node.js se tornou popular devido a sua facilidade em trabalhar com real-time, simplesmente por que o **protocolo WebSockets (Protocolo do HTML5 para conexões bi-direcionais)** utiliza-se Javascript também.
O único problema em desenvolver aplicações real-time é que **nem todos os browsers suportam o protocolo WebSockets**, com isso ainda é **inviável desenvolver uma aplicação 100% WebSockets**. Diante desse problema **surgiu um framework chamado Socket.IO** cuja sua idéia resolve esse problema nos browsers antigos, **emulando outras técnicas de comunicação real-time** de forma totalmente abstrata para o desenvolvedor.
Basicamente ele possui um script no client-side que detecta o browser e a compatibilidade adequada de comunicação.
Ele tenta na seguinte ordem escolher qual técnica de comunicação será viável com o browser:

1.  WebSocket
2.  Adobe® Flash® Socket
3.  AJAX long polling
4.  AJAX multipart streaming
5.  Forever Iframe
6.  JSONP Polling

Com isso se o navegador for o mais recente Firefox ou Chrome e no server-side estiver habilitado o WebSockets, a comunicação será feita através desse protocolo. Porém se o usuário estiver no **IE 6 sem o adobe flash player** instalado, o nível de comunicação cai para **Ajax long polling ou até JSONP polling**, vai depender da decisão que é automática do Socket.IO client-side. Na maioria dos casos atuais, a conexão será através do **Adobe Flash Player ou AJAX Long polling.**

O legal de tudo isso é que programar com Socket.IO é muito simples e toda decisão complexa é abstraída para o programador.

Abaixo, vejam uma versão simplificada de um chat real-time:

Para executar esse código, execute primeiro o comando:
**npm install express socket.io**

``` javascript
 // server.js
 // É necessário instanciar os módulos abaixo nessa ordem!
 var app = require('express')()
   , server = require('http').createServer(app)
   , io = require('socket.io').listen(server);
 server.listen(3000, function(){
   console.log("Chat real-time...");
 });
 app.get('/', function (req, res) {
   res.sendfile(__dirname + '/index.html');
 });
 // Eventos do Socket.IO
 io.sockets.on('connection', function (socket) {
   socket.on('toServer', function (data) {
     var msg = data.nome+":"+data.msg;
     socket.emit('toClient', msg);
     socket.broadcast.emit('toClient', msg);
   });
 });
``` ``` html
 <!-- index.html -->
 <html>
   <head>
     <title>Chat Real-time</title>
     <script src="/socket.io/socket.io.js"></script>
     <script>
       var socket = io.connect('http://localhost');
       socket.on('toClient', function (msg) {
         document.getElementById('historico').innerHTML += msg;
       });
       var enviar = function(){
         var nome = document.getElementById('nome').value;
         var msg = document.getElementById('mensagem').value;
         socket.emit('toServer', {nome: nome, msg: msg});
       };
     </script>
   </head>
   <body>
     <h1>Chat Real-time</h1>
     <label>Nome:
       <input type="text" id="nome" size="3">
     </label>
     <label>Mensagem:
       <input type="text" id="mensagem" size="10">
     </label>
     <button id="enviar" onclick="enviar();">Enviar</button>
     <hr>
     <div id="historico"></div>
   </body>
 </html>
``` 

Acabamos de criar uma versão simples de um chat em real-time! No arquivo server.js somos obrigados a instanciar os módulos express, http e socket.io naquela ordem, pois é um motivo específico do próprio Socket.IO em que ele precisa escutar todas as ações do módulo http primeiro.

Lembrando que estamos usando as últimas versões de todos esses módulos: `Express 3 e Socket.IO 0.9.x`. A boa prática é seguir exatamente a ordem apresentada neste exemplo anterior, que seria instanciar os módulos já deixando o express e socket.io executando seus métodos de listen(), depois criamos as rotas do express e por último os eventos real-time do socket.io.

#### Eventos server-side

*   `io.sockets.on(‘connection’, function(socket))` - Ocorre quando o servidor recebe uma nova conexão de cliente.
*   `socket.on(‘message’, function(mensagem, callback))` - Ocorre quando um cliente usa a função send();, o callback desse evento serve para automaticamente responder o cliente no final da execução deste evento.
*   `socket.on(‘qualquer-nome-de-evento’, function(data))` - Eventos customizados pelo desenvolvedor, qualquer nome pode ser apelidado aqui e o seu comportamento é de apenas receber através do data dados enviados pelo cliente. No nosso exemplo prático, criamos o evento toServer.
*   `socket.on(‘disconnect’)` - Ocorre quando um cliente sai da área conectada ou emite o evento disconnect para o servidor.

#### Mensageria server-side

*   `socket.emit(‘evento’, variaveis)` - Envia uma mensagem para o cliente que se comunicou com o servidor.
*   `socket.broadcast.emit(‘evento’, variaveis)` - Envia uma mensagem para todos os clientes conectados ao servidor, exceto o cliente que se comunicou com o servidor, ou seja, se numa sala de chat temos 4 clientes e o cliente X emitiu uma mensagem ao servidor, os outros 3 clientes receberão o retorno de uma mensagem menos o cliente X.

#### Eventos client-side

*   `socket.on(‘connect’)` – Ocorre quando o cliente se conecta ao servidor.
*   `socket.on(‘connecting’)` – Ocorre quando o cliente esta se conectando ao servidor.
*   `socket.on(‘disconnect’)` – Ocorre quando o cliente deseja se desconectar do servidor.
*   `socket.on(‘connect_failed’)` – Ocorre quando o cliente não conseguiu se conectar no servidor.
*   `socket.on(‘error’)` – Ocorre quando o cliente já se conectou, porém ocorreu um erro grave no servidor durante as trocas de mensagens.
*   `socket.on(‘message’, function (message, callback))` – Ocorre quando o cliente envia uma mensagem de resposta rápida ao servidor, cuja resposta acontece através da função de callback.
*   `socket.on(‘qualquer-nome-de-evento’, function(data))` – Evento customizado pelo desenvolvedor. No nosso exemplo criamos o evento toClient.
*   `socket.on(‘reconnect_failed’)` – Ocorre quando o cliente não consegue se reconectar ao servidor.
*   `socket.on(‘reconnect’)` – Ocorre quando o cliente se reconecta ao servidor.
*   `socket.on(‘reconnecting’)` – Ocorre quando o cliente esta se reconectando ao servidor.

#### Mensageria client-side

*   `socket.emit(‘evento’, variaveis)` - Envia uma mensagem para o cliente que se comunicou com o servidor.

No client-side temos que adicionar o script:

``` html
 <script src="/socket.io/socket.io.js"></script>
``` 

É automaticamente incluída pelo Socket.IO, não se preocupe em baixar esse arquivo apenas incluá-o em seu html.

Bom galera, esse foi mais um capítulo do mini-curso, para melhores referências, segue abaixo os links utilizados:

*   [Real-time com Socket.IO 1.0]({{site.url}}/real-time-com-socket-io-no-nodejs "Real-time com Socket.IO 1.0")
*   [Criando um chat usando Session do Express 4 no Socket.IO 1.0]({{site.url}}/criando-um-chat-usando-session-do-express-4-no-socket-io-1-0 "Criando um chat usando Session do Express 4 no Socket.IO 1.0")
*   [Github do Socket.IO](https://github.com/LearnBoost/socket.io "Github do Socket.IO")
*   [Socket.IO – Exposed Events](https://github.com/LearnBoost/socket.io/wiki/Exposed-events "Socket.IO – Exposed Events")

Feliz 2013 a todos!