[![Meteor](/images/meteor-logo.jpg "Meteor")](http://meteor.com) 

Como o Meteor é uma plataforma construída em cima do Node.js, é possível consumir o NPM, aumentando seu leque de ferramentas utilizando módulos do Node.js.

O suporte ao NPM no Meteor existe [desde a versão 0.6.0](http://www.meteor.com/blog/2013/04/04/meteor-060-brand-new-distribution-system-app-packages-npm-integration), mas você terá apenas acesso somente do [smart package npm via atmosphere](https://atmosphere.meteor.com/package/npm). Para utilizar os módulos do NPM você terá que fazer algumas magias a mais no Meteor. Primeiro, instale o npm via meteorite:

``` bash
 mrt add npm
``` 

Na raíz do seu projeto crie o arquivo: **packages.json** (Sim, é packages.json e NÃO package.json).

Agora para adicionar os módulos Node, adicione um simples json seguindo o padrão `"módulo":"versão"`, semalhante ao código abaixo:

``` javascript
 {
   "request": "2.27.0"
 }
``` 

**Obs.: Ao adicionar ou atualizar o packages.json é necessário reiniciar sua aplicação manualmente.**

Para utilizar os módulos utilize a função `Meteor.require("modulo_node")`.
Um detalhe importante sobre o Meteor, é que suas funcionalidades server-side são executadas de forma síncronizada, porém a maioria dos módulos Node.js são assíncronas.
Para resolver esse problema execute essas funções assíncronas como callback dentro da função `Meteor.sync`, que é uma [função nativa do package npm](https://github.com/arunoda/meteor-npm/#meteorsyncfunc), responsável por converter funções assíncronas em síncronas. Abaixo temos um código de exemplo que utiliza o módulo [Request](https://npmjs.org/package/request "Request") para realizar um GET no site do Google utilizando o `Meteor.sync()`: ``` javascript
 var request = Meteor.require('request');
 var result = Meteor.sync(function(done) {
   request('http://www.google.com', function (error, response, body) {
     done(body);
   });
 });
 console.log(result);
``` 

Para finalizar, quando for fazer deploy para produção, utilize o [Demeteorizer](http://blog.modulus.io/demeteorizer "Demeteorizer") para que ele envie os módulos do Node via `meteor bundle`.
Com essas dicas em ação você terá +40000 módulos disponíveis para sua aplicação Meteor.