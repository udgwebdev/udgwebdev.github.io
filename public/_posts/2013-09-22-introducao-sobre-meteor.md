[![Meteor](images/meteor-logo.jpg "Meteor")](http://meteor.com) 

Pra galera que estuda ou trabalha com Node.js, hoje apresentarei neste post uma nova plataforma Web Full-Stack totalmente Javascript, feita em cima do Node.js, seu nome é Meteor.

## O que é Meteor?

Ele é um framework **CoC (Convention Over Configuration)** e seu objetivo principal é construir aplicações **single-page real-time**.
O Meteor é construído em cima do Node.js, pelo qual é constituído por um conjunto de frameworks: SockJS, Handlebars, jQuery, PubSub, MongoDB, MiniMongo (API MongoDB client-side) e [neste link tem mais](http://docs.meteor.com/#packages).
Com apenas 3 arquivos **(1 html, 1 css e 1 js)** já é possível construir uma aplicação real-time.

## Os 7 príncipios do Meteor

1.  **Data on the wire:** Não envie HTML pela rede e sim apenas dados para deixar o cliente decidir como renderizá-lo.
2.  **One language:** Escreva código Javascript em ambas camadas: cliente e servidor.
3.  **Database anywhere:** Utilize uma API de interface única e transparente que te permite acessar o banco de dados tanto no cliente como no servidor.
4.  **Latency compensation:** No cliente é usado prefetching e model simulation na API do banco de dados para atingir latência zero no acesso de seus recursos.
5.  **Full-Stack Reactivity:** Por default tudo funciona em real-time. E todas as camadas da aplicação adotam o paradigma orientado à eventos, que é herdado do Node.js.
6.  **Embrace the ecosystem:** Totalmente open-source o Meteor possui suas convenções pelo qual agrega novos valores ao invés de ser ferramenta uma que vai substituir outros frameworks atuais.
7.  **Simplicity equals Productivity:** Seja produtivo! Desenvolva de forma simplificada, utilize APIs fáceis de aprender e implementar, afinal essa será a melhor forma de criar uma aplicação.

Seu site oficial é [meteor.com](http://www.meteor.com). Lá você encontrará a documentação, alguns screencasts, aplicações de exemplo e o blog oficial para você ficar por dentro das novas versões, eventos e projetos da comunidade Meteor.
Falarei mais sobre Meteor nos próximos posts, então não percam os futuros capítulos dessa nova série chamada Meteor. Enquanto isso caso queira aprender Meteor por conta própria, leia o post [Quer aprender Meteor?](quer-aprender-meteor) e também veja [todos os posts sobre Meteor aqui do blog]({{site.url}}/meteor).