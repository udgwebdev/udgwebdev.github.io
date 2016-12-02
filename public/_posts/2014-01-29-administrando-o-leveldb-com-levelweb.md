[![LevelWeb](/images/levelweb.png "LevelWeb")](https://github.com/hij1nx/levelweb) 

Continuando minhas experiências com o NoSQL [LevelDB](http://code.google.com/p/leveldb), neste post apresentarei um simples web admin de fácil integração e quebra bem o galho na hora de usar uma ferramenta visual pra administrar dados deste banco.

Seu nome é LevelWeb e utilizá-lo é bem simples! Ele possui suporte a login/senha normal e também criptografado via protocolo https. Além de acessar os dados via TCP ou RPC também.

De funcionalidades ele é bem simples, tudo se resume em você rodar um comando e visualizar seu resultado na tela.

## Screenshots

[![LevelWeb](/images/levelweb-login-small.jpg "LevelWeb")](/images/levelweb-login.jpg)[![Visualizando dados](/images/levelweb-visualizando-dados-small.jpg "Visualizando dados")](/images/levelweb-visualizando-dados.jpg)[![Dados em gráfico de barra](/images/levelweb-grafico-de-barra-small.jpg "Dados em gráfico de barra")](/images/levelweb-grafico-de-barra.jpg)[![Dados em TreeMap](/images/levelweb-grafico-treemap-small.jpg "Dados em TreeMap")](/images/levelweb-grafico-treemap.jpg)[![Dados em gráfico de linha](/images/levelweb-grafico-de-linha-small.jpg "Dados em gráfico de linha")](/images/levelweb-grafico-de-linha.jpg)

## Configuração

Quer fazer um test-drive? Execute:

``` bash
 npm install levelweb -g
``` 

Após sua instalação, crie uma conta de acesso:

``` bash
 levelweb -u admin -p password
``` 

Agora basta se conectar em uma base local:

``` bash
 levelweb ./test/data
``` 

Você também pode acessar uma base remota:

``` bash
 levelweb --client 9099 --host 192.168.0.1
``` 

Para mais detalhes veja abaixo todos os parâmetros de seu CLI:

*   **-u**: define o nome de usuário de acesso.
*   **-p**: define uma senha de acesso.
*   **--https**: define a porta para servidor https.
*   **--host**: define o nome do host, por default é **localhost**.
*   **--protocol**: define o protcolo que pode ser **"tls"** ou **"tcp"**.
*   **--client**: define a porta de conexão como cliente.
*   **--server**: define a porta de conexão, tornando disponivel o LevelWeb como servidor.

Para conhecer mais sobre o LevelWeb acesse seu github: [https://github.com/hij1nx/levelweb](https://github.com/hij1nx/levelweb).
Até a próxima! :)