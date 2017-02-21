![Aumentando performance do Socket.IO](/images/socket-io.jpg "Aumentando performance do Socket.IO")

Fala galera! Ultimamente andei sem muito tempo para me dedicar no blog aqui, mas hoje venho com um post bacana para compensá-los!  
Esse post terá uma implementação bem simples e rápida de se fazer, e os ganhos em performance serão gigantescos para uma aplicação Node.js que utilize Socket.IO.

Para quem não conhece, o Socket.IO é um framework bem popular no Node.js, sua função é fornecer uma comunicação bidirecional entre cliente e servidor, pelo qual permite implementar interações realtime na aplicação.  
Aqui no blog há alguns posts sobre Socket.IO, então caso queria conhecê-lo na prática, recomendo a leitura desses posts:

* [Real-time com Socket.IO no Node.js](/real-time-com-socket-io-no-nodejs "Real-time com Socket.IO no Node.js")
* [Criando um chat usando Session do Express 4 no Socket.IO 1.0](/criando-um-chat-usando-session-do-express-4-no-socket-io-1-0 "Criando um chat usando Session do Express 4 no Socket.IO 1.0")
* [Socket.IO com Redis](/socket-io-com-redis "Socket.IO com Redis")
* [Node.js Express, Socket.IO e Sessions](/nodejs-express-socketio-e-sessions "Node.js Express, Socket.IO e Sessions")
* [Node.js para leigos - Explorando real-time](/node-js-para-leigos-explorando-real-time "Node.js para leigos - Explorando real-time")

## Aumentando performance usando uWebSocket

Como disse no começo, esse post será bem rápido, prático e com um resultado sensacional no final, se você já possui uma aplicação com Socket.IO, e já utiliza suas principais features, e gostaria de aumentar performance, sem ter a necessidade de aplicar grandes modificações na aplicação, para isso basta instalar o módulo `uws`, conhecido como uWebSocket.

``` bash
npm install uws --save
```

Em resumo, este módulo é uma versão otimizada do WebSockets, tão otimizado que foi escrito em C/C++ e esta disponível também como addon para o Node.js. Ele possui a mesma interface do WebSocket convencional, tanto é que se você possui no server-side o módulo `ws`, você só terá o simples trabalho de removê-lo, instalar o `uws` e mudar no carregamento de seu módulo, de `require('ws')` para `require('uws')`.

No nosso caso, vamos supor que temos uma aplicação que utilize o Socket.IO.

``` javascript
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  // Enviando 'hello!' para todos os clientes conectados
  io.emit('data', 'hello!'); 
});

server.listen(3000, () => console.log('Socket.IO Running...'));
```

Neste caso, para adotar uma implementação WebSockets diferente da convencional no Socket.IO, basta fazer as seguintes modificações:

``` javascript
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const uws = require('uws');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

// O atributo io.ws é o responsável pela implementação WebSockets.
// No Socket.IO é necessário desativar 'perMessageDeflate' 
io.ws = new uws.Server({ perMessageDeflate: false });

io.on('connection', (socket) => {
  io.emit('data', 'hello!'); 
});

server.listen(3000, () => console.log('Socket.IO Running...'));
```

Com essa simples mudança, sua aplicação Socket.IO estará **62x mais eficiente no consumo de memória, 42x melhor na gestão de conexões e 61x mais rápido no throughput de mensagens curtas**.  
Esses dados, estão no readme do [github uWebSockets](https://github.com/uWebSockets/uWebSockets), lá tem mais detalhes sobre features desse módulo e também há um benchmark comparando uWebSockets com outros módulos populares.

Até a próxima!
