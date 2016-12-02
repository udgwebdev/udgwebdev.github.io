![Terminal Console Linux](/images/terminal-console-linux.jpg)

Fala galera! Hoje venho com novas dicas, especificamente sobre como copiar arquivos via **SCP (Secure Copy Protocol)**. Para quem não sabe, SCP é um protocolo que permite copiar arquivos entre um servidor SSH e uma máquina local. Para funcionar o comando **scp** é necessário que já tenha configurado uma conexão SSH com um servidor remoto, feito isso, veja os exemplos na prática abaixo:

Copiando um arquivo remoto para máquina local:
`scp user@domain:/pasta-remota/arquivo-remoto.txt /pasta-local/arquivo-local.txt`
Enviando um arquivo local para um servidor remoto:
`scp /pasta-local/arquivo-local.txt user@domain:/pasta-remota/arquivo-remoto.txt`

Copiando pastas e subpastas do servidor remoto para máquina local:
`scp -r user@domain:/pasta-remota/ /pasta-local/`

Enviando pastas e subpastas da máquina local para o servidor remoto:
`scp -r /pasta-local/ user@domain:/pasta-remota/`

É isso ae pessoal! Até a próxima com mais [dicas de terminal](/dicas-de-terminal "Dicas de terminal").