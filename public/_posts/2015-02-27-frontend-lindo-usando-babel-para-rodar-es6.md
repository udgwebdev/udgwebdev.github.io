[![Babel - The JavaScript transpiler](/images/babel.jpg "Babel - The JavaScript transpiler")](https://babeljs.io/ "Babel - The JavaScript transpiler")

Se você esta curtindo a grande evolução da nova especificação do JavaScript, o EcmaScript 6 (ou ES6) e gostaria muito de usá-lo no front-end de seus projetos, de forma cross-browser e compatível inclusive com browser antigos e principalmente utilizando fallbacks on-demand que evitam overhead de código JavaScript no client-side, então apresento a vocês o transpiler que esta se tornando muito popular chamado Babel (também conhecido pelo antigo nome 6to5).

Com ele você poderá usar [os novos recursos do ES6](https://babeljs.io/docs/learn-es6/ "Veja neste link os recursos de compilação do Babel"), [alguns experimentos do ES7](https://babeljs.io/docs/usage/experimental/) e [também o JSX do React](https://babeljs.io/docs/usage/jsx/). Como resultado final ele compila uma versão JavaScript cross-browser para você, seu mecanismo de compilação (o transpiler) converte de forma eficiente um código ES6 para ES5 como resultado final. Esse processo de compilação você faz através de seu CLI, mas também é possível usá-lo diretamente como um plugin pro [Grunt, Gulp, Sprockets, Meteor, Webpack, Makefile e mais outros](https://babeljs.io/docs/using-babel/ "Veja neste link as diversas formas de usar o Babel").

Que tal testarmos na prática para ver como funciona? Instale-o via comando:

``` bash
 npm install -g babel
``` 

Em seguida crie o seguinte código:

``` javascript
 class Cliente {
   constructor(nome, email) {
     this.nome = nome;
     this.email = email;
   }
   hello() {
     return `Olá ${this.nome} tudo bem?`
   }
   send() {
     return `Enviando email para ${this.email}...`
   }
 }
``` 

Acabamos de criar uma classe usando o padrão ES6 com o nome de arquivo `cliente.es6`, o código ficou muito lindo, não é?
Para compilar esta classe usando o Babel, basta rodar esse simples comando:

``` bash
 babel cliente.es6 --out-file cliente.js
``` 

Como resultado final você terá como output esse código grande, que esta em versão ES5 compatível com os principais browsers:

``` javascript
 "use strict";
 var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };
 var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
 var Cliente = (function () {
   function Cliente(nome, email) {
     _classCallCheck(this, Cliente);
     this.nome = nome;
     this.email = email;
   }
   _prototypeProperties(Cliente, null, {
     hello: {
       value: function hello() {
         return "Olá " + this.nome + " tudo bem?";
       },
       writable: true,
       configurable: true
     },
     send: {
       value: function send() {
         return "Enviando email para " + this.email + "...";
       },
       writable: true,
       configurable: true
     }
   });
   return Cliente;
 })();
``` 

Sim, o código está um pouco grande e complexo, porém ele ainda está bem melhor do que usando script de fallback que carrega desnecessariamente inúmeros recursos do ES6 no client-side.

Um detalhe legal é que se você estiver usando vários códigos modularizados, o babel também permite concatenar e compilar uma pasta inteira, gerando um único código, supondo que você tem uma pasta `src` que contém vários códigos `.es6` você precisa apenas rodar esse comando:

``` bash
 babel src --out-file main.js
``` 

E outro recurso legal do Babel é que você pode deixar rodando em background um comando file watcher que recompila toda vez que um determinado arquivo sofre alteração, veja o comando:

``` bash
 babel src --watch --out-file main.js
``` 

Esse post foi apenas uma demonstração mínima do poderoso Babel, se quiser aprender mais sobre ele recomendo a leitura dos seguintes links:

*   [Site oficial do Babel](https://babeljs.io/)
*   [Testando Babel no browser](https://babeljs.io/repl/)