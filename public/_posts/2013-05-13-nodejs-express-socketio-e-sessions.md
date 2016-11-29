# NaN

![Compartilhando Session entre Express e Socket.IO](../images/express-socketio.jpg "Compartilhando Session entre Express e Socket.IO")

### Atenção

Esse post esta utilizando versões antigas do Express e Socket.IO, **caso queira aplicar essa técnica nas versões Express 4 e Socket.IO 1.0**, recomendo que leiam esse post: [Criando um chat usando session do Express 4 no Socket.IO 1.0]({{site.url}}/criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/ "Criando um chat usando session do Express 4 no Socket.IO 1.0").

Irei compartilhar uma dica muito útil, pelo qual levei muitos dias quebrando a cabeça para fazer essa técnica funcionar! Se você utiliza Socket.IO e Express juntos, esse tutorial vai te ajudar a manter mais seguro o seu sistema, compartilhando Sessions do Express com Socket.IO ao invés de aderir a ~~gambiarras~~ soluções paliativas.

O Socket.IO consegue acessar e manipular Sessions que forem criadas por um servidor web (neste caso o Express). E o que faremos é um controle de session compartilhada.

#### Quais as vantagens disso?

É mais seguro acessar os dados de uma Session compartilhada, do que enviar tais dados das Sessions para o HTML e depois reenviá-los para o Socket.IO, isso por que código no cliente pode ser facilmente adulterado, até mesmo usando um [Firebug](http://getfirebug.com "Firebug") ou [Chrome DevTools](https://developers.google.com/chrome-developer-tools/ "Chrome DevTools") é possível alterar os valores de código HTML ou Javascript.

#### Como isso funciona?

Na prática, quando entramos no sistema, o Express automaticamente cria uma **SessionID**. Essa variável pode ser persistida em memória ou em disco no servidor (essa decisão fica a critério dos desenvolvedores, por default o Express mantém em memória). O Socket.IO não consegue acessar esses dados, ele apenas possui um controle para autorizar uma conexão do cliente **io.set('authorization');**, com isso podemos utilizar as funções de **Session, MemoryStore e cookieParser do Express** dentro do autorizador Socket.IO, com isso buscamos e validamos uma Session, se o mesmo for válido, armazenamos no cliente Socket.IO e liberamos sua conexão no sistema.

Obs.: Estou utilizando as últimas versões do Socket.IO e Express, não vai funcionar essa dica em versões anteriores. O código abaixo vai explicar de forma mais prática:

``` javascript
 // app.js
 const KEY = 'express.sid'
   , SECRET = 'express';
 var express = require('express')
   , app = express()
   , server = require('http').createServer(app)
   , io = require('socket.io').listen(server)
   , cookie = express.cookieParser(SECRET)
   , store = new express.session.MemoryStore()
   , session = express.session({secret: SECRET
                              , key: KEY
                              , store: store});
 // Configurações de Cookie e Session do Express
 app.configure(function(){
   app.set('view engine', 'ejs');
   app.use(cookie);
   app.use(session);
 });
 app.get("/", function(req, res){
   req.session.nome = "Caio";
   res.render('index');
 });
 server.listen(3000, function(){
   console.log("Express e Socket.IO no ar.");
 });
 // Configurações do Socket.IO
 io.set('authorization', function(data, accept) {
   cookie(data, {}, function(err) {
     if (!err) {
       var sessionID = data.signedCookies[KEY];
       store.get(sessionID, function(err, session) {
         if (err || !session) {
           accept(null, false);
         } else {
           data.session = session;
           accept(null, true);
         }
       });
     } else {
       accept(null, false);
     }
   });
 });
 io.sockets.on('connection', function (client) {
   var session = client.handshake.session
     , nome = session.nome;
   client.on('toServer', function (msg) {
     msg = "<b>"+nome+":</b> "+msg+"<br>";
     client.emit('toClient', msg);
     client.broadcast.emit('toClient', msg);
   });
 });
``` 

Com esses recursos habilitado será possível utilizar session no Socket.IO, em `io.set('authorization');` temos um callback `accept()`, ele é responsável pela autorização da conexão e a variável `data` contém informações do cliente, isso inclui **headers, cookies e outras informações do HTTP**. Buscamos o `sessionID` através da variável `data.signedCookies[KEY]`, em seguida buscamos os dados da session que estão na memória do servidor através da função `store.get()`, se tudo ocorrer com sucesso, incluimos a session na variável `data` e liberamos a conexão pela função `accept(null, true)`. Será através do evento `io.sockets.on('connection')` que acessamos a session via `client.handshake.session`.

Pronto! Agora o Socket.IO esta habilitado para ler e manipular os objetos de uma session criada pelo Express. Com isso, podemos trafegar os dados do usuário logado dentro do nosso chat. Para finalizar, implementaremos a view carregando um simples chat que envia apenas mensagem digitada:

``` html
 <html>
   <body>
     <script src="/socket.io/socket.io.js"></script>
     <script>
       var socket = io.connect('http://localhost:3000');
         socket.on('toClient', function (msg) {
         var chat = document.getElementById('chat');
         chat.innerHTML += msg;
       });
       var enviar = function() {
         var msg = document.getElementById('msg');
         socket.emit('toServer', msg.value);
       };
     </script>
     <section>
       <pre id="chat"></pre>
       <input type="text" id="msg" placeholder="Digite sua mensagem">
       <input type="button" onclick="enviar();" value="Enviar">
     </section>
   </body>
 </html>
``` 

Espero que essa dica seja tão útil para você como foi para o meu projeto.