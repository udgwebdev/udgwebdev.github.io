![Validations com Rails](../images/rails-logo.jpg "Validations com Rails")

Para quem já programa com Ruby On Rails, sabe o quão produtivo ele torna o desenvolvedor. O framework possui uma semântica e expressividade incrível, fazendo com que até os menos experientes na área tenha uma curva de aprendizado rápida. Irei apresentar alguns recursos interessantes do Rails para realizar validações em um determinado modelo. Você verá que é muito fácil programar em Rails, pois te economizará muitas linhas de códigos comparado com outras linguagens de mercado.

A idéia de realizar validações nos objetos é para evitar que determinados dados inválidos sejam persistidos no banco de dados, e em muitos casos essas validações evitam que possíveis bugs ocorram na aplicação. Indo direto ao assunto, irei apresentar os principais métodos que valida os atributos de um objeto no Rails:

*   **validates_presence_of** - valida se o atributo do objeto não esta nulo ou vazio.
*   **validates_size_of** - verifica o total de caracteres de um atributo do tipo texto.
*   **validates_uniqueness_of** - valida a unicidade do campo, ou seja, se já foi cadastrado antes os mesmos dados desse atributo.
*   **validates_numericality_of** - verifica se o campo é do tipo númerico.
*   **validates_associated** - valida se existe relacionamento apartir desse atributo chave.
*   **validates_format_of** - verifica se uma expressão regular passada em parâmetro esta compatível.

Enfim é isso ai! se gostou do post, comente por favor e obrigado mais uma vez!