![Jade Template Engine](images/jade-logo.jpg "Jade Template Engine")

Em época de desenvolvimento ágil, surgiram muitas técnicas e ferramentas que visam aumentar a **velocidade** no desenvolvimento, além de trazer **produtividade** para os programadores.

Utilizar Template Engine no desenvolvimento web é uma das técnicas que permite manipular dinâmicamente toda view de um sistema.

O **Jade** é um excelente template engine recomendado para **Node.js**, além de possuir suporte a outras linguagens de programação.

Ele permite construir conteúdo dinâmico de forma **clean e enxuta**, a única regra necessária em seu uso é a de respeitar o espaçamento entre as tags, seja separando cada tag **por tabulação ou por espaços**, **porém não é permitido ter uma página utilizando os dois meios, ou é um ou é outro.**

O **Jade** é considerado como uma versão otimizada do **[Haml](http://haml-lang.com/ "Haml Site Oficial")** (Template Engine famoso pelos desenvolvedores **Ruby**), motivo é que ele eliminou diversos caracteres especiais utilizados pelo Haml, exemplo disso é o uso obrigatório no Haml do char **"%"** para representar tags nativas do **HTML**.

Abaixo segue alguns exemplos de códigos comparando conteúdo **HTML com Haml e Jade**:

#### HTML Convencional

``` html
 <html>
   <head>
     <title>Usando Padrão HTML</title>
   </head>
   <body>
     <h1>Usando Padrão HTML</h1>
   </body>
 </html>
``` 

#### Haml

``` javascript
 %html
   %head
     %title Usando Haml
   %body
     %h1 Usando Haml
``` 

#### Jade

``` javascript
 html
   head
     title Usando Jade
   body
     h1 Usando Jade
``` 

Outras técnicas que se podem usar com **Jade** é o conceito de **inclusão de partials**, em que o conceito é de adicionar partes de página (página filha) em uma página principal (página pai), muito útil quando se necessita incluir contéudo de forma dinâmica. Veja o exemplo abaixo:

Conteudo do arquivo **_rodape.jade:**

``` javascript
 footer
   p Rodape da página incluido via Jade
``` 

Conteudo do arquivo **_cabecalho.jade**

``` javascript
 header
   h1 Cabecalho da pagina
``` 

Para incluir os partials **_cabecalho.jade** e **_rodape.jade**, basta utilizar a função `!= partial("nome_do_partial")` que dinamicamente será incluído em uma página principal, no nosso caso será na página **index.jade**:

``` javascript
 doctype html
 html
   head
     title Pagina principal
   body
     != partial("_cabecalho")
     != partial("_rodape")
``` 

Dessa forma é possível fragmentar uma página trazendo dinamismo e organização para o seu layout.

Outra técnica que é bastante útil e a inclusão de comandos de linguagem server-side dentro do layout, para isso usar os comandos: **if, else, for** dentro da página que automaticamente o Jade vai processá-los em tempo de compilação dos templates.

Utilizando a mesma página `index.jade` anterior:

``` javascript
 doctype html
 html
   head
     title Página principal
   body
     != partial("_cabecalho")
       section
         for(var i = 0; i < 10; i++)
           if (i % 2 == 0)
             p Número: #{i} // Imprimindo números pares.
     != partial("_rodape")
``` 

Para finalizar, caso você precise executar um código in-line do JavaScript ou CSS na mesma da página, utilize as tags `script.` ou `style.` (isso mesmo usando um ponto final!), lembrando que esse ponto deve ser usado somente se for código in-line. Se for carregar um script ou css externo você não precisa usar este ponto. Veja o exemplo abaixo:

``` javascript
 doctype html
 html
   head
     title Página principal
     style.
       body {
         background: #999;
         color: #FFF;
       }
     script.
       alert("Atenção! Números pares na tela!");
   body
     != partial("_cabecalho")
       section
         for(var i = 0; i < 10; i++)
           if (i % 2 == 0)
             p Número: #{i} // Imprimindo números pares.
     != partial("_rodape")
``` 

Esse foi alguns exemplos básicos do que se pode fazer usando o Jade, para conhecer a fundo recomendo que acesse o [site oficial do Jade](http://jade-lang.com/ "Site oficial do Jade").
Se curtiu o post, comenta, ok? Até a próxima!