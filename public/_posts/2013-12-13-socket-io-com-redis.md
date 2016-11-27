![Compartilhando Session entre Express e Socket.IO](images/socket-io.jpg "Socket.IO com Redis")

Quando desenvolvemos uma aplicação real-time com Socket.IO, muitas vezes seguimos o que a [documentação nos ensina](http://socket.io/#how-to-use), ou seja, poucas configurações, foco nos eventos e trabalhando com uma session fraca, que por default é utilizado o **MemoryStore** (sessão em memória).

Este controle não é recomendável em ambiente de produção, pois além da Session, o Socket.IO mantém em memória conexões dos usuários online na aplicação e outros recursos internos.

Outro problema do MemoryStore é que ele não permite que sua aplicação trabalhe com [clusters](http://nodejs.org/api/cluster.html), por que cada cluster vai alterar a session de outro cluster sem ter um controle exato sobre qual session pertece a qual cluster, e por causa disso, comportamentos anormais ocorrerão em sua aplicação.

A solução é utilizar uma session em banco de dados, o Socket.IO já vem com suporte ao Redis, e aplicar essa adaptação é bem simples.

Para isso utilizaremos o seu módulo nativo, o [RedisStore](https://github.com/LearnBoost/Socket.IO/wiki/Configuring-Socket.IO), ele permite gerenciar sessions via banco de dados Redis, que é um NoSQL extremamente rápido!

Para seguir as dicas desse post será necessário configurar o Redis, se você não tem ele em sua máquina [acesse seu site oficial para instalá-lo](http://redis.io/).

Com o Redis rodando, vamos ao que interessa! Criaremos um simples servidor, utilizando apenas o Socket.IO para demonstrar essa dica.

Para criar uma nova aplicação, execute:

``` bash
 npm init
``` 

Responda as perguntas deste comando do jeito que quiser, por exemplo, o nome do meu app será **"socket-redis"**, versão: **"0.0.1"** e o resto apenas deixe em branco para finalizar e criar o **package.json** corretamente.

Feito isso, vamos instalar os módulos do nosso app, digite:

``` bash
 npm install socket.io redis --save
``` 

Agora que temos tudo preparado, vamos ao que interessa:

``` javascript
 var io = require('socket.io').listen(80);
 io.sockets.on('connection', function(socket) {
   socket.on('msg', function (data) {
     socket.broadcast.emit(data);
   });
 });
``` 

Para simplificar este post criei um simples **emissor de mensageria broadcast**, ou seja, o usuário emite um **'msg'** e o servidor envia esta mensagem para todos os demais usuários conectados.
Não entrarei em detalhes sobre o front-end da aplicação, pois o foco aqui é otimizar o back-end, então fique a vontade para criar a view que envia mensagens para este servidor.

O código anterior esta bem simplificado e por default ele já esta **pré-configurado para MemoryStore**, para adaptar este código para **RedisStore**, faça as seguintes modificações:

``` javascript
 var SocketIO = require('socket.io')
   , io = SocketIO.listen(80)
 ;
 io.set('store', new SocketIO.RedisStore);
 io.sockets.on('connection', function(socket) {
   socket.on('msg', function (data) {
     socket.broadcast.emit(data);
   });
 });
``` 

Essa simples modificação funcionará somente se o Redis estiver rodando na mesma máquina da aplicação, pois por default o **cliente Redis interno** se conectará no **http://localhost:6379**.
Caso você precise informar um endereço específico de um servidor Redis externo, você terá que adicionar um pouco mais de código:

``` javascript
 var redis = require('redis')
   , SocketIO = require('socket.io')
   , io = SocketIO.listen(80)
 ;
 io.set('store', new SocketIO.RedisStore({
    redisPub: redis.createClient(/* Porta,Host */)
   ,redisSub: redis.createClient(/* Porta,Host */)
   ,redisClient: redis.createClient(/* Porta,Host */)
 }));
 io.sockets.on('connection', function(socket) {
   socket.on('msg', function (data) {
     socket.broadcast.emit(data);
   });
 });
``` 

Com esse upgrade implementado o seu sistema vai rodar perfeitamente em clusters, sem causar bugs no controle de session, pois as sessions serão compartilhadas entre os clusters existentes.

Outro ponto forte é que sua aplicação consumirá menos memória, afinal a memória dedicada para as Sessions foi delegada para o Redis, e este banco mantém em curtos períodos os dados da Session em disco.