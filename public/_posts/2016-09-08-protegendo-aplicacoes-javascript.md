# Protegendo aplicações JavaScript

![Protegendo aplicações JavaScript](../images/jscrambler-logo.png "Protegendo aplicações JavaScript")

Atualmente no JavaScript surgiram vários frameworks (**React, Angular, Ember, Backbone, Vue e etc**) e a linguagem também evoluiu muito com as implementações ES6, ES7 e futuro ES8, isso tudo já nos permite criar aplicações web, mobile ou desktop bem complexas utilizando apenas JavaScript, porém, você já parou para questionar sobre como proteger toda integridade de códigos JavaScript?

Quando se fala de proteger código JavaScript, existem dois caminhos:

1.  Proteger seu código contra invasão de hackers;
2.  Proteger seu código proprietário de ser copiado ilegalmente;

JavaScript é uma linguagem poderosa, porém no quesito segurança ela tem o problema de ser uma linguagem interpretada. Afinal linguagens compiladas geram código binário antes de serem executadas, o que fornece uma camada extra contra leitura indevida do código-fonte, porém como o JavaScript é executado em runtime, sem gerar binários, ou seja, todo código fica exposto, dando fácil visualização e compreensão tanto para máquinas quanto para humanos. Por exemplo, é possível visualizar nos browsers todo código-fonte client-side deste post, todo browser permite a visualização desses códigos.

E quando criamos aplicações mobile usando PhoneGap ou aplicações desktop usando Electron, tais aplicações que permitem a manipulação de **informações sensíveis do smartphone como camera, GPS, bluetooth, wifi** e outras coisas, tudo isso, fica facilmente exposto no código-fonte JavaScript, e isso acaba se tornando um grande facilitador para hackers brincarem com sua aplicação. Um grande exemplo atual é o jogo **Pokemon GO** pelo qual a comunidade hacker facilmente descobriu como manipular o jogo e criou bibliotecas para diversas linguagens, com intuito de facilitar a **criação de bots para o jogo**.

Isso tudo não teria acontecido se este jogo aplicasse uma proteção de integridade do código. Existem várias ferramentas e/ou serviços na área de ciber-segurança que permitem não só minificar, mas também esconder partes sensíveis do código-fonte. Isso não é suficiente para garantir a proteção do mesmo, pois essas soluções são permite aplicar engenharia reversa facilmente e sem grande esforço. Para assegurar que sua aplicação não seja adulterada, você precisa adotar serviços que aplicam técnicas de **obfuscação resiliente com camadas adicionais de sergurança**.
Um serviço que se destaca entre os demais nesta área, é o da [Jscrambler](https://jscrambler.com/en/?ref=https://udgwebdev.com "Jscrambler - Make your JavaScript Application Protect Itself"), que é uma solução completa para proteção de código **JavaScript multi-plataforma**, ou seja, ele aplica proteção de integridade para aplicações mobile, desktop, web e server-side, sem degradar performance e sem prejudicar a funcionalidade de sua aplicação.

Esse serviço possui as seguintes características de proteção:

*   JavaScript obfuscation;
*   Minification de código;
*   Inserção de dead code;
*   Function outlining;
*   Locking de browser e ou domain;
*   Data de expiração de código;
*   Serviço de anti-adultério de código;
*   Ocultação de dados sensíveis no código;

Caso tenha interesse, você pode [testar a versão trial](https://jscrambler.com/en/?ref=https://udgwebdev.com "Jscrambler - Make your JavaScript Application Protect Itself") que em poucos minutos você já configura sua aplicação na plataforma para aplicar proteção no código-fonte de seus projetos.

A Jscrambler já conta com mais de 25 mil usuários, developers e empresas de todo o mundo, que usam o serviço para proteger os seus recursos proprietários, desde startups a organizações como a Fortune 500.
Esse serviço é de grande utilidade para aplicações cuja a segurança é um fator fundamental, ou seja, aplicações internet banking, games, streaming de video proprietário e etc. Se este for o seu caso, [então vale a pena testar essa plataforma](https://jscrambler.com/en/?ref=https://udgwebdev.com "Jscrambler - Make your JavaScript Application Protect Itself").