# Otimizando aplicações Node.js

![Otimizando aplicações Node.js](../images/nodejs-logo.jpg "Otimizando aplicações Node.js")

Neste post apresentarei 10 dicas extremamente úteis para você aplicar em uma aplicação Node.js em produção.

## Use ao máximo as funções assíncronas

O ponto forte do Node.js é a execução de funções assíncronas, porém mais importante que isso é saber quando e onde implementá-las. Para isso, utilize funções assíncronas que vão fazer **I/O no servidor**, pois elas vão executar **I/Os não-bloqueantes** que evitam deixar a CPU ociosa enquanto um I/O é executado. Para um servidor web esse recurso vai possibilitar que enquanto uma requisição realiza I/O, outras requisições continuem sendo processadas pela CPU, incluindo também a execução de outros **I/Os em simultâneo**.

## Use o módulo async para organizar funções assíncronas

O grande problema de funções assíncronas é que em muitos casos surge a necessidade de encadear múltiplas funções assíncronas através de seus callbacks. Quanto maior o encadeamento, mais complexo ficará seu código, gerando o **famoso callback hell**. Para lidar com esse problema você pode seguir as dicas desse post: [Evitando Callback Hell no Node.js](http://udgwebdev.com/evitando-callback-hell-no-node-js) ou você pode usar um módulo muito popular chamado [async](https://github.com/caolan/async) que permite organizar esses callbacks, além de permitir que você controle o fluxo de execução dessas funções assíncronas.

## Com o async também é possível paralelizar funções assíncronas

O módulo async possui uma função muito útil que permite organizar o fluxo de funções assíncronas para serem executadas em paralelo. Basta usar função é [async.parallel()](https://github.com/caolan/async#parallel).

## Habilite compactação gzip em seu app Express

Se você usa o Express como servidor web, você pode instalar o middleware [compression](https://github.com/expressjs/compression) para compactar as requisições das rotas da aplicação. Isso diminuirá o tamanho de bytes trafegado e consequentemente aumentará a velocidade de resposta das requisições.

## Servidor envia dados e o cliente renderiza-os

Servidores Node.js são performáticos quando suas rotas enviam apenas dados ao invés de retornar uma página HTML inteira, o Node.js se tornou muito popular como plataforma de criação de APIs por causa dessa performance, por isso é recomendado criar projeto de APIs com Node.js e projetos de front-end a parte para consumir dados da API. Isso vai demandar menos processamento de páginas HTML em um servidor Node.js, tornando-o mais veloz as respostas de cada requisição.

## Evite trabalhar com cookies e sessions

Trabalhar com cookies e sessions não é proibido, porém seu servidor Node terá que processar essa camada extra. Se você esta criando uma API Node.js, o uso de cookie e sessions se torna desnecessário, visto que Sessions e Cookies no servidor exige um processamento extra para guardar estados.

## Deixe o Nginx ou Apache servir arquivos estáticos

Evite deixar o Node.js servir arquivos estáticos, pois servidores como Nginx e Apache trabalham bem melhor com esses arquivos e é possível configurá-lo para trabalhar integrado com o Node.js. Se você usa Nginx e gostaria de integrá-lo com sua aplicação Node.js, veja neste blog o post: [Nginx servindo Node.js](http://udgwebdev.com/nginx-servindo-nodejs/). Outra vantagem desses servidores é que eles possuem várias opções de configuração para servir arquivos estáticos, incluindo também um mecanismo de cache para esses arquivos. Seguindo essa dica você elimina um overhead em sua aplicação Node, deixando-a mais focada em processar e servir dados.

## Utilize o módulo cluster para processamento paralelo

O módulo [cluster](http://nodejs.org/api/cluster.html) é nativo do Node.js e basicamente ele permite criar vários processos da mesma aplicação, incluindo um **processo master** que se responsabiliza em balancear a carga de processamento entre os demais **processos slaves**. Dessa forma você otimiza sua aplicação permitindo a execução de múltiplas tarefas em paralelo em um servidor.

## Faça Streaming nos responses do HTTP

O uso do [stream](http://nodejs.org/api/stream.html) que também é nativo do Node.js permite que requisições de tamanhos grandes sejam processados em pedaços. Isso evita o estouro de buffer no servidor ao processar grandes massas de dados. Um grande exemplo de uso de Streming são os servidores video ou audio, ambos trabalham com arquivos pesados e somente via streaming seu processamento se torna viável para um cliente.

## Sempre use a última versão do Node.js

Essa dica parece clichê, mas por experiência própria o uso das últimas versões do Node.js tem dado melhores resultados em questão de consumo de memória e CPU. Isso ocorre por que elas trazem junto uma versão mais recente do [runtime V8 do JavaScript](https://code.google.com/p/v8/). Até mesmo o uso de **versões unstable** (que são versões experimentais) são válidas pois elas usam versões do V8 mais recentes do que as versões stable do Node.js, porém o risco de usá-las em produção fica por sua conta! Afinal bugs inesperados podem acontecer em seu app usando essas versões experimentais. Mas em geral, sempre use a última versão do node.js em suas aplicações.

#### Fontes:

#### 

*   [StrongLoop: Node.js Performance Tips](http://strongloop.com/node-js/node-js-performance-tips/)
*   [Sitepoint: 10 Tips to make your Node.js web app faster](http://www.sitepoint.com/10-tips-make-node-js-web-app-faster/)
*   [LinkedIn: Blazing fast Node.js 10 performance tips](http://engineering.linkedin.com/nodejs/blazing-fast-nodejs-10-performance-tips-linkedin-mobile)