![Terminal console do Linux](../images/terminal-console-linux.jpg)

Uma das maiores rejeições pelo qual muitos usuários desistem de migrar para linux é a comodidade de gerenciar todo sistema operacional através de interface gráfica (Windows, MacOS), e isso nunca foi o ponto forte no Linux, é claro que atualmente existem distribuições focado em usabilidade para o usuário final, mas mesmo assim, em alguns casos ter o mínimo conhecimento sobre os comandos do terminal linux pode te ajudar a resolver grandes problemas.

A proposta desse post é apresentar os comandos essenciais para sobreviver tanto em um ambiente Linux quanto Unix, pois os comandos na prática são os mesmos.

*   `cp` - copia um arquivo ou diretório.
    Copiando: `cp /arquivo_a_copiar.txt /home`
*   `mv` - move ou renomeia um arquivo ou diretório.
    Movendo: `mv /arquivo_a_mover.txt /opt`
    Renomeando: `mv /arquivo.txt /arquivo_renomeado.txt`
*   `rm` - exclui um arquivo ou diretório.
    Excluindo arquivo: `rm /arquivo.txt`
    Excluindo diretório e subdiretórios: `rm -r /pasta`
*   `cd` - acessa um diretório.
    Acessando diretório: `cd /user/documentos`
    Acessando diretório raíz: `cd /`
    Acessando diretório anterior: `cd ..`
*   `ls` - lista todos os arquivos e pastas de um diretório.
    Lista horizontal: `ls /pasta`
    Lista vertical: `ls -l`
*   `mkdir` - cria uma nova pasta.
    Criando pasta: `mkdir nova-pasta`
*   `find` - busca arquivos no disco.
    Buscando um arquivo: `find arquivo.txt`

Por enquanto é isso, em breve farei a segunda parte desse post!