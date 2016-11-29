# Hospedando aplicações Node.js na Getup Cloud

[![Getup Cloud](../images/getup-cloud.jpg "Getup Cloud")](http://getupcloud.com/?utm_source=udgwebdev&utm_medium=cadastro&utm_campaign=promo%20code%20ugwebdev "Getup Cloud") 

Nos últimos dias usei bastante o [Getup Cloud](http://getupcloud.com/?utm_source=udgwebdev&utm_medium=cadastro&utm_campaign=promo%20code%20ugwebdev "Getup Cloud"), uma empresa brasileira de PaaS - Platform as a Service - e minha experiência ao usá-lo e principalmente o suporte me motivou a divulgar um pouco sobre essa startup.

Minhas experiências foram em migrar para o serviço deles o [Node Web Modules](http://nodewebmodules-webapp.getup.io) que antes estava no Heroku. Além da migração também refiz o back-end deixando modular e migrei a base Redis para o incrível LevelDB.

## Sobre a Getup Cloud

A infra da [Getup Cloud](http://getupcloud.com/?utm_source=udgwebdev&utm_medium=cadastro&utm_campaign=promo%20code%20ugwebdev "Getup Cloud") utiliza servidores Amazon **espalhados em 3 zonas da região Oregon**. Um dos motivos de seus servers estarem no Oregon e não em São Paulo **foi por questões de competitividade em preço**, já que SP os valores chegam a ser **30-40% mais caro**. Outro fator foi que o Oregon possui um índice menor de problemas, se **comparado com a região Virginia** (a maior e mais antiga da Amazon). A distruibuição em 3 diferentes zonas aumenta a disponibilidade do serviço e reduz o impacto em caso de falha em uma das zonas.

Sobre a topologia deles, vejam este link: [https://getup.zendesk.com/entries/22999758](https://getup.zendesk.com/entries/22999758)

A plataforma suporta múltiplas linguagens **(Node.js, Java, PHP, Ruby, Python, Perl)**, frameworks **(Ruby on Rails, CakePHP, Django)** e banco de dados **(MySQL, PortgreSQL e MongoDB)**. As linguagens, frameworks ou banco de dados são adicionados através de um sistema chamado **Cartridges** (Cartuchos), ou seja, adicione um cartucho em sua aplicação sem precisar instalar nada.

Para criar e gerenciar as aplicações podemos usar a linha de comando **(rhc)** ou sua interface web. O deploy é feito através do git.

As aplicações rodam dentro de gears (entenda o gear como uma instância na nuvem), é o que no Heroku é chamado de dyno e **são criadas como escaláveis ou não escaláveis**.

## Criando uma aplicação Node.js

Vamos ao que interessa? Explicarei como criar um app Node com MySQL utilizando apenas linha de comando **rhc**.

Primeiro [clique aqui para criar uma conta no Getup Cloud.](http://getupcloud.com/tecnologia/#/sign-up?utm_source=udgwebdev&utm_medium=cadastro&utm_campaign=promo%20code%20ugwebdev "clique aqui para criar uma conta no Getup Cloud")
**Dica:** utilizem o promocode: **udgwebdevgetup**. Este code te dará **1 gear grátis que dá 750 horas grátis todos os meses**, é perfeito para você começar a montar uma aplicação inicial nesta plataforma com zero de custo! Legal não é!?

Agora temos que instalar o CLI do RHC, para isso é [necessário ter Ruby instalado em sua máquina](https://www.ruby-lang.org/en/downloads "Clique aqui para baixar a linguagem Ruby!") e em seguida rodar os dois comandos abaixo:

``` bash
 sudo gem install rhc
 rhc app-create nome_do_app nodejs-0.10 mysql-5.1
``` 

Done! Você acabou de montar um gear com Node.js + MySQL.
Depois de criada sua aplicação, agora basta clonar seu repositório git em sua máquina e começar a codar!

``` bash
 rhc git-clone nome_do_app
``` 

Lembre-se: a cada commit enviado para o servidor é realizado um novo deploy na gear.

Outros exemplos podem ser encontrados em [http://getupcloud.com/tecnologia](http://getupcloud.com/tecnologia?utm_source=udgwebdev&utm_medium=cadastro&utm_campaign=promo%20code%20ugwebdev).