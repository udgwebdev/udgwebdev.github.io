![Curso de Node.js](images/nodejs-para-leigos.jpg "Curso de Node.js")

Olá pessoal! O assunto de hoje será sobre desenvolvimento de testes automatizados com Node.js. O objetivo aqui é apresentar as características do framework Nodeunit, explicando um pouco também sobre TDD (Test Driven-Development) mais conhecido como desenvolvimento orientado a testes, que é uma das boas práticas da metodologia agíl.

Antes de falar do Nodeunit, temos que entender como funciona o conceito de TDD. Para quem não conhece, TDD é uma metodologia de desenvolvimento de software focada na programação orientada por teste, em que na prática o desenvolvedor elabora um script de testes automatizados para um código de regra de negócios (funcionalidades) que será escrita no futuro (após preparar todos os casos de testes).

Isso traz benefícios de garantia de que o seu código terá métodos claros e que funcionarão corretamente, pois se cria os casos de testes, depois elabora o código baseado no design do métodos que foram escritos nos testes. Isso te forçará a pensar mais sobre a implementação do seu código, na cobertura dos testes de falhas e no comportamento das regras de negócio. Outra vantagem é que se no futuro ocorrer uma manutenção naquela classe testada, os testes unitários informarão se a mudança no código sofrerá bugs com base nos casos de testes que falharam, fazendo com que o programador aplique as correções preventivas o quanto antes.

![Ciclo de desenvolvimento do TDD](images/ciclo-do-tdd.jpg "Ciclo de desenvolvimento do TDD")

Este ciclo consiste em três etapas:

*   **Test:** elaborar o teste unitário para uma determinada classe de negócio.
*   **Code:** codificar a classe baseando-se no design que foi implementado o teste.
*   **Refactor:** refatorar, realizar ajustes no código até que os seus testes sejam realizados com sucesso e o código atenda corretamente os requisítos estabelecidos.

O Nodeunit é um dos primeiros frameworks lançado para o Node.js, e possui uma comunidade extensa contribuindo para melhorias nesse projeto. Algumas características do Nodeunit são:

*   Criação de testes unitários sobre o seu código de forma simplicada.
*   Suporte para elaboração de testes assíncronos.
*   Criação de casos de testes.
*   Execuções de funções de setUp (antes de um testes) e tearDown (depois de um teste).
*   Apresentação dos resultados dos testes no console e no browser.
*   Integração com Mocks e Stubs.
*   Exportação dos resultados para HTML ou JUnit XML.

Para instalá-lo é simples...

`npm install -g nodeunit`

Seguindo o conceito de TDD, primeiro criaremos os testes para o objeto chamado cliente, que ainda não existe. Na sua pasta, crie a o diretório chamado **tests** e inclua o arquivo **cliente.test.js** com o seguinte código:

``` javascript
 // client.test.js
 var Cliente = require('../cliente');
 module.exports = function(){
   setUp: function(callback){
     this.caio = new Cliente('Caio', 200.00);
     this.joao = new Cliente('Joao', 100.00);
     callback();
   },
   deveTransferir100ReaisParaJoao: function(test){
     this.caio.transferir(100.00, this.joao);
     test.equal(this.caio.dinheiro, 100.00);
     test.equal(this.joao.dinheiro, 200.00);
     test.done();
   },
   naoDeveTransferirUmaQuantiaAcimaDoLimite: function(test){
     test.throws(function(){
       this.caio.transferir(500.00, this.joao);
     }, Error, "Essa quantia nao e permitida.");
     test.done();
   },
   naoDeveTranferirUmaQuantiaNegativa: function(test){
     test.throws(function(){
       this.joao.transferir(-500.00, this.caio)
     }, Error, "Essa quantia nao e permitida.");
     test.done();
   },
   naoDeveTransferirUmValorInvalido: function(test){
     test.throws(function(){
       this.joao.transferir('AA', this.caio)
     }, Error, "Valor invalido.");
     test.done();
   },
   tearDown: function (callback) {
     this.caio = undefined;
     this.joao = undefined;
     callback();
   }
 };
``` 

Perceba que o layout dos testes, já indica que o cliente possui um nome e uma quantidade de dinheiro, e o mesmo possui uma funcionalidade que é de **transferir dinheiro** para outro cliente. Tudo isso já foi identificado através do teste e o melhor, por ter sido escrito primeiro, cobrimos com maior quantidade de testes para garantir qualidade.

A boa prática de codificação de testes é nomear cada função de testes de forma que fique claro o objetivo a ser testado. Por exemplo, a função: **deveTransferir100ReaisParaJoao()** o próprio nome desse teste deixou claro como ele deve ser escrito para atingir tal objetivo. Outro detalhe são as funções padrões do nodeunit:

*   `setUp()`: Executa rotinas antes de inicar cada teste.
*   `tearDown()`: Executa rotinas no término de cada teste.

Agora com o testes em mão, fica mais fácil de implementar o objeto cliente **(cliente.js)**:

``` javascript
 function Cliente(nome, dinheiro){
   this.nome = nome;
   this.dinheiro = dinheiro;
 };
 Cliente.prototype.transferir = function(dinheiro, cliente){
   if(typeof dinheiro == 'number'){
     if(this.dinheiro >= dinheiro){
       cliente.dinheiro += dinheiro;
       this.dinheiro -= dinheiro;
     }else{
       throw new Error("Essa quantia nao e permitida.");
     }
   }else{
     throw new Error("Valor invalido.");
   }
 };
 module.exports = Cliente;
``` 

Para rodarmos o teste, o código **cliente.js** precisa estar acima da pasta **tests**. E agora para executar os testes, basta rodar o seguinte comando:

`nodeunit tests/cliente.test.js`

Se todos os testes passarem, será listado em seu terminal o nome dos testes marcado de verde semelhante a essa imagem:

[![Caso de sucesso nos testes](images/tdd-caso-de-sucesso-small.jpg "Caso de sucesso nos testes")](images/tdd-caso-de-sucesso.jpg "Caso de sucesso nos testes")

Esse framework possui muitas funcionalidades úteis que vale a pena estudar a fundo para montar um ambiente de testes em seu projeto Node.js. Lembrando que esse foi um exemplo com apenas um framework, e hoje já existem novos frameworks de testes para Node.js, para melhores detalhes segue abaixo os links:

*   [Nodeunit](https://github.com/caolan/nodeunit)
*   [Mocha](https://github.com/visionmedia/mocha "Github do Mocha")
*   [qUnit](https://github.com/kof/node-qunit "Github do qUnit")
*   [Expresso](http://visionmedia.github.com/expresso/ "Github do Expresso")
*   [Chai](http://chaijs.com/ "Github do Chai")

Bom esse foi o último episódio da série [Node.js para leigos](nodejs "Node.js para leigos"), espero que tenham gostado dessa iniciativa, galera compartilhem os links desse mini-curso.

Tive dificuldades em manter a disciplina de escrever periodicamente os posts e por isso peço desculpas pelos atrasos ocorridos nas etapas finais dessa série, pois realmente não foi fácil, mas consegui!

Obrigado a todos que seguiram no twitter, compartilharam os links e principalmente a todos os leitores que seguiram os exemplos desses posts. É muito gratificante ajudar as pessoas compartilhando conhecimento e fico muito feliz por ter ajudado alguns leitores com meus posts, pois foram deles que surgiram motivações para continuar até o fim dessa série. Valeu galera!