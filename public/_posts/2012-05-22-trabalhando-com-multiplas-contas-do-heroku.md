[![Heroku](images/heroku.jpg "Heroku")](http://heroku.com "Heroku") 

Sem dúvidas, essa dica será muito útil se você passa ou passou pela mesma situação que estou passando, referente a de trabalhar em uma mesma máquina local com mais de uma conta no Heroku, sem gerar o error de [Public Key Fingerprint](http://en.wikipedia.org/wiki/Public_key_fingerprint "Public Key Fingerprint").

A dica é simples, afinal basta você adicionar o [plugin heroku-accounts](https://github.com/ddollar/heroku-accounts "Github Heroku-Accounts") via terminal console do CLI Heroku que de resto basta aprender os novos comandos providos por esse plugin.

## Comandos do Heroku-Accounts

*   `heroku accounts:add email@email.com` - Adiciona uma conta do heroku na lista.
*   `heroku accounts:remove email@email.com` - Remove uma conta da lista.
*   `heroku accounts:set email@email.com` - Seleciona uma conta existente.
*   `heroku accounts` - Lista todas as contas Heroku.

Mais detalhes sobre o plugin, visite seu [github oficial](https://github.com/ddollar/heroku-accounts "Github Heroku-Accounts")

See you later!