![WebScraping com Node.js](/images/web-scraping.jpg "WebScraping com Node.js")

WebScraping para quem não conhece, é uma **técnica em que se extrai dados dentro de um documento, geralmente, documento HTML.**
Primeiro você analisa a estrutura de uma página para identificar padrões de dados que deseja extrair e em seguida faz um scraping disso.

Pra fazer essa magia, é necessário usar um **framework para fazer request HTTP**, eae com o resultado em mãos, que é uma string da página, você utiliza um **framework para extrair informações, baseado num padrão de tags, class, ids ou outros elementos que você identificar na página.**

No mundo Node.js, temos o módulo [Request para solicitar uma página](https://npmjs.org/package/request) e o [Cheerio para extrair dados das páginas](https://npmjs.org/package/cheerio).
Só pra demonstrar um exemplo, vou mostrar como fazer um scraping para capturar todos os links da página inicial deste blog:

``` javascript
 const URL = 'http://udgwebdev.com';
 var request = require('request')
   , cheerio = require('cheerio')
 ;
 request(URL, function(err, res, body) {
   if (err) {
     console.log(err);
   } else {
     console.log('Scraping Links');
     var $ = cheerio.load(body);
     $('a').each(function(i, link) {
       console.log('%s', $(link).attr('href'));
     });
   }
 });
``` 

Uma coisa legal do [Cheerio](https://npmjs.org/package/cheerio) é que sua interface é praticamente um clone do [jQuery](http://jquery.com), e isso é um ponto positivo para muitos desenvolvedores que já estão acostumados a usar este framework.