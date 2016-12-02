![Curso de Node.js](/images/nodejs-para-leigos.jpg "Curso de Node.js")

Bem-vindos ao cursinho de Node.js para leigos, neste primeiro post apresentarei uma introdução sobre como é o mundo dessa tecnologia, como surgiu Node.js e para o que ela foi desenvolvida, para finalizar mostrarei também as principais características que mais destacam essa tecnologia apresentando suas vantagens e desvantagens.

Nascido em 2009, pelo criador Ryan Dahl junto com 14 colaboradores no início dessa jornada.

O problema principal que eles queriam resolver com essa plataforma foi a de facilitar o desenvolvimento de **aplicações real-time** e de **alta escalabilidade** com isso surgiu o **Node.js**.

Principais características do Node.js:

#### Linguagem Google Chrome Javascript V8

Você irá desenvolver aplicações utilizando Javascript, algo muito interessante, pois essa linguagem permite trabalhar de forma simplificada tudo o que receber do lado cliente, a curva de aprendizado será pequena, pois o Javascript que você conhece não será diferente do que irá usar no server-side da aplicação, de fato você irá aprender mais como utilizar os **diversos módulos (APIs ou Frameworks)** e principalmente irá conhecer os diversos [Design Patterns do Javascript](/design-patterns-para-javascript-parte-2/ "Design Patterns para Javascript – Parte 2") no Node.js.

#### Orientado à eventos de I/O

Nativamente o Node.js vem acompanhado com diversos módulos que possibilitam trabalhar com recursos **I/O no servidor**, isso significa que existem bibliotecas para trabalhar com diversos protocolos, por exemplo: **HTTP, HTTPS, DNS, WebSockets (que permite conexão real-time) e outros, além de bibliotecas para manipular arquivos, processamento assíncronos, criptografias, manipulação de objetos JSON e muito mais.**

#### Threads Não-Bloqueantes

Essa é uma característica bem específica do Node.js, ela trabalha com o conceito de **Threads Não-Bloqueantes**, ou seja, não há um gerenciador de threads, algo que plataformas como **Java e .NET** possuem. Isso traz como vantagem uma alta escalabilidade para servidores, pois não há um agente bloqueando e enfileirando threads quando é utilizado um determinado recurso do sistema, porém como desvantagem esse conceito não é recomendável para o **desenvolvimento de sistemas transacionais**, visto que há uma grande chance de uma perda de íntegra dos dados devido a essa falta de controle. Caso não entenda esse conceito de threads do Node.js, explicarei de forma simplificada esse conceito partindo do princípio que **Threads = Usuários acessando seu sistema**, quanto mais acessos, mais threads serão instanciadas para utilizarem os recursos da sua aplicação. Quando dois ou mais usuários acessam ao mesmo tempo o mesmo recurso, ocorre o que chamamos de **concorrência entre threads**.

Em sistemas com arquitetura de **Threads Bloqueantes** quando 10 usuários simultâneos acessam o mesmo recurso, todos eles são enfileirados, fazendo com que cada um deles utilizem esse recurso um de cada vez e o recurso bloqueia o acesso aos demais usuários dando exclusividade apenas o usuário que esta utilizando-o, isso garante integridade nos dados pois há um controle em que todo mundo acessa-o unicamente. **Sistemas bancários e principalmente e-commerces** são exemplos que utilizam esse conceito, visto que é obrigatório controlar a concorrência de usuários para garantir a integridade dos dados.

Com isso o conceito de **Threads Não-Bloqueantes** é totalmente o inverso, ou seja, ninguém controla a concorrência de usuários e isso por mais que não garanta a integridade, traz como benefício um ganho maior em performance, visto que o total de threads concorrentes ficam na memória por um tempo menor e não serão enfileirados para utilizarem o mesmo recurso, e simplesmente o primeiro que utilizar o recurso ganha, os demais perdem ou tentam outra vez. Diversos sistemas pode utilizar esse conceito sem prejudicar os usuários, geralmente são sistemas que trabalham mais com consultas na base de dados do que alterações no mesmo. Alguns exemplos: **Games Multiplayer, Web Services, Blogs, Redes sociais, Web Analytics, Chats, e muito mais.**Abaixo apresento duas imagens fazendo uma analogia aos mecanismos de **Threads Bloqueantes e Não-bloqueantes**:

![Threads Bloqueantes =  Trânsito](/images/transito.jpg "Threads Bloqueantes =  Trânsito")

Um trânsito de carros passando por um túneo faz uma ótima analogia com Threads bloqueantes, porque para se passar no túneo é necessário formar uma fila de carros para cada carro passar neste local.

![Threads Não-Bloqueantes = Cardume](/images/cardume.jpg "Threads Não-Bloqueantes = Cardume")

A comparação com um cardume de peixes com Threads Não-Bloqueantes é perfeita, visto que todos os peixes estão livres, não há regras, filas e principalmente se você **jogar comida para apenas um peixe (analogia ao uso de um recurso do sistema)** apenas o peixe sortudo irá comê-lo e os demais esperarão pela próxima tentativa.

#### Server-side assíncrono

É possível desenvolver uma aplicação totalmente **assíncrona no server-side com Node.js**, isso ocorre pelo fato de que **Javascript** possui **funções de callbacks**: que são funções que executam-se internamente no parâmetro de uma função comum. Esses callbacks são **executados de forma assíncrona** e esse conceito permite realizar **processamentos paralelos** o que é uma grande vantagem em desempenho e diversas APIs do Node.js já são preparadas para **trabalhar de maneira assíncrona**.

Bom com isso espero que você tenha gostado dessa introdução teórica e nas próximas aulas irei mostrar um pouco de código e algumas dicas e recomendações para aprender mais e mais sobre Node.js.

Espero você no próximo post! E se tiver algumas sugestões por favor comentem abaixo!