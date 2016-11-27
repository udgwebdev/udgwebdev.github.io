![Curso de Node.js](images/nodejs-para-leigos.jpg "Curso de Node.js")

### Atenção

As dicas desse post **são baseadas em uma versão antiga do Express 3.x**, porém os conceitos desse framework continuam intactos! Caso queira se **atualizar com o que há de novo na versão Express 4.x**, recomendo que leia esse post: [Primeiros passos com Express 4]({{site.url}}/primeiros-passos-com-express-4 "Primeiros passos com Express 4").

Dando continuidade ao nosso mini-cursinho e especificamente voltando ao assunto sobre o framework ExpressJS, hoje apresentarei mais dicas sobre como desenvolver uma aplicação web com esse incrível módulo. No [post anterior]({{site.url}}/node-js-para-leigos-framework-express-parte-1 "Framework Express Parte 1") explicamos a essência, que na prática apresentei uma aplicação funcional, um mini-cadastro de clientes explorando as boas práticas de desenvolvimento **orientado à arquitetura REST**, utilizando os principais métodos do **protocolo HTTP (GET, POST, PUT e DELETE)** isso tudo no primeiro post hein!

Otimizando a nossa aplicação neste post incluiremos novos recursos: **inclusão de novas configurações no servidor da aplicação, separação de código HTML do código Server-Side, aplicação de filtros.**

Obs.: Para executar com sucesso o código abaixo, será necessário incluir um novo framework responsável por renderização de HTML dinâmico com Node.js, o [EJS](https://github.com/visionmedia/ejs "EJS").

`npm install ejs`

Mãos a obra! Confira abaixo a versão do código antigo já com algumas otimizações pra explicar:

``` javascript
 var express = require('express')
   , app = express();
 app.configure(function(){
   app.set('views', __dirname + '/views');
   app.set('view engine', 'ejs');
   app.set('view options', {layout: false});
   app.use(express.bodyParser());
   app.use(express.methodOverride());
 });
 var clientes = [];
 app.get('/', function(req, res){
   res.render('index', {clientes: clientes});
 });
 app.post('/cliente', function(req, res){
   var cliente = req.body.cliente;
   clientes.push(cliente);
   res.redirect('/');
 });
 app.get('/cliente/:id/editar', function(req, res){
   var id = req.params.id;
   res.render('edit', {cliente: clientes[id], id: id});
 });
 app.put('/cliente/:id', function(req, res){
   var id = req.params.id;
   clientes[id] = req.body.cliente;
   res.redirect('/');
 });
 app.del('/cliente/:id', function(req, res){
   var id = req.params.id;
   clientes.splice(id, 1);
   res.redirect('/');
 });
 app.listen(3000);
``` 

Reparem no quão **clean** ficou o código do server-side da aplicação, simplesmente separando código **html** do **javascript**, e melhorando o dinamismo de manipulações html, utilizamos o EJS como framework template engine, com isso incluiremos as páginas com extensões .ejs (index.ejs e edit.ejs) no **subdiretório chamado views**. Tudo isso com incluindo 3 novos parâmetros no **callback da função app.configure()**:

``` javascript
 // Informa o subdiretório das views.
 app.set('views', __dirname + '/views');
 // Informa o template engine de renderização das views (Framework EJS)
 app.set('view engine', 'ejs');
 // Manipula layouts, o EJS não possui esse recurso então deixe false.
 app.set('view options', {layout: false});
``` 

Abaixo mostrarei como ficarão as **views index.ejs e edit.ejs** que são referenciadas em algumas rotas da aplicação, através do método: `res.render('nome_da_view', {variaveis para renderização no cliente})`

``` html
 <!-- index.ejs -->
 <html>
   <body>
     <h1>Cadastro de cliente</h1>
     <form action="/cliente" method="post">
       <label>Nome:
         <input type="text" name="cliente[nome]">
       </label>
       <label>Idade:
         <input type="text" name="cliente[idade]">
       </label>
       <button type="submit">Enviar</button>
     </form>
     <h1>Lista de clientes</h1>
     <ul>
     <% for(var i = 0; i < clientes.length; i++){ %>
       <li><%= clientes[i].nome %> - <%= clientes[i].idade %>
         <a href="/cliente/<%= i %>/editar">Editar</a>
         &nbsp;|&nbsp;
         <a href="/cliente/<%= i %>">Excluir</a>
       </li>
     <% } %>
     </ul>
   </body>
 </html>
``` ``` html
 <!-- edit.ejs -->
 <html>
   <body>
     <h1>Editar dados do cliente: <%= cliente.nome %></h1>
     <form action="/cliente/<%= id %>" method="post">
       <input type="hidden" name="_method" value="put">
       <label>Nome:
         <input type="text" name="cliente[nome]" value="<%= cliente.nome %>">
       </label>
       <label>Idade:
         <input type="text" name="cliente[idade]" value="<%= cliente.idade %>">
       </label>
       <button type="submit">Enviar</button>
     </form>
   </body>
 </html>
``` 

Pronto, agora temos em nossa aplicação o html separado dos arquivos js, e isso além de organizar seus códigos facilita na manutenção do mesmo. Agora pense comigo, o que acontecerá se eu cadastrar um cliente em branco? Seria legal adicionarmos um filtro para tratar os dados de forma que lance um erro caso tente cadastrar com dados em branco, e será isso que faremos! Antes das rotas da aplicação, adicionaremos a seguinte rotina para renderizar uma tela de erros:

``` javascript
 app.use(function(req, res, next){
   res.render('404', {status: 404});
 });
 app.error(function(err, req, res, next){
   res.render('500', {status: 500, error: err});
 });
``` 

Com isso teremos que criar duas páginas uma com o nome **404.ejs** e a outra **500.ejs**, em que elas irão renderizar mensagens de erros do sistema.

``` html
 <!-- 404.ejs -->
 <html>
   <head>
     <title>Página não encontrada.</title>
   </head>
   <body>
     <h1>Página não encontrada.</h1>
   </body>
 </html>
``` ``` html
 <!-- 500.ejs -->
 <html>
   <head>
     <title>Erro na aplicação.</title>
   </head>
   <body>
     <h1>Erro na aplicação.</h1>
     <h3>Detalhes: <%= error.message %></h3>
   </body>
 </html>
``` 

Agora com toda estrutura para tratamento de erros pronto, precisamos criar uma regra de tratamento sobre os campos do cliente, que na prática serão incluídos funções de filtros para serem realizadas antes da execução de uma determinada rota. Para se fazer isso no Express, qualquer rota que incluir a declaração de uma função como callback antes da função principal da rota será considerado como filtro que executa antes da rota principal, veja o exemplo abaixo:

``` javascript
 // Funções que recebem três paramêtros são consideradas filtros.
 var validarCampos = function(req, res, next){
   if(req.body.cliente.nome){
     return next(new Error('Informe o nome do cliente.'));
   }
   if(req.body.cliente.idade){
     return next(new Error('Informe a idade do cliente.'));
   }
   return next();
 }
 // Inclua a função validarCampos no callback de execução de uma rota.
 app.post('/cliente', validarCampos, function(req, res){
   var cliente = req.body.cliente;
   clientes.push(cliente);
   res.redirect('/');
 });
 app.put('/cliente/:id', validarCampos, function(req, res){
   var id = req.params.id;
   clientes[id] = req.body.cliente;
   res.redirect('/');
 });
``` 

Esse foi um exemplo simples de tratamento de erros, na prática recomendo que utilize-o para tratamentos complexos, visto que esse exemplo de validação de campos é apenas um exemplo hipotético de como explorar os redirecionamentos de páginas de erros. Para facilitar veja abaixo como ficou o nosso código back-end da aplicação:

``` javascript
 var express = require('express')
   , app = express();
 app.configure(function(){
   app.set('views', __dirname + '/views');
   app.set('view engine', 'ejs');
   app.set('view options', {layout: false});
   app.use(express.bodyParser());
   app.use(express.methodOverride());
 });
 var clientes = [];
 var validarCampos = function(req, res, next){
   if(req.body.cliente.nome){
     return next(new Error('Informe o nome do cliente.'));
   }
   if(req.body.cliente.idade){
     return next(new Error('Informe a idade do cliente.'));
   }
   return next();
 }
 app.use(function(req, res, next){
   res.render('404', {status: 404});
 });
 app.error(function(err, req, res, next){
   res.render('500', {status: 500, error: err});
 });
 app.get('/', function(req, res){
   res.render('index', {clientes: clientes});
 });
 app.post('/cliente', validarCampos, function(req, res){
   var cliente = req.body.cliente;
   clientes.push(cliente);
   res.redirect('/');
 });
 app.get('/cliente/:id/editar', function(req, res){
   var id = req.params.id;
   res.render('edit', {cliente: clientes[id], id: id});
 });
 app.put('/cliente/:id', validarCampos, function(req, res){
   var id = req.params.id;
   clientes[id] = req.body.cliente;
   res.redirect('/');
 });
 app.del('/cliente/:id', function(req, res){
   var id = req.params.id;
   delete clientes[id];
   res.redirect('/');
 });
 app.listen(3000);
``` 

Bom pessoal esse foi mais um episódio do [Curso Node.js para leigos](nodejs), espero que tenham gostado desse post, comentem abaixo, tire suas dúvidas, críticas e sugestões serão sempre bem-vindas também, até a próxima!