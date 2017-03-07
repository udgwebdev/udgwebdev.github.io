![ES6 Arrow Functions](/images/es6-logo.jpg "ES6 Arrow Functions")

Infelizmente, apesar do **Arrow Function** ser uma feature muito bacana e útil do ES6, saiba que nem sempre será possível utilizar ela, pois ela não foi feita para substituir 100% a declaração de function principal, o arrow function, apesar de trazer um **syntax sugar** e algumas utilidades como, por exemplo, compartilhamento de contextos, você precisa antes de usá-la, aprender também quando não usá-la para que você não fique perdido na procura de um bug de difícil de resolver, veja a seguir uma lista com possíveis situações para **NÃO USAR** arrow funcition.

## Click handlers

Para exemplificar, vamos supor que existe um botão pelo qual queremos mudar sua cor entre azul e vermelho, conforme ele é clicado, para isso temos o seguinte html:

``` html
<style>
  button { background-color: blue; }
  .on { background-color: red; }
</style>
<button id="click_here">CLIQUE AQUI!</button>
```

Agora vamos programar o evento de click desse botão, usando arrow function:

``` javascript
const button = document.querySelector('#click_here');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```

Se você testar esse botão, vai gerar o erro: `TypeError, cannot read property 'toggle' of undefined`

Isso ocorre pois o `this` de `this.classList.toggle('on')` compartilha os atributos de `window` e não do evento. E com isso nesse caso o ideal é utilizar a declaração de function:

``` javascript
const button = document.querySelector('#click_here');
button.addEventListener('click', function() {
  this.classList.toggle('on');
});
```

## Object methods

Se você pretende criar um **object methods no frontend**, não é recomendado utilizar arrow functions em seus métodos, entenda o porque vendo esse exemplo:

``` javascript
const Usuario = {
  pontos: 20,
  ganhou: () => {
    this.pontos++;
  }
}
```

Se você rodar `Usuario.ganhou()`, algumas vezes, a expectativa é que os `pontos` esteja com valores acima do que foi estabelecido em seu estado inicial, ou seja, maior que 20.

Mas se você acessar: `Usuario.pontos` seu valor vai continuar 20, e isso ocorre pelo fato de que o `this`, estará sendo referenciado ao objeto `window` do browser, herdando seu escopo.

Para resolver esse problema, você pode tanto usar a declaração clássica de `function`, quanto usar a declaração de métodos do **Object methods**:

``` javascript
// Declarando com function
const Usuario = {
  pontos: 20,
  ganhou: function() {
    this.pontos++;
  }
}
// Utilizando Object methods
const Usuario = {
  pontos: 20,
  ganhou() {
    this.pontos++;
  }
}
```

## Argumentos de um objeto

Quando se cria uma função que trabalhe com `arguments`, caso você precise tratar esses arguments em uma função interna, também não é recomendado usar arrow function, veja esse exemplo:

``` javascript
const ordernaPlayers = () => {
  const players = Array.from(arguments);
  return players.map((player, i) => {
    return `${player} chegou em #${i + 1}`;
  })
  console.log(arguments);
}
```

O problema nesse exemplo é que a função `ordernaPlayers()` vai gerar o erro: `ReferenceError, arguments is not defined.`, esse erro ocorrerá pelo simples fato de que `arguments` vai retornar um array e arrays não trabalham com a keyword `this`, e mesmo não utilizando essa keyword, vai ocorrer esse erro, para resolver esse bug, basta aplicar function na função pai, a `ordernaPlayers()`:

``` javascript
const ordernaPlayers = function() {
  const players = Array.from(arguments);
  return players.map((player, i) => {
    return `${player} chegou em #${i + 1}`;
  })
  console.log(arguments);
}
```

## Prototypes

Jamais use arrow function em funções prototype de um objeto, simplesmente os atributos não serão definidos mesmo instanciando o objeto corretamente, veja esse exemplo:

``` javascript
class Cliente {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }  
}
Cliente.prototype.apresentar = () => {
  return `Cliente: ${this.nome} | Idade: ${this.idade}`;
};
```

Agora tente instanciar um cliente e em seguida se você invocar a função `Cliente.prototype.apresentar()` a interpolação de seus atributos no resultado final será simplesmente `undefined`.

``` javascript
const john = new Cliente('John Connor', 25);
const mary = new Cliente('Mary Jane', 20);

john.apresentar(); // 'Cliente: undefined | Idade: undefined'
mary.apresentar(); // 'Cliente: undefined | Idade: undefined'
```

Simplesmente o arrow function para funções de um objeto prototype não mantém estado após instanciado. O ideal nesse caso é manter a declaração de `function` normal:

``` javascript
Cliente.prototype.apresentar = function() {
  return `Cliente: ${this.nome} | Idade: ${this.idade}`;
};
```

Fontes: [When Not to use an Arrow Function](http://wesbos.com/arrow-function-no-no/)
