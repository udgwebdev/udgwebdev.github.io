![NPM - Node Package Manager](/images/npm.jpg "NPM - Node Package Manager")

Continuando mais um post sobre meus estudos com o Node.js, hoje apresentarei um aplicativo muito útil para gerenciar módulos.

Apresento-lhes o NPM - Node Package Manager, sua instalação já vem quando se instala o [Node.js](http://nodejs.org "Node.js oficial") e utilizá-lo é muito simples.

Obs.: Por padrão cada módulo é instalado em modo local, ou seja, é apenas inserido dentro do diretório atual do projeto. Caso queria instalar módulos em módulo global apenas inclua o parâmetro `-g` em cada comando.

Por exemplo: **npm install -g nome_do_módulo**

Abaixo mostrarei alguns comandos básicos e essenciais para você sobreviver gerenciando módulos em um projeto node:

*   **npm install nome_do_módulo**: instala um módulo no projeto.
*   **npm install nome_do_módulo --save**: instala o módulo e adiciona-o na lista de dependências do **package.json** do projeto.
*   **npm list**: lista todos os módulos existentes no projeto.
*   **npm list -g**: lista todos os módulos globais.
*   **npm remove nome_do_módulo**: desinstala um módulo do projeto.
*   **npm update nome_do_módulo**: atualiza a versão do módulo.
*   **npm -v**: exibe a versão atual do npm.
*   **npm adduser nome_do_usuário**: cria um usuário no site [https://npmjs.org](https://npmjs.org "NPM") para publicar seu módulo na internet.
*   **npm whoami**: exibe detalhes do seu perfil público do npm (é necessário criar um usuário com o comando anterior).
*   **npm publish**: publica o seu módulo, é necessário ter uma conta ativa no [https://npmjs.org](https://npmjs.org "NPM").

Para conhecer melhor acesse o site oficial: [http://npmjs.org](http://npmjs.org/) e conheça também seu código-fonte: [https://github.com/isaacs/npm](https://github.com/isaacs/npm)

Até a próxima pessoal!