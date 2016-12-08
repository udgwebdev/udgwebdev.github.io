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
var PrecacheConfig = [["15-javascript-hacks/index.html","d4360e4efcf9634424dd99153634225f"],["3-maneiras-de-trabalhar-com-node-js/index.html","275e4967c6ef1c0ba8c7c285081bfe89"],["404.html","fb3c08189b4986925ef552fd93432afb"],["5-motivos-para-instalar-o-arch-linux/index.html","54f6caeeec978d53efcafdf0efce2e76"],["5-motivos-para-usar-github/index.html","9fb036c4a4e6a593d9b18236fd11b40f"],["6-motivos-para-usar-nodejs/index.html","afe6811060e55004c3c0c7dceb521ae6"],["8-motivos-para-aprender-meteor-agora/index.html","8e0bce894b37fd5f76454b40ddcdf0f6"],["8-motivos-para-estudar-ruby-on-rails/index.html","081f3900bb45f6d00842b4a515dd9849"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","97753ea09f4a3df87ad10ac097d07499"],["acelerando-comando-dd-no-macos/index.html","0f07d88680e28dd41fba09cfa9d09cbd"],["administrando-dados-usando-express-admin/index.html","6014eae840d51c6fa93c54e88ea4548b"],["administrando-o-leveldb-com-levelweb/index.html","9c6c232544dfb787ef3d785d4f90f703"],["ajuste-fino-no-eclipse-ide/index.html","850c81a98595418cf5fd7d17de75c262"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","9fa44de916cbbe37aa7e05a08dbe30fa"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","3a0d2f801d7a0f1f3b5d389ee678256d"],["artigos-e-talks-fora-deste-blog/index.html","66507034d36d0c3893b7b66e4d5d887f"],["assets/css/main.css","83bf73c53fa344bea41326efd7d384d4"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","c63f668e13eeeaa59a0790ceb073ba85"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","5881dc557b416515bf8c27fa70850517"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","4810da2d1964c668df1ceede1aa905c9"],["brincando-com-leveldb/index.html","3a8a44f82462b6cb9d5ac8adcecaced0"],["brincando-com-o-template-engine-jade/index.html","0aff792358ad5eecaf66d7e1c31c82ed"],["brincando-de-es6-no-meteor/index.html","3be4c870cfd3e00e95201d556055bb62"],["como-desmotivar-uma-pessoa-parte-1/index.html","d1ea771a80fd496024ef37d769aee459"],["como-desmotivar-uma-pessoa-parte-2/index.html","acd48cde2b4e05ebcffef4407f2bd3dc"],["como-desmotivar-uma-pessoa-parte-3/index.html","09b0e288a1a6b2d495cc880578916097"],["como-desmotivar-uma-pessoa-parte-4/index.html","85b2ea2aee206d43d7360375c3ea8109"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","1e8e21c04049d81feaf980e3d6c2c747"],["compactacao-gzip-com-nodejs/index.html","6cf4717417d2508af2862a1596f5c957"],["configurando-meteor-e-velocity-no-travis-ci/index.html","09539d92bc653f1b3e1d6c0220fba520"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","ebfdb85837c806ee337d3dac2e09d891"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","ca885131407ffdf455e5d9c6515fe38f"],["criando-um-media-center-com-raspberry-pi/index.html","42781cf4a0b613f4bd76e0c51d9acbc3"],["criando-uma-startup-com-pouca-grana/index.html","10be350e71336043f3ff3d0730a985e8"],["customizando-build-do-cordova-no-meteor/index.html","5d31523b89bdf43bf3a3d870a016820e"],["customizando-npm-init/index.html","937e9c7e57266996b9c0994c4305d89c"],["deletando-arquivos-repetitivos-no-terminal/index.html","c4349b135b0ee1b5d75ca6df419186be"],["deploying-meteor-no-heroku/index.html","6013332c1f39f81bd7c012eae0c41e2a"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","b012a5d3b435c19c68c45b98382ac09d"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","4d75fddac1ccf4d602f0add8282c0c92"],["design-patterns-para-javascript-parte-1/index.html","e54f965382e7618267bbd9b1ab75a717"],["design-patterns-para-javascript-parte-2/index.html","a05470a196bbefdbcbb3f6df9520542f"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","21e619fe5734f5675b48d59a3ca88438"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","fc38f08d7fb48eeccd33d19d7cc2218d"],["dicas-de-terminal-contador-de-arquivos/index.html","23ae3267631bc3ae124f5c9909c51b53"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","7dc1d39ed811507ee1ec96294fcedf44"],["dicas-de-terminal-criando-comando-alias/index.html","874deafe3e3bb7a8bed596c66672ce47"],["dicas-de-terminal-historico-de-comandos/index.html","399492ab598b2c4821bee464cc7fb5f0"],["dicas-de-terminal-identificando-meu-ip/index.html","0ee81b7a61ff5696886d216e877fd3c1"],["dicas-de-terminal-matando-processos-da-rede/index.html","eded41b6b6fb40eb7368feadac08f83d"],["dicas-de-terminal-multiplos-comandos/index.html","49f40bab25a817942e7efe7a5b52e3c2"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","38bb8214256432f392e11d3b8af63f3b"],["dicas-de-terminal-processos-em-background/index.html","08d19ee387d9e65ff536b445aeccfdfe"],["dicas-de-terminal-trabalhando-com-ssh/index.html","b784f9dab28eb9673213d1ee8b0d6541"],["dicas-de-terminal/index.html","8c145c5e45f3732bf12802e73bf8d718"],["dicas-para-abrir-um-blog/index.html","297612150b073bb8019b3e8b22ec7ff4"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","863887b345be8718e936435e6a0109a9"],["dicas-para-um-estagiario-parte-1/index.html","02669e49db2bb549018a5239fe20c616"],["dicas-para-um-estagiario-parte-2/index.html","7b8165e769b8a3f249a04f6d545e4512"],["documentando-apis-com-apidocjs/index.html","c1a21483a495b0a2a44beedcefc3f4e2"],["dualboot-no-raspberry-com-berryboot/index.html","09b3f433f5c0db141fb51da0dcafdd35"],["email-weeklys-para-devs/index.html","38c2d2775c5b3ea36977f61218d81948"],["entendendo-como-funciona-os-middlewares-do-express/index.html","eea3d560bc9144daa098e87b7da264bf"],["entendendo-o-event-loop-do-nodejs/index.html","76e99f83bece9734785f06da308b849d"],["entrevistando-de-forma-produtiva/index.html","6b774656261c3ca182e4ae0a3f2beabc"],["escrevendo-javascript-melhor-parte-1/index.html","4875bb0a5b865cd6c9184592270d7a41"],["escrevendo-javascript-melhor-parte-2/index.html","250da862f72c9b2fe21aa6a57164cd6d"],["escrevendo-javascript-melhor-parte-3/index.html","79097305280fdd670ecb903b84f7c867"],["escrevendo-javascript-melhor-parte-4/index.html","eefe3fd47330e20b652203811727fe2c"],["estruturando-uma-aplicacao-meteor-1-3/index.html","b85e9126d72ed49cbbec498aa6dbda12"],["evitando-callback-hell-no-node-js/index.html","92f44bb6832aba752f6360f7517145f9"],["evitando-callback-hell-usando-generators/index.html","007f25b927ab25a133e5f9340410a903"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","ce38eaabbfbbff2b66ff8b1cd205ee3f"],["executando-funcoes-paralelas-com-modulo-async/index.html","c79193fa0395c296955ecddb2c8aa2da"],["explorando-o-modulo-console-do-javascript/index.html","8f805f0558c1a4e90224380d314d90cb"],["express-vs-geddy/index.html","6a767a3042ba5c43179f0b31e8e077ee"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","fa170153e280721e2cc3a3fef7fdacd3"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","289f09f030bab41886d45f70a8abe1ed"],["frontend-moderno-com-browserify-e-babel/index.html","41bfff24545000c697fb54321d7ff650"],["gerenciando-codigo-fonte-com-git/index.html","188fd1af2403f250f17dad850b0b77c5"],["gerenciando-o-ruby-gem/index.html","5e02ecb0bd1f3c062c7fe99bbd72265d"],["gerenciando-plugins-no-eclipse/index.html","88eb1aed09f1527ba145804a23e8f8fd"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","8c46b94e277013a266c6d1c6d06d6f1a"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","852073ce9e2d0271aaf93cd2453ec010"],["infografico-the-state-of-node/index.html","c7aa40f7d14f27b07c332b49d30705a2"],["infografico-what-is-node-js/index.html","018cb8821347cd1c1225136fd51b2a16"],["introducao-sobre-meteor/index.html","f1a3402f3c90f67d86872c777be1c801"],["jade-um-otimo-template-engine/index.html","732b7c2f4720af7a1c8dce94ab6a85ef"],["lancamento-oficial-do-livro-de-nodejs/index.html","1d24012556aba45f871311ad77e1d19b"],["light-talk-introducao-sobre-nodejs/index.html","8b0c38e86e881cb46766c956e1297769"],["livro-construindo-apis-rest-com-nodejs/index.html","f11f4b7568853c4bf8911ce9d26ee406"],["mais-um-livro-agora-e-sobre-meteor/index.html","0c0579dc111fd56978db6563ebad2dcb"],["mais-um-livro-sobre-nodejs/index.html","18923a4adf55e5a957105b75d976d6b4"],["manifest.appcache","95554ea10bda635ab962682181847bf7"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","55c29a28ee44f8150fb0410cbdc11589"],["meteor-e-seo/index.html","e6d95f1dd596ed8bac6ef524b7c6f81f"],["meteor-methods/index.html","092ab635e651a2ae4d155d86297ffcd3"],["meteor-pubsub/index.html","48e94e7441bb9d3f8798fa27ce997a83"],["meteor-um-overview-sobre-a-plataforma/index.html","f12f16d6d342752127dcb9793cba9ed3"],["meteor/index.html","61cc3b40923ba0292c2f41f772b2cb12"],["migrando-de-windows-para-linux-parte-1/index.html","efc915e666865970cc86b76de9bad9f9"],["migrando-de-windows-para-linux-parte-2/index.html","51a0a0c696bf3ad55c91aae7b1208463"],["migrando-de-windows-para-linux-parte-3/index.html","362d784e866f031c5defaae399f016e0"],["migrando-de-windows-para-linux-parte-4/index.html","e5f47201c0bf4ad648146a2d00e825e7"],["modularizando-frontend-javascript-com-browserify/index.html","e456289736caa9d3493db31fb4473fe4"],["modulos-do-npm-no-meteor/index.html","e5da1fb8928efaa01ef29d05468f677d"],["modulos-essenciais-para-nodejs-parte-1/index.html","ebcb2e766c1617e9f071484174da1446"],["modulos-essenciais-para-nodejs-parte-2/index.html","ddec75e06768ce7ccd36fd8d39b26607"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","685ab9f2b1c24fd883212eef99c6d913"],["nginx-servindo-nodejs/index.html","89a0fa3102039b1cdb33bf5b2c8c8e95"],["node-js-para-leigos-child-process/index.html","4161ed1fe3eb43259cde2f45d86d8380"],["node-js-para-leigos-explorando-real-time/index.html","7df2a8bd41bedf13fb1e9b6882a5ec05"],["node-js-para-leigos-framework-express-parte-1/index.html","d22fd8f4c03a83d1c1610210c68d4593"],["node-js-para-leigos-framework-express-parte-2/index.html","b1dcaafbb18225c8441ff1d851cbb4df"],["node-js-para-leigos-instalacao-e-configuracao/index.html","758f146cc6c65b5b26f5b1b604000018"],["node-js-para-leigos-jade-template-engine/index.html","b6b9684de42eca0689564c77261ea7f2"],["node-js-para-leigos-trabalhando-com-http/index.html","9afb926caa8119eabd1a19bead4d9572"],["node-js-para-leigos-utilizando-api-file-system/index.html","e54396e2fec60b0bad56948fc6d34cbe"],["nodejs-criando-um-mini-chat/index.html","b5ea497b78b534a3e55f18586573b07e"],["nodejs-express-socketio-e-sessions/index.html","73d785a6ff6aa5cac95e684017b2af43"],["nodejs-javascript-no-servidor/index.html","6c94f41625cf2bccfa74f2a39572feef"],["nodejs-ou-nodemon/index.html","9ea84c5f2a765286a665a52bf1577f26"],["nodejs-para-leigos-a-proposta/index.html","f20afd3a49eaf642b16a196d780b7957"],["nodejs-para-leigos-introducao/index.html","552903da3786779770f94c496190bf2a"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","e2c6f2ac2e6bc73f782d0dfd32e85957"],["nodejs-processamento-em-paralelo/index.html","b8d67c925ff143dd5d46e45b8addd8a3"],["nodejs/index.html","f72034c9ff8fbb70b281461e52df98d2"],["npm-node-package-manager/index.html","fefe42eca8d300936d6f16d6ec4997c4"],["nvm-node-version-manager/index.html","7b5c03b9cf39c4b8dd6f6717f6fd4db6"],["o-blog-esta-de-cara-nova/index.html","c2e3a3581cc73063e1f3d4b77552c029"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","b88de3d205b66d17d6b977ce7aa9ffc7"],["onde-hospedar-aplicacoes-node-js/index.html","7ac75e949d624f86fab2b268b6dacea6"],["organizando-um-projeto-meteor/index.html","3591d61546896609bfa374e01158c24c"],["organizando-uma-aplicacao-nodejs/index.html","0196e69f4df20421056ac7b01ed3774e"],["os-20-posts-do-ano/index.html","5d45ad522a6817e74ba612a3d5adfca8"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","e0e95fa8bcf1a23332e0169f852960d3"],["otimizando-aplicacoes-nodejs/index.html","39304ba5c73d9673a5eea48d0d641079"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","8da4a3d686bbfcd6e8dfa1fb51c07d6b"],["praticando-tdd-com-junit/index.html","cc880252128a6df42203e6717c5f4564"],["primeiros-passos-com-express-4/index.html","c0235d59ba022040e922f8b555c24bb8"],["primeiros-passos-com-meteor/index.html","233dc63f8ed0fe88b7713b5a2577578b"],["programacao-assincrona-com-nodejs/index.html","778988eed41146d9efebb7ff2cbc4f4d"],["programador-produtivo/index.html","a6fe3a79eb3ebcc0647404daf0887b7a"],["protegendo-aplicacoes-javascript/index.html","2ef1c302a74a136a2e3a1e79589fb45d"],["quer-aprender-java/index.html","2abfa172949e151b0dae650b6c91c2c8"],["quer-aprender-meteor/index.html","ef88da2783267b7c68df61a83638f9b5"],["quer-aprender-node-js-atualizado/index.html","251c239be4dcd9bc20b3749c1cc21760"],["quer-aprender-ruby-on-rails/index.html","21e68477926a15026ebdb8286d119d87"],["real-time-com-socket-io-no-nodejs/index.html","5ab0a02b04763781208b8270256d6397"],["realtime-com-rethinkdb/index.html","75dbf6a75193fb3f82b695b50dc9529f"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","a68b8d3cb0492b870b41b7ee98d26836"],["socket-io-com-redis/index.html","398b244fdee9762c1e113fe681b24191"],["split-e-join-de-arquivos-com-tar/index.html","7fbd32a381225368e6f2c06348fbe149"],["talk-meteor-for-noobs-no-devinsantos/index.html","ac9dd86301930b816c876ad3204d6183"],["teclas-de-atalho-essenciais-no-eclipse/index.html","ca8fe51f77881240e7a34343aea5ae33"],["terminal-gerando-arquivo-de-texto/index.html","52e7c4091e0d6d0c9f4ac4f81550c8d4"],["top-20-de-2014/index.html","6a736a95f5daf6114cef908607546672"],["trabalhando-com-multiplas-contas-do-heroku/index.html","de4ed9d5c56b3651e01f413f239ef725"],["trabalhando-com-validators-no-node-js/index.html","3a7165fa3ffb5c0a58eb2c411e0ec3f7"],["tunning-em-servidor-linux/index.html","06b79e22138eb9d0839b233d886bc04e"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","aed34da1e6ab9246930fe485cb3d5c49"],["usando-spread-operator-do-es6/index.html","0b005dd2ee50792fd9fe28837a84f634"],["validacao-com-ruby-on-rails/index.html","3edb8ecb6cfc41196743a5eb49f27c12"],["vantagens-em-utilizar-sistemas-linux/index.html","94c710e9f0119168f15b994cb19f7c5c"],["video-streaming-com-nodejs/index.html","7a84af48689a6f57bcf28c12c15374fb"],["visualizando-portas-da-rede-com-nmap/index.html","6bf7c66a587f4aa14663f85f13332149"],["webscraping-com-node-js/index.html","dd1464ed8740c20d8f8d8b346670859e"]];
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


/* @preserve Thu, 08 Dec 2016 18:31:44 GMT */