![Node.js e Nginx](images/nodejs-nginx.jpg "Node.js e Nginx")

Nesse post falarei um pouco mais sobre a união entre Node.js e Nginx, mostrando as vantagens desse casamento e como implementar essa dupla corretamente.

O objetivo dessa integração visa aumentar performance de uma aplicação pelo qual criaremos um **proxy server** do Nginx com Node.js e também um **static server** pelo qual é delegado todo processamento de arquivos estático para o Nginx, deixando apenas que o Node.js cuide do processamento de suas rotas, diminuindo o número de requisições diretas na aplicação.

**Atenção:** Não entrarei em detalhes sobre como instalar o Nginx em sua máquina, para instalá-lo recomendo que acesse seu site oficial: [http://nginx.org](http://nginx.org). Também recomendo que leia sua [Wiki](http://wiki.nginx.org/Main) que contém diversas dicas de como configurá-lo. A versão utilizada neste post é a versão **1.5.2**, recomendo que **não** utilize versões anteriores a esta, pois provavelmente não irá funcionar a dica de configuração que explicarei a seguir.

Agora que temos o Nginx instalado e funcionando corretamente em sua máquina, vamos configurá-lo para que ele comece a servir arquivos estáticos de nossa aplicação, tudo isso será feito dentro de seu arquivo principal chamado `nginx.conf`. A localização deste arquivo varia de acordo com o sistema operacional, então recomendo que leia sua [documentação oficial](http://nginx.org/en/docs) para descobrir onde ele se encontra.

Abaixo apresento uma versão simplificada de configuração do Nginx. Esta configuração fará o Nginx servir os arquivos estáticos ao invés do Node.js, e para finalizar aplicamos um **proxy** no Nginx para que ele redirecione para Node.js quando um usuário acessar uma rota da nossa aplicação.

``` nginx
 worker_processes 1;
 events {
   worker_connections 1024;
 }
 http {
   include mime.types;
   default_type application/octet-stream;
   sendfile on;
   keepalive_timeout 65;
   gzip on;
   server {
 listen 80;
 server_name localhost;
 access_log logs/access.log;
 location /static {
 root /meuapp/public;
 expires max;
 }
 location / {
 proxy_pass http://localhost:3000;
     }
   }
 }
``` 

Praticamente adicionamos algumas melhorias em cima das configurações padrões do `nginx.conf`. Com o objetivo de otimizar o servidor estático, habilitamos **compactação gzip**, através do trecho: `gzip on` e criamos dois `location` dentro de `server`. O primeiro `location` é responsável por servir conteúdo estático. ``` nginx
 location /static {
   root /meuapp/public;
   expires max;
 }
``` 

É dentro dele definimos a localização da pasta `public` da nossa aplicação através do trecho: `root /meuapp/public`. Esta localização definida no item `root` se baseia no endereço onde fica a pasta `public` do seu sistema operacional, ou seja, em `root /meuapp/public` estou assumindo que a pasta `meuapp` esta localizada na raíz do sistema operacional (geralmente sistemas **Linux, Unix e MacOSX** utilizam este padrão de endereço). Se o seu sistema é **Windows** altere o endereço para o padrão de diretórios dele, que é algo semelhante a `root C:/meuapp/public`. Também aplicamos dentro desse `location` um **cache** simples dos arquivos através do item: `expires max`.

No último `location`, aplicamos o **proxy server**, o item `proxy_pass` praticamente faz um redirecionamento para as demais rotas da aplicação e esse redirecionamento vai para o endereço: `http://localhost:3000`. ``` nginx
 location / {
   proxy_pass http://localhost:3000;
 }
``` 

Agora que já configuramos o Nginx, vamos criar uma simples aplicação em Node.js. Crie o arquivo dentro da pasta `/meuapp` e também crie a pasta `/meuapp/public`. Abaixo segue o código-fonte da aplicação Node utilizando Express:

``` javascript
 // Arquivo: app.js
 var express = require('express')
   , app = express();
 app.use(express.favicon());
 app.use(express.logger('dev'));
 app.use(express.static(__dirname + '/public'));
 app.get('/node', function(req, res){
   var html = "<h1>Aqui é Node.js!</h1>"
   + "<h1><a href='/static/nginx.html'>Ir para Nginx</a></h1>";
   res.send(html);
 });
 app.listen(3000);
``` 

Vamos criar o arquivo `nginx.html` dentro da pasta `/meuapp/public/static`, para que este arquivo seja servido via Nginx.

``` html
 <h1>Aqui é Nginx</h1>
 <h1><a href="/node">Ir para Node.js</a></h1>
``` 

Pronto! Criamos uma aplicação em Node.js que utiliza o Express, para rodá-lo, instale primeiro: `npm install express --save`
Agora execute: `node app.js`.
Acesse no seu browser: `http://localhost:3000` e clique em ambos os links. Veja dessa vez os logs registraram acessos nas rotas: `/node` e `/nginx.html`. [![Node.js servindo arquivo estático](images/node-logger-sem-nginx-static-small.jpg)](images/node-logger-sem-nginx-static.jpg)

[](images/node-logger-sem-nginx-static.jpg)

Isto é normal, visto que até agora o Node.js esta servindo arquivo estático e o Nginx não esta rodando seu **proxy server** por um motivo: você está acessando diretamente o servidor Node.js através da porta 3000.

Agora que temos o Nginx configurado, que tal testar essa integração? Reinicie o Nginx através do comando: `nginx -s reload`. E acesse sua aplicação através do novo endereço: `http://localhost`.

[![Nginx servindo arquivo estático](images/node-logger-com-nginx-static-small.jpg)](images/node-logger-com-nginx-static.jpg)

Dessa vez o seu log da aplicação Node.js vai apenas registrar acessos na rota `/node`, deixando que a rota `/nginx.html` seja acessada pelo Nginx.