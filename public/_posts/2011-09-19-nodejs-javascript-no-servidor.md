![Node.js - Javascript no servidor](images/nodejs-logo.jpg "Node.js - Javascript no servidor")

A tecnologias para web estão cada vez mais inovando com frameworks para desenvolvimento ágil e de forma escalável. O Node.js é um exemplo disso. Ele é framework web server-side para linguagem Javascript, isso mesmo! Javascript no servidor.

Lançado em 2009 por Ryan Lienhart Dahl, possui atualmente 14 colaboradores mantendo o projeto.

Foi escrito performaticamente com **C++** (+ou- 8000 linhas de código) e **Javascript V8** (+ou- 2000 linhas).

A tecnologia ganhou características como compilação just-in-time para uma rápida execução, o framework é todo modularizado possuindo diversos módulos de extensão com outras tecnologias ([https://github.com/joyent/node/wiki/modules](https://github.com/joyent/node/wiki/modules "Github do Node.js")), **non-blocking threads** que gerencia facilmente funções assíncronas e um paradigma de programação **orientada a eventos de I/O**, ou seja, métodos como desconectar, conectar entre outros, são tratados como eventos de **callback**, característica principal do **Javascript**.

Sua instalação é simples, principalmente para sistemas **Linux ou Unix**. E recentemente foi lançado uma versão instável para usuários **Windows**.

Abaixo segue um código simples, um **Hello World** em **Node.js**:

``` javascript
 // Carrega o módulo de servidor HTTP.
 var http = require('http');
 // Cria um serviço web para tratar a requisição de resposta da mensagem Hello World.
 http.createServer(function (request, response) {
   // Define os parâmetros de cabeçalho de resposta.
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Escreve uma mensagem de resposta do servidor.
   response.write('Hello World');
   // Responde para o cliente.
   response.end();
 });
 // Define a porta do servidor que será utilizado.
 http.listen(1337);
 // Imprime mensagem no terminal do servidor.
 console.log('Server running at http://localhost:1337');
``` 

Em breve farei mais posts explorando essa incrível tecnologia. Enquanto isso listarei abaixo alguns links úteis para estudo:

*   [Node.js Site oficial](http://nodejs.org/ "Site Oficial do Node.js")
*   [Livro Aplicações web real-time com Node.js](https://casadocodigo.refersion.com/l/630.1389 "Livro Aplicações web real-time com Node.js")
*   [Nettuts Plus](http://net.tutsplus.com/tutorials/javascript-ajax/this-time-youll-learn-node-js/ "Nettuts Plus - Node.js")
*   [How To Node](http://howtonode.org/ "Blog How to Node")
*   [Node Tuts Screencast](http://nodetuts.com/ "NodeTuts Screencasts")