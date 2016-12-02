![Criando uma startup com pouca grana](/images/startup-money.jpg "Criando uma startup com pouca grana")

Recentemente criei uma nova startup que se chama 99folks **(Infelizmente ela não existe mais)** que é um aplicativo facilitador de networking, ele usa o GPS para compartilhar dados de contatos com pessoas geograficamente próximas ao usuário. Quando você é um desenvolvedor, você praticamente aprende muita coisa legal em uma startup, principalmente na parte técnica, e é incrível como **existem diversos serviços gratuitos ou beeeeemmmmm barato** para te auxiliar na construção de uma aplicação web ou mobile.

Nesse post vou te passar um pouco das minhas experiências que obtive construindo o 99folks, passando algumas dicas sobre quais serviços utilizar para sair barato (digo menos que 100R$ no início!) quando for construir o MVP (Minimum Viable Product) de sua startup. Lembrando que esse post é baseado em minhas experiências e 100% opinião e recomendação, porém caso você tenha uma dica melhor, comente suas dicas no final desse post!

## Devo construir app ou web?

Construir um mvp deve ser com menos esforço possível e principalmente gastando bem pouco de dinheiro, ou se possível não gaste grana! Senão não é um MVP! As vezes um mvp requer uma atenção e dedicação extra para captar muitos clientes e principalmente para vender a idéia do seu serviço melhor. E neste caso se você tem conhecimentos técnicos de programação você parte para o desenvolvimento e nisso pode surgir a seguinte dúvida: **Devo construir uma versão web ou app do meu projeto?** Em resumo, a opção bem econômica é você construir uma **aplicação web responsiva**, assim você cria uma página compatível não só com browsers desktop, como também mobile browsers, facilitando o acesso para diversos tipos de usuários, uma dica é seguir os conceitos de [Mobile First](http://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) e se você não é bom em design, vale a pena utilizar um framework CSS responsivo, tal como [Bootstrap](http://getbootstrap.com/) ou [Ionic](http://ionicframework.com/). Somente desenvolva um app nos seguintes casos:

1.  Não sei desenvolver aplicações web, pois meu forte é desenvolver apps;
2.  Meu MVP requer o acesso a recursos de smartphones tais como Camera, GPS, Bluetooth ou outros.

## Comprando um domínio para landing page

Uma boa prática que muita gente faz quando quer validar uma idéia é criar uma landing page (um simples site que divulga a idéia da startup e apenas possui um formulário para que usuários interessados, informem seus emails para receber notícias sobre o lançamento do produto da startup). E nisso você precisa comprar um domínio para seu site. Uma dica que me economizou grana na compra de domínios foi comprar um domínio na Godaddy pagando no primeiro ano **um valor menor que 5 reais** em um **domínio .com**.
**Dica:** Digite no google **"Godaddy"** e clique em um anúncio patrocinado que automaticamente você acessará uma página com cupom de desconto para compra de domínios a preços bem baratos.

## Onde hospedar uma landing page

Sem dúvidas, se você é um desenvolvedor web, você não precisa gastar dinheiro com servidores para sua landing page, você pode simplesmente criar um repositório público da landing page no [Github](http://github.com) e ativar o serviço gratuito do [Github Pages](https://pages.github.com/) e em seguida utilizar o domínio que você comprou, tudo isso de graça! E não tem limites de requisições na landing page!

## Preciso de um serviço de email

Até hoje o serviço que mais saiu barato foi utilizar o [Google Apps](https://www.google.com/work/apps/business/). Você usa o serviço de graça no primeiro mês e após esse prazo você **só pagará 5$ por cada email que utilizar**. Neste caso o valor é mensal e não tem escapatória, tem que pagar pra ter um email.
Então uma solução barata é criar um email com nome genérico para todo tipo de uso, por exemplo, crie um email com nome: **domain.com@domain.com** para receber todo tipo de mensagem, para de início você apenas pagar por 1 email todo mês.
Outra vantagem de usar o Google Apps, é que ele fornece todos os principais serviços do Google, tais como Google Drive, Google Docs, Gmail corporativo e muito mais.

## E serviço de email free?

Graças ao comentário do camarada Gabriel Fonseca, descobri que existe um concorrente muito bom, o [ZohoMail](https://www.zoho.com/mail/) que é uma solução tão boa quanto Google Apps, ele oferece até **10 usuários de email e 5 GB de mailbox, tudo isso de graça!**.

## Preciso de infra e servidores para minha aplicação

Um bom serviço que vale a pena investir é sem dúvidas os serviços de infra da Amazon. Hoje eles oferecem servidores básicos conhecidos pelo nome de micro que possuem **1 CPU, 1GB ram e usam SSD**, configuração suficiente para você iniciar sua startup, e você também ganha outros serviços for free, como banco de dados, gerenciador de DNS, CDN e muito mais. O mais interessante é que você pode obter esses serviços de graça durante um ano, que é tempo suficiente para você buscar um meio de gerar receita ou investimento em sua startup.

Se você não é bom em configurar servidores, recomendo que utilize serviços do tipo **PaaS (Platform as a Service)**, neste caso você apenas foca em desenvolver sua aplicação e não se preocupa em manter a infra dos servidores. Nesta modalidade os bons serviços que fornecem servidores free são: [Getup Cloud](https://getupcloud.com/index.html), [Heroku](https://heroku.com) e [Openshift](https://www.openshift.com).

## Mais ferramentas com uso free

Bom para finalizar o post, vou listar abaixo algumas ferramentas de uso gratuito:

*   [Mailchimp](http://mailchimp.com/) - Gerenciador de email newsletter.
*   [Mailgun](http://www.mailgun.com/) - Servidor SMTP para envio de emails.
*   [Newrelic](http://newrelic.com/) - Serviço de monitoração de aplicações.
*   [Bitbucket](https://bitbucket.org) - Concorrente do Github, que oferece **infinitos repositórios privados for free!**
*   [Trello](https://trello.com/) - Um ótimo gerenciador de tarefas no stylo kanban
*   [Codeship](https://codeship.com/) - Um serviço de Integração contínua que permite usar até 5 projetos privados de graça.
*   [Slack](https://slack.com/) - Serviço de mensageria para grupos fechados, ótimo para conversas em equipe, é uma solução boa e tem uma versão free também.
*   [Hipchat](https://www.hipchat.com) - Concorrente do Slack, criado pelos mesmos criadores do Bitbucket.

Espero que esse post seja útil para você e se você conhece outras ferramentas free, comentem abaixo. Até a próxima!