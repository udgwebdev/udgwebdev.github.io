[![Browserify](../images/browserify.jpg "Browserify")](http://browserify.org/ "Browserify")

Se você gosta de criar e organizar códigos JavaScript seguindo o padrão [CommonJS](http://wiki.commonjs.org), que é muito popular no Node.js, e gostaria de trabalhar com o mesmo padrão no front-end de sua aplicação, então esse post será de grande utilidade para você.

Com o módulo Browserify você consegue implementar **client-side JavaScript like Node.js code!** E com isso você obtém três grandes vantagens:

1.  Sua aplicação terá uma estrutura de código homogenea, em que a criação e carregamento dos módulos JavaScript tanto no backend como no frontend utilizarão o CommonJS;
2.  Chega de baixar e instalar código JavaScript na mão e também chega de usar [Bower](http://bower.io)! Afinal para usá-lo você precisa ter Node.js instalado e ainda terá que controlar as depedências do **bower.json**. Usando Browserify você pode reutilizar a gestão de módulos do Node.js existentes no **package.json**, é claro que somente os módulos que possuem suporte client-side vão funcionar com Browserify, mas como o NPM esta muito popular, a probabilidade de um framework ou plugin JavaScript client-side existir nessa plataforma é alta. Com o Browserify também é possível reaproveitar alguns módulos nativos do Nodejs, como por exemplo o [Event Emitter](http://nodejs.org/api/events.html "Event Emitter");
3.  Você também pode criar um módulo que funciona tanto no backend como frontend, ou seja, você cria uma única vez o módulo e reaproveita em ambas camadas da aplicação! (É claro que esse módulo não deve usar recursos específicos de servidor Node.js, assim como também não pode usar recursos de browsers, o módulo deve apenas processar dados usando ou JavaScript puro ou APIs existentes no motor Chrome V8);

Agora vamos na prática usar o Browserify, para isso, primeiro você terá que instalar seu CLI via comando:

``` bash
 npm install -g browserify
``` 

Após sua instalação, você libera o comando `browserify` em seu terminal, mas antes de usá-lo, vamos criar um pouco de código client-side para depois testá-lo corretamente.
Crie uma pasta com qualquer nome que servirá de projeto Node.js, no meu caso vou criar a pasta com o nome `browserify-app`, em seguida rode os comando:

``` bash
 cd browserify-app
 npm init
``` 

Responda o mini questionário do comando `npm init` com qualquer informação, o importante é que ele crie o arquivo `package.json` no final.
Agora vamos instalar um módulo Node.js qualquer, cuja sua utilidade seja compatível tanto no backend como no frontend, como bom exemplo, usarei o [Underscore](http://underscorejs.org):

``` bash
 npm install underscore --save
``` 

Agora vamos criar um simples código JavaScript utilizando o padrão CommonJS (neste caso será utilizado apenas a função `require()`, mas você também pode usar as funções `exports` e `module.exports`) que vai rodar uma função que retorna valores únicos de um array, salve esse arquivo em `src/main.js`.

``` javascript
 var _ = require("underscore");
 var values = [1,1,2,3,4,5,8,9,1];
 window.onload = function() {
   document.body.innerHTML = _.uniq(values);
 };
``` 

Para finalizar a implementação, crie o `public/index.html` com o seguinte código:

``` html
 <html>
   <head>
     <title>Meus animais</title>
     <script src="main.js"></script>
   </head>
   <body>
   </body>
 </html>
``` 

Já temos um mini environment preparado para trabalhar com Browserify, o que resta fazer para a mágica acontecer é apenas rodar esse comando:

``` bash
 browserify src/main.js -o public/main.js
``` 

Ou caso você queria concatenar e compilar todos os JavaScript em um único arquivo, execute:

``` bash
 browserify src/*.js -o public/main.js
``` 

Pronto! Mission Complete!

Para se aprofundar mais nesse módulo recomendo as seguintes leituras:

*   [Documentação do Browserify](https://github.com/substack/node-browserify#usage)
*   [Browserify Handbook](https://github.com/substack/browserify-handbook)