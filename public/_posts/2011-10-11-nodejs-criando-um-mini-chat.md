![Node.js - Criando Mini-chat via Telnet](images/nodejs-logo.jpg "Node.js - Criando Mini-chat via Telnet")

Continuando os estudos sobre Node.js, hoje apresentarei um simples tutorial para desenvolver um mini-chat rodando via [telnet](http://pt.wikipedia.org/wiki/Telnet "Telnet"), para executá-lo através do protocolo TCP/IP.

Abaixo apresentarei passo-a-passo o tutorial, lembrando que o próprio código e seus respectivos comentários já dizem por si só o objetivo principal, mas caso tenha dúvidas entre em contato comigo ou deixe um comentário no final do post.

## Código-fonte:

``` javascript
 var net = require('net'); // Carrega o módulo TCP.
 var carrier = require('carrier'); // Carrega o módulo Carrier.
 var connections = []; // Cria um array de conexões.
 // Inicia o servidor.
 var server = net.createServer(function(conn){
   // Adiciona no array uma conexão de um usuário.
   connections.push(conn);
   // Evento que remove o usuário do array quando ele é desconectado.
   conn.on('close', function(){
     var pos = connections.indexOf(conn);
     if(pos >= 0){
       connections.splice(pos, 1);
     }
   });
   //Imprime no cliente a mensagem de início no mini-chat.
   conn.write('Node ChatnName: ');
   // Variável para identificar o nome do usuário conectado.
   var username;
   // No evento carry é que o mini-chat acontece.
   // A variável line é responsável por carregar as mensagens do chat.
   carrier.carry(conn, function(line){
     // Se a variável username estiver nula, é definido o um nome para ela.
     if(!username){
       username = line;
       conn.write("Hi! "+ username +"\n");
       return;
     }
     // Aqui comparo o valor de line com as palavras-chaves "end","quit" e "exit" que irão finalizar uma conexão.
     if(line == 'end' || line == 'quit' || line == 'exit'){
       conn.end();
       return;
     }
     // Se nenhuma das condições acontecer, então preparamos uma mensagem de feedback.
     var feedback = username +": "+ line +"\n";
     //Aqui ocorre o loop de distribuição de mensageria.
     connections.forEach(function(one_connection){
       one_connection.write(feedback);
     });
   });
 });
 // Inicia o servidor na porta 4000.
 server.listen(4000);
 // Mensagem de servidor ligado.
 console.log("Servidor mini-chat em execução.");
``` 

## Configurando

Para iniciar, será necessário instalar o módulo [Carrier](https://github.com/pgte/carrier "Node JS Carrier."), que irá ajudá-lo a gerenciar os múltiplos envios dos clientes para o servidor, separando-os linha a linha cada envio.

Via comando [NPM](npm-node-package-manager/ "NPM – Node Package Manager") instale esse módulo:

``` bash
 npm install carrier
``` 

## Executando

1.  Inicie o servidor: `node mini-chat.js`
2.  Abra um novo console para executar um cliente e execute o comando: `telnet [IP] [Porta]`, por exemplo: `telnet 127.0.0.1 4000`
3.  E brinque com o chat iniciando uma conversa entre dois consoles telnet.

Espero que tenham gostado e nos próximos posts mostrarei mais exemplos práticos explorando essa tecnologia. Obrigado e até a próxima!