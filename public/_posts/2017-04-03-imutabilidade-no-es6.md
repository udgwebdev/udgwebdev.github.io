![Imutabilidade no ES6](/images/es6-logo.jpg "Imutabilidade no ES6")

Caso você já esteja por dentro sobre o **ES6/7/8/9/100000**, você já deve estar bem ciente de como trabalhar com imutabilidade usando a keyword `const` para declarar varíaveis imútaveis. De fato não há nenhum segredo nisso, basicamente você declara qualquer **tipo de dados** usando `const` e nunca mais seu estado inicial será modificado, correto? Veja esse exemplo:

``` javascript
const score = 10;
console.log(score); // 10

score = 9; // TypeError: Assignment to constant variable
```

Até aqui tudo ok, foi criado uma constante `score` com valor `10`, e ao tentar modificar seu valor para `9`, ocorreu o erro: `TypeError: Assignment to constant variable`, que basicamente é um erro referente a não permissão de mudança de valores em uma variável que já possui um valor.

Outro detalhe da `const`, você não pode criá-la sem definir um valor, pois vai gerar o seguinte erro:

``` javascript
const score; // SyntaxError: Missing initializer in const declaration
```

É regra básica, não se pode criar constante sem definir seu estado inicial, pois `undefined` não é uma definição de um bom estado, não é?

Porém voltando a pergunta inicial, usar `const` torna qualquer tipo de dado do JavaScript imutável? NÃO!  
Somente dados primitivos: **String, Number, Date, Boolean**, serão imútaveis, se você usar objeto ou array, facilmente você poderá modificar os atributos internos deles, o que teoricamente deveria ser imútavel também.

``` javascript
const scores = [];
scores.push(1);
scores.push(3);
scores.push(4);
console.log(scores); /// [1, 3, 4]
```

O mesmo cenário ocorre para objetos:

``` javascript
const player = {};
player.name = 'John Connor';
player.age = 25;
console.log(player); // { name: 'John Connor', age: 25 }
```

Nestes dois cenários, seus atributos internos foram modificados e nenhum erro ocorreu, afinal o `const` somente torna **imútavel as atribuições das variáveis**, ou seja, tudo aquilo que for atribuído usando `=` na inicialização de uma variável, qualquer atribuição em propriedades de um objeto serão ignorados.

## Como tornar objetos e arrays imútaveis??

Desde o ES5, já existia uma função chamada `Object.freeze()` que congela o estado interno de um objeto ou array, ou seja, seus atributos jamais serão modificados, congelando seu estado, e não permitindo a inclusão, alteração e exclusão de seus atributos internos, entenda nesse exemplo:

``` javascript
const player = { name: 'John Connor' };
Object.freeze(player);
// Silenciosamente não vai acontecer nenhum erro
player.age = 25; 
// Porém não será incluído o atributo age no objeto que foi congelado!
console.log(player); // Object { name: 'John Connor' }
```

No caso do array, qualquer modificação vai gerar um erro, veja:

``` javascript
const scores = [1, 2, 3];
Object.freeze(scores);
scores.push(10); // TypeError: Can't add property 10, object is not extensible
```

Caso seja necessário visualizar um erro na modificação de um objeto, basta usar `'use strict'` no topo do código:

``` javascript
'use strict';
const player = { name: 'John Connor' };
Object.freeze(player);
player.age = 25; // TypeError: Can't add property age, object is not extensible
```

## Aplicando deep frezzing recursivo

Mesmo usando `Object.freeze()` para congelar o estado do objeto ou array, sub-atributos ou sub-objetos vão continuar mútaveis, para realmente criar um objeto/array profundamente imútavel, é necessário criar uma função recursiva para aplicar o conceito de `deep freezing`, veja abaixo como fazer isso:

``` javascript
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);
  props.forEach(function(name) {
    const prop = obj[name];
    if (typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}
```

Agora com essa função declarada, você não vai conseguir modificar subatributos dos subatributos dos subatributos, que todos eles serão imútaveis, veja:

``` javascript
const data = {
  cliente: {
    nome: 'John Connor'
  }
}

// Usando apenas Object.freeze()
Object.freeze(data);
data.cliente.nome = 'Sarah Connor'
console.log(data.cliente.nome); // Sarah Connor

// Usando função deepFreeze()
deepFreeze(data);
data.cliente.nome = 'Sarah Connor'
console.log(data.cliente.nome); // John Connor
```

## Conclusão

Se você pretende trabalhar 100% com dados imútaveis e isso inclui tanto dados primitivos quanto objetos e arrays, basta usar `const` para as variáveis primitivas e `const` + `Object.freeze()` para objetos e ou arrays.

Fonte: [MDN - Object.freeze()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)