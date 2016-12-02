![15 JavaScript Hacks](/images/javascript-logo.jpg "15 JavaScript Hacks")

Pra quem programa com JavaScript ou Node.js com certeza já usou em algum trecho de código a função `console.log` para imprimir alguma informação na tela. Mas e as demais funções do módulo `console`? Neste post vou apresentar algumas funcionalidades que são pouco conhecidas, mas que são bem úteis desse módulo.
Em resumo, falarei sobre as seguintes funções: `console.time`, `console.timeEnd` e `console.memory`.

## Monitorando tempo de execução

Quando você precisar fazer um benchmark que calcule o tempo de execução de um trecho de código, na maioria dos casos a solução que muitos fazem é a de instanciar um objeto `Date` no início e no fim de um trecho de código para em seguida calcular a diferença dessas datas e por fim apresentar seu tempo de execução. No JavaScript temos duas funções que fazem isso de maneira mais elegante. Basta utilizar a função `console.time()` no início e no final utilize `console.timeEnd()`, veja o exemplo abaixo:

 ``` javascript
 function benchmark(n) {
     var maxPI = 0;
     console.time("tempo gasto");
     for (var i = 0; i < n; i++) {
         maxPI += Math.PI * i;
     }
     console.log("Max PI: ", maxPI);
     console.timeEnd("tempo gasto");
   }
``` 

A função benchmark faz um cálculo simples do valor máximo do pi multiplicado por cada i do loop. O importante nesse código é como foi utilizado as funções de `console.time` e `console.timeEnd`. Elas praticamente usam uma string que representam a mensam de resultado final, outro detalhe é que a string utilizada em `console.time` precisa ser exatamente a mesma string em `console.timeEnd` para que seja calculado e apresentado o tempo gasto entre ambas funções.

## Visualizando heap de memória

Outra funcionalidade interessante do módulo `console` é o atributo `console.memory`. Este é um objeto que contém os seguintes atributos:

 ``` javascript
 {
     jsHeapSizeLimit: 793000000,
     usedJSHeapSize: 10000000,
     totalJSHeapSize: 12700000
   }
``` 

O atributo `jsHeapSizeLimit` apresenta o limite máximo do heap de memória, já o `usedJSHeapSize` representa a quantidade de heap que esta em uso e o `totalJSHeapSize` mostra o total máximo do heap para uso. Esses atributos retornam valores inteiros representados em bytes.
O lado chato desse objeto é que ele só funciona apenas no browser Google Chrome.