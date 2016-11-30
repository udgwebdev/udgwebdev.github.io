Conheça quatro excelentes **PaaS (Plataform as a Service)** focadas em hospedagem de aplicações **Node.js**. Especificamente quero que conheçam as plataformas: [Getup Cloud](http://getupcloud.com "Getup Cloud"), [Appfog Nodester](http://nodester.com "Appfog Nodester"), [Nodejitsu](http://nodejitsu.com "Nodejitsu") e [Heroku](http://www.heroku.com "Heroku").

## Getup Cloud

[![Getup Cloud](../images/getup-cloud.jpg "Getup Cloud")](http://getupcloud.com "Getup Cloud") 

É uma empresa brasileira (**isso mesmo, temos alguém por aqui construindo nuvem de verdade**), plataforma open-source (OpenShift), infraestrutura Amazon e cobrança por hora e on-demand.

Além de rodar Node.js, também suportam outras linguagens (**Java, PHP, Ruby, Python, Perl**), frameworks (**Ruby on Rails, CakePHP, Django, Wordpress**) e banco de dados (**MySQL, PortgreSQL e MongoDB**).

O mais legal é que a plataforma oferece escalabilidade automática para as aplicações, criando e destruindo máquinas de acordo com o volume de conexões simultâneas **sem que você precise entender de load balance e outros detalhes**.

A administração pode ser feita pelo CLI (Command Line Interface) **via comando rhc** ou pela **interface web e o deploy é feito através do git**.

As aplicações rodam no que chamam de gear (**é uma máquina na nuvem**), quando criadas recebem uma URL no formato **https://nome_app-namespace.getup.io** e com SSL incluso, além de permitir o uso do seu domínio próprio.

O formato de pagamento é através de **paypal, cobrança por hora e em reais**.

Site oficial: [Getup Cloud](http://getupcloud.com "Getup Cloud")

## Appfog Nodester

[![Appfog Nodester](../images/appfog-nodester.jpg "Appfog Nodester")](http://nodester.com "Appfog Nodester") 

É uma plataforma open-source totalmente focado para aplicações **Node.js.**. Eles oferecem uma documentação completa de sua API para utilizá-lo via terminal console ou através de interface **RESTFul**. Outra vantagem é que o serviço oferece um repositório **Git** e possui integração com o **Cloud9IDE**, fazendo com que todo desenvolvimento até sua fase de deploy seja completamente realizada online. Atualmente eles implementaram um sistema de administração web para gerenciar o processo de deploy da sua aplicação. Gratuitamente eles oferecem o domínio **nome_app.nodester.com**, além de permitir via sua **API** ou pelo próprio sistema admin o redirecionamento de sua aplicação para um domínio próprio.

Sua **CLI (Command Line Interface)** é totalmente **RESTFul** e permite utilizar via módulo **Nodester** o [NPM (Node Package Manager)](../npm-node-package-manager/ "NPM – Node Package Manager") no serviço fazendo com que seja instalado qualquer módulo em sua plataforma. Seu único defeito é que a plataforma é apenas dedicada para o **Node.js**, sendo necessário utilizar outro serviço de banco de dados para desenvolver uma aplicação completa. Porém o seu ponto forte é que tudo é gratuito e open-source!

Site oficial: [Nodester](http://nodester.com "Nodester")

## Nodejitsu

[![Nodejitsu](../images/nodejitsu.jpg "Nodejitsu")](http://nodejitsu.com "Nodejitsu") 

Com a proposta de um serviço de hospedagem em nuvem, o **Nodejitsu** traz consigo diversos módulos para desenvolver aplicações **Node.js** em sua plataforma. Atualmente o serviço se encontra em **fase beta privada**, ou seja, é necessário se cadastrar e ser escolhido por eles para utilizar seus recursos. Possui uma documentação bastante clara e didática sobre sua **API** e também oferecem gratuitamente um domínio para sua aplicação: **nome_app.nodejitsu.com**, sendo também possível o redirecionamento de sua aplicação para um domínio próprio.

Site oficial: [Nodejitsu](http://nodejitsu.com "Nodejitsu")

## Heroku

[![Heroku](../images/heroku.jpg "Heroku")](http://heroku.com "Heroku") 

Conhecida pelos programadores **Ruby On Rails, Java, Python e Closure**, recentemente adotou o **Node.js** em sua plataforma. Possui uma **CLI** totalmente **RESTFul** e eles oferecem gratuitamente o domínio **nome_app.heroku.com**. O mais interessante desse serviço é que eles possuem diversos **Add-ons** que permitem integrar sua aplicação com diversas outras aplicações da internet, exemplo disso são o **Add-ons** que integram-se com o **Twitter**, serviços da **Amazon**, banco de dados **MongoDB**, plugins para serviço de **mensageria SMS** e muito mais.

Porém não são todos os **Add-ons** gratuitos, muitos deles são oferecidos como **serviços adicionais a serem pagos.**

É uma excelente alternativa para quem realmente tem dinheiro para investir em uma aplicação **Node.js**.

Site oficial: [Heroku](http://www.heroku.com "Heroku")