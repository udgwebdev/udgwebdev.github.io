![Escrevendo JavaScript melhor](../images/es6-logo.jpg "Escrevendo JavaScript melhor")

Dando continuidade ao post: [Escrevendo JavaScript melhor - Parte 1](../escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1"), nesse post falarei sobre mais duas dicas úteis para melhorar seu código JavaScript.

## 1) Use === no lugar de ==

De fato, ainda é muito comum ver aplicações JavaScript utilizando `==` ou `!=` na comparação entre duas variáveis, apesar desses operadores realizarem a comparação de valores corretamente, eles ignoram a comparação do tipo de dado, ou seja:

``` javascript
 // Aqui a comparação esta correta
 console.log(1 == 1) // true
 // Aqui a comparação não deveria retornar true
 console.log('1' == 1) // true
``` 

Para evitar esse tipo de problemas é recomendado utilizar os operadores `===` e `!==` para que a comparação seja justa em comparar se os valores são iguais e principalmente se os tipos de dados são os mesmos, veja:

``` javascript
 // Aqui a comparação esta correta
 console.log(1 === 1) // true
 // Aqui também!
 console.log('1' === 1) // false
``` 

## 2) Filtre campos usando shorthand value

Essa dica só funciona com ES6 habilitado, e é bem útil!
Caso não conheça o **shorthand value**, também conhecido **Object destructuring assignment** do ES6, permite extrair campos de um objeto de forma mais elegante:

``` javascript
 // É muito comum fazer isso
 var nome = cliente.nome;
 // Com shorthand value você pode fazer isso
 var { nome } = cliente;
``` 

Com shorthand value é possível extrair em váriaveis os atributos de um objeto, ou seja, imagine um sistema externo enviando para seu sistema objetos com vários campos, porém você somente precisa de apenas alguns campos, nesse caso é muito comum você fazer algo semelhante a isso:

``` javascript
 // Imagine que este cliente possua +10 campos
 function formatar(cliente) {
    // Porém você só quer retornar nome e email do cliente
    var nome = cliente.nome;
    var email = cliente.email;
    return {
        nome: nome,
        email: email
    };
 }
``` 

Com o shorthand value você pode fazer uma formatação desse objeto cliente de forma mais enxuta, sem contar que essa funcionalidade também serve para criar um novo objeto sem a necessidade de repetir a chave e valor que possua o mesmo nome, ou seja, o retorno dessa função pode se resumir da seguinte maneira:

``` javascript
 // Esse cliente também possui +10 campos, ok?
 function formatar(cliente) {
     // Dessa vez, vamos filtrar os campos usando shorthand value
     var { nome, email } = cliente;
     // E também será usado shorthand value no novo objeto
     return { nome, email };
 }
``` 

Veja também:

*   [Escrevendo JavaScript melhor - Parte 1](../escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 3](../escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")
*   [Escrevendo JavaScript melhor - Parte 4](../escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")

See you later!