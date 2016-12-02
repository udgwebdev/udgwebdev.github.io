![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

E mais uma vez, volto a falar desse assunto, já chegando na quarto episódio dessa série sobre boas práticas para escrever JavaScript melhor.

## 1) Trocando valores entre duas variáveis

Se você já precisou trocar valores entre duas variáveis, é bem provável que você já tenha feito um código parecido com esse:

``` javascript
 let x = 10;
 let y = 20;
 let aux = x;
 x = y;
 y = aux;
 console.log(x); // 20;
 console.log(y); // 10;
``` 

Hoje, graças ao ES6, temos o `Destructuring Assignment` que é uma feature bem legal, que permite fazer essa troca de valores **em apenas 1 linha de código!** Veja:

``` javascript
 let x = 10;
 let y = 20;
 [x, y] = [y, x];
 console.log(x); // 20;
 console.log(y); // 10;
``` 

Ele usa uma síntaxe parecida com array para definir os novos valores. E é possível fazer muito mais com esse recurso, recomendo fortemente a leitura desse artigo para se aprofundar mais nele: [Mozilla Developers - Destructuring Assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## 2) Movendo o primeiro item para última posição do array

Se você precisar mover o primeiro item de um array para a última posição, siga essa simples dica, use o retorno da função `array.shift()` como entrada para função `array.push()`, veja:

``` javascript
 const array = [1, 2, 3, 4, 5];
 array.push(array.shift());
 console.log(array); // [2, 3, 4, 5, 1];
``` 

## 3) Movendo o último item para primeira posição do array

Caso precise fazer o movimento inverso, basta usar o retorno de `array.pop()` como entrada para a função `array.unshift()`:

``` javascript
 const array = [1, 2, 3, 4, 5];
 array.unshift(array.pop());
 console.log(array); // [5, 1, 2, 3, 4]
``` 

## 4) Limpando valores nulos de um array

A função `array.filter()`, retorna um novo array com base no callback de filtro que você estabelecer como regra, nesse caso você pode incluir qualquer regra como retorno de seu callback, para que seja aplicado o filtro, porém existe um shortcut de filtro para limpar valores do tipo: `undefined`, `null`, `""` ou `0`, neste caso basta incluir a keyword `Boolean`, veja:

``` javascript
 const array = [undefined, 'apple', 'orange', '', 'kiwi', 'pumpkin', 'grape', '', 0, null];
 const novoArray = array.filter(Boolean);
 console.log(novoArray); // ['apple', 'orange', 'kiwi', 'pumpkin', 'grape'];
``` 

Veja também:

*   [Escrevendo JavaScript melhor - Parte 1](/escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 3](/escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")

Estou adorando escrever sobre esse assunto, caso você tenha uma dica boa sobre como escrever JavaScript melhor comente abaixo que farei questão de estudar e escrever no próximo post, e é claro, citando o nome do autor da dica, até o próximo post!