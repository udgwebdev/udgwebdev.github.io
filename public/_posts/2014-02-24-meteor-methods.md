# Meteor.methods

![Meteor](../images/meteor-logo.jpg "Meteor")

## Introdução

Neste post falarei sobre a importância do Meteor.methods() e principalmente porque, quando e como utilizar ele junto com o Meteor.call().

Um dos princípios do Meteor é o [Database everywhere](http://docs.meteor.com/#sevenprinciples "Database everywhere") (banco de dados em qualquer lugar). Esse princípio existe no Meteor de forma que **collections do MongoDB sejam utilizadas e sincronizadas entre cliente e servidor**. No Meteor podemos usar uma collection no client-side através da [API do mini-mongo](https://github.com/mWater/minimongo "Minimongo"), responsável por sincronizar dados do modelo server-side, e essa sincronização é feita via biblioteca de [PubSub](http://docs.meteor.com/#publishandsubscribe "PubSub") nativa no Meteor.

## Entendendo na prática

Vamos supor que um template responsável por listar posts na aplicação, basicamente uma timeline de posts. Nele temos uma collection de posts e que precisamos listar todas mensagens na timeline da aplicação. Primeiro vamos criar o modelo no projeto, ele já terá alguns posts carregados para simplificar a explicação. Crie-o em `models/post.js` conforme o trecho a seguir:

``` javascript
 Post = new Meteor.Collection('posts');
 Post.insert({message: 'Ola!'});
 Post.insert({message: 'tudo bem?'});
 Post.insert({message: 'tudo ótimo!'});
 Post.insert({message: '5 minutos em silêncio...'});
 Post.insert({message: 'Bye! Bye!'});
``` 

Agora que temos um modelo na aplicação podemos utilizá-lo em qualquer camada da aplicação, ou seja, utilizaremos sua função `Post.find()` para listar todos os posts através de um helper que criaremos em `client/lib/helpers/posts.js` de acordo com o código abaixo:

``` javascript
 Template.posts.helpers({
   posts: function() {
     return Post.find();
   }
 });
``` 

Mas em relação ao comando `Post.remove({})` temos algumas [restrições de segurança ao usar uma collection no client-side](http://docs.meteor.com/#allow) (mesmo usando o package insecure habilitado!). Dúvida? Então veja você mesmo! Crie o template de posts em `client/index.html` que irá listar os posts e no final terá um botão para apagar todos os posts: ``` html
 <head>
   <title>Timeline</title>
 </head>
 <body>
   {{> posts}}
 </body>
 <template name="posts">
   {{#each posts}}
     <p>{{message}}</p>
   {{/each}}
   <button>Excluir tudo!</button>
 </template>
``` 

E para mostrar na prática essas restrições de segurança no client-side, vamos dar vidas ao botão **"Excluir tudo!"** criando um evento para excluir todos os posts. Crie este código em `client/lib/events/posts.js`: ``` javascript
 Template.posts.events({
   "click button": function() {
     Post.remove({});
   }
 });
``` 

Eae conseguiu? Que mensagem de erro apareceu no console do browser? Por acaso foi essa mensagem:

**Uncaught Error: Not permitted. Untrusted code may only remove documents by ID. [403]**

Essa restrição é apenas uma regra de segurança do Meteor aplicado nas collections, em que somente é permitido remover objetos através do seu `_id` no client-side da aplicação. Essa regra existe para garantir que funções críticas do banco de dados não sejam aldulteradas facilmente, e que não permitam a exploração de excluir dados errados através do browser.

## Eis a solução!

Foi baseado nesse problema que existe o [Meteor.methods](http://docs.meteor.com/#meteor_methods "Meteor.methods"). Que é uma função que permite criar funções no server-side que a serem chamadas pelo cliente via [Meteor.call](http://docs.meteor.com/#meteor_call "Meteor.call"). Dessa forma você delega funções críticas para o servidor, evitando brechas na aplicação no client-side. Implementá-lo é muito simples, para isso crie seu arquivo em `server/methods.js` com o código a seguir:

``` javascript
 Meteor.methods({
   removeAll: function() {
     Post.remove({});
   }
 });
``` 

Feito isso basta voltar em `client/lib/events/posts.js` e mudar a chamada da função `Post.remove` para `Meteor.call('removeAll')`.

``` javascript
 Template.posts.events({
   "click button": function() {
     Meteor.call("removeAll");
   }
 });
``` 

Dúvidas, sugestões ou elogios? Comentem abaixo! Até a próxima :)