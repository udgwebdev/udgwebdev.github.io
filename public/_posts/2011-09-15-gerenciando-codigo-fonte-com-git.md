![Gerenciando código-fonte com Git](/images/git-logo.jpg "Gerenciando código-fonte com Git")

A pedido de um amigo da minha classe, que esta na mesma correria que eu, que é a época de desenvolvimento de TCC na faculdade, irei explicar alguns comandos essenciais para trabalhar com o Git.

Para quem não conhece, o Git é um sistema de controle de versionamento de código-fonte distribuído, que inicialmente foi desenvolvido por Linus Torvalds para gerir todo o código-fonte do seu famoso Kernel Linux.

Uma das características do Git é:

*   **Suporte para desenvolvimento não-linear:** permite a criar **branchs** que são áreas distintas para separar em cada área, o que irá fazer no projeto, por exemplo: Uma branch para corrigir bugs e uma outra branch para dar continuidade no desenvolvimento de uma nova funcionalidade. Após o término de uma das branchs, você terá a possibilidade de realizar um **merge**, que faz uma mesclagem entre ambas as áreas, para corrigir conflitos e manter ambas as branchs em uma única linha de desenvolvimento no final.
*   **Autenticação criptografada do histórico:** O histórico do Git gera uma árvore de hash para cada **commit** (publicação de código) efetuado, sendo que uma vez publicado, não será possível mudar as versões de hash que foram geradas.
*   **Estratégia de merge conectáveis:** O Git possui um conjunto de algoritmos bem definidos para mesclagem de códigos, realizando autocompletes do código e avisando o desenvolvedor quando ocorrer conflitos entre o mesmo arquivo, só que de versões distintas.

Para melhores informações sobre o Git visite: [Wikipedia do Git.](http://pt.wikipedia.org/wiki/Git)

Para iniciarmos, primeiro faça o download direto do site oficial do Git: [www.git-scm.com](http://git-scm.com/).

Ele é compatível com **Windows, Mac e Linux** e sua instalação é simples e sossegada.

Agora vamos ao que interessa, abaixo listarei não todos, mas os comandos mais utilizados para gerenciar toda demanda de atualizações de um projeto:

*   **git init** - Criar um repositório Git dentro da pasta raíz do projeto, apartir desse comando será permitido realizar todo gerenciamento dos arquivos contidos nesse diretório, usando os demais comandos git citados abaixo.
*   **git status** - Exibe o estado atual do repositório.
*   **git add .** - Inclui todos os novos arquivos e os arquivos modificados para área de publicação **(área de commits)**.
*   **git add -i** - Apresenta um menu para selecionar os arquivos a serem publicados.
*   **git reset** - Retira todos os arquivos da área de publicação **(área de commits).**
*   **git commit -m "Mensagem do commit."** - Publica os arquivos que foram selecionados pelo comando **git add**.
*   **git commit -am "Mensagem do commit."** - Seleciona todos os arquivos e depois publica-os **(realiza um commit de todos os arquivos)**.
*   **git checkout /diretorio/arquivo.txt** - Desfaz as alterações realizadas no arquivo selecionado.
*   **git branch nome_da_branch** - Cria um novo ramo **branch** para trabalhar no projeto.
*   **git checkout nome_da_branch** - Entra em uma branch do projeto.
*   **git clone git://github.com/git/projeto.git** - Faz download de um repositório online do git.
*   **git push** - Envia todos os **commits** do computador local para um repositório online do git.
*   **git pull** - Baixa as últimas alterações de um repositório online do git para o seu repositório local.
*   **git merge nome_da_branch** - Mescla o conteúdo de uma **branch** selecionada com a branch que você está trabalhando.

Espero que esse tutorial seja de grande utilidade, lembrando que para mais detalhes acesse os links abaixo:

*   [Documentação oficial do Git.](http://git-scm.com/documentation)
*   [Git para preguisoços.](http://www.fml.eti.br/wiki/index.php/Git)
*   [Repositório online Github.](http://github.com)