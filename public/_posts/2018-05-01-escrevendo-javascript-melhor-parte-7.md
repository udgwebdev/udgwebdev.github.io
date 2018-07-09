![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

Continuando a série de dicas para escrever JavaScript melhor, nesse artigo vamos explicar cinco dicas bem legais, sobre como criar em poucas linhas de código a função `compact()` e `diff()`, novas maneiras de concatenar arrays, como executar funções em paralelo e como tornar parâmetros obrigatórios no default parameter.

1) Criando função compact() em uma linha

Se você usa ou usou bibliotecas como underscore.js ou lodash, já deve ter visto a função `compact()`, em que basicamente essa função faz uma limpeza no array, removendo valores considerados como falso pelo JavaScript, exemplo: `0, null, undefined, false e ""`, caso você queira usar somente essa função, eliminando a necessidade de carrega uma biblioteca inteira para usar apenas isso, você pode implementar em uma única linha, essa função, veja:

``` javascript
const compact = arr => arr.filter(Boolean);

const list = [0, null, 1, true];
compact(list); // [1, true]
```

2) Simples função diff() entre dois arrays

A função `diff()` também é conhecida pelas bibliotecas underscore.js e lodash, e basicamente seu propósito é retornar um array com valores diferentes entre dois arrays em parâmetros, ou seja, ele lista valores que não existem nos dois arrays ao mesmo tempo, sua implementação também é extremamente leve e simples de fazer:

``` javascript
const diff = (a, b) => {
   const s = new Set(b);
   ‎return a.filter(x => !s.has(x));
};

diff([1, 2], [1, 2, 3]); // [3]
```

3) Duas maneiras de concatenar arrays

Existem duas maneiras de concatenar vários arrays para um único array, uma é usando concat() e a outra opção é viavel apenas usando Spread Operator do ES2015:

``` javascript
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [7, 8, 9];

// usando concat
const concat1 = [].concat(list1, list2, list3);
// usando spread operator
const concat2 = [...list1, ...list2, ...list3];
```

4) Rodando múltiplas funções assíncronas em paralelo

Caso você queira maximizar processamento, através da execução paralela de múltiplas funções assíncronas, é possível aplicar esse tipo de processamento usando a combinação de promises com async/await:

``` javascript
async function parallel() {
    const allFuncs = [asyncFunc1(), asyncFunc2()];
    const [result1, result2] = await Promise.all(allFuncs);
}
```

5) Tornar parâmetros obrigatórios em uma função

Essa dica é bem simples de fazer e visa deixar alguns parâmetros obrigatórios para tal função ser executada, para fazer isso, basta criar uma simples função que lance um erro, e utilize essa função como default parameter, e com isso, caso tal parâmetro não receba um valor, ele executará a função de erro, veja a seguir como fazer isso:

``` javascript
function required() {
    throw new Error('This field is required');
}

function add(a = required(), b = required()) {
     return a + b;
}
```

E mais uma vez um novo post publicado sobre dicas para escrever javascript melhor, até a próxima!

Recentemente lancei o ebook [JavaScript Awesome Tips (Br version)](https://leanpub.com/javascript-awesome-tips-br-version) com diversas dicas sobre JavaScript, vale a pena a leitura!

Caso não tenha visto, recomendo que leia também as dicas anteriores, dessa série:

*   [Escrevendo JavaScript melhor - Parte 1](/escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 3](/escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")
*   [Escrevendo JavaScript melhor - Parte 4](/escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")
*   [Escrevendo JavaScript melhor - Parte 5](/escrevendo-javascript-melhor-parte-5 "Escrevendo JavaScript melhor - Parte 5")
*   [Escrevendo JavaScript melhor - Parte 6](/escrevendo-javascript-melhor-parte-6 "Escrevendo JavaScript melhor - Parte 6")

Fontes:
* [Fanpage do Addy Osmani](https://www.facebook.com/addyosmaniofficial)