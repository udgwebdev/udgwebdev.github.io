![Variáveis e escopos do ES6](/images/es6-logo.jpg "Variáveis e escopos do ES6")

Desde o início do JavaScript sempre foi muito comum declarar variáveis ou constantes usando a keyword `var`. É importante saber que ao declarar variáveis usando `var` elas serão _function-scoped_, ou seja, são visíveis dentro de um escopo de função e também dentro de funções filhas deste escopo. Isso pode ser um problema pois este comportamento pode se tornar bem confuso. Por exemplo:

``` javascript
var msg = 'Olá ...';
function helloMsg(string) {
  if (string) {
    var msg = `Olá ${string}`;
    return msg;
  }
  return msg;
}
helloMsg();
```

Ao olhar a simples lógica você diria: ah, essa é fácil, vai retornar a string `'Olá ...'`, pois é, para nossa surpresa ao executar o comando `helloMsg();` foi retornado `undefined`. Isso se deve pelo fato de que o escopo vale para função `helloMsg()` como um todo - mesmo sem esta linha ter sido executada por conta do `if (string)`. Para você entender, é como se o interpretador JavaScript tivesse lido o código todo como o seguinte:

``` javascript
var msg = 'Olá ...';
function helloMsg(string) {
  // Internamente o interpretador vai criar uma varíavel undefined no escopo da function
  var msg; 
  if (string) {
    var msg = `Olá ${string}`;
    return msg;
  }
  return msg;
}
helloMsg();
```

## Escopo de bloco com let e const

No ES6 existem duas novas formas para declarar variáveis, são `let` e `const`. Diferente de `var`, essas variáveis são _block-scoped_, ou seja, elas são visíveis dentro de um escopo de bloco e também dentro de blocos filhos deste escopo. Este comportamento se aproxima de outras linguagens de programação, como por exemplo _Ruby_.

### Usando let

`let` funciona como `var`, mas como escopo de bloco em vez de escopo de função. Perceba no código abaixo que a variável `tmp` só existe dentro do bloco do if:

``` javascript
function nomeEditora(string) {
  if (string) {
    let tmp = string;
  }
  console.log(tmp);
  // ReferenceError: tmp is not defined
  return string;
}
```

### Usando const

_const_ funciona similar a _let_, com a diferença que você já precisa iniciar com um valor fixo na sua declaração, e este valor não poderá ser trocado depois, ou seja, as constantes são imutáveis (_immutable variables_). Exemplo:

``` javascript
const nome;
// SyntaxError: Missing initializer in const declaration

const nome = 'John Connor';
nome = 'Sarah Connor';
// TypeError: Assignment to constant variable.
```

## Quando usar const ou let

Recomendamos que use sempre `let` ou `const`, e evite `var`. Quando você souber que o valor da varíavel não irá mudar, ou seja, a constante nunca poderá receber outro valor ou ser usada com operações usando `++` ou `--`, use `const`. É importante saber que o objeto e array que for uma constante pode se alterar em seus atributos internos sem problemas, exemplo:

``` javascript
const usuario = {};
usuario.nome = 'John Connor';
console.log(usuario.nome); // John Connor

const scores = [];
scores.push(1);
scores.push(3);
scores.push(2);
console.log(scores); // [1, 3, 2]
```

Ao usar a função `for` também prefira usá-la com `const`. O compilador do ES6 associará um valor imutável a constante para cada loop. Lembrando que o valor da constante x dentro do bloco do `for` não poderá ser alterada:

``` javascript
for (const x of ['a', 'b']) {
  console.log(x);
}
```

Entretando, use `let` quando o valor inicial de uma varíavel irá mudar. Por exemplo:

``` javascript
let counter = 0;
// initial value
counter++;
// change

let obj = {};
// initial value
obj = { foo: 123 };
// change
```

Se você seguir esses conselhos, você não terá mais a keyword `var` em seus futuros projetos JavaScript.

Recentemente lancei o ebook [JavaScript Awesome Tips (Br version)](https://leanpub.com/javascript-awesome-tips-br-version) com diversas dicas sobre JavaScript, vale a pena a leitura!