![NVM - Node Version Manager](images/nodejs-logo.jpg "NVM - Node Version Manager")

Assim como o ruby possui o [RVM](http://rvm.io/) e [RBENV](http://rbenv.org/) para gerenciar múltiplas versões ruby da máquina, o Node.js também possui um chamado [NVM](https://github.com/creationix/nvm).

O NVM é a solução perfeita pra você que precisa testar o comportamento do seus módulos em distintas versões Node. Ele também serve para a galera que curte testar ou colaborar utilizando versões unstables também.

O grande benefício do NVM é que ele é prático, fácil de usar e ele vai te poupar tempo de instalação e configuração do Node.js, principalmente em sistemas cujo seus package manager nativos estão desatualizados e não viabilizam o download da última versão do Node.js.

Abaixo vou mostrar como instalar e utilizar seus principais comandos:

## Instalação

Via CURL:
<small>``` bash
 curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```</small> 

Via WGET:
<small>``` bash
 wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```</small> 

Após a instalação, abra uma nova sessão do terminal ou reinicie sua máquina para liberar o comando **nvm**.

## Comandos

*   **nvm ls** - lista todas as versões instaladas em sua máquina.
*   **nvm ls-remote** - lista todas as versões disponíveis para download do Node.js.
*   **nvm install vX.X.X** - baixa e instala uma versão do Node.js. Obs.: troque **"vX.X.X"** por **"v0.10.22"**.
*   **nvm uninstall vX.X.X** - desinstala uma versão Node.js de sua máquina.
*   **nvm use vX.X.X** - define uma versão Node para uso.
*   **nvm alias default vX.X.X** - define uma versão default pra ser carregada primeiro.

Para habilitar o **auto-completion do nvm**, edite em modo super-user (**sudo ou su**) o **.bashrc ou .bash_profile**, incluindo no final do arquivo:

<small>``` bash
 source "~/.nvm/bash_completion"
```</small> 

Reinicie sua máquina e pronto! Para visualizar todos comandos, basta digitar: **nvm [tab][tab]**.