# Módulos essenciais para Node.js - Parte 1

![Node.js](../images/nodejs-logo.jpg "Node.js")

Atualmente em sua versão estável **0.10.12** muitas novidades surgiram para universo Node.js. Pouco a pouco novos projetos de grandes e pequenas empresas estão surgindo com esta tecnologia. Outro fator importamente é os surgimento de inúmeros módulos que visam resolver diversos tipos de problemas nesta plataforma.

O objetivo deste post é apresentar de forma bem resumida, os essenciais módulos do Node.js, para te dar um norte ao caminho do desenvolvimento de sua aplicação Node.js. Confira abaixo quem são:

#### Connect

Ele é criado em cima do [módulo http](http://nodejs.org/api/http.html) nativo do Node.js, com ele será possível criar sistemas com alto nível de configurações de servidor. Ele é base em diversos módulos para **desenvolvimento Web MVC**. Ele é recomendado para o desenvolvimento de projetos pequenos, que utilizam poucas rotas, ou projetos que utilizam diversos middlewares de configuração do servidor, por exemplo: **Logger, Gzip, JSON Parser, Session, Cookie, Static Cache** e muito mais. Um bom exemplo são os sistemas **single-page**, onde o foco de interação do sistema é centralizado em uma única página dinâmica ou um servidor de widgets.
Site: [http://www.senchalabs.org/connect](http://www.senchalabs.org/connect/)

#### Express

Ele utiliza o Connect por trás dos panos. Por isso é possível utilizar todo o poder do **Connect**, junto ao um roteador de url robusto. Sua simplicidade é muito semelhante ao [Sinatra do Ruby](http://www.sinatrarb.com/) e existem diversos projetos na web feitos por ele ([MySpaces](https://new.myspace.com), [LearnBoost](https://www.learnboost.com), [Storify](http://storify.com/), [TreinoSmart](http://treinosmart.com) e [outros](http://expressjs.com/applications.html)). Ele é um framework ideal para criação de projetos pequeno à grande porte, e toda a organização dos códigos fica a critério do desenvolvedor. Ou seja, você pode montar um projeto em **MVC (Model-View-Controller), MVR (Model-View-Routes), Single-page** e entre outros patterns.
Site: [http://expressjs.com](http://expressjs.com/)

#### Sails

Ele é mais novo framework MVC lançado para Node.js, sua estrutura e filosofia de desenvolvimento foi inspirado pelo [Rails](http://rubyonrails.org/), porém ele é focado no desenvolvimento de **APIs e comunicação real-time**, ou seja, suas rotas retornam tanto resultados no formato JSON (típicos de **API RESTFul**) como também são acessadas via **WebSockets** permitindo uma comunicação bi-direcional com servidor. Ele apesar de ser novo, é perfeito para desenvolver projetos de médio a grande porte.
Site: [http://sailsjs.org](http://sailsjs.org/)

#### Meteor

Este é um framework totalmente inovador focado no desenvolvimento de sistemas real-time. Ele utiliza o **Express + Socket.IO + Mongoose** internamente, permitindo o acesso direto ao banco de dados tanto no back-end como no front-end. Com apenas 3 arquivos **(JS/HTML/CSS)** já é possível criar uma mini aplicação 100% real-time nesta plataforma. Recomendado para o desenvolvimento de aplicações single-page que necessitam de interações em tempo real com o usuário.
Site: [http://meteor.com](http://meteor.com/)

#### Socket.IO

Com a popularização do **HTML5 WebSockets** tornou-se viável criar sistemas real-time. Porém o grande problema é que não são todos os browsers compatíveis com esta tecnologia. Foi apartir deste problema que nasceu o Socket.IO, um módulo **cross-browser** que permite comunicar-se entre cliente e servidor em real-time de uma forma mágica! Além do WebSockets, ele possui outros **transporters**: **FlashSocket, Ajax Long Polling, Forever Iframe, JSONP Polling.** Estes recursos visam manter uma comunicação real-time quando o browser não possuir nativamente o WebSockets, garantindo que até no **Internet Explorer 6** tenha interação em tempo real.
Site: [http://socket.io](http://socket.io)

#### Engine.IO

Este é a versão minimalista do **Socket.IO**. Sua interface foi projetada para ser o mais próximo do **padrão WebSockets do HTML5**. Ele possui apenas 3 **transporters**: **WebSockets, FlashSockets e JSONP Long Polling**. Este é o mais recente módulo real-time para Node.js criado pelos mesmos desenvolvedores do Socket.IO. Ele é um módulo **leve e de baixo nível**. Uma boa comparação é que assim como **Connect** esta para o **Express**, o **Engine.IO** esta para o **Socket.IO**.
Site: [https://github.com/LearnBoost/engine.io](https://github.com/LearnBoost/engine.io)

#### Underscore

Este módulo é o famoso **kit de ferramentas para o Node.js**. Com ele é possível manipular estruturas complexas com muita facilidade. Sua documentação tem diversas funções que fazem manipulações milagrosas com Arrays e objetos JSON. É um módulo recomendado para estar presente em qualquer projeto que exija manipulações complexas de estrutura de dados. Ele é compatível tanto no **Node.js como no Javascript client-side**.
Site: [http://underscorejs.org](http://underscorejs.org)

#### Moment

Se você precisa trabalhar com **parsers, validações e formatações de datas** ou até mesmo lidar com manipulações temporais. Este é o módulo perfeito para ti! Ele faz possui uma interface muito simples para lidar com o objeto Date do Javascript. Assim como o Underscore, ele é compatível tanto no **Node.js como Javascript client-side**. Esta é uma biblioteca recomendada para qualquer tipo de sistemas, afinal quem nunca precisou apresentar de forma amigável uma data no sistema?
Site: [http://momentjs.com](http://momentjs.com/)

Por enquanto é isso, em breve continuarei este post apresentando mais alguns módulos que vão te ajudar e muito no desenvolvimento de sua aplicação Node.js.