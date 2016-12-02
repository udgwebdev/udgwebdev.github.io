![Terminal Console Linux](/images/terminal-console-linux.jpg)

Hoje a dica será rápida e muito legal! Vou lhe apresentar um comando alias que exibe o seu IP externo, muito útil quando precisando identificar nosso IP externo da internet.
Para começar abra o seu `.bash_profile` ou `.bashrc` (este arquivo varia entre as distros linux) e adicione o seguinte alias:

``` bash
 alias meu_ip="curl ipecho.net/plain; echo"
``` 

Pronto! Agora temos um novo comando no terminal que exibe o seu IP externo. Para rodar o comando, apenas abra o seu terminal e execute:

``` bash
 meu_ip
``` 

Veja também outras [dicas de terminal](/dicas-de-terminal "Dicas de terminal").