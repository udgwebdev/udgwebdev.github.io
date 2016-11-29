# Node.js para leigos - Framework Express Parte 1

![Curso de Node.js](../images/nodejs-para-leigos.jpg "Curso de Node.js")

### Atenção

As dicas desse post **são baseadas em uma versão antiga do Express 3.x**, porém os conceitos desse framework continuam intactos! Caso queira se **atualizar com o que há de novo na versão Express 4.x**, recomendo que leia esse post: [Primeiros passos com Express 4]({{site.url}}/primeiros-passos-com-express-4 "Primeiros passos com Express 4").

Após explicar um pouco sobre a [API HTTP nativa do node.js](../node-js-para-leigos-trabalhando-com-http "Node.js para leigos – Trabalhando com HTTP"), percebemos que ela não é apropriada para desenvolvimento de aplicações complexas, visto que todo gerenciamento de rotas e outros recursos desse módulo são tratados de maneira bem básica, sendo necessário aplicar diversos comandos **ifs e fors** para tratá-los.

Vendo essa problema surgiram diversos web-frameworks e micro-frameworks, visando melhorar essas carências, trazendo mais produtividade no desenvolvimento de sistemas. O framework que irei apresentar, se chama [Express](http://expressjs.com/ "ExpressJS"), que foi inspirado pelo framework [Sinatra](http://www.sinatrarb.com/ "Sinatra") do Ruby.

Alguns recursos em destaque desse framework são:

*   Routing robusto
*   Redirecionador para Helpers
*   Dynamic View Helpers
*   Integração View Template Engine
*   Content negotiation (RESTFul)
*   Application mounting
*   Focado em alta performance
*   Renderizador de Views
*   Suporte a Partials
*   Configuração baseado no ambiente do sistema operacional
*   Desenvolvido com a base no [Middleware Connect](http://www.senchalabs.org/connect/ "Middleware Connect")

Com ele será possível desenvolver uma aplicação complexa e de forma totalmente controlada pelo desenvolvedor. Antes mais nada, após criar uma pasta para aplicar na prática os códigos abaixo, execute essa linha de comando para **instalar o framework Express**:

`npm install express`

Obs.: Irei usar em todos os exemplos códigos da **versão estável 2.x.x do Express**, muitos dos exemplos poderão ou não sofrer mudanças na **versão 3.x.x**. Caso queira adaptar para nova versão veja este link: [Migrando Express de 2.x para 3.x](https://github.com/visionmedia/express/wiki/Migrating-from-2.x-to-3.x "Migrando Express de 2.x para 3.x"). Veja um exemplo abaixo de **Hello World**:

``` javascript
 var express = require('express')
   , app = express();
 app.get('/', function(req, res){
   res.send('Hello World');
 });
 app.listen(3000);
``` 

Esse exemplo mostra de forma mais enxuta uma simples aplicação sendo executada na **rota raíz '/'**. Não há muito segredo ou dicas para se passar com isso, mas aprofundando mais a nossa aplicação, irei criar mais rotas e algumas configurações relevantes para ele.

``` javascript
 var express = require('express')
   , app = express();
 app.configure(function(){
   app.use(express.bodyParser());
 });
 var clientes = [];
 app.get('/', function(req, res){
   html = '<html><body>';
   html += '<form action="/cliente" method="post">';
   html += '<label>Nome: <input type="text" name="cliente[nome]"></label><br>';
   html += '<label>Idade: <input type="text" name="cliente[idade]"></label><br>';
   html += '<button type="submit">Enviar</button>';
   html += '</form>';
   html += '<br>';
   html += '<h1>Lista de clientes</h1>';
   html += '<ul>';
   for(var i = 0; i < clientes.length; i++){
     html += '<li>'+clientes[i].nome+' | '+clientes[i].idade+'</li>';
   }
   html += '</ul></body></html>';
   res.send(html);
 });
 app.post('/cliente', function(req, res){
   var cliente = req.body.cliente;
   clientes.push(cliente);
   res.redirect('/');
 });
 app.listen(3000);
``` 

Agora criamos um simples cadastro de clientes, em que estamos renderizando de forma básica um formulário HTML que abaixo dele aparece uma lista com os clientes cadastrados. Todos os dados são armazenados **In-Memory**, ou seja, estamos usando um simples array para controlar todos os registros, em outros posts aplicarei exemplos utilizando banco de dados com Node.js.

Na prática esse exemplo funciona e de comandos novos do Express, apenas cito o **app.configure**, nele sempre coloque antes de implementar as rotas, Javascript da prioridade a cada linha de forma ordenada, ou seja, se você colocar o **app.configure** no final do código nenhuma configuração inserida nele funcionará. O mesmo ocorre na ordem que cada item dentro do configurador é inserido, é claro que nesse exemplo existe apenas o `app.use(express.bodyParser())`, porém em aplicações mais complexas que exigem diversos tipos de configurações cada item colocado na ordem correta evitará possíveis problemas em sua aplicação. Ao decorrer dos exemplos irei mostrar em detalhes alguns dos possíveis problemas sobre o quão importante é a colocar na ordem certa possíveis configurações que dependem uma da outra, o mais importante é conhecer bem os tipos de configurações no Express para saber a prioridade certa de cada item, muitas vezes a própria documentação te ajudará, porém em casos que você instale itens de frameworks de terceiros para integrarem com Express é necessário entendê-lo melhor para saber em qual ordem incluí-lo.

O `express.bodyParser()` é uma função que facilita a construção de objetos JSON apartir de uma submissão de dados de um formulário html, ele simplesmente monta um objeto apartir dos valores do campo **name**, em que o campo **name** cria um objeto e atributos e o campo **value** insere valores nesses objetos.

Na prática ao submeter a tag: ``` html
 <input type='text' name='cliente[nome]' value='Caio'>
``` 

Faz o `express.bodyParser();` executar um parser desses valores criando o objeto JSON: `cliente.nome` com valor `'Caio'`. E para utilizar esse objeto você acessa através do `request.body.(nome do objeto)`, no nosso exemplo ele se encontra através da função `req.body.cliente`. A boa prática é sempre criar `objeto[atributo]`,

ojetos mais complexos são criados da seguinte maneira: `cliente[endereco][rua] = cliente.endereco.rua` e por ai vai.

Complicando mais a nossa aplicação, que tal adicionarmos novas funcionalidades a esse cadastro, vamos implementar uma rota para excluir um registro, uma para possibilitar a edição de um registro existente e uma para submeter a atualização dos registros editados.

``` javascript
 var express = require('express')
   , app = express();
 app.configure(function(){
   app.use(express.bodyParser());
   app.use(express.methodOverride());
 });
 var clientes = [];
 app.get('/', function(req, res){
   var html = '<html><body>';
   html += '<form action="/cliente" method="post">';
   html += '<label>Nome: <input type="text" name="cliente[nome]"></label><br>';
   html += '<label>Idade: <input type="text" name="cliente[idade]"></label><br>';
   html += '<button type="submit">Enviar</button>';
   html += '</form>';
   html += '<br>';
   html += '<h1>Lista de clientes</h1>';
   html += '<ul>';
   for(var i = 0; i < clientes.length; i++){
     html += '<li>'+clientes[i].nome+' | '+clientes[i].idade;
     html += '<a href="/cliente/'+i+'/editar">Editar</a> | ';
     html += '<a href="/cliente/'+i+'">Excluir</a></li>';
   }
   html += '</ul></body></html>';
   res.send(html);
 });
 app.post('/cliente', function(req, res){
   var cliente = req.body.cliente;
   clientes.push(cliente);
   res.redirect('/');
 });
 app.get('/cliente/:id/editar', function(req, res){
   var id = req.params.id;
   var html = '<html><body>';
   html += '<h1>Editar dados do cliente: '+clientes[id].nome+'</h1>';
   html += '<form action="/cliente/'+ id +'" method="post">';
   html += '<input type="hidden" name="_method" value="put">'; // Força o formulário realizar um comando PUT no submit.
   html += '<label>Nome: <input type="text" name="cliente[nome]" value="'+clientes[id].nome+'"></label>';
   html += '<label>Idade: <input type="text" name="cliente[idade]" value="'+clientes[id].idade+'"></label>';
   html += '<button type="submit">Enviar</button>';
   html += '</form>';
   html += '</html>';
   res.send(html);
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

Pronto agora sim, criamos um cadastro completo de clientes! Alguns detalhes em destaque para explicar...

**req.params.id**: a função params de uma request, pega valores criados através de uma URL porém apenas valores que estejam citados explicitamente na string da rota, como por exemplo `'/cliente/:id'` que automaticamente criará uma variável com o nome id em que qualquer valor passado por este padrão será o valor dessa variável. Lembresse, **Params** é totalmente diferente de **QueryString**, em que para capturar valores via QueryStrings, basta utilizar a função **request.query.nome_da_variavel** veja esse exemplo:

``` javascript
 // Ao executar a url dessa forma: http://localhost:3000/cliente/1?nome=caio
 // Através dessa rota é possível pegar os seguintes valores dessa url.
 app.get('/cliente/:id', function(req, res){
   var id = req.params.id; // valor: 1
   var nome = req.query.nome; // valor: caio
   res.send('Cliente '+id+': '+nome);
 });
``` 

`app.use(express.methodOverride())`: essa função que esta dentro do `app.configure`, permite que sua aplicação faça sobrescrita de rotas que utilizem métodos HTTP diferentes. Repare no código da nossa aplicação que a maioria das rotas possuem o mesmo nome, por exemplo a rota: `'/cliente/:id'`, porém são usadas em diferentes funções que vão entre o `get(), post(), put() e del()` que são as funções do **HTTP (GET, POST, PUT e DELETE)** essa é uma boa prática para quem pretende desenvolver aplicações que seguem o padrão [REST](http://pt.wikipedia.org/wiki/REST "Entendendo o cocento REST") que é muito utilizado na construção de **WebServices**.

No próximo post irei continuar com a segunda parte otimizando esse mesmo projeto de cadastro de clientes, incluindo novas configurações, separando o código html do código server-side, além de utilizar novos recursos do Express, não percam!