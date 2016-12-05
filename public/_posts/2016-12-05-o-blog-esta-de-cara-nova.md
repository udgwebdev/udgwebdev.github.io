![Blog de cara nova!](/images/udgwebdev-logo-128.png "Blog de cara nova!")

Fala galera! Depois de duas semanas trabalhando nos tempos livres, finalmente lancei uma nova cara pro blog!  
Dessa vez o blog conta com os seguintes improvements:  

* **Migração do static generator Jekyll para Harp.js**: Gostei muito da simplicidade do [Harp.js](http://harpjs.com/), ele possui uma documentação bem clara, boas convenções para organizar dados e metadados das páginas, e o que mais acho dahora nele, é que ele já internamente com compilação para Markdown, EJS ou Jade para HTML, Stylus, Sass ou Less para CSS e também CoffeeScript para JS, no caso deste blog, estou usando Jade para páginas dinâmicas, Markdown para conteúdo dos posts e Sass para organizar todo CSS. Ele possui uma engine totalmente diferente do Jekyll, e por isso tive um certo trabalho criando scripts para migrar todos os posts. Caso você queira migrar de Jekyll para uma engine mais próxima dele existente no Node.js, recomendo que utilize o [Hexo](https://hexo.io/).

* **Build/Deploy usando Grunt**: Sim, eu uso [Grunt](http://gruntjs.com/)! Muitos hoje em dia estão usando [Gulp](http://gulpjs.com/), [Webpack](https://webpack.github.io/) ou outras novidades, mas o fato é que já trabalhei com todos esses, e gosto do [Grunt](http://gruntjs.com/), foi uma escolha mais pessoal do que baseada em benchmark ou popularidade.

* **Micro interactions**: Para dar um up no blog, alguns **micro interactions animados** foram incluídos no blog, um no botão inferior direito que mostra os links sociais, no sidebar existe uma galeria dos meus livros e também foi incluído um ícone animado para status de loading nas tela de erro 404 ou tela de redirect.

* **PWA e Layout Responsivo**: Sim, dessa vez o blog esta 100% com layout responsivo e foi incluído algumas características de Progressive Web Apps, em geral, melhoramos a legibilidade das fontes usando a fonte do Ubuntu, principalmente na apresentação de códigos e também foi incluído um `manifest.json` para gerar uma versão webapp do blog e `sw.js` (Service Worker) para permitir acessar o blog em modo offline.

* **Infra**: O blog continua hospedado no [Github Pages](https://pages.github.com/) junto com o [CDN CloudFlare](https://www.cloudflare.com/) versão free, dessa forma consigo utilizar SSL free, protocolo HTTP2/SPDY, caching de arquivos estáticos que evitam com maior frequência consumir recursos do [Github Pages que é limitado](https://help.github.com/articles/what-is-github-pages/), o legal disso tudo é que tenho uma infra robusta e totalmente de graça!

* **Yarn**: Como essa nova versão do blog esta 100% Node.js, resolvi testar o [yarn](https://yarnpkg.com/) no lugar do [npm](http://npmjs.com/), e achei sensacional, ele baixa os módulos mais rápido do que no npm, e o que achei mais interessante o cache dos módulos que ele faz, que permite de instalar esses módulos em modo offline, realmente vale a pena usar ele.

Curtiu as mudanças? Para ver o código-fonte acesse: https://github.com/udgwebdev/udgwebdev.github.io
