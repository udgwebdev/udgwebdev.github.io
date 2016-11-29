![Javascript Desing Pattenrs](../images/javascript-logo.jpg "Javascript Desing Pattenrs")

Continuando a série de posts relacionado a **Design Patterns para Javascript** hoje apresentarei os patterns: **Module, Factory e Mixin**. Caso ainda não tenha visto a primeira parte desse post, veja-o neste link: [Design Patterns para Javascript - Parte 1.](../design-patterns-para-javascript-parte-1/ "Design Patterns para Javascript – Parte 1")

## Pattern Module

Este padrão popular foi criado para definir um meio de encapsulamento privado e público de classes pela engenharia de software convecional.

Em Javascript, este pattern é usado para emular o conceito de classes provendo um meio de incluir atributos e funções públicas e privadas dentro de um objeto, protegendo as particulares partes de um escopo global. O resultado disso é a redução de conflitos de objetos e funções que possuem o mesmo nome quando diversos scripts são inclusos na mesma página.

Este conceito de métodos públicos e privados permite que variáveis sejam acessados apenas pelo próprio módulo, protegendo os componentes privados de um acesso externo apartir de outras entidades, que só poderão ver as informações públicas do mesmo. Veja abaixo um exemplo de como implementá-lo:

``` javascript
 // Criando um módulo
 var contadorModule = (function(){
   // Atributo privado de acesso externo.
   var contador = 0;
   return {
   // Funções públicas para acesso externo.
     incrementarContador: function() {
       return contador++;
     },
     resetContador: function() {
       console.log('O contador parou no valor:' + contador);
       contador = 0;
     }
   };
 })();
 // Somente estas funções poderão ser utilizadas.
 contadorModule.incrementarContador();
 contadorModule.resetContador();
``` 

## Pattern Factory

Parecido com o [Pattern Creational](../design-patterns-para-javascript-parte-1/ "Design Patterns para Javascript – Parte 1"), o **Pattern Factory** resolve alguns problemas de criação de objetos sem especificar o nome exato do objeto a ser instanciado.

Esse é o conceito de uma fábrica de objetos, pelo qual é definido uma interface para criação desses objetos por onde é permitido que subclasses decidam qual o objeto a ser instanciado. Esse pattern lida com o problema através da definição separada de funções para criação dos objetos, pelo qual sub-classes são capazes de sobrescrever e decidir qual tipo de fábricação de objeto a ser criada. Com frequência esse pattern é encontrado em frameworks onde o código-fonte precisa ser criado em tipos de objetos particulares que são utilizados através de subclasses.

###### Quando utilizá-lo?

*   Quando há utilização de instâncias de objetos em um nível alto de complexidade.
*   Quando há necessidade de gerar diferentes instâncias de objetos independente do ambiente.
*   Quando você necessita trabalhar com objetos que compartilham as mesmas propriedades.

###### Quando não utilizá-lo?

*   Geralmente é uma boa prática não usar esse pattern em todas as situações, isso ocorre devido a grande complexidade de sua implementação, sendo substituído facilmente pelo [Pattern Constructor](../design-patterns-para-javascript-parte-1/ "Design Patterns para Javascript – Parte 1").
*   Sua implementação exige um trabalho extra de implementação e seus testes.

A seguir veja um exemplo de seu código:

``` javascript
 var CarroFactory = (function() {
   var Carro = function (modelo, ano, cor){
     this.modelo = modelo;
     this.ano = ano;
     this.cor = cor;
   };
   return function (modelo, ano, cor) {
     return new Carro(modelo, ano, cor);
   };
 })();
 // Instanciando um objeto Carro via CarroFactory.
 var civic = new CarroFactory("Honda Civic", 2009, 20000);
 var mondeo = new CarroFactory("Ford Fusion", 2010, 5000);
``` 

## Pattern Mixin

Mixin são classes que fornecem functionalidades a serem herdadas pelas subclasses. Isso significa que com o Mixin é possível colecionar funções e objetos herdados por múltiplos Mixin entre diversas heranças.

``` javascript
 // Construtor de um objeto Carro.
 var Carro = function(arg){
   this.modelo = arg.modelo || 'Não informado';
 this.cor = arg.cor || 'Não informado';
 };
 // Estrutura de um objeto Mixin
 var Mixin = function(){};
 Mixin.prototype = {
 acelerar: function(){
 console.log('acelerando o carro.');
 },
 parar: function(){
 console.log('parando o carro.');
 }
 };
 // Função que injeta as funções Mixin para o objeto Carro
 function mixinInjector(classeReceptora, classeProvedora) {
   // Um Mixin fornecendo alguns métodos
   if (arguments[2]) {
     for (var i=2, len=arguments.length; i < len; i++) {
       classeReceptora.prototype[arguments[i]] = classeProvedora.prototype[arguments[i]];
     }
   }
   // Um Mixin fornecendo todos os métodos
   else {
     for (var metodos in classeProvedora.prototype) {
       // verificando se a classe receptora já possui tal método do loop...
       if (!classeReceptora.prototype[metodos]) {
         classeReceptora.prototype[metodos] = classeProvedora.prototype[metodos];
       }
     }
   }
 }
 // Executando um Mixin...
 mixinInjector(Carro, Mixin,'acelerar','parar');
 // Instanciando um Carro
 var ford = new Carro({modelo:'Ford Escort', cor:'azul'});
 // Utilizando as funções herdadas pelo Mixin...
 ford.acelerar();
 ford.parar();
``` 

Neste exemplo criamos um objeto **Carro** sem definir as funções **acelerar()** e **parar()**. Porém criamos um objeto **Mixin** que injetou essas funcionalidades para o objeto Carro.

Não deixe de ler as referências abaixo para aprender mais e mais sobre os **Desing Patterns para Javascript**, é um excelente material!

Fonte: [Essential Design Patterns - Addy Osmani](http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/ "Essetial Design Patterns - Addy Osmani")