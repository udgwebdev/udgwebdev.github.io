![Terminal Console Linux](../images/terminal-console-linux.jpg)

Fala galera! Acabei tirando férias aqui neste blog, mas hoje volto com uma nova dica de terminal muito útil para quem trabalha com administração de redes. Hoje vou mostrar como visualizar todas os processos ativos que estão utilizando alguma porta da rede.
Para realizar esta tarefa é necessário instalar o nmap **(Network Mapper)** que faz um port scan em qualquer máquina da rede. Algo muito útil para verificar quais aplicativos utilizam a rede e principalmente se existe algum vírus ou bot infectando as máquinas de uma rede.

O legal do nmap é que ele é **multi-plataforma**, e nisso até no **Windows ou Mac** será possível utilizar seu **CLI (Command Line Interface)**.

Neste post vou explicar como instalá-lo em seu Ubuntu, porém para instalar em outros sistemas operacionais, recomendo que leia como instalá-lo através do site: [http://nmap.org/book/install.html](http://nmap.org/book/install.html)

Execute o comando:

``` bash
 sudo apt-get install nmap
``` 

Agora abra um novo terminal para iniciar o nmap.
Para visualizar quais portas da sua máquina local estão sendo utilizadas, execute o comando:

``` bash
 nmap localhost
``` 

Também é possível mapear um DNS:

``` bash
 nmap udgwebdev.com
``` 

Para conhecer mais utilidades dessa poderosa ferramenta, digite:

``` bash
 nmap -h
``` 

Veja também outras [dicas de terminal](../dicas-de-terminal "Dicas de terminal").