![Terminal Console Linux](/images/terminal-console-linux.jpg)

Hoje apresentarei uma dica muito legal e fácil de implementar. Seu objetivo é de exportar os resultados de saída do terminal diretamente em um arquivo de texto. Para rodar este comando primeiro temos que utilizar um comando qualquer que imprima algum resultado no próprio terminal, para que no final deste comando seja incluído o caracter `> arquivo.txt` ou `>> arquivo.txt`. Veja exemplos desses dois comandos e a diferença deles:

Utilize o `>` quando deseja gerar um arquivo de texto:
``` bash
 ls -al > arquivo.txt
``` Utilize o `>>` quando precisa gerar um arquivo pelo qual sua sobreescrita seja incremental, ou seja, sempre será adicionado novo conteúdo no mesmo arquivo: ``` bash
 ls -al >> arquivo.txt
``` 

Veja também outras [dicas de terminal](/dicas-de-terminal "Dicas de terminal").