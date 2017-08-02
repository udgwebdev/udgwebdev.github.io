![Deploying Node.js na Umbler](/images/umbler-logo.png "Deploying Node.js na Umbler")

Se você esta procurando um host Node.js aqui no Brasil e precisa de um serviço bem prático em que toda orquestração dos servers você faz em um Saas com um visual bem intuitivo, atualmente recomendo que teste a cloud on-demand bem bacana chamada Umbler.

Eles além de darem suporte a Node.js, trabalham com PHP e ASP.Net (E em breve terá suporte a Ruby/Python/Java também!) e o foco deles é facilitar a vida de quem desenvolve para a web, por isso tornaram todo o processo de deploy muito simplificado para você gastar tempo e energia no que mais agrega valor, que é o desenvolvimento da sua aplicação.

Falando em deploy rápido, para comprovar isso, veja a seguir, um tutorial sobre como botar uma aplicação Node.js:

Vamos supor, que você já se [cadastrou na Umbler](https://www.umbler.com/br/hospedagem-nodejs), e criou o projeto `hello-umbler`, com isso, ele vai liberar para você uma git url para viabilizar que você faça push de novas alterações, que serão refletidas em um novo deploy no servidor. Se você já criou no painel de controle da umbler, basta abrir o terminal para rodar os comandos a seguir:

``` bash
mkdir hello-umbler
cd hello-umbler
npm init
```

Preencha o questionário do npm init para gerar o `package.json` no final. Após essa etapa, será necessário iniciar o git nesse projeto e incluir a url remota do git do servidor, para isso execute:

``` bash
git init
git remote add umbler GIT_URL_DO_SERVER_UMBLER
```

*Obs.:* Troque `GIT_URL_DO_SERVER_UMBLER` pela git url gerada na sua conta umbler, ok?  
Agora que temos integrado no git a url do servidor remoto, podemos criar nosso projeto da maneira que quiser, para exemplificar, crie o código `app.js`:

``` javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Umbler!');
});

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Umbler server at port:${port}`));
```

Agora edite o `package.json` para incluir o comando `npm start`:

``` json
{
  "name": "hello-umbler",
  "version": "0.0.1",
  "description": "Hello Umbler",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
  },
  "author": "Caio R. Pereira",
  "license": "MIT"
}
```

Após criar esse simples server, você pode testar se o mesmo esta executando corretamente através do comando `npm start`, supondo que tudo esteja ok, vamos para a parte do deploy, para isso, basta rodar esses comandos git:

``` bash
git add .
git commit -m "First commit"
git push umbler master
```

Ao realizar um push no remote `umbler`, automaticamente será realizado um deploy Node.js no servidor deles, afinal tudo que ele vai precisar é do `package.json` configurado corretamente para identificar os metadados necessários para instalar versão node.js desejada, suas dependências para no final ser executado o comando `npm start`, que é gerado no atributo `script: { start: "node app" }` do package.json.

Outro detalhe bacana é que se você possuir o arquivo `yarn.lock` na raíz do projeto, o processo de deployment vai usar `yarn` no lugar de `npm` no momento da instalação das depedências.

No final, sua aplicação será publicada no domain que você configurou no painel da umbler.

Outras funcionalidades que esse serviço possui:
+ Suporte aos bancos MongoDB, MySQL e SQL Server (Em breve Redis e Postgres)
+ Suporte aos cms Wordpress, Drupal, Joomla, Prestashop, Opencart e muitos outros
+ Monitoração de CPU/Ram do servidor em tempo real
+ SSH de dupla autenticação 2FA
+ Ambiente de testes para publicar versões betas de sua aplicação
+ Certificados SSL
+ Suporte a publicação e instalação de addons
+ Suporte a deploy via Git, FTP e até mesmo via Dropbox

Vale a pena testar! Aqui você visualiza os planos e preços que eles oferecem, e desde o [sign-up até chegar no passo final que é o deploy você vai ganhando bônus até completar o máximo de 100R$ para usar nesta plataforma](https://www.umbler.com/br/hospedagem-nodejs).