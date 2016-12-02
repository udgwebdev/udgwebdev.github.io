![Middlewares do Express](/images/express4.jpg "Middlewares do Express")

Neste post vou explicar uma dica simples e extremamente útil para os devs que trampam com aplicações web para Node.js. O assunto será sobre o que é e como implementar middlewares em um aplicação web que utiliza o framework Express.

## O que são middlewares?

Quando você cria uma rota em sua aplicação web, por exemplo:

``` javascript
 app.get("/home", function(request, response) {
   response.end("HOME");
 });
``` 

Você libera uma área de sua aplicação para que usuários acessem via browser ou outras aplicações acessem através de algum framework http client.
Quando essa rota é acessada, dois objetos principais surgem no callback dessa função, eles são:

1.  **request**: ele é responsável por carregar dados da requisição que esta sendo realizada, geralmente vem com dados do cliente e algums parâmetros de input, como querystrings, parâmetros de rotas e body de um formulário. Em resumo, este objeto contém diversos dados do cliente.
2.  **response**: este objeto permite que o servidor envie uma resposta para o cliente que realizou uma requisição. Aqui você pode enviar um html, json, dados via header, redirecionar a resposta para uma outra requisição, em geral este é um objeto focado em dar uma resposta para o cliente.

Este conceito de requisição e resposta não é do Express, e sim do [protocolo HTTP](http://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol), ou seja, outras plataformas e linguagens de programação que trabalham com este protocolo seguem essa mesmo mecanismo.
Geralmente quando criamos uma aplicação web, queremos não só criar rotas na aplicação como também queremos tratar de uma forma padrão todas as requisições e respostas das rotas, sem precisar tratar repetitivamente todos os códigos das rotas. Por exemplo, se quero configurar que todas as rotas retornem uma resposta em formato gzip, praticamente não é necessário rodar uma função de gzip no final de todas as rotas, você pode injetar uma função que intercepte todas as requisições de forma que converta uma resposta em gzip. Esse conceito de interceptar requisições é o que chamamos de middleware. Os middlewares são funções que podem tratar os inputs e outputs das rotas antes e ou depois que uma rota é processada, ou seja, você pode criar um middleware que intercepta e verificar se uma requisição esta enviando um header específico e que caso o mesmo não esteja enviando o header ela retorne uma tela de erro para o usuário, negando a requisição de acessar uma determinada rota da aplicação, neste caso você criou e inejtou um middleware que trata uma pré-requisição. Você também pode criar um middleware que no final de cada resposta de uma rota, retorne também um header com metadados da resposta, por exemplo, headers de paginação de dados. Neste caso estamos criando um middleware de pós-requisição. Não há limites ao injetar middlewares, você pode criar e configurar N middlewares em sua aplicação, porém é sempre bom entender o que são cada middlewares e principalmente a ordem que cada middleware é injetado afeta no processamento de uma rota, ou seja, caso você injete middlewares em uma ordem errada, como efeito colateral sua aplicação pode responder ou até mesmo não processar corretamente suas rotas, por isso é extremamente importante entender o que cada middleware faz e em que ordem injetá-los.

## Identificando os middlewares

Se você já criou alguma vez um app usando Express, consequentemente você precisou configurar alguns middlewares e talvez nem tinha percebido que eram middlewares. Veja o exemplo abaixo:

``` javascript
 var express = require("express");
 var morgan = require("morgan");
 var compression = require("compression");
 var app = express();
 // injetando alguns middlewares...
 app.use(morgan());
 app.use(compression());
 // criando a rota principal
 app.get("/", function(req, res) {
   res.json({status: "Hello!"});
 });
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });
``` 

Neste exemplo criei um simples app Express, usando 2 middlewares, um middleware é o módulo [compression](https://www.npmjs.com/package/compression) que compacta as respostas para formato gzip e o outro middleware é o módulo [morgan](https://www.npmjs.com/package/morgan) responsável por gerar logs de requisição.
Por último, criei uma rota que apenas retornar o json `{status: "Hello!"}` quando é acessado seu endereço [http://localhost:3000/](http://localhost:3000/).
**Obs.:** Caso queira rodar esse server, salve esse código com o nome `app.js`, em seguida rode os comandos:

``` bash
 npm install express compression morgan
 node app.js
``` 

Por último acesse no browser o endereço: [http://localhost:3000/](http://localhost:3000/).

Como já tinha dito antes, é muito importante entender o que cada middleware faz e principalmente se eles estão sendo injetados em uma ordem correta, senão um middleware vai sobreescrever a ação do outro ou sua aplicação vai responder de forma inesperada.
Quer ver na prática? Faça a seguinte alteração, mude o seu app.js para o seguinte código:

``` javascript
 var express = require("express");
 var morgan = require("morgan");
 var compression = require("compression");
 var app = express();
 app.get("/", function(req, res) {
   res.json({status: "Hello!"});
 });
 app.use(morgan());
 app.use(compression());
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });
``` 

Neste caso mudei a ordem dos middlewares morgan e compression, injetando-o depois da rota "/", ou seja, neste caso esses middlewares não irão gerar logs e respectivamente compactar a resposta para gzip, pois a rota vai responder antes da execução desses middlewares. Afinal uma rota também é considerada como um middleware.

## Implementando um middleware

Ao criar um app Express, de início você usará vários middlewares prontos, afinal é normal que sua aplicação gere logs de requisição, libere arquivos estáticos, reconheça alguns formatos de hypermidia (JSON, XML, HTML), converta dados de um formulário HTML para objeto JSON e faça várias outras tarefas que não listei aqui, assim como também execute tarefas específicas de sua aplicação.

Neste último caso é mais provavel que você crie o seu próprio middleware e injete-o em seu app Express. Para isso você precisa apenas criar uma função que contenha os parâmetros "function(request, response, next)", pois ela será usada como callback dentro da função app.use(). É importante que seu middleware dê continuidade aos próximos fluxos de middlewares da aplicação, e para isso você apenas precisa executar a função next() que dita que seu middleware terminou com sucesso seu processamento e repassa a vez para um outro middleware ou rota continuar sua execução. Caso você queira cancelar o fluxo de execução dos próximos middlewares (geralmente porque violou alguma regra de negócio da aplicação ou um erro inesperado aconteceu) você pode finalizá-lo executando alguma função de resposta através do objeto response. Agora chega de palavras, vamos direto ao código! A seguir criaremos um middleware verifica se uma requisição contém a querystring version, caso ela não seja detectada o middleware cancelará o fluxo retornando um json de erro com status 500.

``` javascript
 var express = require("express");
 var morgan = require("morgan");
 var compression = require("compression");
 var app = express();
 app.use(morgan());
 app.use(compression());
 app.use(function(req, res, next) {
   if (req.query.version) {
     next();
   } else {
     res.status(500).json({status: "Acesso negado!"});
   }
 });
 app.get("/", function(req, res) {
   res.json({status: "Hello!"});
 });
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });
``` 

Para testar, veja os resultados ao acessar [http://localhost:3000/](http://localhost:3000/) e [http://localhost:3000/?version=1](http://localhost:3000/?version=1).
Espero que tenham curtido o post e feedbacks serão sempre bem-vindos nos comentários abaixo! Até a próxima!