![Video Streaming com Node.js](/images/nodejs-logo.jpg "Video Streaming com Node.js")

Streaming de videos é algo muito comum nos dias de hoje, afinal quem é que não conhece Netflix, Vimeo ou pelo menos Youtube? (E o Redtube e XVideos? hahahaha) Em geral o que todos esses sites tem em comum é que possuem servidores que realizam streaming de video.

Mas o que é Streaming? Não sou expert nesse assunto, mas basicamente o Streaming é uma funcionalidade de processar dados (geralmente grandes) em pedaços, para que eles sejam enviados ou escritos aos poucos. Um bom exemplo disso são os videos e audios, eles geralmente são arquivos grandes, algo que realizando um download normal, vai te fazer esperar alguns minutos ou horas (dependendo do tamanho do arquivo e principalmente da velocidade de sua banda larga). Nesse caso o uso do streaming, vai te permitir consumir esses arquivos aos poucos, sem esperar muito tempo comparado com o download normal, afinal será feito downloads de pedaços menores desse arquivo que será suficiente para você ir consumindo-o aos poucos também.

Por exemplo: Quem nunca viu o youtube carregando partes de um video, suficiente para que você já assista os primeiros segundos desse video, enquanto ele vai baixando mais pedaços desse video, até montar completamente o video? Quem nunca viu um video travar pois ele carregou poucos dados pelo qual você já assistiu e teve que esperar o carregamento de mais dados durante uma tela congelada?

Tudo isso foi realizado via servidor de streaming de dados aliado com o recurso de [Chunked Transfer Encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding) do protocolo HTTP 1.1.

O Node.js possui nativamente o módulo [Stream](https://nodejs.org/api/stream.html) que permite trabalhar com streaming de arquivos, também existe um ebook free criado pelo @substack, que realmente explica bem detalhado como trabalhar com streaming no Node.js, recomendo muito essa leitura: [stream-handbook](https://github.com/substack/stream-handbook).

Depois dessa introdução, vou mostrar em código um simples servidor de video streaming que você pode criar e usar em sua casa, para por exemplo renderizar seus videos em sua rede wifi.

Para começar, rode esses comandos para criar o projeto inicial:

``` bash
 mkdir videoflix
 cd videoflix
 npm init
``` 

Após preencher os campos para criar o `package.json`, instale o [Express](https://expressjs.com/) para que possamos criar algumas rotas dinâmicas em nossa aplicação:

``` bash
 npm install --save express
``` 

Agora crie o `index.js` que será o código backend do nosso servidor de streaming

``` javascript
 const fs = require('fs');
 const express = require('express');
 const app = express();
 app.get('/', (req, res) => {
   fs.readFile('./index.html', (err, html) => res.end(html));
 });
 app.get('/movies/:movieName', (req, res) => {
   const { movieName } = req.params;
   const movieFile = `./movies/${movieName}`;
   fs.stat(movieFile, (err, stats) => {
     if (err) {
       console.log(err);
       return res.status(404).end('<h1>Movie Not found</h1>');
     }
     // Variáveis necessárias para montar o chunk header corretamente
     const { range } = req.headers;
     const { size } = stats;
     const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
     const end = size - 1;
     const chunkSize = (end - start) + 1;
     // Definindo headers de chunk
     res.set({
       'Content-Range': `bytes ${start}-${end}/${size}`,
       'Accept-Ranges': 'bytes',
       'Content-Length': chunkSize,
       'Content-Type': 'video/mp4'
     });
     // É importante usar status 206 - Partial Content para o streaming funcionar
     res.status(206);
     // Utilizando ReadStream do Node.js
     // Ele vai ler um arquivo e enviá-lo em partes via stream.pipe()
     const stream = fs.createReadStream(movieFile, { start, end });
     stream.on('open', () => stream.pipe(res));
     stream.on('error', (streamErr) => res.end(streamErr));
   });
 });
 app.listen(3000, () => console.log('VideoFlix Server!'));
``` 

Para garantir que o servidor funcione, crie a pasta `movies` na raíz do projeto, e inclua alguns videos em formato MP4\. Para evitar problemas com nomes de arquivos, recomendo que renomeie os videos de mp4 de forma que não contenha espaços em branco.

Em seguida, crie o `index.html` que terá a parte visual para renderizar o player de video gerado nativamente pelo HTML5:

``` html
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>VideoFlix</title>
     <meta name="viewport" content="width=device-width,initial-scale=1">
   </head>
   <body style="text-align:center">
     <div style="margin:0 auto;">
       <!-- Mude o src dessa tag para o nome do video que você possuir -->
       <video src="/movies/300.mp4" controls width="640" height="480"></video>
     </div>
   </body>
 </html>
``` 

Para testar esse server, rode o comando `node index.js`, acesse [localhost:3000](http://localhost:3000), se tudo estiver ok, um player do HTML5 será renderizado no seu browser, permitindo que você visualize o filme que você incluir no seu servidor. Até a próxima!