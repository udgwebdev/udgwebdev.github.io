![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

Esse post visa mostrar na prática como melhorar algumas gambiarras ou bad codes clássicas de se encontrar em qualquer projeto legado JavaScript.

Com certeza você já deve ter visto ou escrito alguns dos códigos abaixo, e simplesmente não fez um refactoring nele, seja por falta de tempo, ou principalmente pelo fato de não conhecer uma forma mais elegante.

### 1) Mapeando arrays

Acredito que esse exemplo é o mais clássico de todos, e o cenário é o seguinte: você tem um array de objetos com tamanho X e precisa gerar um novo array com mesmo tamanho, porém aplicando novos campos nesses objetos, modificando alguns dos campos atuais ou caso seja um array de dados primitivos (String, Number ou Date) você precisa, por exemplo, calcular o valor de cada item do array. Se você já se deparou com esse cenário alguma vez na vida, provavelmente você já viu ou fez um código semelhante a este:

``` javascript
 // Esse código basicamente vai multiplicar por 3 cada valor do array scores
 var scores = [2, 4, 6, 8, 10];
 var newScores = [];
 for(var i = 0; i < scores.length; i++) {
     newScores.push(scores[i] * 3);
 }
 console.log(newScores); // [6, 12, 18, 24, 30]
``` 

Nesse caso, foi necessário criar um novo array e um loop que percorreu todos os items do primeiro array (`scores`) para calcular os valores e em seguida inserir seus resultados dentro do array `newScores`. Mas existe uma forma mais elegante para isso, a solução é usar a função `Array.prototype.map()`, veja como fica:

``` javascript
 var scores = [2, 4, 6, 8, 10];
 var newScores = scores.map(score => score * 3);
 console.log(newScores); // [6, 12, 18, 24, 30]
``` 

### 2) Interpolando dados em uma string

Essa é outra clássica, que graças ao ES6 já é possível aplicar concatenação de dados com strings de forma mais elegante, provavelmente você já deve ter visto muito um código parecido com esse:

``` javascript
 var name = "John Connor";
 var message = "I came from future!";
 var template = "<p>";
 template += "<h3>"+ name + "</h3>";
 template += "<span>"+ message + "</span>";
 template += "</p>";
``` 

Hoje já é possível trabalhar com Template Strings do ES6, permitindo interpolar dados com strings de forma mais elegante, sem precisar concatenar strings utilizando operador "+", veja como fazer isso:

``` javascript
 var name = "John Connor";
 var message = "I came from future!";
 var template = `
 <p>
    <h3>${name}</h3>
    <span>${message}</span>
 </p>`;
``` 

### 3) Calculando médias

Fazer cálculos de média, em muitos casos você já deve ter visto códigos parecidos como esse:

``` javascript
 var scores = [1, 4, 6, 8];
 var result = 0;
 for (var i = 0; i < scores.length; i++) {
   result += scores[i];
 }
 result = result / scores.length;
 console.log(result); // 4.75
``` 

Nesse caso, você pode deixar o código mais enxuto aplicando a função `reduce()` e no final aplicar a divisão do resultado obtido pelo `reduce()` com tamanho do array de scores, veja:

``` javascript
 var scores = [1, 4, 6, 8];
 var result = scores.reduce((total, score) => total + score) / scores.length;
 console.log(result); // 4.75
```

Recentemente lancei o ebook [JavaScript Awesome Tips (Br version)](https://leanpub.com/javascript-awesome-tips-br-version) com diversas dicas sobre JavaScript, vale a pena a leitura!

Veja também:

*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 3](/escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")
*   [Escrevendo JavaScript melhor - Parte 4](/escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")

Caso você conheça algum código legado com dicas sobre como escrevê-lo melhor comente abaixo! Valeu!