![Escrevendo JavaScript melhor](/images/es6-logo.jpg "Escrevendo JavaScript melhor")

Sim! Esse post vai ter parte 5 sim! E a idéia é que no futuro tenha mais posts desse assunto. Nesse post vou mostrar algumas dicas sensacionais que já é possível aplicar usando JavaScript puro.

## Convertendo números para moeda sem framework

Agora com ES6 já é possível converter Number para String currency nativo, usando apenas a função toLocaleString(). Veja:

``` javascript
(10.9).toLocaleString(); // "10,90"
(1002.5).toLocaleString("pt-BR"); // "1.002,50"
(5.55).toLocaleString("pt-BR", {
  // Ajustando casas decimais
  minimumFractionDigits: 2,  
  maximumFractionDigits: 2
});
```

O melhor disso, é que dessa forma você evita fazer as gambiarras clássicas em usar `Math.abs()` ou `Number.prototype.toFixed()` do JavaScript.

E outro detalhe legal, esta seguro contra o bug do ponto flutuante:

```
// Resultado bugado
0.1+0.2 // 0.30000000000000004
// Resultado sem bugs
(0.1+0.2).toLocaleString(); // "0.3"
```

## Criando slug strings com Regex

Se você precisar criar uma versão slug de uma string, exemplo, transformar a frase: "Escrevendo JavaScript Melhor" em "escrevendo-javascript-melhor", você pode facilmente cria a seguinte função:

``` javascript
function slugify(content) {
  return content.toLowerCase().replace(/\s/g, '-');
}

slugify("Escrevendo JavaScript Melhor"); // "escrevendo-javascript-melhor"
```

Ou caso queira injetar essa função junto as demais funções nativas da String, faça o seguinte:

``` javascript
String.prototype.slugify = function() {
  return this.toLowerCase().replace(/\s/g, '-');
}

"Escrevendo JavaScript Melhor".slugify(); // "escrevendo-javascript-melhor"
```

## Percorrendo atributos de modo seguro

É muito comum ocorrer um erro quando se tenta acessar um atributo de um objeto que não existe, exemplo:

```
let obj;
console.log(obj.text.value); // Uncaught TypeError: Cannot read property 'text' of undefined
```

Nesse caso, vai ocorrer um erro grave, alertando que não pode ler a propriedade `text` de uma referência `undefined`.

E se ao invés de gerar um erro, simplesmente fosse ignorado essa situação, retornando `undefined` no lugar do erro? Para isso você pode simplesmente criar uma função recursiva para resolver esse problema:

``` javascript
function get(obj, attributes) {
  const flatAttributes = attributes.replace(/\[([0-9]+)\]/g, '.$1');
  const cleanAttr = flatAttributes.replace(/(^[\.]|[\.]$)/g, '');
  let nextAttrs, attrs;
  try {
    attrs = cleanAttr ? cleanAttr.split('.') : [cleanAttr];
    nextAttrs = attrs.slice(1).join('.');
  } finally {
    if (nextAttrs) {
      return get(obj[attrs[0]], nextAttrs);
    }
    return obj[cleanAttr];
  }
}
```

Eae com essa função você poderá percorrer os atributos de forma segura, veja:

``` javascript
const obj = { a: 1, b: { c: [{ x: 1 }] } };
get(obj, 'a'); // 1
get(obj, 'b.c'); // [{ x: 1 }]
get(obj, 'b.c[0]'); // { x: 1 }
get(obj, 'b.c[0].x'); // 1
get(obj, 'x'); // undefined
```

Caso não tenha visto, recomendo que leia também as dicas anteriores, dessa série:

*   [Escrevendo JavaScript melhor - Parte 1](/escrevendo-javascript-melhor-parte-1 "Escrevendo JavaScript melhor - Parte 1")
*   [Escrevendo JavaScript melhor - Parte 2](/escrevendo-javascript-melhor-parte-2 "Escrevendo JavaScript melhor - Parte 2")
*   [Escrevendo JavaScript melhor - Parte 3](/escrevendo-javascript-melhor-parte-3 "Escrevendo JavaScript melhor - Parte 3")
*   [Escrevendo JavaScript melhor - Parte 4](/escrevendo-javascript-melhor-parte-4 "Escrevendo JavaScript melhor - Parte 4")

Fontes:
* [format-num.js…or ES6!](https://remysharp.com/2016/12/13/format-numjsor-es6)
