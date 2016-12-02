![Funções paralelas usando async](/images/nodejs-logo.jpg "Funções paralelas usando async")

Para quem não conhece, o módulo [async](https://github.com/caolan/async "Github do async") é muito útil quando se precisa de um framework para manipular fluxo de execuções assíncronas, com ele é possível organizar de forma elegante todo código de funções assíncronas, assim como também organizar a execução de cada uma delas.

Neste post vou explicar como organizar e rodar múltiplas funções assíncronas de forma que elas sejam otimizadas para serem executadas em paralelo.

A vantagem de executar em paralelo as funções assíncronas é em relação ao ganho de performance em maximizar o uso de CPU para trabalhar com múltiplas tarefas ao mesmo tempo, e o mais interessante é que ao usar o módulo [async](https://github.com/caolan/async "Github do async") para paralelizar suas funções, você poderá trabalhar em cima do resultado final desse tipo de execução através do callback da função `async.parallel()`.

Para começar, instale o [async](https://github.com/caolan/async "Github do async") em seu projeto:
``` bash
 npm install --save async
``` 

Para mostrar na prática o quão simples é implementar esse processamento paralelo, vamos criar uma simples **função que espera 2 segundos para mostrar no terminal uma string que for passada em parâmetro**, veja o código abaixo:
``` javascript
 function test(msg, callback) {
   setTimeout(function() {
     console.log(msg);
     callback();
   }, 2000);
 }
``` 

Com base nessa função faremos dois código, em que o primeiro executará duas vezes essa função em sequencial e o segundo executará duas vezes em paralelo, veja como deve ficar o código completo:
``` javascript
 const async = require("async");
 function test(msg, callback) {
   setTimeout(function() {
     console.log(msg);
     callback();
   }, 2000);
 }
 console.time("Execução normal");
 test("Mundo async!",function() {
   test("Mundo async!", function() {
     console.timeEnd("Execução normal");
   });
 });
 console.time("Execução paralela");
 async.parallel([
   function(callback) {
     test("Mundo paralelo!", function() {
       callback();
     });
   },
   function(callback) {
     test("Mundo paralelo!", function() {
       callback();
     });
   }
 ], function() {
   console.timeEnd("Execução paralela");
 });
``` 

Repare que ambos os códigos estão calculando o tempo de execução através das funções `console.time()` e `console.timeEnd()`, na minha máquina rodando 3x o mesmo código, os resultados foram esses:
[![Resultado do benchmark: async vs parallel](/images/async-vs-parallel-small.png)](/images/async-vs-parallel.png "Resultado do benchmark: async vs parallel")

[](/images/async-vs-parallel.png "Resultado do benchmark: async vs parallel")

**Conclusão:** Sempre que puder, otimize processamento de suas funções no Node.js utilizando o módulo [async](https://github.com/caolan/async "Github do async") via função `async.paralell` para obter um ganho em performance.
**Observação:** Um detalhe bacana que o [Itacir Pompeu](https://disqus.com/by/ItacirPompeu/) comentou abaixo é que esse módulo [async](https://github.com/caolan/async "Github do async") também pode ser usado no client-side de uma aplicação.