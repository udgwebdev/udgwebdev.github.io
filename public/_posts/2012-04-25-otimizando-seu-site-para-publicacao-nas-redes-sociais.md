# Otimizando seu site para publicação nas redes sociais

![Redes sociais](../images/redes-sociais.jpg "Redes sociais")

Hoje vou mostrar uma dica bem bacana para quem precisa divulgar de forma customizada seu próprio site ou blog nas redes sociais.

A dica por incrível que pareça é muito simples e faz total diferença na hora de publicar qualquer link do seu site nessa rede, e também em outras redes sociais como **LinkedIn e Google+** que exibem em seus posts um **thumbnail + descrição** do seu site.

Para customizar seu link em um post, primeiro adicione esses atributos na tag HTML:

``` html
 <html xmlns='http://www.w3.org/1999/xhtml'
       xmlns:og='http://ogp.me/ns#'>
``` 

Feito isso agora apenas adicione as metatags referentes ao **xmlns:og**:

``` html
 <meta property='og:title' content='Título do site' />
 <meta property='og:description' content='Um breve resumo da descrição do site' />
 <meta property='og:url' content='http://url-do-site' />
 <meta property='og:image' content='http://url-do-site/imagem.png'/>
 <meta property='og:type' content='website' />
 <meta property='og:site_name' content='Nome do site' />
``` 

Para você pegar de exemplo, veja como é o metatag deste blog:

``` html
 <html xmlns='http://www.w3.org/1999/xhtml' xmlns:og='http://ogp.me/ns#'>
   <head>
     <meta property="og:title" content="Otimizando seu site para publicação nas redes sociais | Underground WebDev">
     <meta property="og:description" content="A dica é muito simples e faz com que o link do seu site tenha melhor visibilidade nas redes sociais como Facebook, LinkedIn e Google+">
     <meta property="og:url" content="http://udgwebdev.com/otimizando-seu-site-para-publicacao-nas-redes-sociais">
     <meta property="og:site_name" content="Underground WebDev">
     <meta property='og:image' content='http://udgwebdev.com/images/udgwebdev-logo-128.png'/>
     <meta property="og:type" content="website">
   </head>
   <body>
     <!-- Código HTML deste blog... -->
   </body>
 </html>
``` 

Pronto! Agora seu site ou blog já estará apto para ser exibido de forma customizada e não aleatória pela maioria das redes sociais.

Caso queira realizar um debug do seu site, o Facebook possui uma área que faz essa tarefa de testar como é a exibição do seu site.

Para isso acesse esse link: [https://developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug "Facebook Debugger")