![Evitando Callback Hell usando Generators](images/javascript-logo.jpg "Evitando Callback Hell usando Generators")

Muitos recursos interessantes estão surgindo do ECMAScript6 para o Javascript, o Generators é um deles e será o assunto desse post.

Em resumo generators é um recurso muito interessante que permite escrever funções assíncronas sem callbacks, utilizando uma síntaxe de código síncrono, **retornando valores da função em um array que representa as variáveis do parâmetro de uma função callback**.

Como essa feature ainda não é oficial, somente alguns browser (últimas versões do Chrome e Firefox) utilizam no client-side. Já no server-side temos que habilitar no Node.js, porém só existe nas versões instáveis: **0.11.X.** e será oficializada na próxima versão estável: **0.12.x**.

Caso queira brincar com versões instáveis de forma simples e de fácil instalação/desinstalação, veja neste post como utilizar o [NVM - Node Version Manager]({{site.url}}/nvm-node-version-manager "NVM - Node Version Manager").

Para habilitá-lo no Node.js, basta utilizar a flag `--harmony` no comando `node`, por exemplo:

``` bash
 node --harmony app.js
``` 

Com harmony habilitado, agora teremos que usar alguma **biblioteca de controle async**. Utilizarei o [suspend](https://github.com/jmar777/suspend) que é um módulo fácil de implementar generators.

Abaixo mostrarei dois códigos que fazem a mesma coisa, o primeiro utilizando callbacks e o segundo implementando generators, veja a diferença:

## Usando callbacks

``` javascript
 var
   fs = require("fs"),
   time = new Date().getTime()
 ;
 fs.writeFile("log.txt", time, function(err) {
   console.log("Iniciando log");
   fs.readFile("log.txt", function(err, text) {
     console.log("Timestamp: " + text);
     fs.unlink("log.txt", function() {
       console.log("Log finalizado");
     });
   });
 });
``` 

## Usando generators

Instale o módulo suspend:

``` bash
 npm install suspend --save
``` ``` javascript
 var
   fs = require('fs'),
   suspend = require('suspend'),
   resume = suspend.resume,
   time = new Date().getTime()
 ;
 suspend(function* (){
   yield fs.writeFile("log.txt", time, resume());
   console.log("Iniciando log");
   var text = yield fs.readFile("log.txt", resume());
   console.log("Timestamp" + text);
   yield fs.unlink("log.txt", resume());
   console.log("Log finalizado");
 })();
``` 

Referências:

*   [Github do Suspend](https://github.com/jmar777/suspend "Github do Suspend")
*   [Cabaré - Usando generators para botar a casa em ordem](http://caba.re/usando-generators-para-botar-a-casa-em-ordem "Usando generators para botar a casa em ordem")
*   [How to Node - Generators vs Fibers](http://howtonode.org/generators-vs-fibers "How to Node - Generators vs Fibers")
*   [James Long - Javascript's Future: Generators](http://jlongster.com/2012/10/05/javascript-yield.html "Javascript's Future: Generators")