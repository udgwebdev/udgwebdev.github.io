# Node.js para leigos - Child process

![Curso de Node.js](../images/nodejs-para-leigos.jpg "Curso de Node.js")

Hoje estudaremos um assunto muito interessante em que no Node.js sua manipulação é simples de aprender e sua utilização é de extrema importância. Falarei sobre manipulação de processos do sistema operacional, através da API nativa chamada: **Child Process**.

Primeiramente, quando utilizar Child Process?
Quando há a necessidade de utilizar programas ou comandos nativos do sistema operacional. Ao executar um programa, é criado um processo sobre esse programa, e todo processo é gerenciado pelo sistema operacional.

Exemplos de manipulação de processos: **executar um processo, executar processo em background, matar um processo, priorizar a execução de processos e muito mais.** Todo sistema operacional traz essas funcionalidades para gerenciá-lo, assim como a maioria das linguagens de programação possuem bibliotecas para manipulação do mesmo.

Com o Node.js é possível fazer o mesmo e também manipular processos filhos **(Child Process)** que são processos que compartilham memória com o processo pai, que no caso o processo pai sempre será a sua aplicação Node.js.

Na prática, compartilhar memória entre processos seria basicamente compartilhar variáveis entre os processos, fazendo com que ambos trabalhem e manipulem elas. Child Process é uma biblioteca nativa do Node.js, e sua [documentação completa esta aqui.](http://nodejs.org/api/child_process.html "Documentação Child Process no Node.js") Veja alguns exemplos práticos do que fazer com ele:

#### Utilizando comandos Exec

``` javascript
 var exec = require('child_process').exec;
 exec('pwd', function(error, stdout, stderr){
   console.log(stdout);
 });
``` 

Para quem não sabe, o **comando pwd é exclusivo dos sistemas UNIX**, e ele apenas informa o diretório atual que o usuário esta acessando. Repare também que a função callback do comando exec, retorna obrigatoriamente 3 variáveis: **error, stdout e stderr**. Respetivamente elas significam: **erro de execução (lança uma exceção), mensagem de saída, mensagem de erro.**

#### Spawn de processos

``` javascript
 var spawn = require('child_process').spawn
   , pwd = spawn('pwd');
 pwd.stdout.setEncoding('utf8');
 pwd.stdout.on('data', function(data){
   console.log(data);
 });
``` 

Neste exemplo, executamos o mesmo comando, porém fazendo um spawn de processos. A grande diferença entre **exec e spawn**, é que o exec faz uma execução simples e o spawn possui funções e eventos mais completos para realizar uma execução complexa de processos. É necessário informar o encoding no método **setEncoding()** para a variável **data** retornar uma String, **senão será retornado um objeto Buffer**. Outro detalhe é que o spawn possui as funções: **stdout, stderr, stdin, kill e pid**.

*   `stdout:` trata a saída da execução do processo;
*   `stderr:` trata a saída de erro na execução do processo;
*   `stdin:` trata a entrada de dados na execução do processo;
*   `pid:` retorna o PID, ID do processo no sistema operacional;
*   `kill:` mata o processo atual;

Todas elas funcionam através dos eventos: **on(‘data’), on(‘exit’), on(‘disconnect’) e on(‘close’)**.Um bom exemplo de saída de processos é o comando do código abaixo:

``` javascript
 pwd.stdout.on('data', function(data){
   console.log(data)
 });
``` 

Com isso, podemos cria aplicações que utilizem programas ou comandos do sistema operacional. Para finalizar, mostrarei uma simples aplicação de logger em tempo real, que basicamente faz um spawn de processos, executando o comando **tail -f** de um arquivo de logs gerado por uma outra aplicação.

Obs.: Este aplicativo só funciona em **ambiente UNIX, Linux ou MacOSX**, visto que o comando tail é específico desses sistemas operacionais.

Para executar esse código, execute primeiro o comando:

`npm install express`

``` javascript
 // app.js
 var express = require('express')
   , fs = require('fs')
   , app = express()
   , logFile = fs.createWriteStream('./app.log', {flags: 'a'});
 app.configure(function(){
   app.use(express.logger({stream: logFile}));
   app.use(express.methodOverride());
   app.use(app.router);
 });
 app.get('/', function(req, res){
   res.end("Hello World");
 });
 app.listen(3000, function(){
   console.log('Hello world running...');
 });
``` ``` javascript
 // log.js
 var spawn = require('child_process').spawn
   , tail = spawn('tail', ['-f', './app.log']);
 tail.stdout.setEncoding('utf8');
 tail.stdout.on('data', function(data){
   console.log(data);
 });
``` 

Abra dois consoles: um para executar o comando a aplicação web: `node app.js)` e no outro inicie a aplicação de logger: `node log.js`.

Ao acessar a aplicação web através do endereço: **http://localhost:3000** verifique no console da aplicação de logger as atualizações na tela com mensagens de logging da aplicação web que foi acessada.

É isso ae pessoal! Esse foi mais um capitúlo da série node.js para leigos, dúvidas, sugestões ou críticas comentem abaixo. Até a próxima!