![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

E mais uma vez, continuando essa série de posts sobre dicas para escrever código JavaScript melhor, nesse post vejam mais quatro dicas bem legais.

## 1) Verificando se um item existe em um array

Para verificar se um determinado item existe em um array, praticamente muita gente já deve ter feito algo parecido com isso:

``` javascript
 var itens = [1,2,3,4,6];
 var item = 4;
 var existe = false;
 for (var i = 0; i < itens.length; i++) {
    if (itens[i] === item) {
        existe = true;
        break;
    }
 }
``` 

Com certeza você já deve ter feito ou visto isso, seja em projetos grandes ou mini-projetos de lição de casa na faculdade!

É muito comum uma implementação desse tipo para verificar se um determinado item existe em um array, porém caso não conheça, no ES6 existe uma função muito enxuta para fazer esse tipo de checagem, se chama `includes()`, veja como usá-la:

``` javascript
 var itens = [1,2,3,4,6];
 var item = 6;
 itens.includes(6); // Retorna true
``` 

## 2) Simplificando comparações nulas

O JavaScript é uma linguagem em que quando queremos verificar se tal variável não possui um valor, elas geralmente podem ter valores do tipo: `null`, `undefined`, `""` ou `false`.

Nesses casos é muito comum projetos verificarem esses valores da seguinte maneira:

``` javascript
 if (foo !== null && foo !== undefined && foo !== "") {
    fazerAlgo();
 }
``` 

Por favor, parem de escrever desse jeito! O código fica muiiiiitoooo feio!!!
Caso não saiba, existe um simples shortcut lógico para verificar esses a existência desses valores no JavaScript, basta utilizar o operador lógico de negação ou dupla negação:

``` javascript
 if (!!foo) {
    fazerAlgo();
 }
``` 

Neste caso, se `foo` possuir um valor diferente de: `null`, `undefined`, `false`, `0` ou `""` então ele possui um valor válido, suficiente para retornar true nessa condicional.
Veja mais detalhes sobre essa dica nesse post: [15 JavaScript Hacks](/15-javascript-hacks "15 JavaScript Hacks")

## 3) Aplicando substring corretamente

Em primeiro lugar, acredito que muita gente aplica substring corretamente, porém você sabe as diferenças entre as funções: `substring()` e `substr()`?

Basicamente ambas funções utilizam a mesma entrada de argumentos, o primeiro argumento é o indíce de ponto de partida, porém a diferença esta na semântica do segundo argumento de ambas funções, veja.

``` javascript
 "JavaScript".substr(4, 6); // "Script"
 "JavaScript".substring(4, 6); // "Sc"
``` 

Em `substr(index, qtd)` o segundo parâmetro retorna a quantidade de caracteres a partir do index

Em `substring(start, end)` o segundo parâmetro retorna a posição final da string, ou seja, essa função retorna a substring com base na posição inicial até final

.

Veja também:

*   [Escrevendo JavaScript melhor - Parte 1](/escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 4](/escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")

Até a próxima galera!