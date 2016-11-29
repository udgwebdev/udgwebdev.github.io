# Dicas de segurança para aplicações Meteor - Parte 2

![Meteor](../images/meteor-logo.jpg "Meteor")

Dando continuidade ao post [Dicas de segurança para aplicações Meteor]({{site.url}}/dicas-de-seguranca-para-aplicacoes-meteor "Dicas de segurança para aplicações Meteor"), apresentarei mais algumas dicas de fácil implementação e que vão manter sua aplicação Meteor blindada!

## Utilize corretamente o fields do MongoDB

Se você criar um `Meteor.publish` é de extrema importância que a query a ser executada no callback dessa função retorne somente os campos necessários como resultado. Por exemplo, vamos supor que sua aplicação utiliza somente uma única Collection (Pode ser o default `Meteor.users` que é praticamente a collection users no MongoDB) com vários campos, porém cada Meteor.publish precisa retornar somente os dados necessários para tal template da aplicação, e mais, nessa mesma collection existem alguns dados que jamais deverão ser expostos, como por exemplo, senhas, login, emails e etc. Neste caso você pode fazer uma query bem detalhada usando o atributo `fields` com subatributos representando os campos que deseja retornar, veja a seguir:

``` javascript
 Meteor.publish("profile", function() {
   return Meteor.users.find(
     {_id: this.userId},
     {fields: {name: 1, description: 1}}
   );
 });
``` 

Neste caso quando o cliente executar `Meteor.subscribe("profile")`, toda execução de query do minimongo retornará um `Meteor.user` somente com os atributos `name` e `description`. Isso vai evitar por exemplo que essa query não vaze outros atributos sensíveis no client-side da aplicação.

## Organizando dados de configurações com Meteor.settings

Jamais deixe dados de configurações em código JavaScript, por mais que seja em códigos somente vistos no server-side, evite fazer por exemplo um código parecido como esse:

``` javascript
 ServiceConfiguration.configurations.upsert(
   { service: "twitter" },
   {
     $set: {
       consumerKey: "ABC",
       secret: "123456"
     }
   }
 );
``` 

Ao invés de deixar esses campos de chaves secretas expostos no código JavaScript, utilize o padrão `Meteor.settings`. Para usá-lo é muito simples. Primeiro crie na raíz do seu projeto o arquivo `settings.json`, esse também pode ser criado com outro nome e também é possível ter múltiplos arquivos desse, cada um voltado para um ambiente da aplicação, exemplo: `settings.development.json`, `settings.staging.json` e `settings.production.json`. No nosso caso prático vamos apenas trabalhar com `settings.json`:

``` json
 {
   "twitter": {
     "consumerKey": "ABC",
     "secret": "123456"
   },
   "public": {
     "appName": "My app"
   }
 }
``` 

Neste `settings.json` você só precisa organizá-lo da seguinte maneira: Tudo que estiver dentro do atributo `"public"` será exposto no client-side, o resto somente será visualizado no server-side da aplicação. Para consumir os dados desse `settings.json` você pode usar o objeto `Meteor.settings` no server-side e `Meteor.settings.public` no client-side. Refatorando o código anterior, você pode fazer algo mais organizado seguindo esse código:

``` javascript
 ServiceConfiguration.configurations.upsert(
   { service: "twitter" },
   { $set: Meteor.settings.twitter }
 );
``` 

Para rodar sua aplicação já carregando os dados do arquivo `settings.json`, apenas execute o comando:

``` bash
 meteor --settings=settings.json
``` 

Veja mais posts sobre [Meteor aqui]({{site.url}}/meteor). See ya!