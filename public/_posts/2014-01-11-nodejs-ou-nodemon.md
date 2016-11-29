# Node.js ou Nodemon?

![Node.js ou Nodemon?](../images/nodejs-logo.jpg "Node.js ou Nodemon?")

O nodemon é uma daquelas ferramentas de grande utilidade para quem trabalha com Node.js.

Basicamente ele é um file watcher que roda internamente o próprio comando node. A diferença entre usá-lo ou usar o comando node é que ele faz auto-restart da aplicação, toda vez que um arquivo do projeto for modificado.

Utilizá-lo é muito fácil, basta instalar:

``` bash
 npm install -g nodemon
``` 

E toda vez que você rodar uma aplicação Node.js utilize o comando:

``` bash
 nodemon app.js
``` 

Rodando este comando você não precisará se preocupar em reiniciar manualmente seu app toda vez que atualizar seus códigos.

Um outro detalhe importante é que você pode citar quais arquivos e ou diretórios serão ignorados pelo file watcher do nodemon, assim você evita restart desnecessário, que é muito útil quando se tem uma aplicação que demore reiniciar, para isso crie o arquivo ".nodemonignore" no diretório raíz do seu projeto e dentro dele digite a cada linha o nome do arquivo ou subdiretório que deseja ignorar (ele é igual ao mesmo padrão do `.gitignore`).

Veja este exemplo de arquivo:

``` bash
 node_modules
 tmp
 public
``` 

Pronto! Agora diga adeus a improdutividade de ficar toda hora reiniciando manualmente sua aplicação Node.js.