![Meteor](../images/meteor-logo.jpg "Meteor")

Configurar um ambiente de CI (Continuos Integration) para um projeto [Meteor](https://www.meteor.com) com [Velocity](http://velocity.meteor.com) é muito fácil.
Mais fácil ainda é se você for configurar tudo isso no serviço Travis-CI.

Para fazer um setup de um projeto que use Meteor + Velocity, basta criar o arquivo `.travis.yml` na raíz do diretório do projeto, com os seguintes comandos:

``` bash
 sudo: required
 language: node_js
 node_js: - "0.12"
 install:
 - "curl https://install.meteor.com | /bin/sh"
 - "meteor update"
 script:
 - "meteor --test --once"
``` 

Após criar esse arquivo, recomendo que crie uma conta ou use uma conta existente do [TravisCI](http://travis-ci.org) (é necessário ter uma conta e repositório no [Github](https://github.com) para usar esse serviço). Ao acessá-lo, basta incluir o repositório que deseja executar builds e em seguida basta enviar novos commits no projeto, para automaticamente executar os builds.