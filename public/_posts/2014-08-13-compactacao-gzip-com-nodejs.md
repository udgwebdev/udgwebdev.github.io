![Compactação gzip com Node.js](images/nodejs-logo.jpg "Compactação gzip com Node.js")

Para quem esta a procura de um framework extremamente leve e fácil de usar, recomendo utilizar o gzipme. Ele é um módulo Node.js que funciona via linha de comando (CLI) ou programaticamente via Node.js.
Seu objetivo é compactar arquivos em formato gzip seja via node.js, grunt ou até mesmo via terminal.
O projeto é recém nascido mas tem muito a ser desenvolvido. A princípio ele possui funções específicas para compactação gzip. Veja abaixo como utilizá-lo em uma aplicação Node.js.

Dentro do diretório raíz do seu projeto, acesse o terminal, instale-o via comando:

``` bash
 npm install gzipme --save
``` 

E utilize suas funções: ``` javascript
 // Carrega o módulo.
 var gzipme = require('gzipme');
 // Gera um gzip com o nome 'file.txt.gz'.
 gzipme("file.txt");
 // Gera um gzip sobreescrevendo o arquivo em parâmetro.
 gzipme("file.txt", true);
 // Gera um gzip com nome customizado.
 gzipme("file.txt","compress.txt");
 // Gera um gzip em modo Best Compress, que diminui o tamanho, porém a compressão é lenta.
 gzipme("file.txt", false, "best");
 // Gera um gzip em modo Fast Compress, que compressão é rápida, porém o tamanho do arquivo é maior.
 gzipme("file.txt", false, "fast");
``` 

Caso queira utilizar seu CLI instale-o em modo global:

``` bash
 npm install -g gzipme
``` 

Em modo CLI seus comandos são:

``` bash
 # Faz o mesmo que: 'gzipme("file.txt")'.
 gzipme file.txt
 # Faz o mesmo que: 'gzipme("file.txt", true)'.
 gzipme -o file.txt
 # Faz o mesmo que: 'gzipme("file.txt", "compressed.txt")'.
 gzipme -O compressed.txt file.txt
 # Faz o mesmo que: 'gzipme("file.txt", false, "best")'.
 gzipme -c best file.txt
 # Faz o mesmo que: 'gzipme("file.txt", false, "fast")'.
 gzipme -c fast file.txt
``` 

[Em seu repositório github](http://github.com/caio-ribeiro-pereira/gzipme) tem mais informações sobre suas releases e um todo-list com futuras features a serem implementadas.

Site oficial: [http://caio-ribeiro-pereira.github.io/gzipme](http://caio-ribeiro-pereira.github.io/gzipme).