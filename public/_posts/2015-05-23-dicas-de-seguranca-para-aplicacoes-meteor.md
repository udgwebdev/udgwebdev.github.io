![Meteor](images/meteor-logo.jpg "Meteor")

Se você esta desenvolvendo uma aplicação Meteor, é importante estar por dentro de como garantir segurança em sua aplicação. Nesse post mostrarei algumas dicas simples e de fácil execução para blindar seu projeto.

## Remova o insecure e autopublish

Antes de você colocar seu app em produção, execute esse comando:

``` bash
 meteor remove insecure autopublish
``` 

E faça um refactoring em seu app para garantir que todas as funcionalidades de PubSub estão funcionando e certifique-se também que todas as funções de escrita das collections que são realizadas no client-side funcionem através da função Meteor.call (client-side) /Meteor.methods (server-side). Se possível, toda vez que você começar um novo projeto Meteor, que comece-o removendo esses 2 packages, para que você não tenha retrabalho no futuro. O motivo do Meteor utilizar esses packages é que eles agilizam a produtividade na prototipação, porém usar eles em produção libera uma brecha de segurança que permite pelo console de um browser executar qualquer manipulação nas collections do MongoDB. Se estiver com dúvidas sobre trabalhar com PubSub ou Meteor.methods, leia esses post: [Meteor PubSub](meteor-pubsub "Meteor PubSub") e [Meteor.methods](meteor-methods "Meteor.methods").

## Evitando NoSQL Injection

Para evitar possíveis ataques de **NoSQL Injection**, instale o package [audit-argument-checks](https://atmospherejs.com/meteor/audit-argument-checks):

``` bash
 meteor add audit-argument-checks
``` 

Sempre execute a função **check()** para validar o tipo de dados de todos os parâmetros existentes numa função **Meteor.publish()** ou **Meteor.methods()**.
Para demonstrar um exemplo simples de NoSQL Injection veja o código abaixo:

``` javascript
 // No client-side posso enviar esse parâmetro...
 Meteor.subscribe("clients", {$gte: ""});
 // Sem a função check() validando se "name" é uma string, os resultados teriam sidos manipulados sem alertar erro...
 Meteor.publish("clients", function(name) {
   check(name, String);
   return Clients.find({
     name: name
   });
 });
``` 

## Configure corretamente o App.accessRule

Se sua aplicação Meteor for um app mobile é recomendável que você configure corretamente quais urls externas sua aplicação poderá acessar, para evitar por exemplo que seus usuários acessem acidentalmente uma url maliciosa. Para configurar isso, acesse o arquivo **mobile-config.js** e inclua todas as urls externas que seu app poderá acessar:

``` javascript
 App.accessRule("*.myurl.com/*");
 App.accessRule("*.anotherurl.com/*");
 App.accessRule("tel://*", {launchExternal: true});
``` 

Respectivamente esses 3 padrões permitem que seu app possa consumir recursos desses endereços, em especial o último padrão, permite abrir um aplicativo externo para executar a url scheme **tel://*** (que é uma url scheme para informar número de telefones). Evite sempre informar isso:

``` javascript
 App.accessRule("*");
``` 

Esse padrão permite que seu app acesse qualquer url e qualquer url scheme, e consequentemente isso pode gerar possíveis brechas de segurança em seu app.
Hey! Esse post tem continuação: [Dicas de segurança para aplicações Meteor - Parte 2]({{site.url}}/dicas-de-seguranca-para-aplicacoes-meteor-parte-2).

**Fonte:** [NoSQL Injection - Or, Always Check Your Arguments!](http://www.1pxsolidtomato.com/2015/04/06/nosql-injection-or-always-check-your-arguments/)