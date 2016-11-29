[![Meteor](../images/meteor-logo.jpg "Meteor")](http://meteor.com) 

### O que é PubSub?

O PubSub (Publications and Subscriptions), para quem não conhece, é um pattern cujo conceito é realizar mensageria através de dois personagens: um publisher (o publicador) e um subscriber (o assinante).

Esse conceito é utilizado em vários tipos de aplicações, como por exemplo: **newsletters, chats e leitores de RSS.** Ele funciona da seguinte maneira: o publisher é o responsável por emitir dados para todos os seus subscribers, e também um subscriber pode enviar mensagens para o publisher, fazendo com que um publisher trabalhe de forma mais específica com cada subscriber. Por exemplo, em um sistema newsletter, você, usuário, é o subscriber e, para receber atualizações desse serviço (neste caso receber atualizações de um publisher), você precisa informar seu e-mail para que ele saiba quem você é — ou seja, enviar alguns dados para o publisher, para que ele passe a enviar atualizações para seu e-mail de forma customizada.

O Meteor já vem com uma biblioteca nativa de PubSub, então implementá-lo é bem tranquilo, além do mais, é uma obrigação fazer isso para que seja viável sincronizar dados entre cliente e servidor em um ambiente de produção.

Trabalhar corretamente com PubSub no Meteor vai garantir o desenvolvimento de uma aplicação sustentável, visto que uma implementação mal-feita vai tornar o sistema uma carroça, de tão lenta que será a velocidade na sincronização dos dados. Outro detalhe de extrema importância é a segurança dos dados, pois uma publicação que liberar dados errados para o usuário vai gerar vazamento de informações na aplicação.

### Entendendo seu mecanismo

Imagine um cenário em que temos uma rede social, semelhante ao Twitter, sendo acessada por mais de 100 mil usuários. Nela, temos um usuário seguindo 1000 usuários populares. Como sabemos, o objetivo do PubSub é sincronizar dados entre o servidor MongoDB e o cliente Minimongo, o que faz com que o Meteor trafegue apenas dados seguindo [seu princípio data on-the wire](http://udgwebdev.com/introducao-sobre-meteor).

Essa sincronização se faz através do protocolo DDP (**Data Distribution Protocol**). Este protocolo é o que faz a biblioteca PubSub enviar e receber dados através de objeto JSON em tempo real utilizando o framework SockJS por trás dos panos.

Voltando ao cenário em que temos uma rede social, queremos exibir uma timeline com os últimos posts de cada um dos 1000 usuários que o usuário principal esta seguido. O mundo ideal é sincronizar o número correto de posts para cada timeline dos usuários da rede, assim, evita-se desperdício de dados, evita gargalo na aplicação e diminui o tempo de resposta e carregamento dos dados. Porém por default o Meteor já vem com o package **autopublish** habilitado, com o intuito de evitar que você crie as funções de PubSub e foque apenas na prototipação da aplicação. Por um lado isso é bom, pois você vai trabalhar no que realmente importa, mas você após terminar a prototipagem, jamais esqueça de criar as respectivas funções PubSub de sua aplicação, afinal não é recomendado usar o **autopublish** em ambiente de produção, visto que ele **não vai criar uma sincronização de dados de forma correta e controlada**. Ele praticamente vai sincronizar sua base inteira de dados entre cliente e o servidor.

Essa sincronização padrão do **autopublish** em ambiente de produção, além de lenta, libera toda base de dados para qualquer usuário acessá-la pelo browser, ou seja, **é uma puta brecha de segurança!**.

### PubSub na prática!

Acredito que depois dessa pequena explicação, você não deixará sua aplicação Meteor nas mãos, e agora, vou mostrar como criar as funções de PubSub em uma aplicação Meteor.

Se você já terminou a prototipagem de sua aplicação Meteor, agora terá que focar em otimizar e preparar sua aplicação para ambiente de produção. Há várias dicas de otimizações que publicarei no futuro, por enquanto falarei apenas sobre PubSub. Acesse o console do seu sistema e digite o seguinte comando:

``` bash
 meteor remove autopublish
``` 

Feito isso, vamos focar em criar funções PubSub. Pegarei como exemplo [os códigos do MicroTwitter](https://github.com/caio-ribeiro-pereira/microtwitter), que utilizei nos posts anteriores. Criarei um PubSub entre o cliente e servidor na função principal que lista os posts na timeline, veja como fica:

``` javascript
 Mensagem = new Meteor.Collection("mensagem");
 if (Meteor.isClient) {
   Template.formulario.events({
     'click #enviar': function(event, template) {
       var nome = template.find('#nome').value;
       var conteudo = template.find('#conteudo').value;
       Mensagem.insert({nome: nome,
                        conteudo: conteudo,
                        data: new Date().toLocaleString()});
       event.preventDefault();
     }
   });
   Template.mensagens.created = function() {
     Meteor.subscribe("mensagens");
   };
   Template.mensagens.timeline = function() {
     return Mensagem.find({});
   };
 }
 if (Meteor.isServer) {
   Meteor.startup(function () {
     Meteor.publish("mensagens", function () {
       return Mensagem.find({});
     });
     console.log("Rodando MicroTwitter");
   });
 }
``` 

Repare que foi criado duas funções: **Meteor.subscribe** (no client-side) e **Meteor.publish** (no server-side). Essas funções criaram uma sincronização de dados entre cliente com o servidor. Uma boa prática é que esse tipo de sincronização seja executado antes de aparecer algum resultado na tela, com isso foi necessário implementar essas funções de PubSub em cima de funções que são executadas antes de carregar um template no cliente e no início da aplicação no servidor, ou seja, pegando nosso exemplo, foi criado uma publisher dentro do callback da função **Meteor.startup** e um subscriber no callback de uma função que é executada antes de renderizar um template - em **Template.mensagens.created**.

Você também pode passar argumentos através da função **Meteor.subscribe**. Por exemplo, vamos supor que agora em nossa timeline listaremos os posts de um usuário, fazendo com que seja sincronizado posts exclusivos deste usuário, neste caso você pode enviar argumentos através de um subscriber para que um publisher receba-os e faça bom uso desses argumentos.

``` javascript
 // No cliente
 Template.mensagens.created = function() {
   Meteor.subscribe("mensagens", "nome_do_usuario");
 };
 Template.mensagens.timeline = function() {
   // Após sincronizar o PubSub
   // esta função vai retornar o
   // mesmo resultado da função
   // Mensagem.find({nome: nome});
   // do servidor.
   return Mensagem.find({});
 };
 // No servidor
 // Usando o "nome_do_usuario" de um subscriber
 Meteor.publish("mensagens", function (nome) {
   return Mensagem.find({nome: nome});
 });
``` 

Pronto! Com isso você já esta preparado para trabalhar com PubSub numa aplicação Meteor. Até a próxima!