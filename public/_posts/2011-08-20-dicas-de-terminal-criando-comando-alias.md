![Terminal console do Linux](images/terminal-console-linux.jpg)

Para quem não sabe alias são atalhos de comandos realizados no terminal console Unix / Linux. Se você utiliza com frequência um mesmo comando, para aumento de produtividade é recomendado criar um alias para ele. O processo de customização é muito simples, e as dicas servem para configurar um alias em qualquer sistema Unix ou distro Linux:

Para criar um alias, primeiro com qualquer editor de texto simples abra em modo super-usuário o arquivo: `.bashrc` ou `.bash_profile` (Isso varia de acordo com o sistema operacional.)

Agora vá para última linha do arquivo e inclua:
`alias [Nome do alias]="[Comando bash entre aspas.]"`

Exemplo utilizando Ubuntu:

`alias doc="cd /media/Documentos"`
`alias music="cd /media/Musica"`

Reinicie o seu computador, abra o terminal e teste os comandos, apenas execute no terminal o comando `doc` ou `music` para verificar se deu certo.