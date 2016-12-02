![Terminal Console Linux](/images/terminal-console-linux.jpg)

Fala galera! Hoje a dica será bem simples de fazer e tão útil que vai te economizar tempo em frente o terminal console. Não falarei de nenhum comando específico e sim sobre como realizar múltiplas tarefas de forma ordenada em apenas uma linha de comando. Outro detalhe interessante é que essa dica também funciona no prompt de comandos do Windows, pois aplicamos apenas um conceito de lógica booleana entre os comandos para ele realizar várias tarefas.

Vamos a prática! Tenha em mente que você precise realizar mais de um comando no terminal. Por exemplo, vamos ao seguinte caso em que você precisa criar uma pasta chamada videos, mover arquivos da pasta filmes para ela e no final criar um arquivo vazio chamado `README.txt` dentro desse diretório, eae o que você faz? O jeito mais utilizado pela maioria seria fazer o todos os comandos um por vez.
`1 - mkdir videos`
`2 - mv ~/Documents/filmes ~/Documents/videos`
`3 - touch README.txt`

Porém a dica é digitar todos os comandos de uma vez, para depois o terminal realizar todas as tarefas sozinho, para fazer isso basta utilizar o **comando booleano && (conhecido como "E" lógico)** entre cada comando e veja como ficaria o exemplo anterior:
`mkdir videos && mv ~/Documents/filmes ~/Documents/videos && touch README.txt`

Esse simples comando se torna muito útil quando se realiza tarefas repetidas do dia-a-dia, podendo criar [comando alias](/criando-comando-alias-no-bash-profile) de comandos para suas combinações de comandos utilizados com frequência. É isso ae pessoal, espero que tenham gostado dessa dica.