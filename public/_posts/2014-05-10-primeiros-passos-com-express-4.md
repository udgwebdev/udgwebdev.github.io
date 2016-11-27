[![Express 4.0](images/express4.jpg "Express 4.0")](http://expressjs.com "Express") 

Já faz um tempo que publiquei alguns posts sobre Node.js usando Express neste blog e infelizmente esses posts já estão desatualizados.

Por isso, com o objetivo de compensar esse atraso vou mostrar nesse post, como trabalhar com a nova versão do popular [web framework Express](http://expressjs.com "Express").

## Sobre o Express

O principal foco do Express é ser um framework minimalista, para atingir esse objetivo, algumas mudanças foram realizadas que em destaque são:

*   Remoção do CLI que liberava o comando **express** para bundle
*   Remoção dos middlewares: **bodyParser, cookieParser, session, favicon, logger** (agora eles se encontram em módulos separados, permitindo que sejam instalados quando necessário).
*   Remoção do **app.use(app.router)**
*   Criação de uma nova API para roteamento, o **Router**
*   Utilização do **app.route** que permite numa única rota chamar mais de um verbo HTTP.

Se sua aplicação Express utiliza uma versão anterior **(3.x)**, recomendo que [acesse essa wiki que contém dicas para migração.](https://github.com/visionmedia/express/wiki/Migrating-from-3.x-to-4.x "Migrando Express 3.x para 4.x")

## Show me code!

Para mostrar na prática, que tal criarmos um mini blog explorando os recursos do Express 4?

Nosso mini blog utilizará os seguintes frameworks:

*   [Express 4](https://github.com/visionmedia/express "Github do Express"): O framework web cobaia deste post.
*   [LevelUP](https://github.com/rvagg/node-levelup "Github do LevelUP"): Um framework do LevelDB compatível com Node.js. (veja mais sobre LevelDB neste post: [Brincando com LevelDB](http://udgwebdev.com/brincando-com-leveldb "Brincando com LevelDB")).
*   [Node UUID](https://github.com/broofa/node-uuid "Github do Node UUID"): Gerador de IDs malucos baseado em UUIDs.
*   [Body Parser](https://github.com/expressjs/body-parser "Github do Body Parser"): Realiza parser de dados do HTTP para objeto JSON.

Para começar abra o terminal e execute o comando:

``` bash
 mkdir miniblog
 cd miniblog
 npm init
``` 

Responda o questionário do **npm init** informando os dados do projeto, no meu caso eu respondi da seguinte maneira:

``` bash
 name: miniblog
 version: 0.0.1
 description: Mini blog escrito em Express 4
 entry point: app.js
 author: Caio R. Pereira
 license: MIT
``` 

Em seguida instale todas as dependências em um único comando:

``` bash
 npm install express jade level node-uuid body-parser --save
``` 

Pronto! Já temos o projeto configurado, agora só falta o principal, que é criar o back-end da aplicação. Crie o arquivo **app.js** com o seguinte código:

``` javascript
 var express = require('express')
   , bodyParser = require('body-parser')
   , path = require('path')
   , level = require('level')
   , uuid = require('node-uuid')
   , db = level('./miniblog.db', {valueEncoding: 'json'})
   , app = express()
 ;
 app.set('views', path.join(__dirname, '/views'));
 app.set('view engine', 'jade');
 app.use(bodyParser.urlencoded());
 app.use(bodyParser.json());
 app.route('/')
   .get(function(req, res) {
     var posts = [];
     var stream = db.createValueStream();
     stream.on('data', function(post) {
       posts.push(post);
     });
     stream.on('end', function() {
       return res.render('index', {posts: posts});
     });
   })
   .post(function(req, res) {
     db.put(uuid.v1(), req.body.post, function(err) {
       return res.redirect('/');
     });
   });
 app.listen(3000, function() {
   console.log('MiniBlog running...');
 });
``` 

Repare que para reaproveitar uma mesma rota em ambos os verbos: **GET** e **POST** foi utilizado a nova função **app.route("/")**. Com essa função você terá uma organização melhor de suas rotas, facilitando também a modularização de um grupo de rotas e também facilita a criação de **controllers**, caso queira uma [organização de códigos like MVC](http://pt.wikipedia.org/wiki/MVC "Wiki: Padrão MVC (Model-View-Controller)").

Outro detalhe foi a utilização do middleware: **bodyParser**. Dessa vez foi necessário instalá-lo individualmente para usar seus recursos, isso faz com que o Express fique mais enxuto, pois antigamente esse e outros middlewares eram pré-instalados pelo framework mesmo que você não fosse utilizado.

Para finalizar, falta criar a página do nosso blog, que são conhecidas pelo nome **views**.

Primeiro criaremos um simples layout para suportar o conteúdo das views, então crie o arquivo **views/layout.jade**:

``` javascript
 doctype html
 html
   head
     meta(charset='UTF-8')
     meta(name='viewport', content='width=device-width')
     title MiniBlog
   body
     block content
``` 

Agora vamos implementar a página principal que terá apenas dois recursos:

1.  Listagem de posts
2.  Cadastro de post

Para isso, crie o arquivo **views/index.jade** com o seguinte código Jade:

``` javascript
 extends layout
 block content
   h1 MiniBlog
   form(action="/", method="post")
     fieldset
       legend Novo post
       label Título
       input(type="text" name="post[title]")
       label Conteúdo
       textarea(rows="6" name="post[content]")
       button(type="submit") Cadastrar
   br
   each post in posts
     h2 #{post.title}
     p #{post.content}
     hr
``` 

Depois disso tudo, agora você pode rodar sua aplicação, para isso execute o comando:

``` bash
 node app
``` 

E faça o test-drive do MiniBlog acessando a url: **http://localhost:3000**.