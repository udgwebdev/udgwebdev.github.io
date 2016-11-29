![Meteor e SEO](../images/meteor-seo.jpg "Meteor e SEO")

## Problema do Meteor em relação ao SEO

Se você trabalha ou já trabalhou desenvolvendo aplicações com o incrível framework Meteor, com certeza você já deve ter questionado sobre como posso tornar minha aplicação compatível com SEO. Afinal o Meteor renderiza templates de HTML no client-side, pelo qual apenas dados são trafegado via server-side. Atualmente os crawlers não indexam conteúdos de dinâmico vindos do protocolo DDP. Uma aplicação compatível com SEO precisa renderizar do server-side uma página HTML completa, para que os crawlers analisem o conteúdo dos HTMLs.

## A solução

Como solução, existe um package nativo do Meteor que força a renderização dos templates via server-side apenas para os crawlers, ou seja, sua aplicação vai renderizar templates no client-side para um usuário e via server-side um HTML será processado e renderizado quando um robot dos crawlers acessarem sua aplicação. Tecnicamente falando, esse package utiliza o PhantomJS (que é um browser headless) para renderizar o conteúdo dinâmico e em seguida retornar um HTML final para os crawlers indexarem-os. Tudo isso é possível usando o package `spiderable`.

## Hands on code!

Para mostrar na prática, primeiro vamos criar uma simples aplicação Meteor que terá algumas metatags e conteúdo mínimo a ser indexado pelos crawlers. Para criar uma aplicação Meteor execute os comandos:

``` bash
 meteor create myblog
 cd myblog
``` 

Em seguida, vamos editar o `myblog.html` para ter algum conteúdo e metatags relevantes para SEO:

``` html
 <head>
   <title>MyBlog</title>
   <meta name="description" content="Este é um blog criado em Meteor">
   <meta name="author" content="Caio Ribeiro Pereira">
   <meta name="viewport" content="initial-scale=1.0">
   <meta property="og:type" content="website">
   <meta property="og:title" content="MyBlog">
   <meta property="og:description" content="Este é um blog criado em Meteor">
   <meta property="og:site_name" content="MyBlog">
   <meta property="og:url" content="http://localhost:3000">
 </head>
 <body>
   <h1>Welcome to MyBlog!</h1>
   {{> article}}
 </body>
 <template name="article">
   {{#each posts}}
     <article>
       <h1>{{title}}</h1>
       <p>{{content}}</p>
     </article>
   {{else}}
     <p>Nenhum post publicado.</p>
   {{/each}}
 </template>
``` 

Repare que o conteúdo e metatags foram incluídas dinamicamente pelo server-side, ou seja, apenas os dados serão enviados do server para o client processar e renderizar os templates. Esses dados dinâmicos vamos incluir no `myblog.js` através de um json estático que servirá para o nosso exemplo:

``` javascript
 if (Meteor.isClient) {
   Template.article.helpers({
     posts: function () {
       return [
         {
           title: "Meu primeiro post",
           content: "Neste post vou falar pela primeira do meu primeiro post."
         },
         {
           title: "Último post do blog",
           content: "Infelizmente o blog acabou e este é meu último post."
         }
       ]
     }
   });
 }
``` 

De fato estamos apenas usando um JSON estático no servidor que também pode ser uma collection do MongoDB ou um JSON de um sistema externo, para o nosso exemplo, não importa de onde virão os dados, o que importa é eles sejam repassados do servidor para o cliente. Esse é um procedimento nativo do Meteor que também é uma característica muito comum em frameworks SPA (Single-Page Application).

Se você rodar o comando `meteor` e em seguida acessar o endereço [http://localhost:3000](http://localhost:3000), com certeza, você usuário vai visualizar os templates corretamente, exceto os crawlers...

...como dito antes, o package `spiderable` resolve esse problema de indexação de conteúdo para uma aplicação Meteor. Antes de instalar o `spiderable` é necessário instalar antes o PhantomJS, e para isso recomendo que acesse esse link [http://phantomjs.org/download.html](http://phantomjs.org/download.html) para instalar uma versão compatível com seu sistema operacional. Depois basta rodar o comando:

``` bash
 meteor add spiderable
``` 

E pronto! Você não precisa fazer nenhuma implementação de código adicional, este package se encarrega de fazer o resto.
Para verificar se ele esta funcionando basta acessar o endereço: [http://localhost:3000/?_escaped_fragment_=1](http://localhost:3000/?_escaped_fragment_=1) e veja se a mesma página foi renderizada em seu browser.

**Fontes:**

*   [METEOR #12: THE COMPLETE GUIDE TO SEO](https://gentlenode.com/journal/meteor-12-the-complete-guide-to-seo/20)
*   [Meteor and SEO](http://www.manuel-schoebel.com/blog/meteor-and-seo)
*   [Meteor SEO - Google Fetch & Render](https://meteorhacks.com/meteor-seo-google-fetch-and-render.html)