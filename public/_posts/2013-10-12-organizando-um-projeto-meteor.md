[![Meteor](/images/meteor-logo.jpg "Meteor")](http://meteor.com) 

Uma dúvida muito recorrente para os iniciantes da plataforma Meteor, é sobre como organizar os diretórios do projeto.
Acredito que muitos que começaram, se depararam com este problema. Afinal a documentação oficial não explica muito claro esses detalhes. Mas graças a [documentação não-oficial](https://github.com/oortcloud/unofficial-meteor-faq) aprendi as convenções desse framework, que são boas práticas para desenvolvimento de projeto de larga-escala. Hoje explicarei o significado das conveções de diretórios do Meteor.

### Convenções de diretórios do Meteor

*   **lib**: Inclua common-codes ou bibliotecas que serão carregados tanto no cliente como no servidor. Um bom exemplo são libs de regras de negócio.
*   **lib/environment.js**: Javascript de configurações gerais de ambiente.
*   **lib/methods.js**: Definições de rotinas para o `Meteor.method`
*   **lib/external**: Bibliotecas externas de outros autores, exemplo: plugins para jQuery.
*   **models**: Definições de modelos que representarão collections do banco MongoDB.
*   **client/lib**: Códigos específicos do cliente pelo qual são carregados primeiro entre os demais códigos de sua pasta client.
*   **client/lib/environment.js**: Configurações de pacotes para o client.
*   **client/lib/helpers**: Pasta dedicada para funções helpers e events de um determinado template.
*   **client/application.js**: Código de startup no cliente, geralmente utiliza funções de subscriptions e rotinas internas da função `Meteor.startup`.
*   **client/index.html**: Código HTML principal.
*   **client/index.js**: Javascript principal que carrega primeiro (também pode ser chamado de main.js).
*   **client/views/nome_do_template.html**: View template específicos (mude nome_do_template para o nome real do template).
*   **client/views/nome_do_template.js**: Código Javascript para um específico template (mude nome_do_template para o nome real do template).
*   **client/views/sub_template**: Você também pode criar sub-templates dentro dessa pasta, geralmente eles são conhecidos como partials, e são trechos de templates utilizados para um template principal (mude sub_template para o nome real do template principal).
*   **client/stylesheets**: Arquivos CSS, Less ou Stylus.
*   **server/publications.js**: Definições de rotinas para o `Meteor.publish`.
*   **server/lib/environment.js**: Configurações de pacotes para o servidor.
*   **public**: Pasta de arquivos estáticos: imagens, fontes e outros arquivos que serão servidos estaticamente.
*   **tests**: Diretório para criação de testes unitários (por default eles não serão carregados nem no cliente e nem no servidor, somente utilizando um framework de testes).

Até a próxima galera! Continuem acompanhando o blog, novos posts sobre Meteor estão por vir.