[![Meteor](../images/meteor-logo.jpg "Meteor")](http://meteor.com) 

Depois de um [post de introdução sobre Meteor](../introducao-sobre-meteor "Introdução sobre Meteor"), iremos neste post aprender na prática, os primeiros passos sobre como construir uma aplicação utilizando o framework Meteor.

Construiremos um simples micro-blog, semelhante ao twitter, em que as **atualizações da timeline pública serão em real-time**. Outro detalhe faremos essa aplicação utilizando os conceitos básicos do Meteor, ou seja, não entraremos em detalhes com boas práticas e organizações de código (afinal esse será assunto para um próximo post), o projeto será criado com apenas **3 arquivos (1 HTML, 1 CSS e 1 Javascript)**.

Bom vamos começar? Instale o Meteor é super simples, para ele funcionar é necessário ter o Node e MongoDB instalado primeiro, caso não tenha o Node.js, veja nesse post: [Node.js para leigos instalação e configuração](../node-js-para-leigos-instalacao-e-configuracao "Node.js para leigos - Instalação e configuração") como instalá-lo e sobre o MongoDB recomendo que acesse seu site oficial e leia o [manual de instalação MongoDB](http://docs.mongodb.org/manual/installation/ "MongoDB Installation Guides").

**Atenção: O Meteor ainda não possui versão compatível com Windows, somente Mac, Linux e Unix. Este problema será resolvido apartir da versão 1.0, [prevista para o começo de 2014](http://www.meteor.com/blog/2013/10/01/geoff-schmidt-at-devshop-8-getting-meteor-to-10).**

Com o Node.js e MongoDB instalado execute os comandos abaixo para instalar o Meteor:

``` bash
 curl https://install.meteor.com | /bin/sh
``` 

Agora que temos o ambiente configurado, vamos criar o nosso micro-blog, chamarei nossa aplicação de **"microtwitter"**, mas você pode chamá-la do que quiser, apenas siga os comandos abaixo para criar o projeto:

``` bash
 meteor create microtwitter
 cd microtwitter
``` 

Repare que por default o Meteor criou os 3 arquivos iniciais (1 HTML, 1 CSS e 1 Javascript) e será em cima deles que codificaremos nosso app.

Vamos implementar inicialmente o layout da aplicação. Toda interação real-time no front-end é realizada através de um template engine. Criaremos os templates para cada área interativa do nosso sistema utilizando o template padrão do Meteor, o [Handlebars](http://handlebarsjs.com). No nosso app teremos um formulário para envio de mensagem e uma área de timeline de mensagens públicas. Edite o arquivo **microtwitter.html** inserindo o código abaixo:

``` html
 <head>
   <title>MicroTwitter</title>
 </head>
 <body>
  {{> formulario }}
  {{> mensagens }}
 </body>
 <template name="formulario"></template>
 <template name="mensagens"></template>
``` 

Essa será a estrutura do nosso layout, o que faremos agora é implementar os 2 templates internos. Então continuando no mesmo arquivo, criaremos o template de formulário:

``` html
 <template name="formulario">
   <div class="formulario">
     <h1>MicroTwitter</h1>
     <input type="text" id="nome" name="nome" placeholder="Nome">
     <textarea id="conteudo" name="conteudo" placeholder="Mensagem" maxlength="140"></textarea>
     <button id="enviar">Enviar</button>
   </div>
 </template>
``` 

Em seguida, criaremos o template da timeline de mensagens:

``` html
 <template name="mensagens">
   <div class="timeline">
     <h1>Timeline</h1>
     {{#each timeline}}
       <hr>
       <p class="mensagem">
         {{conteudo}}
         <br>
         <small>{{nome}} {{data}}</small>
       </p>
     {{else}}
       <p class="info">
         <small>Nenhuma mensagem publicada.</small>
       </p>
     {{/each}}
   </div>
 </template>
``` 

Caso queira adicionar um estilo no seu app, edite o **microtwitter.css** aplicando o CSS que desejar ou [utilize como referência esse aqui do meu Github](https://github.com/caio-ribeiro-pereira/microtwitter/blob/master/microtwitter.css), pelo qual utilizei para criar essa aplicação.

Nesta última etapa implementaremos as regras de negócio. A regra será simples, criaremos um formulário que em seu submit enviará os **campos nome e mensagem** para o banco de dados, que automaticamente atualizará a **timeline mensagens**. Essa atualização acontecerá em real-time sem criar código adicional para realizar a atualização, isso ocorre graças [ao conceito de reactive programming](http://docs.meteor.com/#reactivity) do Meteor, pelo qual alguns componentes já vem nativo esse pattern, no nosso código o namespace `Template` é 100% reativo. Vamos criar toda lógica dentro do **microtwitter.js**, pelo qual teremos nele, código compartilhado entre **client-side e server-side**. Veja como será o código do nosso app abaixo:

``` javascript
 Mensagem = new Meteor.Collection('mensagem');
 if (Meteor.isClient) {
   Template.formulario.events({
     'click #enviar': function(event, template) {
       var nome = template.find('#nome').value;
       var conteudo = template.find('#conteudo').value;
       Mensagem.insert({ nome: nome,
                         conteudo: conteudo,
                         data: new Date().toLocaleString() });
       event.preventDefault();
     }
   });
   Template.mensagens.timeline = function() {
     return Mensagem.find();
   };
 }
 if (Meteor.isServer) {
   Meteor.startup(function () {
     Mensagem.remove({});
     console.log("Rodando MicroTwitter");
   });
 }
``` 

Tecnicamente, o Meteor possui duas variáveis que informa se um trecho de código será executado no cliente (`Meteor.isClient`) ou no servidor (`Meteor.isServer`). No desenvolvimento de projetos grandes, essa não é a melhor prática, pois criaremos um código repleto de condicionais, mas fique tranquilo! Nos próximos posts exploraremos as boas práticas de organização e desenvolvimento com Meteor.

Uma das vantagens do Meteor é o compartilhamento de código entre cliente-servidor, ele faz essa magia através das variáveis globais do JavaScript, por exemplo, no nosso código a collection `Mensagem` esta compartilhada, e isso possibilitou executar queries tanto no cliente como no servidor utilizando apenas uma única instância.

Cada template possui funções **helpers e events**.

A convenção de helpers funciona da seguinte forma: `Template.nome_do_template.nome_do_helper` e no html do template você acessa esse helper chamando-a via tags do Handlebars, por exemplo, estamos chamando o helper `Template.mensagens.timeline` dentro da tag <template name="mensagens"> através do comando: `{{#each timeline}}`.

Já os `events` permite criar eventos para os elementos interno de um template. Ele segue a seguinte convenção: `Template.nome_do_template.events()`. Em seu paramêtro enviamos um objeto chave-valor, em que cada chave é referente a um `evento + elemento` do template a ser tratado e o valor é uma função callback do evento. No nosso app, criamos apenas um evento:

``` javascript
 Template.formulario.events({
   'click #enviar': function(event, template) {
     //... callback do evento
   }
 });
``` 

Outro detalhe é que por default no client-side já temos habilitado o jQuery e Underscore, e isso facilita capturar e manipular objetos DOM do HTML, como por exemplo, capturamos os os valores dos **campos nome e mensagem** do formulário.

Agora que terminamos nosso app, que tal testá-lo?
Para levantar o servidor execute o comando: `meteor` e em seguida acesse: [http://localhost:3000](http://localhost:3000) para brincar a aplicação. :)