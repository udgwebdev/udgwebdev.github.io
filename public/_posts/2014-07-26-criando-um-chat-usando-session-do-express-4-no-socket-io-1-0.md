![Criando um chat usando session do Express 4 no Socket.IO 1.0](images/express-socketio.jpg "Criando um chat usando session do Express 4 no Socket.IO 1.0")

Fala pessoal tudo bem? Se você utiliza Socket.IO e Express juntos, esse tutorial vai te ajudar a manter mais seguro o seu sistema, afinal vou te explicar como compartilhar dados de uma session do Express no Socket.IO, que é bem melhor do que aderir a ~~gambiarras~~ soluções paliativas.

O Socket.IO consegue acessar e manipular sessões que são criadas por um servidor web (neste caso o Express). E o que faremos é um simples controle de sessão, que valida, autoriza e compartilha os dados da sessão para o Socket.IO usar.

#### Quais as vantagens disso?

É mais seguro acessar os dados de uma Session compartilhada, do que enviar tais dados das Sessions para o HTML e depois reenviá-los para o Socket.IO, isso por que código no cliente pode ser facilmente adulterado, até mesmo usando um [Firebug](http://getfirebug.com "Firebug") ou [Chrome DevTools](https://developers.google.com/chrome-developer-tools/ "Chrome DevTools") é possível alterar os valores de código HTML ou JavaScript.

#### Como isso funciona?

Na prática, quando entramos no sistema, o Express automaticamente cria uma **SessionID**. Essa variável pode ser persistida em memória ou em disco no servidor (essa decisão fica a critério dos desenvolvedores, por default o Express mantém em memória). O Socket.IO não consegue acessar esses dados, ele apenas possui um callback que visa barrar ou autorizar uma conexão do cliente, com isso, dentro dessa callback utilizamos funções de **Session e Cookie do Express**para buscar e validar se tal usuário esta dentro da sessão, se este usuário estiver válido, pegamos todos seus dados da sessão armazenamos no em um **objeto handshake** e liberamos sua conexão com o Socket.IO.

#### Let's code!

Atenção! As dicas desse post funcionará somente nas **versões do Socket.IO 1.0 e Express 4.x**, versões anteriores não funcionarão com os códigos abaixo. Caso você precise implementar esta técnica utilizando o **Express 3.x com Socket.IO 0.9**, recomendo que leia este post antigo do blog: [Node.js: Express, Socket.IO e Sessions](nodejs-express-socketio-e-sessions/ "Node.js: Express, Socket.IO e Sessions")

Antes de implementar o código abaixo, crie uma pasta com o nome: **mini-chat** e dentro dessa pasta instale os seguintes módulos:

``` bash
 npm install express socket.io cookie-parser express-session ejs --save
``` 

Com os módulos instalados, agora vamos criar nossa aplicação que visa implementar o controle de autorização do Socket.IO baseado na sessão gerada pelo Express, e algumas funcionalidades básicas de um chat para enviar e receber mensagens, crie o arquivo **app.js**:

``` javascript
 const KEY = 'nome-do-cookie';
 const SECRET = 'chave-secreta-aqui!';
 var express = require('express')
   , cookieParser = require('cookie-parser')
   , expressSession = require('express-session')
   , app = express()
   , server = require('http').createServer(app)
   , io = require('socket.io').listen(server)
   , cookie = cookieParser(SECRET)
   , store = new expressSession.MemoryStore()
 ;
 // Configurando middlewares de Session e Cookie no Express
 app.set('views', __dirname + '/views');
 app.set('view engine', 'ejs');
 app.use(cookie);
 app.use(expressSession({
   secret: SECRET,
   name: KEY,
   resave: true,
   saveUninitialized: true,
   store: store
 }));
 // Compartilhando a sessão válida do Express no Socket.IO
 io.use(function(socket, next) {
   var data = socket.request;
   cookie(data, {}, function(err) {
     var sessionID = data.signedCookies[KEY];
     store.get(sessionID, function(err, session) {
       if (err || !session) {
         return next(new Error('Acesso negado!'));
       } else {
         socket.handshake.session = session;
         return next();
       }
     });
   });
 });
 // Rota para acessar a página principal
 app.get("/", function(req, res){
   // Armazenando o nome na sessão.
   req.session.nome = "Usuario";
   res.render('index');
 });
 // Iniciando uma conexão com Socket.IO.
 io.sockets.on('connection', function (client) {
   // Recuperando uma sessão Express.
   var session = client.handshake.session;
   client.on('toServer', function (msg) {
     msg = "<b>" + session.nome + ":</b> " + msg + "<br>";
     client.emit('toClient', msg);
     client.broadcast.emit('toClient', msg);
   });
 });
 server.listen(3000, function(){
   console.log("Rodando o server!");
 });
``` 

Com esses recursos habilitado será possível utilizar session no Socket.IO, em **io.use();** temos o callback **next()**, ele é responsável pela autorização e não autorização de uma conexão. A variável **socket.request** contém informações da requisição do cliente, isso inclui **headers, cookies e outras informações do HTTP**. Para recuperar o **sessionID**, utilizamos o array **data.signedCookies[KEY]**, e em seguida, utilizamos esses dados para verificar se sessão esta na memória do servidor através da função **store.get(sessionID)**, se tudo estiver correto, o callback dessa função retornará os dados da sessão, e com isso enviamos essa sessão para o objeto **socket.handshake.session** e executamos o callback **return next()** para autorizar esta conexão com o Socket.IO.

Se surgir um erro ao recuperar uma sessão, executamos o callback **return next(new Error('Acesso negado!'))** com uma mensagem de erro que avisa que bloqueamos a conexão desse cliente.

Pronto! Agora o Socket.IO esta habilitado para ler e manipular os objetos de uma session criada pelo Express. Com isso, podemos trafegar dados da sessão do usuário para qualquer funcionalidade criada pelo Socket.IO, no nosso caso vamos enviar esta sessão para um simples chat estamos implementando neste post. O código abaixo é uma view da nossa aplicação de exemplo que inicia o cliente do Socket.IO do nosso chat. Para funcionar essa view, você precisa criar o arquivo **views/index.ejs** implementando o seguinte código:

``` html
 <html>
   <body>
     <script src="/socket.io/socket.io.js"></script>
     <script>
       var socket = io('http://localhost:3000');
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
       <input type="text" id="msg" placeholder="Sua mensagem">
       <input type="button" onclick="enviar();" value="Enviar">
     </section>
   </body>
 </html>
``` 

Para testar essa técnica, rode o comando:

``` bash
 node app
``` 

Em seguida, acesse o endereço: **http://localhost:3000**, digite e envie qualquer mensagem, que em seguida será mostrada no chat, o nome do usuário que veio da sessão.

Dúvidas, sugestões ou achou um bug neste post! Comente abaixo, ok? Obrigado!