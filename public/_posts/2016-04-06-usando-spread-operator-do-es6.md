# Usando Spread operator do ES6

![Usando Spread operator do ES6](../images/es6-logo.jpg "Usando Spread operator do ES6")

Se você já trabalha com alguns recursos do ES6, recomendo a leitura desse post que vai falar sobre Spread Operator.
O Spread Operator basicamente converte um array em argumentos, ele é muito útil quando se precisar quebrar um array para passar seus valores para uma função ou construtor de um objeto como argumentos de valores separados.
Para exemplificar na prática, vamos criar uma simples função de soma, que precisa de 2 argumentos como parâmetro de entrada em sua função:

 ``` javascript
 function soma(a, b) {
     return a + b;
   }
``` 

Até aqui não há nenhum segredo nessa simples função que retorna a soma de dois valores. Se você pretende usar essa função você pode simplesmente fazer:

``` javascript
 soma(1, 2); // retorna: 3
``` 

E se você pretende usar um array? Como passar 2 valores de um array como argumento? O jeito mais óbvio seria:

``` javascript
 var arr = [1, 2];
 soma(arr[0], arr[1]); // retorna: 3
``` 

Tem um jeito mais elegante? Tem! Você pode usar `soma.apply(null, arr)` para invocar essa função:

``` javascript
 var arr = [1, 2];
 soma.apply(null, arr); // retorna: 3
``` 

Obs.: O primeiro parâmetro null, é referente ao contexto **this** que seria usado internamente na função `soma()`, como não é utilizado **this** nessa função, você pode deixar como **null** que ele utilizará o contexto **this** default da função.
E o Spread operator? Aahhhh esse sim é o melhor de todos, veja:

``` javascript
 var arr = [1, 2];
 soma(...arr); // retorna: 3
``` 

Basicamente você tudo se resolve com a síntaxe: **...array** para que ele quebre o array em argumentos e dessa forma você obtem uma forma mais elegante e enxuta de usar arrays como argumentos.

### Melhor referência!

*   [MDN - Spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)