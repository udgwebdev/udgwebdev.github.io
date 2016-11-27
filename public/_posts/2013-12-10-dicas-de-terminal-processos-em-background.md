![Terminal Console Linux](images/terminal-console-linux.jpg)

De vez enquando rodar aplicativos em background é vantajoso, pois possibilita no terminal **executar N processos em paralelo**, outra vantagem é que libera o terminal para executar outras tarefas.

Para fazer essa magia existe o comando: **nohup** e utilizá-lo é muito simples, veja como:

## Execução simples

O comando abaixo executa em background, porém sua saída será no terminal, fazendo com que misture informações de saída com seus comandos com as saídas de outras tarefas que você executar.

 ``` bash
 nohup [COMANDO] &
``` 

## Execução sem gerar saída

Este comando faz com que toda saída de informação do processo seja enviado para o "buraco negro" do linux, o **/dev/null**, resumindo nenhuma impressão de saída aparecerá no terminal.

 ``` bash
 nohup [COMANDO] > /dev/null &
``` 

## Execução gerando saída em arquivo log

Este comando permite salvar toda saída dos processos em background sejam enviados para um arquivo de texto, essa é a melhor forma de manter o terminal limpo sem perder as informações de saída, pois tudo estará em um arquivo de log.

 ``` bash
 nohup [COMANDO] > ./saida.log &
``` 

Veja também outras [dicas de terminal](dicas-de-terminal "Dicas de terminal").