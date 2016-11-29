# Trabalhando com validators no Node.js

![Validators no Node.js](../images/nodejs-logo.jpg "Validators no Node.js")

Trabalhar com validators é algo muito importante no desenvolvimento de uma aplicação web, pois ele mantém o projeto organizado e padronizado, evitando a utilização de comandos **if e else** como validadores de dados.

No mundo Java, existem diversos frameworks como [VRaptor](http://vraptor.caelum.com.br/ "VRaptor"), [Struts](http://struts.apache.org/ "Struts"), [Spring](http://www.springsource.org/ "Spring"), [Hibernate](http://www.hibernate.org/ "Hibernate") com validators.

No Ruby, [Sinatra](http://www.sinatrarb.com/ "Sinatra") e [Rails](http://rubyonrails.org/ "Ruby On Rails") possuem validators nativos.

Agora, e no mundo [Node.js](http://nodejs.org/ "Node.js"), existem validators? Sim!

O [Geddy](http://geddyjs.org/ "Geddy") possui validators nativos, porém atualmente o [Express](http://expressjs.com/ "ExpressJS") não, mas já existem módulos de terceiro que cumpre esse papel para ele. Até para quem utiliza banco de dados [MongoDB](http://www.mongodb.org/ "MongoDB"), existe um módulo chamado [Mongoose](http://mongoosejs.com/ "MongooseJS"), que permite modelar sua base de dados e toda modelagem pode incluir validators também.

Praticamente toda plataforma de programação possui um framework para validação de dados.

Para trabalhar com Node.js recomendo o módulo **node-validator** ou **express-validator**.

Ele possui funções tanto para validações quanto tratamento de dados, é um ótimo framework e as validações são integradas nas requests da sua aplicação.

O **Node-Validator** é uma biblioteca perfeita para validação, filtragem e tratamento de dados.

Com ele é possível verificar desde a validação de campos como **email, ip, data, url** até o tratamento de possíveis **ataques de XSS (Cross-site scripting)** em seus parâmetros. Veja um exemplo utilizando o **Express-Validator**:

#### Formulário html

``` html
 <form action="/cadastro" method="post">
 Nome: <input type="text" name="usuario[nome]">
 Email: <input type="text" name="usuario[email]">
 Idade: <input type="text" name="usuario[idade]">
 <button type="submit">Enviar</button>
 </form>
``` 

#### Servidor que receberá os dados do formulário

``` javascript
 var express = require('express')
   , expressValidator = require('express-validator')
   , app = express();
 app.use(express.bodyParser());
 app.use(expressValidator);
 app.post('/cadastro', function(req, res) {
   // Array de erros para feedback do servidor.
   var errors = [];
   // Evento para capturar mensagens de erros e adicioná-las ao array de erros.
   req.onValidationError(function(erro) {
     console.log('Validation error: ' + erro);
     errors.push(erro);
     return this;
   });
   // Dados do formulário submetido.
   var usuario = req.body.usuario;
   // Validando dados.
   req.assert(usuario.idade, 'Idade esta vazio').isEmpty();
   req.assert(parseInt(usuario.idade), 'Menor de idade').min(18);
   req.assert(usuario.nome, 'Nome esta vazio').isEmpty();
   req.assert(usuario.email, 'Email invalido').isEmail();
   // Preparando mensagem de sucesso e erro.
   if (errors.length) {
     res.send('Erros: ' + errors.join(', '), 500);
   }else{
     res.send('Dados validado com sucesso', 200);
   }
 });
 app.listen(8888);
``` 

Também é possível utilizar seus métodos no client-side da aplicação, para isso basta incluir o [validator-min.js](https://github.com/chriso/node-validator/blob/master/validator-min.js "Validator no Client-Side").

Para conhecer todos os recursos e principalmente o próprio projeto segue abaixo os links desse módulo:

*   [Github do node-validator](https://github.com/chriso/node-validator "https://github.com/chriso/node-validator")
*   [Github do express-validator](https://github.com/ctavan/express-validator "https://github.com/ctavan/express-validator")

Então é isso pessoal, fica ai a dica e até a próxima!