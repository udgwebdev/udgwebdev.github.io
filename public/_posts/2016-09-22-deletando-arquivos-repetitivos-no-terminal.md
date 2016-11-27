![Terminal Console Linux](images/terminal-console-linux.jpg)

Depois de um bom tempo sem [dicas de terminal](dicas-de-terminal "Dicas de terminal"), eis que volta das cinzas essa categoria com um novo post, pelo qual a dica será bastante útil no seu dia-a-dia, basicamente é um script que procura pastas e subpastas repetições de um determinado arquivo e em seguida apaga-os, isso ocorre através da combinação do comando `find` + `rm`.

O comando é basicamente esse:

 ``` bash
 find nome_da_pasta -name 'nome_do_arquivo' -exec rm {} \;
``` 

Para entender melhor os parâmetros desse comando:

*   `find nome_da_pasta`: vai iniciar uma busca a partir do nome da pasta indicada;
*   `-name`: nome do arquivo a ser procurado;
*   `-exec`: executa um comando bash qualquer, neste caso será o comando `rm {} \`, pelo qual vai excluir cada arquivo encontrado pelo comando `find`;

No meu caso, estou usando esse comando para apagar o maldito arquivo chato `.DS_Store` que é gerado direto nos meus projetos pelo MacOSX, então resolvi criar o seguinte comando alias:

 ``` bash
 alias ds_clear="find . -name '.DS_Store' -exec rm {} \;"
``` 

Dessa forma esse comando vai procurar e apagar todos os `.DS_Store` existentes nas subpastas, com base na pasta atual (Pois usei o `find .` para referenciar a pasta atual) que eu rodar esse comando.

Veja também outras [dicas de terminal](dicas-de-terminal "Dicas de terminal").