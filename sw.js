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
var PrecacheConfig = [["15-javascript-hacks/index.html","8b9c1198c4df3d2d23acc53cb2aa6ff2"],["3-maneiras-de-trabalhar-com-node-js/index.html","fe47bd6d6a5925b9533eb388222c418a"],["404.html","fb3c08189b4986925ef552fd93432afb"],["5-motivos-para-instalar-o-arch-linux/index.html","655b75767c969bd49a85ad83d60dff14"],["5-motivos-para-usar-github/index.html","84f720c92b4106e6bd687382b212219f"],["6-motivos-para-usar-nodejs/index.html","c6b415459745b4a75fa5224a13017c13"],["8-motivos-para-aprender-meteor-agora/index.html","54ed8d20806a0f1786525d4ed0d6c2c9"],["8-motivos-para-estudar-ruby-on-rails/index.html","b1e5877f51bcde046e6c31529da596c6"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","549fc8236c4e4cdbe35c69dcb10fec8e"],["acelerando-comando-dd-no-macos/index.html","0f07d88680e28dd41fba09cfa9d09cbd"],["administrando-dados-usando-express-admin/index.html","120b5a2d9cf121e4a2ad2f0dfa5773f1"],["administrando-o-leveldb-com-levelweb/index.html","3d8aa50ea6ff0177f452e7cba66bb34e"],["ajuste-fino-no-eclipse-ide/index.html","dc5b2045fd3d38fbe90856d6fa14f401"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","a52b251ebd4d42b0f3de313a9f564c62"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","bd9bd5609389b522494a4e1d1ec341af"],["artigos-e-talks-fora-deste-blog/index.html","3b2d5f5c99b9c385a20310d440121579"],["assets/css/main.css","b0f4ae29a06b560ed7b66b48ae8cf5d1"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","195efe44828cf58bf72f94c10e57bc9c"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","cc14df8bda6235e72635dbd6644df493"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","7837f0fc87018a77e654fcff98f87c48"],["brincando-com-leveldb/index.html","65c1effd1a137dfb6509d9ed5094dbf1"],["brincando-com-o-template-engine-jade/index.html","0aff792358ad5eecaf66d7e1c31c82ed"],["brincando-de-es6-no-meteor/index.html","14e73b4160be94c1cacd5f146299eb06"],["como-desmotivar-uma-pessoa-parte-1/index.html","7e14a4ef0ddf433d6b17a347ae7811aa"],["como-desmotivar-uma-pessoa-parte-2/index.html","54c1012408df9dfcdbd3363462e77857"],["como-desmotivar-uma-pessoa-parte-3/index.html","d9e5cae458a191ebb03a195d7d3328de"],["como-desmotivar-uma-pessoa-parte-4/index.html","b63499ac584fb97e593640a8ccfc89a1"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","1e8e21c04049d81feaf980e3d6c2c747"],["compactacao-gzip-com-nodejs/index.html","b6cc00cac38f40441d40e4eb7592e8da"],["configurando-meteor-e-velocity-no-travis-ci/index.html","e3b2201813c238132835c590e92c5867"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","efa6cd7ba940613a05da88efc38e1b63"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","1806ae340260dba78b45e5c14f90d883"],["criando-um-media-center-com-raspberry-pi/index.html","42781cf4a0b613f4bd76e0c51d9acbc3"],["criando-uma-startup-com-pouca-grana/index.html","746a19648028b84d40f8ae36caa70515"],["customizando-build-do-cordova-no-meteor/index.html","2c80ee3b6de25b206e46dd280943a075"],["customizando-npm-init/index.html","95b2c04d8fa852f2d37f35decfd925c5"],["deletando-arquivos-repetitivos-no-terminal/index.html","715318dd91d1197ff7394ef094b0add4"],["deploying-meteor-no-heroku/index.html","72ac6d66941c8bf6159e52d97cd7e326"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","b94c1c0215e2bf767e22bd9e00ee376f"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","e7949d988f4c1d5115233a61eeaaa2cb"],["design-patterns-para-javascript-parte-1/index.html","599a7beff593b39d6f44073c6811dfa5"],["design-patterns-para-javascript-parte-2/index.html","b6cd229ae62f306d7d13fb3292c8f7a2"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","8b5803fadc9d2ea2d05b0d98587bba5d"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","073aa2efdc892995a88624077cf08bfd"],["dicas-de-terminal-contador-de-arquivos/index.html","cc0478096e1e0f4ad2123bd896a7b05e"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","9b5c451589ac58af4f4d582604039835"],["dicas-de-terminal-criando-comando-alias/index.html","4e620a258b9c0b4f2164d363317b691f"],["dicas-de-terminal-historico-de-comandos/index.html","c8ba0a0e90f12031821a2bdbca7c1fa3"],["dicas-de-terminal-identificando-meu-ip/index.html","15d6810ff23389d20f25c555614140c1"],["dicas-de-terminal-matando-processos-da-rede/index.html","f019ba39f4f544e6e78bf3157c306454"],["dicas-de-terminal-multiplos-comandos/index.html","cd4d8a1b5e386ae9322068e4cd630cc0"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","a927c086892489d3a246a9d492502685"],["dicas-de-terminal-processos-em-background/index.html","6f391e5ecbe8715b1828d1b2abd29a53"],["dicas-de-terminal-trabalhando-com-ssh/index.html","99eb4de759f1c1019f20778cecc4721b"],["dicas-de-terminal/index.html","21f7d67d9868e189cbeb1cfb332c2e21"],["dicas-para-abrir-um-blog/index.html","b3bf8cc88367079378a172b595f20bee"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","863887b345be8718e936435e6a0109a9"],["dicas-para-um-estagiario-parte-1/index.html","f117c62f4872cd54df5ae4976f119f45"],["dicas-para-um-estagiario-parte-2/index.html","bdf4fad27fa54e845c36d1c9295f2972"],["documentando-apis-com-apidocjs/index.html","c1a21483a495b0a2a44beedcefc3f4e2"],["dualboot-no-raspberry-com-berryboot/index.html","09b3f433f5c0db141fb51da0dcafdd35"],["email-weeklys-para-devs/index.html","f13ff4aad2465bc475343b6253dbde45"],["entendendo-como-funciona-os-middlewares-do-express/index.html","c5993015b01c9d5ba7eb4bb581560294"],["entendendo-o-event-loop-do-nodejs/index.html","76e99f83bece9734785f06da308b849d"],["entrevistando-de-forma-produtiva/index.html","546f84507d2c15a3e128c102b8e7f98f"],["escrevendo-javascript-melhor-parte-1/index.html","890f74cab9a164c2d5cbe465c77febab"],["escrevendo-javascript-melhor-parte-2/index.html","9e2489db621aac0b5d724cdc432d5a0e"],["escrevendo-javascript-melhor-parte-3/index.html","4404a9ee03670aef4b45dc0569bad442"],["escrevendo-javascript-melhor-parte-4/index.html","3a9bbdb6bc654066b56c2d17b03b7d6c"],["estruturando-uma-aplicacao-meteor-1-3/index.html","1faba510f90c8f5273be9e8a5859ea94"],["evitando-callback-hell-no-node-js/index.html","616de92b18b9b30c34440d5a1ea143de"],["evitando-callback-hell-usando-generators/index.html","b7c7757194938210f3807f816785678d"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","1100bbb70351e3dbd0bf16b33e751b19"],["executando-funcoes-paralelas-com-modulo-async/index.html","80a286d2a795180aaec14ec2ba563b0b"],["explorando-o-modulo-console-do-javascript/index.html","250e0004634ecb689a0675d16c972050"],["express-vs-geddy/index.html","3763081b771d52729dc2372f9238fa11"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","5fdb87f461a38a52da3b7b148287a137"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","b7a370eeb08c70b55b31fc0e41d01b56"],["frontend-moderno-com-browserify-e-babel/index.html","d00ae3de51867e064368441ecc861c64"],["gerenciando-codigo-fonte-com-git/index.html","c639f731915cf065843579c029fd92cd"],["gerenciando-o-ruby-gem/index.html","b8d3c44e63fff34b50e3b770629faf6e"],["gerenciando-plugins-no-eclipse/index.html","65a3860300314ef3062dc5dd00f3a229"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","8faddf5342713639c13691a8585028c1"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","e04df5352514d4ca378ccf8833347375"],["infografico-the-state-of-node/index.html","0a4fcae8198d1bdaf3ceb61f956802f0"],["infografico-what-is-node-js/index.html","0b513a521bc7ee71c4271215a10c6ab9"],["introducao-sobre-meteor/index.html","347a2ae39ca00959573a10e1175f380b"],["jade-um-otimo-template-engine/index.html","65cf5c1a7eb9c08d70bd1bbac1f6cf93"],["lancamento-oficial-do-livro-de-nodejs/index.html","4e79aa6a92fa7e0feb9a3576722d5b06"],["light-talk-introducao-sobre-nodejs/index.html","ff15599683439dd44ad9f8f401a443c9"],["livro-construindo-apis-rest-com-nodejs/index.html","ee0742c8929bf40e630ab13f3c5c66d2"],["mais-um-livro-agora-e-sobre-meteor/index.html","abe6beb2be81a742e0e7d19082546d33"],["mais-um-livro-sobre-nodejs/index.html","d4ed964135ef21745c73d73d9559a64f"],["manifest.appcache","58a6866115d4399954d05d7f1bca7734"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","55c29a28ee44f8150fb0410cbdc11589"],["meteor-e-seo/index.html","ef8647a36ae873ace890a100819008fd"],["meteor-methods/index.html","cad356e590803436a39a09b97d5a8136"],["meteor-pubsub/index.html","1e170cd1d4eff9f3b2a97fb16b64ca4c"],["meteor-um-overview-sobre-a-plataforma/index.html","7ade6a5c8942b3922ca937540b39758b"],["meteor/index.html","663d69d4dd5737f2229b81f0b3ca4ec6"],["migrando-de-windows-para-linux-parte-1/index.html","2d1deee196379cbe1be8bdfe1aab015c"],["migrando-de-windows-para-linux-parte-2/index.html","370ba072680331c521fe9421f4023322"],["migrando-de-windows-para-linux-parte-3/index.html","f0f5441c110ea3a1237d48e65bb9e476"],["migrando-de-windows-para-linux-parte-4/index.html","b4be712d9684fd060b4ab9341a93fbdb"],["modularizando-frontend-javascript-com-browserify/index.html","f3a7cfb3c96554d4eb2f30f53df0add7"],["modulos-do-npm-no-meteor/index.html","37c8b34c439873be7eabfa9843eecac9"],["modulos-essenciais-para-nodejs-parte-1/index.html","cd7230d4316154de9b21d84990f96661"],["modulos-essenciais-para-nodejs-parte-2/index.html","1336e3ca3d1360ebd33280588907ccdc"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","c9ca7a953e8d9bef440131aae0c1d9a6"],["nginx-servindo-nodejs/index.html","c4078c4d5666e91a655cdc1e3a524e63"],["node-js-para-leigos-child-process/index.html","99081b4181c1eca6ee5f5b5a81bc087a"],["node-js-para-leigos-explorando-real-time/index.html","0666df733000498551968c45fbc73c74"],["node-js-para-leigos-framework-express-parte-1/index.html","ee8ca9a128c4ced72d8130c7b9d1fd76"],["node-js-para-leigos-framework-express-parte-2/index.html","510529f238a614accb5b8628f68ba9e4"],["node-js-para-leigos-instalacao-e-configuracao/index.html","a046656c9e1619299f63dc6e830effc1"],["node-js-para-leigos-jade-template-engine/index.html","d1e75e12457e2fce4f49f95188da5571"],["node-js-para-leigos-trabalhando-com-http/index.html","219d52481e95271f2fcf33d375af0a87"],["node-js-para-leigos-utilizando-api-file-system/index.html","03618c9b4758f3e45fede1ec934decc3"],["nodejs-criando-um-mini-chat/index.html","2d3391bf75fb59ca2e12e0d0d662030a"],["nodejs-express-socketio-e-sessions/index.html","b359fcc46464b85aec2c0cad9b15f8b7"],["nodejs-javascript-no-servidor/index.html","0da8b810780ba6764390cbd3f3eeb80b"],["nodejs-ou-nodemon/index.html","4c784c062b97d7fa61ec1bd227e815e1"],["nodejs-para-leigos-a-proposta/index.html","c4b81ba9751ba05b63f9a4228ad1874b"],["nodejs-para-leigos-introducao/index.html","18d3494b05f8f9572a6cbc6b469d6291"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","17594441e1ad65011002e3ea3368374b"],["nodejs-processamento-em-paralelo/index.html","b8d67c925ff143dd5d46e45b8addd8a3"],["nodejs/index.html","5e45fb2ca54e1d444d4dbf139a736d8d"],["npm-node-package-manager/index.html","7a6db488bc61d2008c7d4e823cf6d7b5"],["nvm-node-version-manager/index.html","56deeed7b140c801d1cf4c304e82a430"],["o-blog-esta-de-cara-nova/index.html","96a633d69a3b921f0bb0c7239c9dc956"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","70cd8699fc87baa4222bd102e2d63d87"],["onde-hospedar-aplicacoes-node-js/index.html","680eff91e8e07ba260848812d9e92775"],["organizando-um-projeto-meteor/index.html","27b7812ee8111d213da998eebdd1cbe0"],["organizando-uma-aplicacao-nodejs/index.html","e57d99054e7b31167a3c1dc0ad50bd88"],["os-20-posts-do-ano/index.html","8c37a3f15213633edd75b5011c1c8453"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","3bc816166c430918d52588fff0b269b1"],["otimizando-aplicacoes-nodejs/index.html","bbdfebd6937a5d73593872ecea3eb3db"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","5fa39aa9257ff9d1088c6aee48a4d520"],["praticando-tdd-com-junit/index.html","dca78a5c4e2b8aa206a269c22307f493"],["primeiros-passos-com-express-4/index.html","3f4acaaa954a3fb7550213d89d8ce727"],["primeiros-passos-com-meteor/index.html","2a99b90942965719257dfc647959bfe1"],["programacao-assincrona-com-nodejs/index.html","778988eed41146d9efebb7ff2cbc4f4d"],["programador-produtivo/index.html","7fcc3982f0aca9d72ec379141ae9861d"],["protegendo-aplicacoes-javascript/index.html","d1c3df05f2f883b27010e389b379965e"],["quer-aprender-java/index.html","66b8779845559137b90f77031831f544"],["quer-aprender-meteor/index.html","9b34f5ad4c6705bf82c971fbd3dc360c"],["quer-aprender-node-js-atualizado/index.html","4b663e54e052b12ea2db1b54acab9c3f"],["quer-aprender-ruby-on-rails/index.html","eb17966d714d01964791dd4ab592eb06"],["real-time-com-socket-io-no-nodejs/index.html","f7d163e44e902e2af63f8c3ed36f1c73"],["realtime-com-rethinkdb/index.html","ff1425d90d8fe591fa8dd9c45cb78064"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","840c0f81f02b328b0981a61e0aea6c50"],["socket-io-com-redis/index.html","e04eb01806d1a4c6129be7c11c27fd7f"],["split-e-join-de-arquivos-com-tar/index.html","329641f66a2c5507f70143ae4576f0bd"],["talk-meteor-for-noobs-no-devinsantos/index.html","ac9dd86301930b816c876ad3204d6183"],["teclas-de-atalho-essenciais-no-eclipse/index.html","4c9350a0d2dda36b8424c18b6d731a05"],["terminal-gerando-arquivo-de-texto/index.html","463ef23c6f38776297a0e9aeaa2674f2"],["top-20-de-2014/index.html","bcf59da3ac48c9a1b279b0aa7b12ef08"],["trabalhando-com-multiplas-contas-do-heroku/index.html","cf77b309a36c44a24d476fb3c930b6f4"],["trabalhando-com-validators-no-node-js/index.html","0a242952005bf9c1754291f5da07fce8"],["tunning-em-servidor-linux/index.html","750cf19d32025e961c912fbab19d27f8"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","d8a5d8a359895604ab14414828d4504d"],["usando-spread-operator-do-es6/index.html","9348f1327d229a2a33c08c923d2c4bc0"],["validacao-com-ruby-on-rails/index.html","d9adcb98ef9f89d8ab0ef446b0c2f2f3"],["vantagens-em-utilizar-sistemas-linux/index.html","e55e5915a775e6c02e6dc83cb529781e"],["video-streaming-com-nodejs/index.html","b5bc69740e174f1b764234668e07715e"],["visualizando-portas-da-rede-com-nmap/index.html","15849d66c0a818564c904a8515bfcab4"],["webscraping-com-node-js/index.html","40ece168192cab6294de39656e33d025"]];
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


/* @preserve Wed, 07 Dec 2016 19:31:56 GMT */