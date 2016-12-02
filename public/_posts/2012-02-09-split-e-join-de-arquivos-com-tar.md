![Comando Tar](/images/comando-tar.jpg)

Recentemente precisei muito achar um programa para dividir arquivos grandes de +ou- 8 GB para transferir para meu HD externo. Motivo, a partição do meu HD externo esta em **FAT32** e já tem muito arquivo nele pelo qual demoraria muito fazer backups e formatá-lo para outro tipo de partição. Infelizmente o **FAT32** não consegue transferir um arquivo único de mais de 4 GB, bom pelo menos no meu HD eu não consegui, então a solução seria quebra esse arquivo em partes menores para enviar para o meu HD externo. Como estou atualmente usando **Mac** não encontrei nenhum programa gratuito que fizesse isso. Lembro que no meu tempo de usuário **Windows** programas como [HJSplit](http://www.hjsplit.org/ "HJSplit") já resolveria o meu problema. Porém descobri apartir de um amigo, que o **comando tar** existente tanto em **Linux, Unix e MacOS X** é capaz de realizar **split e joins** de arquivos de forma simples. A dica é muito útil e vale a pena conferir como se faz.

#### Compactando arquivos

Primeiro temos que compactar o arquivo:
`tar -cvvzf [nome-do-arquivo.tar.gz] [pasta a ser compactada]`
Exemplo:
`tar -cvvzf arquivo.tar.gz /pasta/a/ser/compactada`

#### Spliting arquivo tar

Agora basta realizar um split do arquivo:
`split -b [tamanho em megabyte a ser dividido] [arquivo-compactado.tar.gz] [nome-do-novo-arquivo.tar.gz.parte]`
Exemplo:
`split -b 2000m arquivo.tar.gz arquivo.tar.gz.parte-`

Neste caso foi dividido um arquivo em partes de 2GB cada. Um outro detalhe é que cada parte recebeu uma letra no sufixo do arquivo.
Exemplo:

*   arquivo.tar.gz.parte-aa
*   arquivo.tar.gz.parte-ab
*   arquivo.tar.gz.parte-ac
*   arquivo.tar.gz.parte-ad
*   ...

Quando precisar descompactá-lo, primeiro será necessário unir todas as partes do arquivo:
`cat arquivo.tar.gz.parte-* > arquivo.tar.gz`

Espero que tenham gostado dessa dica, até mais!