![Deploying Meteor no Heroku](images/heroku.jpg "Deploying Meteor no Heroku")

Recentemente, a equipe do Meteor, publicou em sua newsletter que vai descontinuar os servidores free que são fornecidos através do comando meteor deploy.
Com isso, acabei migrando alguns dos meus pequenos projetos para o Heroku, e com isso resolvi criar esse post explicando passo-a-passo como fazer deploy para o Heroku.

### Setup do Heroku

Em primeiro lugar, crie uma conta no [heroku.com](https://heroku.com) e em seguida instale seu CLI (veja nesse link [toolbelt.heroku.com](https://toolbelt.heroku.com)) para liberar o comando heroku em seu terminal.

### Setup da aplicação

Agora com o ambiente heroku configurado em sua máquina, execute o comando:

``` bash
 heroku create nome-da-aplicacao
``` 

Em seguida, instale o buildpack do Meteor para configurar os scripts de deploy necessários para uma aplicação Meteor compilar e gerar uma versão Node.js pronta para os servidores do Heroku, para isso, rode o comando:

``` bash
 heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
``` 

Agora, instale o MongoLabs, que é um serviço PaaS para o MongoDB, ele tem uma versão free que oferece até **500MB de persistência de dados**, para isso rode o comando:

``` bash
 heroku addons:create mongolab
``` 

Para finalizar a configuração do ambiente, configure a variável de ambiente ROOT_URL com o endereço da sua aplicação heroku:

``` bash
 heroku config:set ROOT_URL=https://nome-da-aplicacao.herokuapp.com
``` 

**Obs.:** O Heroku já fornece suporte gratuito ao protocolo HTTPS.

### Configuração extra

Como dica adicional, caso no futuro você tenha a necessidade de incluir novos dynos, que são servidores dentro do load balancer do Heroku, você provavelmente sofrerá um problema de sua aplicação Meteor não garantir sessão correta entre usuários, para resolver esse problema de **sticky session**, você pode instalar esse plugin adicional gratuitamente:

``` bash
 heroku labs:enable http-session-affinity
``` 

### Deploying

Para realizar o primeiro deploy do seu projeto para o Heroku, basta fazer um **git push** no **remote heroku**, que foi configurado automaticamente quando você criou uma aplicação pelo comando **heroku create**, ou seja, rode o comando:

``` bash
 git push heroku master
``` 

**Pronto! Servidor configurado e ready for production.**

### Referências

*   [Meteor.js - Deploy to production on Heroku](http://justmeteor.com/blog/deploy-to-production-on-heroku)