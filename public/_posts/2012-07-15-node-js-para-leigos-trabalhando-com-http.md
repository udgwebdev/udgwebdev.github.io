![Curso de Node.js](images/nodejs-para-leigos.jpg "Curso de Node.js")

Node.js é uma plataforma multiprotocolo, ou seja, com ele será possível trabalhar com HTTP, DNS, TCP, WebSockets e muito mais. Porém um dos protocolos mais usados para desenvolver sistemas web é o protocolo HTTP, de fato é o protocolo com a maior quantidade de módulos disponíveis para trabalhar no Node.js.

Hoje apresentarei um pouco sobre como desenvolver uma aplicação HTTP, na prática desenvolveremos um simples sistema web utilizando o módulo nativo HTTP e também apresentando alguns módulos mais estruturados para desenvolver aplicações complexas.

Toda aplicação web necessita de um servidor web em execução para disponibilizar todos os seus recursos, na prática você irá desenvolver uma **aplicação servidora**, ou seja, além de programar todas funcionalidades da sua aplicação você também terá que configurar na própria aplicação aspectos sobre como **ela servirar seus recursos para o cliente** quando for executá-la. Essas **configurações são conhecidas como middleware**, é claro que é um trabalho dobrado no começo, mas isso traz a liberdade de configurar cada mínimo detalhe do sistema, ou seja, permite desenvolver algo mais performático e controlado pelo programador. Caso performance não seja prioridade no desenvolvimento do seu sistema, recomendo que utilize alguns módulos famosos que já vem com o mínimo necessário de configurações prontas para não perder tempo trabalhando sobre esse aspecto, alguns módulos conhecidos são: [Connect](http://www.senchalabs.org/connect/ "Connect"), [Express](http://expressjs.com/ "ExpressJS"), [Geddy](http://geddyjs.org/ "Geddy") [e muito mais aqui](https://github.com/joyent/node/wiki/Modules#wiki-web-frameworks "Node.js Web Frameworks"). Esses módulos já são preparados para trabalhar desde uma **infraestrutura mínima e básica (Microframeworks)** até uma **infraestrutura mais enxuta com padrões do tipo MVC (Model-View-Controller) e outros padrões de projetos (MVC Frameworks).**

De ínicio usaremos apenas o **[módulo nativo HTTP](http://nodejs.org/api/http.html "Documentação da API HTTP")**, pois precisamos entender todo conceito do mesmo, visto que todos os frameworks citados acima utilizam ele como estrutura inicial em seus projetos.

``` javascript
 var http = require('http');
 var server = http.createServer(function(request, response){
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<html><body><h1>Olá Node.js!</h1></body></html>");
   response.end();
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
``` 

Esse é um exemplo clássico e simples de um servidor web sendo executado na **porta 3000**, respondendo por padrão na **rota raíz "/"** um resultado em **formato html** com a mensagem **Olá Node.js!**.

Agora complicando mais, vamos adicionar duas rotas nesse sistema, uma rota para página de erro e também um link em cada página html para intergir uma com a outra:

``` javascript
 var http = require('http');
 var server = http.createServer(function(request, response){
   response.writeHead(200, {"Content-Type": "text/html"});
   if(request.url == "/"){
     response.write("<html><body><h1>Olá Node.js!</h1>");
     response.write("<a href='/bemvindo'>Bem vindo</a>");
     response.write("</body></html>");
   }else if(request.url == "/bemvindo"){
     response.write("<html><body><h1>Bem-vindo ao Node.js!</h1>");
     response.write("<a href='/'>Olá Node.js</a>");
     response.write("</body></html>");
   }else{
     response.write("<html><body><h1>Página não encontrada!</h1>");
     response.write("<a href='/'>Voltar para o início</a>");
     response.write("</body></html>");
   }
   response.end();
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
``` 

Todo leitura de url é obtida através do método **request.url** que retorna uma string sobre o que foi digitado no endereço url do seu browser. Endereços urls do protocolo http possui alguns padrões como **query strings (?nome=joao)** e **pathnames (/admin)** e sinceramente tratar toda string url seria trabalhoso demais, sendo que já existem diversos exemplos prontos para isso. No Node.js existe o **[módulo chamado url](http://nodejs.org/api/url.html "Documentação da API URL")** responsável por realizar um **parser e formatação de strings url**, veja como um exemplo abaixo:

``` javascript
 var http = require('http');
 var url = require('url');
 var server = http.createServer(function(request, response){
   // Faz um parse da string url digitada.
   var result = url.parse(request.url, true);
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<html><body>");
   response.write("<h1>Dados da query string</h1>");
   // Itera o resultado de parâmetros passados via query string.
   for(var key in result.query){
     response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
   }
   response.write("</body></html>");
   response.end();
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
``` 

Digite no seu browser a url: **http://localhost:3000/?nome=joao&idade=22&email=joao@mail.net** para ver os resultados tratados pelo **parse de url**. Agora vamos separar o código HTML do código Node.js em arquivos distintos, para isso utilizaremos o **[módulo nativo FS (File System)](http://nodejs.org/api/fs.html "Documentação da API FS")** que faz tratamento de arquivos, que no nosso caso será leitura de arquivo HTML.

``` javascript
 // app.js
 var http = require('http');
 var fs = require('fs');
 var server = http.createServer(function(request, response){
   fs.readFile(__dirname + '/index.html', function(err, html){
     response.writeHeader(200, {'Content-Type': 'text/html'});
     response.write(html);
     response.end();
   });
 });
 server.listen(3000, function(){
   console.log('Executando Servidor HTTP');
 });
``` ``` html
 <!-- index.html -->
 <!DOCTYPE html>
 <html>
   <head>
     <title>Hello World</title>
   </head>
   <body>
     <h1>Hello World</h1>
   </body>
 </html>
``` 

Neste código temos dois detalhes interessantes a citar, primeiro é a constante global chamada **__dirname** que retona uma string referente ao endereço raíz da aplicação, é uma variável muito útil, pois através dela podemos referenciar pastas e arquivos internos.

Outro detalhe é o método **fs.readFile()**, repare que o resultado da leitura do **arquivo index.html** é enviado via **função de callback**, ou seja através da **function(erro, html) que é um parâmetro da função fs.readFile()**, na prática diversos módulos trabalham dessa forma no Node.js, pois o retorno de resultados através de funções callbacks são tratados de forma assíncrona **(característica principal do Javascript)** e isso é algo muito interessante pois permite tratar a execução das rotinas da aplicação de forma paralela, e isso você usará frequentemente no Node.js. Alguns módulos apresentam em suas documentações duas alternativas de trabalhar com uma mesma função, são elas conhecidas como **execução síncrona e assíncrona.** Sempre que puder **utilize as versões assíncronas** em seus projetos, pois as **execuções assíncronas são mais perfomáticas** e normalmente **não bloqueiam** a execução de outras **rotinas síncronas** do seu sistema, mesmo quando ocorrem problemas durante suas execuções.

Por hoje é só galera, passei o básico e essencial guia de sobrevivência Node.js com protocolo HTTP, espero que tenham gostado, se surgir dúvidas, problemas ou sugestões, comentem abaixo ou entrem em contato comigo, ok? Até a próxima!