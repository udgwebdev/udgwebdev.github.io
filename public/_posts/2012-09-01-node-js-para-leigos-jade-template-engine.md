![Curso de Node.js](/images/nodejs-para-leigos.jpg "Curso de Node.js")

Hoje apresentarei um íncrivel template engine para node.js, seu nome se chama Jade. Digo íncrivel por que com ele será possível desenvolver códigos html com uma síntaxe muito limpa, com regras de identação semelhantes a linguagem Python **(através de espaçamentos ou tabulações de código, porém jamais tente as duas regras no mesmo código!)**, integração com comandos do servidor e trabalhando de forma otimizada reaproveitando e extendendo trechos das views.

O Jade é um template engine exclusivo para Node.js, inspirado no Haml do Ruby, sua sintaxe é totalmente diferente do HTML convencional, veja o código abaixo:

``` html
 <!DOCTYPE html>
 <html lang="en">
   <head>
     <title>Jade</title>
     <script>
       if (foo) {
         bar();
       }
     </script>
   </head>
   <body>
     <h1>Template engine</h1>
     <div id="container">
       <p>Jade</p>
     </div>
   </body>
 </html>
```

Ele foi substituído pelo código abaixo:

``` javascript
 doctype html
 html(lang="en")
   head
     title Jade
     script
       if (foo) {
         bar();
       }
   body
     h1 Template engine
     #container
       p Jade
```

Algo que melhora drasticamente a legibilidade do código, permitindo que você desenvolva mais com menos esforço. Outro destaque do Jade é a possibilidade de trabalhar com código server-side junto ao código client-side, ou seja, código javascript server-side misturado com código html ou javascript client-side, para isso é necessário utilizar alguns comandos para **"escapar"** determinado comando de forma que o Jade reconheça quem é quem. Um bom exemplo disso é o código abaixo:

``` javascript
 doctype html
 html(lang="en")
   head
     title Jade
     script
       // #{usuario.nome} é uma variável do server-side.
       var nome = '#{usuario.nome}';
       // Nome é variável client-side
       alert(nome);
   body
     #container
       // Comando server-side para exibição do nome do usuário.
       if(usuario)
         p #{usuario.nome}
       else
         p Não informado.
```

O Jade possui alguns **shortcuts-commands**, que visam agilizar e reduzir a complexidade do seu código, abaixo listarei alguns comandos e seus respectivos shortcuts:

*   `div(id='containter', class='menu')` => `#container.menu`
*   p= nome => `p #{nome}`

Trabalhando com Jade é possível desenvolver **views reaproveitáveis**, evitando o desperdício de repetir código em diversas partes do layout da aplicação.

``` javascript
 // header.jade
 header
   h1 Hey this is Jade!
```

``` javascript
 // footer.jade
 footer
   small Bye! See you later!
```

``` javascript
 // main.jade
 doctype html
 html
   head
     title This is Jade
   body
     include header
     section
       p This is a post about jade template engine, enjoy it!
     include footer
```

Repare que no código **main.jade** reaproveitamos o header e footer que são arquivos separados, e a inclusão foi feita através do **método include**. Outro meio de reaproveitar código é através dos comandos **extends e block**, que geralmente são utilizados para trabalhar com o conceito de **layout**, onde criamos uma página principal que receberá em alguns pontos outras views.

``` javascript
 // main.jade
 doctype html
 html
   head
     title Jade
   body
     block body
```

Todas as demais views serão incluídas através do body via comando **block**, abaixo segue um exemplo em que a página extende o layout para ela mesma.

``` javascript
 // list.jade
 extends main_layout
 block body
   ul
     li Jade
     li Template
     li Engine
     li For
     li Node.js
```

Basicamente extendemos o **main_layout.jade** para o **list.jade** em que incluímos os componentes do html dentro do **block body**. Podemos até misturar ambos os comandos **include, extends e block**, fazendo com que o **list.jade** fique dessa maneira:

``` javascript
 extends main_layout
 block body
   include header
   section
     ul
       li Jade
       li Template
       li Engine
       li For
       li Node.js
   include footer
```

Agora listarei algumas dicas, que serão essenciais para trabalhar de forma produtiva com Jade:

*   Respeite a regra de identação utilize espaçamento ou tabulação e NUNCA os dois no mesmo código.
*   Código Javascript client-side também precisa respeitar a regra de identação para evitar problemas com Jade.
*   Utilize comandos **shortcuts-commands** na medida do possível, para diminuir o número de códigos.
*   Trabalhe com os comandos **include**, **block** e **extends** para separar códigos que possam ser reaproveitados em mais de uma view, para isso, identifique em suas views quais trechos de código html ou javascript se repetem com frequência e aplique esses conceitos de **extensão e reaproveitamento das views.**

Voltando a nossa mini-aplicação de cadastro de clientes, agora implementaremos as views utilizando o Jade no lugar do atual EJS. O primeiro passo é configurar no Express o template engine Jade. Execute o comando no terminal console ou prompt de comando:

`npm install jade`

E modifique o **app.js**:

``` javascript
 app.configure(function(){
   app.set('views', __dirname + '/views');
   // Apenas modifique de ejs para jade.
   app.set('view engine', 'jade');
   app.set('view options', {layout: false});
   app.use(express.bodyParser());
   app.use(express.methodOverride());
 });
```

Agora vamos alterar as atuais views, primeiro renomeie as extensões dos arquivos: **index.ejs, edit.ejs, 500.ejs e 404.ejs** para **.jade**, e agora mãos a obra!

``` javascript
 // index.jade
 doctype html
 html
   body
     h1 Cadastro de cliente
     form(action="/cliente", method="post")
       label Nome:
         input(type="text", name="cliente[nome]")
       label Idade:
         input(type="text", name="cliente[idade]")
       button(type="submit") Enviar
     h1 Lista de clientes
     ul
       each cliente, i in clientes
         li #{cliente.nome} - #{cliente.idade}
           a(href="/cliente/#{i}/editar") Editar
           a(href="/cliente/#{i}") Excluir
```

``` javascript
 // edit.jade
 doctype html
 html
   body
     h1 Editar dados do cliente: #{cliente.nome}
     form(action="/cliente/#{id}", method="post")
       input(type="hidden", name="_method", value="put")
       label Nome:
         input(type="text", name="cliente[nome]", value="#{cliente.nome}")
       label Idade:
         input(type="text", name="cliente[idade]", value="#{cliente.idade}")
 button(type="submit") Enviar
```

``` javascript
 // 404.jade
 doctype html
 html
   head
     title Página não encontrada.
   body
     h1 Página não encontrada.
```

Para finalizar os refactorings de views...

``` javascript
 // 500.jade
 doctype html
 html
   head
     title Erro na aplicação.
   body
     h1 Erro na aplicação.
     h3 Detalhes: #{error.message}
```

E finalizamos mais uma saga dessa consagrada série de mini-curso Node.js para leigos.

#### Quero propor um desafio para vocês!

Refaçam esses **layouts tornando-os reaproveitáveis**. Utilizam qualquer um dos comandos que citei: **extends, block ou include**.

**Dica: identifique os possíveis pontos que podem futuramente se repetir ou simplesmente separe cada componente em arquivos diferentes com o intuito de organizar suas views.** Por exemplo: separe em um arquivo o form e em outro arquivo você lista todos os clientes e no final unifique-os numa mesma view.

Até a próxima pessoal e um grande abraço a todos!
