# Design Patterns para Javascript - Parte 1

![Javascript Desing Pattenrs](../images/javascript-logo.jpg "Javascript Desing Pattenrs")

Começarei a partir de hoje uma série de posts relacionado a Design Pattern (Padrões de Projeto) para Javascript.

E para começar hoje irei abordar alguns, que especificamente serão os padrões: **Creational, Constructors e os Singleton.**

## Pattern Creational

Este é o padrão inicial, base responsável por permitir a construção de outros padrões e objetos. O seu conceito é o mais simples dos demais, ele permite instanciar um objeto ou uma coleção de objetos na aplicação. Abaixo, segue um exemplo que demonstra a maneira tradicional de implementar este padrão:

``` javascript
 // Instanciando um objeto.
 var objeto = new Objeto();
 // Instanciando uma coleção e adicionando um objeto a ela.
 var colecaoObjetos = {};
 colecaoObjetos[0] = objeto;
``` 

## Pattern Constructor

###### Constructor Básico

Em Javascript, um constructor é uma função responsável por implementar um objeto com atributos. Porém esses objetos não são considerados como classes igual o **Java, C#** e outras linguagens **orientadas à objetos** consideram. Apenas são construtores especiais para uma função, pois Javascript é uma linguagem **orientada à protótipos**. A palavra-chave **new** permite instanciar um objeto passando por parâmetros atributos para eles.

E esses construtores armazenam em seus objetos atributos e funções que são referenciadas através da palavra-chave **this**. Veja um exemplo básico de um constructor e como instanciar um objeto apartir dele:

``` javascript
 // Constructor do objeto Cliente.
 function Cliente(nome, idade) {
   this.nome = nome;
   this.idade = idadeidade;
   // Função toString
   this.toString = function() {
     return 'Cliente: '+this.nome+', idade: '+this.idade+' ano(s)';
   };
 };
 // Instanciando objeto Cliente.
 var cliente = new Cliente('João', 33);
 var cliente = new Cliente('Maria', 29);
 // toString' é carregado a cada nova instância de um Cliente.
 console.log(cliente.toString());
``` 

Esta foi uma simples versão do padrão constructor, porém ele possui alguns problemas: Há problemas em implementá-la utilizando herança e neste exemplo a função **toString()** será criada sempre que um novo objeto for criado, sendo uma má prática quando há necessidade de implementar funções compartilhadas pelas distintas instâncias de um mesmo objeto.

###### Constructor Protótipo

Uma boa prática no Javascript para contructors é a implementação conhecida como **Prototype**. Essa prática permite criar funções compartilhadas pelos objetos do mesmo tipo, ou seja, a cada nova instância de um objeto Cliente, somente será instanciado suas respectivas funções apenas uma vez, sendo reutilizada por todos os objetos do mesmo constructor. O exemplo abaixo simplifica esse conceito:

``` javascript
 // Constructor do objeto Cliente.
 function Cliente(nome, idade) {
   this.nome = nome;
   this.idade = idade;
 };
 // Implementando função prototype.
 Cliente.prototype.toString = function() {
   return 'Cliente: '+ this.nome +', idade: '+ this.idade +' ano(s)';
 };
 // Instanciando dois Cliente.
 var cliente1 = new Cliente('João', 33);
 var cliente2 = new Cliente('Maria', 29);
 // toString() será carregada uma vez e compartilhada pelos objetos.
 console.log(cliente1.toString());
 console.log(cliente2.toString());
``` 

## Pattern Singleton

Este padrão é implementado para criar uma única instância de objeto, pelo qual será reaproveitado por toda a aplicação. Por que na prática esta função irá retornar uma instância já existente do objeto. Resumindo o **Singleton** restringe o número de criações de um objeto para apenas uma única instância.

Existem diversas formas de implementar este padrão, abaixo apresentarei alguns exemplos de como implementá-lo:

``` javascript
 // Implementando um singleton simples.
 var clienteSingleton = {
   nome: "Joao",
   email: "joao@mail.com",
   getMessage: function() {
     console.log('Nome: '+ this.nome +' Email: '+ this.email);
   }
 };
``` 

Se desejar extender esse objeto, você pode adicionar atributos e métodos privados para este **Singleton:**

``` javascript
 // Implementando um singleton com atributos privados.
 var clienteSingleton = function() {
   // Área privada de atributos e funções.
   var atributoPrivado = 'Variavel privada';
   function mostrarVariavel() {
     console.log(atributoPrivado);
   }
   // Área pública de atributos e funções.
   // Esta área pode ser acessada pela área privada.
   return {
     funcaoPublica: function() {
       mostrarVariavel();
     },
     atributoPublico: 'Variável Pública'
   };
 };
 // Executando o Singleton.
 var cliente = clienteSingleton();
 // imprimindo 'Variavel privada'
 cliente.funcaoPublica();
 // imprimindo 'Variável Pública'
 console.log(cliente.atributoPublico);
``` 

Na prática a maior utilidade em aplicar um Singleton é quando se há a necessidade de utilizar uma única instância de objeto sendo reaproveitada por todo o percuso do sistema, abaixo existe mais um exemplo desse pattern...

``` javascript
 var Singleton = (function() {
   //args: um objeto contedo argumentos para um Singleton
   function Singleton(args) {
     //define o valor vindo de args em parâmetro ou cria um objeto vazio.
     var args = args || {};
     this.name = 'SingletonTester';
     this.pointX = args.pointX || 6;
     this.pointY = args.pointY || 10;
   }
   //variável de controle de instâncias do Singleton.
   var instance;
   var _static = {
     name: 'SingletonTester',
     //Retorna uma instância de um Singleton através de um objeto singleton da variável args.
     getInstance: function (args) {
        if (instance === undefined) {
          instance = new Singleton(args);
        }
        return instance;
     }
   };
   return _static;
 })();
 //Instanciando um singleton.
 var singletonTest = Singleton.getInstance({pointX: 5});
 // imprime 5
 console.log(singletonTest.pointX);
``` 

Por enquanto é isso pessoal! Nos próximos posts publicarei novos patterns para javascript.

Fonte: [Essential Design Patterns - Addy Osmani](http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/ "Essetial Design Patterns - Addy Osmani")