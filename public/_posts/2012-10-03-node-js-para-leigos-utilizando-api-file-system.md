# Node.js para leigos - Utilizando API File System

![Curso de Node.js](../images/nodejs-para-leigos.jpg "Curso de Node.js")

Fala galera!! Realmente precisei do mês de setembro para resolver outras pendências, e isso me impossibilitou de continuar o mini-curso, mas enfim, vamos ao que interessa. Hoje o assunto será mais light, será sobre uma biblioteca nativa do Node.js responsável por manipular arquivos e diretórios do sistema operacional - **[File System](http://nodejs.org/api/fs.html "Node.js File System API")**.

Uma das vantagens dessa API e também de muitas outras nativas do Node.js é a possibilidade de trabalhar tanto de forma **bloqueante (sync)** quanto **não-bloqueante (async)**, lembrando que é **altamente recomendável trabalhar de forma não-bloqueante**, afinal essa é a característica principal do Node.js, mas caso queira trabalhar de forma bloqueantes com essa API, simplesmente utilize os métodos com **sufixo Sync**, por exemplo: **fs.openSync()** - faz leitura de arquivos em **modo bloqueante, ou seja, de forma síncrona.** Veja um exemplo prático abaixo:

``` javascript
 // Carregando o File System
 var fs = require("fs");
 // Lê o conteúdo do diretório retornando um array de string de arquivos.
 // Obs.: Essa leitura é Não-Bloqueante, por isso retorna via callback.
 fs.readdir("/home/user", function(err, files){
   console.log(files);
 });
 // A mesma função, executada de forma Bloqueante.
 var files = fs.readdirSync("/home/user");
 console.log(files);
``` 

Como disse antes e volto a afirmar, para se tirar melhor proveito do **processamento I/O do servidor**, é recomendado trabalhar com funções **não-bloqueantes**, afinal, pensem comigo no seguinte cenário: é criado um sistema em Node.js para realizar **upload intensivo de arquivos**, com isso se utilizar **métodos bloqueantes (métodos síncronos)**, quando houver um erro de leitura ou escrita dos arquivos o sistema todo irá travar, já a utilização dos **métodos não-bloqueantes** garantirão um **processamento assíncrono**, fazendo com que qualquer erro não trave o sistema inteiro e permitirá que os demais usuários utilizem normalmente o sistema. Outro detalhe neste cenário é que a resposta será mais rápida para os usuários, afinal o **processamento será feito em background**, semelhante as requisições [AJAX](http://pt.wikipedia.org/wiki/AJAX_(programa%C3%A7%C3%A3o) "Wiki AJAX").

No File System muitos dos seus métodos são inspirados em comandos do **sistema UNIX**, ou seja, algumas funções não funcionarão em um ambiente Windows, por exemplo, realizar a função **fs.chown() não funcionará no Windows**, visto é uma particularidade do Unix. Tirando esse detalhe, o essencial da api é compatível com qualquer ambiente operacional.

#### O que podemos fazer com tudo isso?

**Sistemas para upload intesivo de arquivos**, **Sincronizadores de arquivos**, **Streaming de audio ou vídeo**, muita coisa é possível com essa API, vai depender da sua necessidade e principalmente da sua **criatividade**.

Vou mostrar em código, um exemplo bacana, uma galeria de fotos, nela o usuário faz upload de fotos e depois são visualizados todas as fotos na página principal. Primeiro instale as dependências que serão usados neste exemplo:

`npm install express jade`

``` javascript
 // app.js
 // Utilizaremos: Express, Jade e File System.
 var express = require('express')
   , fs = require('fs')
   , app = express();
 // Path da pasta pública que armazenará as fotos.
 var path_public = __dirname + '/public';
 // Configurações mínimas no Express
 app.configure(function(){
   app.set('views', __dirname + '/views');
   app.set('view engine', 'jade');
   app.set('view options', {layout: false});
   app.use(express.static(path_public));
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
 });
 // Rota da página inicial.
 app.get('/', function(req, res){
   // Retorna um array com string dos arquivos da pasta pública.
   fs.readdir(path_public, function(err, fotos){
     res.render('index', {fotos: fotos});
   });
 });
 // Rota que recebe upload das fotos.
 app.post('/enviar-foto', function(req, res){
   var path_atual = req.files.foto.path;
   var path_image = path_public + '/' + req.files.foto.name;
   // Move a foto atual para a pasta pública.
   fs.rename(path_atual, path_image, function(err){
     // Exclui a foto da pasta temporária.
     fs.unlink(path_atual, function(err){
       res.redirect('/');
     });
   });
 });
 app.listen(3000, function() {
   console.log('Galeria de fotos em execucao...');
 });
``` ``` javascript
 // index.jade
 !!! 5
 html
   head
     title Galeria de fotos
     style
       .galeria{
         width: 90%
         margin: 0 auto;
         text-align: center;
 }
       .foto {
         padding: 10px;
 float: left;
       }
   body
     .galeria
       h3 Galeria de fotos
       fieldset
         legend Adicionar foto
         form(action='/enviar-foto', method='post', enctype='multipart/form-data')
           label Foto:
             input(type='file', name='foto')
           button(type='submit') Enviar
       each foto, i in fotos
         .foto
           img(src='/#{foto}', width='240', height='120', border='0', alt='#{foto}')
``` 

Pronto e feito! Esse foi mais um capítulo do [Curso Node.js para leigos](../nodejs), espero que tenham gostado desse artigo, e para melhores detalhes sobre o File System, segue o link da documentação: [http://nodejs.org/api/fs.html](http://nodejs.org/api/fs.html "Node.js File System API"). See you on my next post!