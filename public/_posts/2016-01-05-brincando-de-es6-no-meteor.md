![Brincando de ES6 no Meteor](/images/meteor-logo.jpg "Brincando de ES6 no Meteor")

De volta a ativa no blog, hoje mostrarei como utilizar alguns recursos legais do ES6 em um projeto Meteor de versão 1.2 ou superior, pelo qual nessas versões o ES6 já esta nativo para uso.

## Use const ou let no lugar de var

Agora no ES6 é possível criar constantes (`const`), que é um tipo de variável imutável, ou seja, você define uma única vez o valor de uma constante e nunca mais poderá mudar seu valor, aplicar esse recurso faz seu sistema utilizar menos memória, e toda vez que precisar criar uma variável mutável utilize o `let` no lugar do antigo `var`, outro detalhe importante é que ambos `const` e `let` são **blocked-scoped** e isso impedirá que a variável escape de seu escopo atual, evitando problemas de [scope e hoisting](http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/). Veja um exemplo:

#### Usando var

``` javascript
 for (var i = 1; i < 3; i++) {
   Meteor.setTimeout(function () {
     console.log(i);
   }, 0); // 3 3 3 - Bug estranho!
 }
 console.log(i); // 3 - A variável i vazou de seu escopo
``` 

#### Usando let

``` javascript
 for (let i = 1; i < 3; i++) {
   Meteor.setTimeout(function () {
     console.log(i);
   }, 0); // 1 2 3 - Agora o resultado veio correto!
 }
 console.log(i); // undefined
``` 

## Use arrow-function no lugar de var self = this

O recurso **arrow-function** é sensacional! Além de encurtar o código na declaração de funções e funções callback substituindo a keyword `function() {}` por `() => {}`, ele permite compartilhar através do `this` atributos e funções entre uma função pai com uma função filha, removendo o workaround de criar uma varíavel com o estado do objeto pai (`var self = this;`). Veja o exemplo:

#### Sem arrow-function

``` javascript
 Template.dashboard.onRendered(function() {
   this.msg = "Ola!";
   var self = this;
   Meteor.setTimeout(function() {
     console.log(self.msg);
   }, 1000);
 });
``` 

#### Com arrow-function

``` javascript
 Template.dashboard.onRendered(() => {
   this.msg = "Ola!";
   Meteor.setTimeout(() => {
     console.log(this.msg);
   }, 1000);
 });
``` 

**Obs.:** Atenção na versão Meteor 1.2 existe um bug que não permite usar **arrow-function** dentro da função `Meteor.publish()`, fazendo com que `this.userId` retorne `undefined`.

## Template Strings

Template strings é um outro recurso bem legal, que ao invés de concatenar strings com variáveis, você simplesmente interpola as variáveis dentro da string, deixando-as mais elegante e legível. Para usá-lo, basta declarar uma string entre crases `(`String`)` e a interpolação das variáveis é feita através da `${variavel}`, veja um exemplo:

#### Concatenando string

``` javascript
 var ano = 2016;
 console.log("Feliz " + ano + "!");
``` 

#### Interpolando string

``` javascript
 var ano = 2016;
 console.log(`Feliz ${ano}!`);
``` 

## Object Method

Object methods é apenas um **syntax sugar**, um encurtador de declaração de funções bem útil e facil de aplicar, veja:

#### Sem object method

``` javascript
 Template.body.helpers({
   users: function() {
     return Meteor.users.find({});
   }
 });
``` 

#### Com object method

``` javascript
 Template.body.helpers({
   users() {
     return Meteor.users.find({});
   }
 });
``` 

## Criando Classes

Agora no ES6 você pode criar classes, deixando seu projeto mais orientado à objetos, no Meteor é possível fazer isso também, porém a maneira como você exporta uma classe no Meteor, ficou um pouco estranha devido ao seu contexto, veja:

``` javascript
 Cliente = class Cliente {
   constructor(nome) {
     this.nome = nome;
   }
 }
``` 

**Obs.:** Se você deixar apenas `class Cliente` ela não será global, impossibilitando seu uso em outros pontos da aplicação, como solução workaround você terá que declarar estranhamente `Cliente = class Cliente` para que seja criado uma variável global dessa classe.

Por enquanto é isso pessoal, feliz ano novo, até a próxima!

#### Boas referêcias:

*   [Get started with ES2015 (ES6) and Meteor](http://info.meteor.com/blog/es2015-get-started)
*   [Real-World ES6 Examples in Meteor](https://medium.com/@dferber90/real-world-es6-examples-in-meteor-a834c6073daa)