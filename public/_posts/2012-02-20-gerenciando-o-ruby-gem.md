![Ruby Gems](../images/ruby.jpg "Ruby Gems")

Recentemente voltei a estudar um pouco **Ruby**, motivo foi por que estou desenvolvendo um site dinâmico, estou aprendendo muito sobre **Ruby com framework Sinatra**, ambos possuem muitas funcionalidades semelhantes ao **Node.js com Express**, pelo qual já conheço melhor.

No começo, seguindo diversos tutoriais e documentações acabei instalando e desinstalando do muitas **Ruby Gems**, resumindo acabei armazenando cerca **100 gems** pelo qual só utilizo 5 no projeto. Eae surgiu a necessidade de aprender o básico sobre gerenciamento de Gems e será isso que irei compartilhar abaixo:

#### Instalando uma gem

`gem install nome_da_gem`

#### Removendo uma gem

`gem uninstall nome_da_gem`

#### Atualizando uma gem

`gem update nome_da_gem`

#### Listando gems

`gem list`

#### Limpando versões antigas das gems

`gem cleanup`

#### Pesquisar por uma gem

`gem search nome_da_gem`

#### Visualizando documentação das gems

Execute o comando: `gem server` e acesse no browser: `http://localhost:8808`

#### Desinstalando todas as gems

`gem list | cut -d" " -f1 | xargs gem uninstall -aIx`

Com isso você já terá conhecimento suficiente para sobreviver no mundo **Ruby** gerenciando de forma eficiente os repositórios **Gems** em seu projeto.