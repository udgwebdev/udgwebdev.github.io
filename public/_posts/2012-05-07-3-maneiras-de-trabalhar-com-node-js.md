![Node.js](images/nodejs-logo.jpg "Node.js")

Andei estudando um pouco mais sobre DSLs para **Node.js** e descobri que existem **3 maneiras de trabalhar com Node.js** e que visa facilitar que programadores de outras linguagens se adaptem facilmente nessa plataforma.

Na verdade existem **3 linguagens de programação** que compilam em Javascript para trabalhar com Node.js, elas são: **Javascript, CoffeeScript e HaxeNode.**

#### Javascript

Por padrão **Node.js** compila código **Javascript** que é a sua **DSL nativa**. É claro que esse **Javascript** vem acompanhado com uma vasta lista de APIs e adaptações preparadas para trabalhar no server-side de uma aplicação. Abaixo segue um exemplo de um servidor HTTP apresentando o clássico **Hello World**:

``` javascript
 var http = require('http');
 var server = http.createServer(
   function (req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello World\n');
   }
 );
 server.listen(4000);
 console.log('Hello World executando em http://localhost:4000');
``` 

#### CoffeeScript

Se você adora trabalhar com uma síntaxe mais enxuta, inspirada nas linguagens **Ruby e Python**, com certeza **CoffeeScript** será ideal para você. Ele na prática apenas compila e traduz código **CoffeeScript** para **Javascript** no final. É uma boa escolha nos casos em que você precisa desenvolver aplicações grandes e complexas, dando preferência em trabalhar de forma organizada e com diversas funcionalidades extras que visam facilitar o seu dia-a-dia de programador, tanto na produtividade quanto manutenção de código. Veja abaixo o mesmo exemplo de **Hello World** em versão **CoffeeScript**:

``` ruby
 http = require 'http'
 http.createServer (req, res) ->
   res.writeHead 200, 'Content-Type': 'text/plain'
   res.end 'Hello, World!'
 .listen 4000
 console.log 'Hello World executando em http://localhost:4000'
``` 

#### HaxeNode

Confesso que essa DSL me surpreendeu, totalmente nova e veio com intuito de cativar os programadores do **Java, C++ e C#**, pois o objetivo do **HaxeNode** é fornecer as principais características do **paradigma orientado à objetos** para o Node.js.

De fato, com ele você conseguirá utilizar **Generics, Tipagem forte de variáveis, Enumerators, declaração e pacotamento de classes, Iterators, Classes Inline e Interfaces.** Para finalizar segue abaixo um exemplo de Hello World feito com HaxeNode:

{% highlight java%} import js.Node; class Hello { public static function main() { var server = Node.http.createServer(function(req:NodeHttpServerReq, res:NodeHttpServerResp){ res.setHeader("Content-Type","text/plain"); res.writeHead(200); res.end('Hello World\n'); }); server.listen(4000,"localhost"); trace('Hello World executando em http://127.0.0.1:1337/'); } }

#### Referências

*   [Node.js](http://nodejs.org/ "Node.js")
*   [CoffeeScript](http://coffeescript.org/ "CoffeeScript")
*   [HaxeNode](http://haxenode.org/ "HaxeNode")

Com esses exemplos que apresentei, não tem mais desculpas para não aprender Node.js! Entendido? See you on my next post!