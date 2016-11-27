![Estruturando uma aplicação Meteor 1.3](images/meteor-logo.jpg "Estruturando uma aplicação Meteor 1.3")

Desde a versão 1.3 do Meteor muitas melhorias surgiram, uma das principais mudanças foi a adoção do ES6, integração completa com NPM e uma nova estrutura de convenções de pastas para organizar sua aplicação Meteor.
Veja nesse post como estruturar sua aplicação Meteor 1.3 utilizando suas novas convenções oficiais:

``` bash
 imports/
   startup/ # Pasta referente a códigos que serão executados no startup do cliente e ou servidor
     client/
       index.js # Entry point responsável por carregar códigos client-side da pasta imports/ui/**/*
       routes.js # Código responsável por definir rotas na aplicação
     server/
       fixtures.js # Código responsável por alimentar o banco de dados em ambiente dev
       index.js # Entry point responsável por carregar códigos server-side da pasta imports/api/**/*
   api/ # Pasta para regras de negócio
     lists/ # Pasta referente a um model (ou collection)
       server/
         publications.js # Define publications do model
         publications.tests.js # Código de testes para publications do model
       lists.js # Definição do model
       lists.tests.js # Código de testes para o model
       methods.js # Methods para o model
       methods.tests.js # Código de testes para methods do model
   ui/ # Pasta sobre layouts e componentes para o cliente
     components/ # Pasta para componentes reusáveis
     layouts/ # Pasta com wrappers de componentes entre visual e comportamental
     pages/ # Entry point para renderização de páginas orientadas por routers
 client/
   main.js # Entry point client-side responsável por carregar o imports/startup/client/index.js
 server/
   main.js # Entry point server-side responsável por carregar o imports/startup/server/index.js
``` 

Essa nova estrutura ficou muito mais clara e tudo esta orientado aos comandos **import** e **export** do ES6, facilitando a organização clean do projeto e eliminando a má convenção do uso de códigos globais.
Para mais detalhes, recomendo a leitura desse link: [Meteor Application Structure](http://guide.meteor.com/structure.html "Meteor Application Structure").
Até a próxima!