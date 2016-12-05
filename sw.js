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
var PrecacheConfig = [["15-javascript-hacks/index.html","5e5fb4a7db6e8dfd88700d65f6fe6358"],["3-maneiras-de-trabalhar-com-node-js/index.html","fe794ac776b9ec623eb6ccf5ce6a3e61"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","708563fc80fa657242692ca11468e52e"],["5-motivos-para-usar-github/index.html","bd3a00eb0af1cf145f7e64aa9273494c"],["6-motivos-para-usar-nodejs/index.html","e0d4ed30d92bbb238a02b8a929da225b"],["8-motivos-para-aprender-meteor-agora/index.html","bc94a46e83d34e100edfb5ec45c4ce75"],["8-motivos-para-estudar-ruby-on-rails/index.html","76102575880e51b9795f431e99a4baf2"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","566960ae88ab2e4f2524538df0e5d512"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","ae72dcf05bd6290232d63483343ed53f"],["administrando-o-leveldb-com-levelweb/index.html","0b73a605668641dc6fc7dd57d83b1fce"],["ajuste-fino-no-eclipse-ide/index.html","88f29b5dd4d31340d67fe4fa367b7d04"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","67d7036b97d6c77cc2c2aac3b4078106"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","e0f0c1ce5565c55896336bbff1104e2c"],["artigos-e-talks-fora-deste-blog/index.html","67c12acb349b08238115363abfd3890d"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","96bd30e9b5033ac58c9b94ac1a04ad0e"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","ec21175d5eabe3be76f4e5c5c664c57e"],["brincando-com-leveldb/index.html","0f6ffd0b40f0d18829f7986db5bb2f4f"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","1662e43a3a9737e84cfaa4a99bc8d4c1"],["como-desmotivar-uma-pessoa-parte-1/index.html","c5c59a7c8bdaf7632e92283f4d80a023"],["como-desmotivar-uma-pessoa-parte-2/index.html","be22614efa061ec2c90819479b253435"],["como-desmotivar-uma-pessoa-parte-3/index.html","1e6fa34b61a72aa484e8f494c939e769"],["como-desmotivar-uma-pessoa-parte-4/index.html","21a7d4514e1b66f89ed9bf7aff935ab7"],["compactacao-gzip-com-nodejs/index.html","d39dec797fc5e017938f8864652efb49"],["configurando-meteor-e-velocity-no-travis-ci/index.html","6745a32b39bf8efefdfcd47f13c4212d"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","43f60e1397b25146da11d71624acc316"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","d6ce8b4d5309b7c9bd8e16ffbe59741a"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","8755441c8a433d4dacfb3365afd49c97"],["customizando-build-do-cordova-no-meteor/index.html","4dcff10696c3227f3cea977084995cf1"],["customizando-npm-init/index.html","70e9d32671d5a902fbb3a5bab66f7e4c"],["deletando-arquivos-repetitivos-no-terminal/index.html","18398eaf964e3a8a8750e543221d272c"],["deploying-meteor-no-heroku/index.html","790b085f232ffe9a445b4acf36edaf03"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","ffae6c57d3d72c43175f6956f10db6f5"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","a301df94883c03b7176de47fb9e45d07"],["design-patterns-para-javascript-parte-1/index.html","b3d8072cd628a876b517f04d93def0c7"],["design-patterns-para-javascript-parte-2/index.html","c8f134655cfcbd596dd50bbd75cbdcea"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","4a2eb01b6e26eb9e942745ea834cbd0f"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","60ce08d9f9dea73a64bf2738fd087ee3"],["dicas-de-terminal-contador-de-arquivos/index.html","c80ccce904a9f444d1f067926c4a09bc"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","a57cc51a4fb4669e2b2d6a216595d4e7"],["dicas-de-terminal-criando-comando-alias/index.html","09a48ae2f58fcf61df5fc7c25da68efc"],["dicas-de-terminal-historico-de-comandos/index.html","4f76c66b2c8c8a3ba17c4ce81b9d2829"],["dicas-de-terminal-identificando-meu-ip/index.html","668b93cfacaec2244f850f57d2d2610d"],["dicas-de-terminal-matando-processos-da-rede/index.html","b91f2bea4a5f4051fe3b2a2dd585b58f"],["dicas-de-terminal-multiplos-comandos/index.html","f48ff2cae89feb84ed6a476135ef1f24"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","6b7c9ac0305edf228ae28046f6e42e64"],["dicas-de-terminal-processos-em-background/index.html","280bbc8d4ce1193787e78630cf3c4951"],["dicas-de-terminal-trabalhando-com-ssh/index.html","ca959d679b4a14604b559456a062ccac"],["dicas-de-terminal/index.html","8a589f4fda302ecccce9e5fc300eb6a0"],["dicas-para-abrir-um-blog/index.html","df9c7532d9e0d942e5a80a724891e362"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","9bbb4ba3c053fa16f6ae22379f2645b6"],["dicas-para-um-estagiario-parte-2/index.html","4806082c5734df017809b7b6ca6c9983"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","81eecd7b3c0d5e1981932265cc3116b6"],["entendendo-como-funciona-os-middlewares-do-express/index.html","d2eca10cd52b76e98d5b1c733c6c5309"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","84293d2b0049ff44ed0089f2956759a0"],["escrevendo-javascript-melhor-parte-1/index.html","2175b2b3e4b361193730b9a498a55928"],["escrevendo-javascript-melhor-parte-2/index.html","a1d1db15518b4e1e83924afd43770d1d"],["escrevendo-javascript-melhor-parte-3/index.html","9979260da5ddce2502988af8e3e4c8ad"],["escrevendo-javascript-melhor-parte-4/index.html","22d5512e9d38317bb857153d2bdf2105"],["estruturando-uma-aplicacao-meteor-1-3/index.html","1686e21a67b671527c884aa4767c7d38"],["evitando-callback-hell-no-node-js/index.html","cdc9347e97767402f214408421919ac6"],["evitando-callback-hell-usando-generators/index.html","6ef11cc5bc66dd5c92e0c4206394d801"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","1db543978fea645d363e7f8197d137af"],["executando-funcoes-paralelas-com-modulo-async/index.html","ca06f88aa708f384ece7d0bffe7fd56b"],["explorando-o-modulo-console-do-javascript/index.html","bd1e5f5057c56cdc7f8155a985d6087a"],["express-vs-geddy/index.html","206bb526085e44a9ca6fc72c3c498b42"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","04d838606a16af1b4836430f2b7e824e"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","eea8b368b0205ba55f8a62ba150fb24f"],["frontend-moderno-com-browserify-e-babel/index.html","9c636a7c2e491a0c48a63162e41e1524"],["gerenciando-codigo-fonte-com-git/index.html","f51d761fe46890824707928694acd403"],["gerenciando-o-ruby-gem/index.html","79084d324659986531f08ad8d11f6bca"],["gerenciando-plugins-no-eclipse/index.html","5a499614d64e1c876eae8c2845c16e46"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","7550a4a428e0cf984d8e5c9d1856249b"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","11cdd14a02ce10e7c24fe03d1a94da7c"],["infografico-the-state-of-node/index.html","c306030ebc082b9a1c0e755094464d9a"],["infografico-what-is-node-js/index.html","b8cc29ceb724fe4bc76f3c4ba6097ef9"],["introducao-sobre-meteor/index.html","8b06d6150d296072f63f6f5d8454c62e"],["jade-um-otimo-template-engine/index.html","1d15cefdf60ae2a4d27f4c2744053543"],["lancamento-oficial-do-livro-de-nodejs/index.html","6778f6d33cd508f5503039292f58c14b"],["light-talk-introducao-sobre-nodejs/index.html","5b6cb2ab0feefcb2390529fde13a9710"],["livro-construindo-apis-rest-com-nodejs/index.html","36e088094396e5b7086a7fdffd03be78"],["mais-um-livro-agora-e-sobre-meteor/index.html","fdfc9cb71dce2c6b6f6d73f46da3c9e7"],["mais-um-livro-sobre-nodejs/index.html","5b7c0975b6a9ca6497f81a2316c36642"],["manifest.appcache","ff17c0b5ef2c380f8bd6cccb37579998"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","3df4e4d5cd44e986ae97f3e39e8ead65"],["meteor-e-seo/index.html","92387a2af81105607e1fe8deb723c843"],["meteor-methods/index.html","42b26f4ff3146ffb9ed7638dbea22729"],["meteor-pubsub/index.html","be7ccd062f0b6fade3b2463d6ddeb2c5"],["meteor-um-overview-sobre-a-plataforma/index.html","c3817b7fda1e8edbb459e88d1540a7dd"],["meteor/index.html","ce36dddcf096642e8681d6c2dbc9d3f9"],["migrando-de-windows-para-linux-parte-1/index.html","f6b0009163a3c377e2e19e3d43b81146"],["migrando-de-windows-para-linux-parte-2/index.html","299f09e2d5b2c851504414de22d9467f"],["migrando-de-windows-para-linux-parte-3/index.html","9e610deeb3fe0d6b9cfc6df81eccbcd6"],["migrando-de-windows-para-linux-parte-4/index.html","45a2209f235dfee8480bd2448a7840b7"],["modularizando-frontend-javascript-com-browserify/index.html","f6451e4fd746b9194895b04318686dc1"],["modulos-do-npm-no-meteor/index.html","9d4e0d951036155836e732858a50cc73"],["modulos-essenciais-para-nodejs-parte-1/index.html","765fa0fcc94c094634ff195642b019c8"],["modulos-essenciais-para-nodejs-parte-2/index.html","7b0a5a97de556a4f7f1f8ee1dbe48fba"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","a59e7cf060b75f172ae1f798c126f851"],["nginx-servindo-nodejs/index.html","9fda5452a08e6f117f24c85a36c3dccb"],["node-js-para-leigos-child-process/index.html","8be5b1b074398eeeeb3dc2c7f2ae8fca"],["node-js-para-leigos-explorando-real-time/index.html","160e611d3be549e04e6e4d86e7ca54b5"],["node-js-para-leigos-framework-express-parte-1/index.html","f0678416ad64ec27749e736025b049af"],["node-js-para-leigos-framework-express-parte-2/index.html","fd1bdaddd908acf890ae936d3bdcb7a1"],["node-js-para-leigos-instalacao-e-configuracao/index.html","82bb61ce7ce4c19bcf82d602863043b2"],["node-js-para-leigos-jade-template-engine/index.html","b8e67be30113722de09f616ef23eddaa"],["node-js-para-leigos-trabalhando-com-http/index.html","98290b0cbaa746c044b90a71c355ddbf"],["node-js-para-leigos-utilizando-api-file-system/index.html","d192f6c8640499d00636a6e9643e05d1"],["nodejs-criando-um-mini-chat/index.html","c1f874a58e13e2790245484943ca16b0"],["nodejs-express-socketio-e-sessions/index.html","dbaf60f1d5e572c389d5685c194dcfd4"],["nodejs-javascript-no-servidor/index.html","16e239fa74a8d8e67266cfe249bedd7c"],["nodejs-ou-nodemon/index.html","70770d3324c89a3b34a5226b1afebe18"],["nodejs-para-leigos-a-proposta/index.html","6301792376f5ce721a08fad17a48e0fc"],["nodejs-para-leigos-introducao/index.html","3adba4acffcca10c919ad7cdd38abc0e"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","5b79ec1956588e57de14f19ea7bfe878"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","0efbbf157873b4c8c360f515e7e02ea6"],["npm-node-package-manager/index.html","2fd47a622d9bd2c3190ba58065e65d14"],["nvm-node-version-manager/index.html","24642f50876f08ab63141cff6a720bf1"],["o-blog-esta-de-cara-nova/index.html","71fb2113d3d6247ea1d41e884bcea25a"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","247eef5123edae2b6e8ed6b6b122c8d3"],["onde-hospedar-aplicacoes-node-js/index.html","bd63ed2c7a8060ab0b82e74cffeecb7d"],["organizando-um-projeto-meteor/index.html","ccbb037aa8d8b7d9a20f2ffe02715115"],["organizando-uma-aplicacao-nodejs/index.html","6da334dbdaf394d6ac0ede8585c50d79"],["os-20-posts-do-ano/index.html","f32e32ebf3e0bfbaa2c45a1faeab379e"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","7a02449ef350fccdf522300397fcf2a9"],["otimizando-aplicacoes-nodejs/index.html","c4f1dea4635871220ef2f3e0a91eb009"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","07137919032724ea28852af0d9a92344"],["praticando-tdd-com-junit/index.html","ecf967c9e7647b90ce3b05016187a5a7"],["primeiros-passos-com-express-4/index.html","1d21b6a97928bf3d9d00a5ec6e72729f"],["primeiros-passos-com-meteor/index.html","4949676eddf7286abc212aaf70f7232d"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","bd08073b2f20cdf3641bef970064e9b6"],["protegendo-aplicacoes-javascript/index.html","65b6c640915b5c64c8df58872b7487bd"],["quer-aprender-java/index.html","8320ba7158ba1058bb7f37a337a46cba"],["quer-aprender-meteor/index.html","d80eb4c365628af47773751eeaad698f"],["quer-aprender-node-js-atualizado/index.html","acfbf982d0e759dd6ab7bba298b3191b"],["quer-aprender-ruby-on-rails/index.html","c57695ab554ff1f2542da9e34fab0860"],["real-time-com-socket-io-no-nodejs/index.html","9956147565422644e1e91d39eced68ce"],["realtime-com-rethinkdb/index.html","b65b2aa594b317bd170776caa6516b64"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","f57c7ebcc4e7514b918c845bc699c3dc"],["socket-io-com-redis/index.html","d30f436608f55775657a3c020404447c"],["split-e-join-de-arquivos-com-tar/index.html","de98f02b291cd51a95a835c73a62aeaf"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","53d6a26e682592e9f30e4eaae1455467"],["terminal-gerando-arquivo-de-texto/index.html","69ae72c15ea9fff90fbed089c1725f4b"],["top-20-de-2014/index.html","33b549fcbd5d5f227ce1ca729b5fd326"],["trabalhando-com-multiplas-contas-do-heroku/index.html","b37959cb6299cd8272552d6d94fe47c1"],["trabalhando-com-validators-no-node-js/index.html","ff27894ba2ee6805c17946396692e2d9"],["tunning-em-servidor-linux/index.html","9e2ea9b44575d3c42055b8a91898b15a"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","f3dece0fb2d9a69345b4c78767e576de"],["usando-spread-operator-do-es6/index.html","027b3cbd0dbdd15109073d61cee98821"],["validacao-com-ruby-on-rails/index.html","e2cf8a628e1dc6b8408482ccca2bee7e"],["vantagens-em-utilizar-sistemas-linux/index.html","84d1771d3f901bb6b0dcc3f6b04caf4b"],["video-streaming-com-nodejs/index.html","b61eecc748bb778dd89c95bf6f11983a"],["visualizando-portas-da-rede-com-nmap/index.html","4fffecbb8c94f55fbf766d3a82678403"],["webscraping-com-node-js/index.html","2f2bdfe3c21adf6f7b78162912f5fe5f"]];
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


/* @preserve Mon, 05 Dec 2016 21:46:54 GMT */