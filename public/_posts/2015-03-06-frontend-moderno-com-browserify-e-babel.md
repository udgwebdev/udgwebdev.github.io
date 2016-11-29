# Frontend moderno com Browserify e Babel

[![Browserify e Babelify](../images/browserify.jpg "Browserify e Babelify")](http://browserify.org/ "Browserify")

Nos dois últimos posts, expliquei sobre as vantagens de usar o Browserify através do post: [Modularizando Frontend JavaScript com Browserify](../modularizando-frontend-javascript-com-browserify) e também fiz um tutorial muito útil sobre como usar ES6 sem se preocupar com compatibilidades de browsers no post [Frontend lindo usando Babel para rodar ES6](../frontend-lindo-usando-babel-para-rodar-es6).

Neste post vou explicar de forma rápida e bem prática como usar o melhor do Browserify e Babel no frontend de sua aplicação usando o plugin Babelify.

Se você já esta familiarizado com o Browserify, então será tranquilo usar o Babelify.

Para usá-lo você nem precisa ter o Babel instalado, somente o Browserify e Babelify, pois o Babelify é um plugin de transformação que incorpora as funcionalidades do Babel para rodar diretamente na compilação do Browserify. Para usá-los, primeiro instale o CLI do Browserify:

``` bash
 npm install -g browserify
``` 

E depois instale em seu projeto o Babelify:

``` bash
 npm install babelify --save-dev
``` 

Agora que temos Browserify e Babelify instalado vamos criar um simples código de classe em formato ES6, ele terá o nome `src/carro.js`:

``` javascript
 class Carro {
   constructor(modelo, ano) {
     this.modelo = modelo;
     this.ano = ano;
   }
   render() {
     return `<h1>Carro: ${this.modelo} - ${this.ano}</h1>`;
   }
 }
 module.exports = Carro;
``` 

Em seguida vamos criar o código `src/main.js` que vai carregar a classe Carro e instanciar um objeto Carro com o nome Fusca, no final vamos renderizar no body do html o resultado da método `fusca.render()`:

``` javascript
 var Carro = require("./carro");
 window.onload = function() {
   var fusca = new Carro("Fusca", 1980);
   document.body.innerHTML = fusca.render();
 };
``` 

Para finalizar crie também um html sem conteúdo, o `public/index.html` este estará no diretório public (ou em qualquer diretório diferente de src, afinal vamos concatenar e compilar todo os códigos do diretório src e o resultado precisa ser em outro diretório). Este html vai apenas carregar o JavaScript compilado pela dupla Babelify e Browserify:

``` html
 <html>
   <head>
     <script src="main.js"></script>
   </head>
   <body>
   </body>
 </html>
``` 

Agora vamos fazer a mágica da compilação! No nosso exemplo, essa compilação precisa gerar o arquivo `public/main.js`, que estará no mesmo diretório do `public/index.html`, para fazer essa mágica execute o comando:

``` bash
 browserify src/*.js -t babelify -o public/main.js
``` 

Pronto! Se tudo deu certo, ao acessar o `public/index.html` em seu browser, você terá a mensagem: **Carro: Fusca - 1980**

O [Henrique Silvério](https://twitter.com/RikeSilverio) fez um comentário abaixo muito interessante que eu não tinha testado e que realmente funciona, é possível carregar os módulos usando o padrão ES6 no lugar do padrão CommonJS. Como alternativa os códigos ficariam desse jeito:

``` javascript
 class Carro {
   constructor(modelo, ano) {
     this.modelo = modelo;
     this.ano = ano;
   }
   render() {
     return `<h1>Carro: ${this.modelo} - ${this.ano}</h1>`;
   }
 }
 export default Carro;
``` 

E em seguida...

``` javascript
 import Carro from './carro';
 window.onload = function() {
   var fusca = new Carro("Fusca", 1980);
   document.body.innerHTML = fusca.render();
 };
``` 

**Final tip:** Há uma lista com várias maneiras de usar o Babel com outros tipos de compiladores e sistemas de builds, para ver essas dicas recomendo que acessem o link da [Documentação oficial do Babel](https://babeljs.io/docs/using-babel/). Até a próxima!