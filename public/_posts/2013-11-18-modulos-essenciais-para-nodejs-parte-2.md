# Módulos essenciais para Node.js - Parte 2

![Node.js](../images/nodejs-logo.jpg "Node.js")

Dando [continuidade ao post anterior](../modulos-essenciais-para-nodejs-parte-1), apresentarei mais alguns essenciais módulos do Node.js. Afinal eles serão de grande utilidade para você no decorrer do desenvolvimento de sua aplicação com Node.js. Veja abaixo quem são:

#### Mocha

Framework essencial para qualquer projeto Node.js, ele é um ambiente completo para desenvolvimento de testes. Ele possui recursos para **testes unitários, cobertura de testes, testes assíncronos, file watcher, notificações com growl, alerta de testes lentos, diversos formatos de report de testes entre outros**. Com ele você pode trabalhar com testes no estilo BDD ou TDD.
Site: [http://visionmedia.github.io/mocha](http://visionmedia.github.io/mocha/)

#### Gzipme

Para quem precisa compactar arquivos em formato gzip de forma rápida e simplificada, este módulo será perfeito! Ele funciona de duas formas: **código javascript ou CLI (Command Line Interface)**. Com ele você pode compactar gerando uma versão **.gz**, compactar sobrescrevendo o mesmo arquivo ou compactar gerando um novo nome. Ele é um módulo extremamente leve e é ideal para compactar arquivos que para enviarem para **storage cloud** como por exemplo, **Amazon S3 e também é compatível com GruntJS**.
Site: [http://caio-ribeiro-pereira.github.io/gzipme](http://caio-ribeiro-pereira.github.io/gzipme/)

#### Restfy

Se você precisa criar uma API minimalista, o Restfy vai atender suas necessidades. Seu stack de configurações e API é bem parecida com o **Express**, fazendo com que você se familiarize rapidamente com este módulo. Além de criar API no servidor, ele também **possui módulos client-side para consumir dados via HTTP**
Site: [http://mcavage.me/node-restify/](http://mcavage.me/node-restify/)

#### Sequelize

Este ORM é a solução que você precisa para conectar sua aplicação Node com banco de dados relacional. Ele possui uma API e convenções herdadas do **ActiveRecord do Rails**, e atualmente ele é compatível com os banco de dados: **MySQL, SQLite e PostgreSQL**.
Site: [http://sequelizejs.com](http://sequelizejs.com)

#### HarpJS

Criado pela equipe do Mozilla, o HarpJS é um servidor/gerador de conteúdo estático, **perfeito para criar sites ou blogs que utilizam apenas HTML, CSS, JS**. O mais interessante dele, é que ele prepara todo arquivo estático para produção (**Minification, CSS compilation, JS Concatenation**). E você pode utilizar **Jade, EJS, Markdown, Stylus, LESS ou CoffeScript** para criar seu projeto.
Site: [http://harpjs.com](http://harpjs.com/)