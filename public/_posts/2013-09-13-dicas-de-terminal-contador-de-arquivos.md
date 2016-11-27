![Terminal Console Linux](images/terminal-console-linux.jpg)

Hoje apresentarei um comando que realiza uma contagem de quantos arquivos existem em um determinado diretório. Na verdade o comando é a combinação de dois comandos: o comando **ls** (que lista todos os arquivos de uma pasta) e o comando **wc -l** (comando que faz contagem palavras).
Tendo conhecimento desses dois comandos, basta realizar a seguinte combinação utilizando entre eles o comando pipeline.
Veja como vai ficar o comando: ``` bash
 ls | wc -l
``` 
Com isso você já possui um comando útil para contar total de arquivos de um diretório.

Veja também outras [dicas de terminal](dicas-de-terminal "Dicas de terminal").