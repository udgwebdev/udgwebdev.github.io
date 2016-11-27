![Meteor](images/meteor-logo.jpg "Meteor")

Veja nesse post bons motivos para você aprender [Meteor]({{site.url}}/meteor) agora!

## Fullstack JavaScript

A principal característica é a de **framework fullstack**, ou seja, ao instalar ele, você terá um ambiente completo pra desenvolver e gerenciar uma aplicação desde o banco de dados MongoDB, backend Node.js, frontend JavaScript e build mobile usando Cordova do Phonegap. Algo bem interessante do frontend Meteor é que você nem vai precisar automatizar tarefas de front-end (ele já faz tudo por você!), **por default ele já compila uma versão minificada de código JavaScript, CSS, HTML**, também roda em **ambiente de desenvolvimento um live reloading da aplicação**, permitindo desenvolver olhando alterações no browser de forma instantânea e também é possível brincar com alguns pré-processadores de CSS, HTML e JS. Basta procurar e instalar um package referente a eles para sua aplicação.

## Código Isomórfico

O conceito básico de código isomórfico é você criar um código cuja sua lógica seja executada de forma universal, por exemplo, o mesmo código rodando no front-end e back-end. Graças ao Node.js é possível hoje brincar com o mesmo JavaScript de browser no server-side. Com o Meteor todo código que você criar, poderá ser facilmente executado no front-end, back-end ou em ambos. Basta entender onde o contexto da lógica do seu código vai fazer sentido ser executada. De acordo com a convenção de diretórios do Meteor, se você colocar um código na **pasta server**, ele será rodado apenas no server-side, se colocá-lo na **pasta client**, ele será executado apenas no client-side, agora se você criar por exemplo uma pasta com qualquer outro nome diferente de **server, client ou tests**, esse código será isomórfico e poderá ser acessado e executado tanto no client-side como no server-side. Outra coisa maravilhosa do Meteor é que **as collections do MongoDB são isomórficas**, ou seja, você pode criar um model acessível tanto pelo client-side como server-side. Essa mágica da API MongoDB no client-side ocorre através do **[framework minimongo](https://www.meteor.com/mini-databases)**, que basicamente faz um ajax no server para executar uma funcionalidade do MongoDB.

## Prototipagem extremamente rápida

Este é um framework focado em prototipagem rápida, ou seja, você passará mais tempo no desenvolvimento do front-end da aplicação pelo qual agrega mais valor na entrega de resultados, do que perder tempo configurando todo o environment da aplicação. O **Meteor já vem production ready** e com convenções fáceis de aprender e bem intuitivas. **Se você já sabe JavaScript, você terá uma curva baixa de aprendizado** e sentirá a sensação de alta produtividade a cada nova feature que você lançar, usando poucas linhas de código!

## Mobile ready

Desde a versão 1.0, o [Meteor]({{site.url}}/meteor) fez uma integração inteligente com o Cordova (que também é utilizado pelo Phonegap). Isso permitiu que em poucas configurações você desenvolva aplicações mobile híbridas. [Basta criar sua webapp e em poucos comandos, você consegue fazer um build do front-end da aplicação para Android e ou iOS](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration). E também você pode utilizar plugins do phonegap em seu app meteor.

## Realtime e reativo por default

Essas são as duas principais características deste framework. Graças a junção [protocolo DDP](https://www.meteor.com/ddp) (Distributed Data Protocol que usa SockJS para comunicação realtime) e o [design pattern Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming), este framework vai permitir que sua aplicação faça consultas e atualizações de dados do MongoDB em realtime de forma inteligente.

## Hospedagem free para aplicações pequenas

Você pode lançar uma versão beta ou staging de [sua aplicação através da infraestrutura free do Meteor](http://docs.meteor.com/#/full/deploying), os servers são de configurações básicas, permitindo hospedar apenas aplicações de pequeno porte. Você também pode adicionar gratuitamente um domínio próprio nele.

## Framework Front-end flexível

O [Meteor]({{site.url}}/meteor) possui um front-end flexível, ou seja, não necessariamente você precisa trabalhar com o framework default Blaze, se você quiser, você pode [facilmente substituí-lo pelo Angular ou React](http://info.meteor.com/blog/comparing-performance-of-blaze-react-angular-meteor-and-angular-2-with-meteor), que são frameworks frontend populares.

## Tem seu próprio package manager

Apesar do [Meteor]({{site.url}}/meteor) ser escrito em [Node.js]({{site.url}}/nodejs), ele possui seu próprio package manager, oficialmente conhecido pelo nome [Atmosphere](http://atmospherejs.com/). Com uma lista grande de componentes prontos para você incluir em seus apps de forma simples e fácil. E você também pode utilizar módulos do NPM, desde que esses módulos sejam compatíveis com o contexto do [Meteor]({{site.url}}/meteor).

Gostou desse posts? Conheça [6 cases Meteor made in Brazil]({{site.url}}/6-cases-meteor-made-in-brazil) e veja mais posts sobre [Meteor aqui]({{site.url}}/meteor). See ya!