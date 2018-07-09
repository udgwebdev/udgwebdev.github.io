![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

Sim, e mais uma vez continuaremos com essa série de posts, já estamos no sexto post! \o/

Feliz 2018! Fiquem tranquilos que este blog não morreu, e não pretendo parar em compartilhar conhecimento por aqui, no máximo o ritmo de posts aqui serão apenas menores, devido a minha dedicação maior que tenho hoje trabalhando para startup [WatchCoins](https://watchcoins.net).

Hoje o post será bem curto, mas terá um conteúdo bem bacana. Basicamente vamos aprender como criar uma função uniqueList combinando Spread Operator + Set, e também como criar uma função sleep usando Promises + Async/Await, ambas funções serão escritas em uma única linha de código!

### Função para manter itens únicos no array

A combinação de spread operator + objeto Set, nos permite criar uma função que mantém itens únicos em um array, o famoso unique(), essa função é muito útil e pode ser feita em uma única linha, veja:

``` javascript
const unique = array => [...new Set(array)];
```

Usar essa função é bem simples, veja:

``` javascript
const array = [1,2,3,3,3,4,5,6];
const uniqList = unique(array);
console.log(uniqList); // [1,2,3,4,5,6];
```

### Função sleep usando Promises + Async/Await

Se você utilizar Promise + Async/Await para encapsular a função setTimeout, é possível criar a clássica função sleep, cuja, sua funcionalidade é criar um delay com base no milisegundos passado em parâmetro, apesar do setTimeout fazer esse papel de forma assíncrona, podemos criar uma função sleep de forma que mantenha todo código limpo e no estilo síncrono, mesmo que por de baixo dos panos a execução seja assíncrona, e tudo isso pode ser feito em uma única linha também, veja:

``` javascript
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

Para usá-lo, é necessário incluir essa função, dentro de um escopo de uma função que utilize async/await, exemplo:

``` javascript
async function delaySomething() {
    console.log('iniciando delay!');
    await sleep(1000);
    console.log('finalizando delay!');
}

delaySomething();
// iniciando delay!
// espera 1 segundo
// finalizando delay!
```

Recentemente lancei o ebook [JavaScript Awesome Tips (Br version)](https://leanpub.com/javascript-awesome-tips-br-version) com diversas dicas sobre JavaScript, vale a pena a leitura!

Caso não tenha visto, recomendo que leia também as dicas anteriores, dessa série:

*   [Escrevendo JavaScript melhor - Parte 1](/escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 3](/escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")
*   [Escrevendo JavaScript melhor - Parte 4](/escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")
*   [Escrevendo JavaScript melhor - Parte 5](/escrevendo-javascript-melhor-parte-5 "Escrevendo JavaScript melhor - Parte 5")

Fontes:
* [Fanpage do Addy Osmani](https://www.facebook.com/addyosmaniofficial)