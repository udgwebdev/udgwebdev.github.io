# Evitando warnings entre audit-argument-checks e auto-form do Meteor

![Meteor](../images/meteor-logo.jpg "Meteor")

Este post é para quem esta desenvolvendo aplicações Meteor usando o incrível package [auto-form](https://atmospherejs.com/aldeed/autoform) junto com [audit-argument-checks](https://atmospherejs.com/meteor/audit-argument-checks) e anda recebendo warnings de que falta checar todos os argumentos em um **Meteor.methods**.

Vamos supor que você criou o seguinte form:

``` html
 <template name="messageForm">
   {{#autoForm type="method" meteormethod="sendMessage"}}
     {{> afQuickField name="name"}}
     {{> afQuickField name="email"}}
     {{> afQuickField name="message" rows=6}}
     <button type="submit">Send</button>
   {{/autoForm}}
 </template>
``` 

Este form irá submeter dados para o seguinte **Meteor.methods**:

``` javascript
 Meteor.methods({
   sendMessage: function(messageData) {
     check(messageData, {
       name: String,
       email: String,
       message: String
     });
     // Processar messageData após validação do check.
   }
 });
``` 

Até aqui esta tudo bem, porém mesmo assim, ao submeter um form você recebe o seguinte warning:

``` bash
 Exception while invoking method 'sendMessage' Error: Did not check() all arguments during call to 'sendMessage'
``` 

Caso você esteja passando por esse problema, eis uma simples solução, por default o auto-form envia dois parâmetros adicionais (**modifier** e **docID**) pelo qual eles não estão presentes na documentação do auto-form. Para remover definitivamente esse warning basta fazer um check desses parâmetros comparando-os com o **Match.Any** e pronto! Veja abaixo como solucionar isso:

``` javascript
 Meteor.methods({
   sendMessage: function(messageData, modifier, docID) {
     check(messageData, {
       name: String,
       email: String,
       message: String
     });
     check(modifier, Match.Any);
     check(docID, Match.Any);
     // Processar messageData após validação do check.
   }
 });
``` 

Até a próxima!

**Fonte:** [Meteor autoform and check audit errors (audit-argument-checks)](http://sunkay.github.io/meteor/2015/02/24/autoform-audit)