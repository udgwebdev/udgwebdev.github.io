/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["15-javascript-hacks/index.html","0b0c58cc30b7ef3fc48390bb855747b2"],["3-maneiras-de-trabalhar-com-node-js/index.html","bff8616fd352bfead8a272a8a83425f1"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","60a59df7a6db77fe26a998900c61d2e4"],["5-motivos-para-usar-github/index.html","470fdd5e5ebfedd53dbd9060b3623c32"],["6-motivos-para-usar-nodejs/index.html","923ef8d82c6f1cad86d4ecfe0e2fe6c5"],["8-motivos-para-aprender-meteor-agora/index.html","d2f35adc9fab50fe96031b91239e66e0"],["8-motivos-para-estudar-ruby-on-rails/index.html","1fe54ec37747c34c553b52299cbb1674"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","7f6e4947eb8490aacf5b8e394d6511e8"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","4db9fdcfb7fdb4ab3c0c2d9ef2a6a213"],["administrando-o-leveldb-com-levelweb/index.html","b8c991f1b9cf2d4b3d86e0f572777b1d"],["ajuste-fino-no-eclipse-ide/index.html","54bd776fc0245ee767b0bad4c1693627"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","ec6786948487a31e47dc08c850e7e891"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","76662ceac28e4c54669ccb6dae03932a"],["artigos-e-talks-fora-deste-blog/index.html","79a6a6f436d939d975f0806684a8b24c"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","d939908d364abf8746274eb2ca0b5cc2"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","77c15250081ff1d9f86f50ee10788cbb"],["brincando-com-leveldb/index.html","7ec42797ff91d40146506ab167cd8bc8"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","533770c9c431b41053e2c5c44ae69e1f"],["como-desmotivar-uma-pessoa-parte-1/index.html","1a565f45b31d54726a86f654b0446c1f"],["como-desmotivar-uma-pessoa-parte-2/index.html","494d97a0ec5bf68a5e7dd689ccc56a23"],["como-desmotivar-uma-pessoa-parte-3/index.html","116664e9926180c097fa6e3cf9646b80"],["como-desmotivar-uma-pessoa-parte-4/index.html","541c90402e2845bfb5a771fcc0f53eb3"],["compactacao-gzip-com-nodejs/index.html","10c8e379264b9171fd089d696acc6f4e"],["configurando-meteor-e-velocity-no-travis-ci/index.html","2a213c1178f2fe45697ca4eff720c726"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","fcd04e69c0b3a95ef0808e072696deb1"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","9d3516ffd8dee7621959d6a9af1fb930"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","58b094b7a48bd6eeb0ba69b2a6b4d832"],["customizando-build-do-cordova-no-meteor/index.html","adde56a48364bd03b05af4ab96c440a8"],["customizando-npm-init/index.html","c9ad779da427dfb6193a0fb09e16f2e2"],["deletando-arquivos-repetitivos-no-terminal/index.html","cbf31e3547b2a977481c4dc8f516a7da"],["deploying-meteor-no-heroku/index.html","f5a3e4099c01e2de1b925df7c0b30eb5"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","4ae901be2d1f51e85fcc11ffd6a71c93"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","d18eeed7dedd3756a085a9ea565f8793"],["design-patterns-para-javascript-parte-1/index.html","a34f00ecb7220909cad16181262a92bb"],["design-patterns-para-javascript-parte-2/index.html","f2b205af91b028aa407bfe9ff3944881"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","2828e9191704a879dce486968c76f11a"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","094c10709bb1d28ff3108dfc96d595fe"],["dicas-de-terminal-contador-de-arquivos/index.html","f2172fe80f5b4e31fbb98ab648d3a439"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","4ebb648b1dc46134da8a6cfb83394ebf"],["dicas-de-terminal-criando-comando-alias/index.html","b2c6a133d5cf7ca5dc4501ef3cb589fd"],["dicas-de-terminal-historico-de-comandos/index.html","01001a4b2a9909d918eb5293f444f8fd"],["dicas-de-terminal-identificando-meu-ip/index.html","191e33cfc13359db6b8603368adae2f1"],["dicas-de-terminal-matando-processos-da-rede/index.html","7e5f2377f52ec59df6d47c55259f5d06"],["dicas-de-terminal-multiplos-comandos/index.html","4674aed099b683bba4871bd113b6ed45"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","ee76232684f66391a793039e507bb5d6"],["dicas-de-terminal-processos-em-background/index.html","af6d50618f5a4979adcc56e57d0fddb1"],["dicas-de-terminal-trabalhando-com-ssh/index.html","2d7328a5e162cf8b1231ef887de8621e"],["dicas-de-terminal/index.html","82fb71c4e005f917836097786cc5264e"],["dicas-para-abrir-um-blog/index.html","424cd5b479a28145320ecddfeef3748f"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","28f8e730cbbc17414969c588d4499277"],["dicas-para-um-estagiario-parte-2/index.html","747fd7bb6d1b1cd119812c2db217abaa"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","f975fb7659be942e18fb07c06eccd91e"],["entendendo-como-funciona-os-middlewares-do-express/index.html","c54a8a59419860bd14406ad5a861c5b8"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","41d0e232a9723023e0def57b11e83690"],["escrevendo-javascript-melhor-parte-1/index.html","ca8ebfa0f338870926571f900850999d"],["escrevendo-javascript-melhor-parte-2/index.html","cad6c444af5207c7444d18da9b6d5c27"],["escrevendo-javascript-melhor-parte-3/index.html","eda4852d443b82bb1a37d962dc8ae6a3"],["escrevendo-javascript-melhor-parte-4/index.html","7479dde76f730603f2f1d52d3bcebd8c"],["estruturando-uma-aplicacao-meteor-1-3/index.html","778e24e74071dad9effb2ba8ee67d31b"],["evitando-callback-hell-no-node-js/index.html","fc652964937ae293b55d10177081b85a"],["evitando-callback-hell-usando-generators/index.html","eb3cb7322f2ca455aa006c4339e98d57"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","462671a77f6d330d257464b549b09444"],["executando-funcoes-paralelas-com-modulo-async/index.html","e36e457ecde961f3cea11c819c5356d6"],["explorando-o-modulo-console-do-javascript/index.html","5c0b801c48f1b4d829b16f746fbe5b2a"],["express-vs-geddy/index.html","d465d4ff05b40f27237045833fb089ee"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","321dfb5e5edc050caa429428e75c9a90"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","934964a437fd626e31b5f6e240a0cdbc"],["frontend-moderno-com-browserify-e-babel/index.html","7626e0037beb43ecacfa4721d3f59dcd"],["gerenciando-codigo-fonte-com-git/index.html","8c46e47638309d79c13fd108f96795db"],["gerenciando-o-ruby-gem/index.html","723d50bc5ffe528a54a91badef8c76f7"],["gerenciando-plugins-no-eclipse/index.html","3faf977dd37a059a0a04c151f240498a"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","4741a3cf290ff1f025e9744cd3ba2b15"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","3be6dc10c82cd9c3879b943341a662fc"],["infografico-the-state-of-node/index.html","e4c195cb5a9c99d0a614b67a7ec82f84"],["infografico-what-is-node-js/index.html","98828c035bc21cd6d3aec795e660967b"],["introducao-sobre-meteor/index.html","607ab300d85237655e06445107f3f588"],["jade-um-otimo-template-engine/index.html","be6ae197bcd4fdcd72e7b606b16e1058"],["lancamento-oficial-do-livro-de-nodejs/index.html","1bf47effff01efe93990549e1d460f5d"],["light-talk-introducao-sobre-nodejs/index.html","eda4b889702ec1322b04696e80ee241b"],["livro-construindo-apis-rest-com-nodejs/index.html","5e3c2de80a925612703b37838317828f"],["mais-um-livro-agora-e-sobre-meteor/index.html","7471f45a856c2fa4d8b2a2227b7be884"],["mais-um-livro-sobre-nodejs/index.html","273befabf826937abdd7428dc0f2bf02"],["manifest.appcache","ab8174106eac088adbf4771cc52078f5"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","3df4e4d5cd44e986ae97f3e39e8ead65"],["meteor-e-seo/index.html","178d84131034651b0346cefd0666ac0c"],["meteor-methods/index.html","09e875afd1b9b1c1f67846cc3988adb4"],["meteor-pubsub/index.html","6c901a329faf8327beb6f25a1dcf1ec6"],["meteor-um-overview-sobre-a-plataforma/index.html","97900a9002b43dd0b48c6f92e44470da"],["meteor/index.html","4decbf37465da253ed67523e5441ccd6"],["migrando-de-windows-para-linux-parte-1/index.html","81ba21f184ca1b242adfea9a712145ad"],["migrando-de-windows-para-linux-parte-2/index.html","c088344764ca4d37f0bccb1bd513671e"],["migrando-de-windows-para-linux-parte-3/index.html","85e35e5ade1a7051935eb81a84ef886b"],["migrando-de-windows-para-linux-parte-4/index.html","78460b43aa814ec053c0ca3bde69ec8a"],["modularizando-frontend-javascript-com-browserify/index.html","1784f8919fd4f5d8452af07c7ae4812c"],["modulos-do-npm-no-meteor/index.html","cb05aa3a14b5448f93225c23bbf42049"],["modulos-essenciais-para-nodejs-parte-1/index.html","757bdc6620dfc26d91c346f7a2ec4cd6"],["modulos-essenciais-para-nodejs-parte-2/index.html","edafb205ec2404cfd55c5a360d90aefb"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","f7f01316840920abd1b06108c00125d9"],["nginx-servindo-nodejs/index.html","afe2ac5019da3b957e4f50c9d155fde3"],["node-js-para-leigos-child-process/index.html","382aa99e058cbbb8d20ec69126b21177"],["node-js-para-leigos-explorando-real-time/index.html","5c48b77627d2add0b2b6e315cf82e98e"],["node-js-para-leigos-framework-express-parte-1/index.html","af71c6d23f02798874916743f37c509a"],["node-js-para-leigos-framework-express-parte-2/index.html","d0066594dc711e0db711222dd36b2c1e"],["node-js-para-leigos-instalacao-e-configuracao/index.html","e2158ea61f72e38bae353b743caf4481"],["node-js-para-leigos-jade-template-engine/index.html","7dc88c75a67c949bb84e5e6fc2bcb4eb"],["node-js-para-leigos-trabalhando-com-http/index.html","f009cc3f1364299e90efeae84d9cf02d"],["node-js-para-leigos-utilizando-api-file-system/index.html","c14bcf3bd33048416bfa36feab0f6e90"],["nodejs-criando-um-mini-chat/index.html","17eafc75e42459b170947d3ed4d62d4b"],["nodejs-express-socketio-e-sessions/index.html","747f3bc643720169cdf6069754e6bd47"],["nodejs-javascript-no-servidor/index.html","6c64261052d937e4d08082b6b5fad8e3"],["nodejs-ou-nodemon/index.html","8b4b5950115419d522eb838fe4b3cb12"],["nodejs-para-leigos-a-proposta/index.html","05e7ac7a19a392b094f7db302b75d185"],["nodejs-para-leigos-introducao/index.html","ed4f57745585dc91f0743baae48d5aea"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","c1d7f0cff9acb8f29b01a37f553f3918"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","1da7ed555ad294ec7c5943c26efd7999"],["npm-node-package-manager/index.html","fc4146581a70eebd55749ad6b959c95e"],["nvm-node-version-manager/index.html","3bd9f110b4b9baf45478a170be8854ec"],["o-blog-esta-de-cara-nova/index.html","6a8b98d1e5b9cffee7f83dd40dc33144"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","b47ef11750f845dc9ee6eb407e385b34"],["onde-hospedar-aplicacoes-node-js/index.html","f1892e5872c27b757e6c390db6202826"],["organizando-um-projeto-meteor/index.html","d490debb57a9c519bcdc5119b59f7ab3"],["organizando-uma-aplicacao-nodejs/index.html","0dec782a0a5924b41d5908cd10f5f99c"],["os-20-posts-do-ano/index.html","6254613e7d34cd351a9409066353658e"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","70aa2bec54b6b0f1070089d5808c8f8e"],["otimizando-aplicacoes-nodejs/index.html","bca5eca8688081619fbf909b882885c6"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","571f1d3eaa962d429f48029dc8d0fedd"],["praticando-tdd-com-junit/index.html","e848404b1bfcda705f1e1c53610827cb"],["primeiros-passos-com-express-4/index.html","8f9499785c8492a248625c6b1599ad55"],["primeiros-passos-com-meteor/index.html","97f0a35a870de42180b9316433d84c7e"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","9707d8c0693e922ea2aa512918ac217c"],["protegendo-aplicacoes-javascript/index.html","6d38715caf863565182b32a3f20938d7"],["quer-aprender-java/index.html","6c9d33c2bb7d85947bbb5b242a8d5804"],["quer-aprender-meteor/index.html","b44a3aad4d836291424ee11c6073f03d"],["quer-aprender-node-js-atualizado/index.html","baab2637d00612f125fac230f8e9768f"],["quer-aprender-ruby-on-rails/index.html","c622b828925b0979528733760c9074d5"],["real-time-com-socket-io-no-nodejs/index.html","243f6289c1a16ec683d10027f4ff9019"],["realtime-com-rethinkdb/index.html","93fa5f2de7453a15e03755387e354978"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","685f0cce3a5cca00e7b23c60d7d82e69"],["socket-io-com-redis/index.html","01362be73a5f7c79febdfea5a76faea5"],["split-e-join-de-arquivos-com-tar/index.html","b28472db3fc8805c2a82ad30b68eb2ec"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","5925289a462b8cace559834513c677cc"],["terminal-gerando-arquivo-de-texto/index.html","7931bfc3b03a2971febb5c41b02e4246"],["top-20-de-2014/index.html","8f4fa3b9797404a1432dfd62eea8d9ab"],["trabalhando-com-multiplas-contas-do-heroku/index.html","7a43ef2ef22d82b15cb9314890e2fc25"],["trabalhando-com-validators-no-node-js/index.html","dcad8b57c3691734ef587cd5b3177f8f"],["tunning-em-servidor-linux/index.html","713109f86a936e3c0b7dc917645873f2"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","c9b1d19bc73767c77c0ae140bccd6b4a"],["usando-spread-operator-do-es6/index.html","2eccb9530b241330d54075af319dbdde"],["validacao-com-ruby-on-rails/index.html","f89af6fbe6a499e9d65b52a45b1d4529"],["vantagens-em-utilizar-sistemas-linux/index.html","fcfc49574f76fb869b29bcb067e19e7a"],["video-streaming-com-nodejs/index.html","810b596c3949aa5eb5b0f449aef26ae5"],["visualizando-portas-da-rede-com-nmap/index.html","67723c4dc5e4a009738ec740df40fb4c"],["webscraping-com-node-js/index.html","e94232870c853a688b606f2ae8f9bdcc"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-udgwebdev-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Mon, 05 Dec 2016 22:56:30 GMT */