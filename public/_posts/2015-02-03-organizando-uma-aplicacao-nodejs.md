![Organizando aplicações Node.js](images/nodejs-logo.jpg "Organizando aplicações Node.js")

Se você esta começando com Node.js e esta trabalhando utilizando um framework minimalista like Express ou Hapi, com certeza você cairá na armadilha de organizar os módulos de sua aplicação do jeito que quiser ou até mesmo criar tudo num único arquivo `app.js`, `server.js`, `main.js`, `index.js` ou etc.

Se você tem dúvida sobre como organizar os códigos de sua aplicação colocando-os em seus diretórios corretos, acompanhe neste post uma lista diretórios com seus respectivos significados.

## Diretórios chaves

*   **bin**: pasta responsável por manter código executável, geralmente ele é muito utilizado para manter executáveis do tipo CLI **_(Command Line Interface)_**.
*   **lib ou modules**: esta pasta serve para manter módulos independentes, ou seja, código utilitário que será usado em qualquer outro local da aplicação. No mundo Java ele pode ser comparado com os pacotes de classes **utils**.
*   **config**: neste local deve manter apenas arquivos de configuração, tais arquivos geralmente são ou em formato **json** ou **js dinâmico**. Arquivos que configuram endereços de sistemas externos, banco de dados, chaves públicas e privadas, login/senha de outras aplicações são exemplos do que se deve manter nesta pasta.
*   **controllers**: os **controllers** são módulos responsáveis por processarem algo para uma determinada rota de uma aplicação web. Ele é o **C** do clássico pattern [MVC](http://pt.wikipedia.org/wiki/MVC "Model-View-Controller").
*   **models ou collections**: este diretório deve conter apenas módulos que representem entidades de banco de dados, geralmente o nome **models** esta muito associado a tabelas de um banco de dados relacional e o nome **collections** que é pouco utilizado, esta associado as coleções de um banco de dados orientado à documentos, exemplo: [MongoDB](http://www.mongodb.org/) ou [CouchDB](http://couchdb.apache.org/).
*   **routes**: em aplicações grandes, é aconselhável criar a pasta routes para manter associações entre funções (conhecidas também pelo nome **actions**) dos **controllers** com rotas da aplicação. Para isso, você pode criar um diretório **routes** para manter códigos de cada grupo de rotas de um controller ou você pode manter tudo centralizado em um arquivo `routes.js` que é algo muito utilizado por exemplo pelo framework [Sails.js](http://sailsjs.org).
*   **public, static ou assets**: esses 3 nomes servem para o mesmo objetivo que é manter e servir arquivos estáticos (html, css, js, fonts, imagens, etc).
*   **views**: neste diretório deve manter arquivos de html dinâmico.
*   **test**: o próprio nome já diz tudo! Nesta pasta deve ser mantido todo tipo de código de testes da sua aplicação.
*   **initializer ou init**: neste diretório coloque apenas códigos que serão executados ao iniciar a aplicação.
*   **middlewares**: este diretório é utilizado frequentemente pelas aplicações web, pois seu objetivo é manter apenas códigos que fazem interceptações nas requisições da aplicação, caso queria entender mais sobre middlewares, leia o post: [Entendendo como funciona os middlewares do Express](entendendo-como-funciona-os-middlewares-do-express "Entendendo como funciona os middlewares do Express"), apesar do post focar no Express, os conceitos deste post servirão para aplicar em qualquer outro web framework de qualquer outra linguagem.
*   **bootstrap ou seed**: neste diretório coloque apenas scripts de população de base de dados, que são geralmente utilizados para criar bases com dados fakes para uso em ambiente de desenvolvimento.

#### Fontes:

#### 

*   [Node.js: estruturando suas aplicações](http://imasters.com.br/front-end/javascript/node-js-estruturando-suas-aplicacoes/)