![Brincando com estruturas imutáveis usando Immutable.js](../images/immutable-logo.png "Brincando com estruturas imutáveis usando Immutable.js")

Neste post iremos aprender um pouco de conceitos sobre lidar com dados e estrutura de dados imutáveis usando Immutable.js, afinal a imutabilidade é uma das técnicas aplicadas no paradigma da programação funcional.

A imutabilidade de dados é o comportamento que ocorre quando uma variável recebe pela primeira vez um valor qualquer, e nunca mais poderá mudar de valor, ou seja, não permite uma mutação de estado.
Quando se trabalha com immutabilidade, compiladores e interpretadores ganham alguns benefícios:

*   Persistência fácil de manter;
*   Copiar/Clonar dados se uma operação torna constante, afinal você não pode mudar internamente o estado de um dado, você só pode criar uma nova referência baseada em um dado atual, ou seja, você cria uma versão modificada se baseando em um dado atual;
*   Não se trabalha com **locks** de variáveis no sincronismo de dados entre threads, afinal os dados não vão mudar de estado;

O Immutable.js é uma biblioteca JavaScript criada e mantida pelo Facebook focada em trabalhar com estrutura de dados imutáveis, atualmente ela trabalha com as seguintes estruturas: `List, Stack, Map, OrderedMap, Set, OrderedSet e Record`.

### Brincando com Immutable.js

Existem várias formas de instalar essa lib, para escolher uma forma mais adequada para seus projetos veja esse link: [facebook.github.io/immutable-js](https://facebook.github.io/immutable-js). Nos exemplos desse post, vamos instalar via NPM para testar códigos via Node.js REPL, caso queria fazer o mesmo, primeiro rode esse comando:
``` bash
 npm install immutable
``` 

Para testarmos, vamos criar um simples Map para entendermos os principais comportamentos e regras de se trabalhar com essa library.
``` javascript
 var Immutable = require('immutable');
 var cliente = Immutable.Map({ nome: 'John Connor', email: 'john@connor.net' });
 console.log(cliente.get('nome')); // 'John Connor'
 console.log(cliente.get('email')); // 'john@connor.net'
``` 

Após criar um Map, você pode acessar suas chaves através da função `map.get('chave')`. Se for necessário atualizar os dados de uma chave do Map, você pode usar a função `map.set('chave')`, porém não será modificado o estado do map atual, na verdade essa função vai retornar um novo map com os dados atualizado, afinal essa estrutura aplica o conceito de imutabilidade, então ao invés de mudar internamente, é criado uma nova estrutura modificada com base na estrutura atual. Veja esse exemplo:

``` javascript
 var Immutable = require('immutable');
 var cliente = Immutable.Map({ nome: 'John Connor', email: 'john@connor.net' });
 console.log(cliente.get('nome')); // 'John Connor'
 console.log(cliente.get('email')); // 'john@connor.net'
 // Com retorno encadeado do map.set() é possível mudar múltiplas chaves!
 var novoCliente = cliente.set('nome', 'Sarah Connor')
                          .set('email', 'sarah@connor.net');
 console.log(novoCliente.get('nome')); // 'Sarah Connor'
 console.log(novoCliente.get('email')); // 'sarah@connor.net'
``` 

As vezes, monitorar e manter estado se torna uma tarefa difícil e cansativa de lidar. Ao trabalhar com dados imutáveis você elimina essa tarefa chata, e passa a pensar em uma nova forma mais controlada e precisa de trabalhar com os dados de uma aplicação. Conceitualmente coleções imutáveis devem serem tratadas como **valores** ao invés de **objetos**. Pois os **objetos** representam um conjunto de dados que **mudam com o passar do tempo**, já os **valores** representam um **estado particular em uma instância de tempo**. E é com base nesse princípio que melhora o entendimento sobre dados imutáveis.

### Explorando as estruturas imutáveis

`List`: é uma representação imutável de um array, ou seja, ela possui as principais funções de um array do JavaScript, veja:

``` javascript
 var Immutable = require('immutable');
 var scores1 = Immutable.List([2, 4, 6, 8]);
 console.log(scores1.size); // 4
 var scores2 = scores1.push(10); // [2,4,6,8,10]
 var scores3 = scores2.pop().pop(); // [2,4,6]
 var scores4 = scores3.shift(); // [4,6]
 var scores5 = scores4.concat(10, 12, 14); // [4,6,10,12,14]
``` 

Para conhecer em mais funções dessa estrutura veja: [facebook.github.io/immutable-js/docs/#/List](https://facebook.github.io/immutable-js/docs/#/List).

`Stack`: esta é a implementação clássica de Pilha (FILO - First In, Last Out), para manipular essa Stack você pode usar funções do tipo `stack.push()` e `stack.pop()` e para acessar os itens de uma pilha utilize a função `stack.get(index)`:

``` javascript
 var Immutable = require('immutable');
 var stack = Immutable.Stack();
 var pontuacoes = stack.push(10, 12, 14);
 console.log(pontuacoes.size); // 3
 // pontuacoes.get() e pontuacoes.get(0) retornam os mesmos resultados
 console.log(pontuacoes.get()); // 10
 console.log(pontuacoes.get(0)); // 10
 console.log(pontuacoes.get(1)); // 12
 console.log(pontuacoes.get(2)); // 14
 var novaPontuacao = pontuacoes.pop(); // [10, 12]
 console.log(novaPontuacao.get(0)); // 10
 console.log(novaPontuacao.get(1)); // 12
``` 

Para conhecer em mais funções dessa estrutura veja: [facebook.github.io/immutable-js/docs/#/Stack](https://facebook.github.io/immutable-js/docs/#/Stack).

`Map`: é uma estrutura do tipo **chave-valor**, praticamente ela representa um objeto JavaScript, porém imutável né! Você pode definir todos os dados do Map em seu construtor. Como já foi apresentado essa estrutura na seção anterior, então apenas recomendo que veja esse link para conhecer todas suas funções de manipulação: [facebook.github.io/immutable-js/docs/#/Map](https://facebook.github.io/immutable-js/docs/#/Map).

`OrderedMap`: esta estrutura é um mix de objetos e arrays. Afinal ela manipula seus itens utilizando estrutura de Maps, exemplo as funções `orderedMap.get('chave')` e `orderedMap.set('chave', valor)`, e também essa estrutura mantém uma ordem dos itens que são incluídos, permitindo utilizar funções do tipo `orderedMap.first()` e `orderedMap.last()` que são próprias para manipular arrays. Também é possível redefinir a ordem das chaves utilizando as funções: `orderedMap.sort()` e `orderedMap.sortBy()` que vão retornar um novo map ordenado.

``` javascript
 var Immutable = require('immutable');
 // Múltiplos inserts utilizando set() encadeado
 var clientes = Immutable.OrderedMap()
                       .set('John', 25)
                       .set('Mary', 27);
 console.log(clientes.first(), clientes.last()); // 25, 27
 console.log(JSON.stringify(clientes)); // '{"John": 25, "Mary": 27}'
 // Reordenando o map
 var clientesMaisVelhos = clientes.sortBy(function(value, key) {
   return -value;
 });
 console.log(JSON.stringify(clientesMaisVelhos)); // '{"Mary": 27, "John": 25}'
``` 

Para conhecer em mais funções dessa estrutura veja: [facebook.github.io/immutable-js/docs/#/OrderedMap](https://facebook.github.io/immutable-js/docs/#/OrderedMap).

`Set`: é um array de elementos únicos, ou seja, não é permitido valores duplicados. Se você incluir um valor repetido, o primeiro valor será mantido e o segundo ignorado.

``` javascript
 var Immutable = require('immutable');
 var set1 = Immutable.Set([1, 2, 3, 3]);
 var set2 = Immutable.Set([4, 5, 5]);
 console.log(set1.count()); // 3
 console.log(set1.toArray()); // [1,2,3]
 console.log(set2.count()); // 2
 console.log(set2.toArray()); // [4,5]
 var union = set1.union(set2);
 console.log(union.count()); // 5
 console.log(union.toArray()); // [1,2,3,4,5]
``` 

Veja mais funções dessa estrutura: [facebook.github.io/immutable-js/docs/#/Set](https://facebook.github.io/immutable-js/docs/#/Set).

`OrderedSet`: é uma variação do Set em que os dados são ordenados e reordenados.

``` javascript
 var Immutable = require('immutable');
 var orderedSet1 = Immutable.OrderedSet([1, 2, 2]);
 var orderedSet2 = Immutable.OrderedSet([2, 1, 2]);
 console.log(orderedSet1.count()); // 2
 console.log(orderedSet1.toArray()); // [1,2]
 console.log(orderedSet2.count()); // 2
 console.log(orderedSet2.toArray()); // [2,1]
 var intersected = orderedSet1.intersect(orderedSet2);
 console.log(intersected.count()); // 2
 console.log(intersected.toArray()); // [1,2]
``` 

Veja mais funções dessa estrutura: [facebook.github.io/immutable-js/docs/#/OrderedSet](https://facebook.github.io/immutable-js/docs/#/OrderedSet).

`Record`: é praticamente um construtor de objetos imutáveis. Nele também é possível definir valores default, em casos campos sem valores.

``` javascript
 var Immutable = require('immutable');
 var Cliente = Immutable.Record({ nome: 'John', idade: 25 });
 var john = new Cliente();
 console.log(john.toJSON()); // Object { nome: 'John', idade: 25 }
 var mary = new Cliente({ nome: 'Mary', idade: 20 });
 console.log(mary.toJSON()); // Object { nome: 'Mary', idade: 20 }
``` 

Para mais detalhes dessa estrutura: [facebook.github.io/immutable-js/docs/#/Record](https://facebook.github.io/immutable-js/docs/#/Record).

### Conclusão

Esta é uma incrível e poderosa biblioteca quando se trata de manipular estruturas de dados imutáveis. Diferente do Lodash e Underscore, ela aplica 100% com imutabilidade, até mesmo seu nome **Immutable.js** que reflete bem o propósito de manipular estruturas imutáveis.