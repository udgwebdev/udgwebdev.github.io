![Terminal Console Linux](/images/terminal-console-linux.jpg)

Com intuito de voltar a ativa neste blog, pretendo lançar uma séries de mini-posts com dicas rápidas para serem utilizados no terminal console do Linux. Estudarei profundamente em busca de comandos e combinações de comandos, que possam realmente agregar valores no seu dia-a-dia para automatizar seu Linux. Lembrando que todas as dicas servirão para qualquer **distribuição Linux, sistemas Unix e MacOSX.**

Para começar, a dica de hoje será sobre como descobrir e matar processos que utilizam tal porta da rede, essa dica é muito útil quando se utiliza um programa rodando em background que trabalha utilizando uma porta específica (por exemplo porta 3000) e no momento em que você pretende utilizar um outro programa que por coincidência precisa usar a mesma porta, surge a necessidade de parar tal processo, pois quando acontece isso, **é necessário matar um processo para liberar espaço para um outro utilizar a mesma porta da rede.** Agora vamos na prática!

Abra seu terminal console e execute os comandos abaixo:

1 - Listar todos os processos que utilizam uma porta específica:
`lsof -i :[Porta]`
`lsof -i :4000`

2 - Matar processo baseado no pid que foi listado pelo comando anterior:
`kill -9 [Número do pid do processo]`
`kill -9 1112`

Se quiser compartilhar suas dicas ou até mesmo gostaria de aprender como automatizar tal tarefa em seu Linux, mas não sabe como fazer isso, comente abaixo suas necessidades que estudarei como realizá-lo e publicarei nos futuros posts. Até a próxima!