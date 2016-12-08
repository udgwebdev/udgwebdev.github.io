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
var PrecacheConfig = [["15-javascript-hacks/index.html","fe7c49e31edf51a4d61bfc5a59ac4f10"],["3-maneiras-de-trabalhar-com-node-js/index.html","45176b59eec28ef8fb4239538dbd8695"],["404.html","fb3c08189b4986925ef552fd93432afb"],["5-motivos-para-instalar-o-arch-linux/index.html","3990f02213d611c359780e467c364d00"],["5-motivos-para-usar-github/index.html","a977c3a7793c0c5f1b79e4de8ee5f346"],["6-motivos-para-usar-nodejs/index.html","44a6a2b2ad0f9a3e5a2b4850a032db91"],["8-motivos-para-aprender-meteor-agora/index.html","7e46ed7dd2dca9cd556205a309a13a8e"],["8-motivos-para-estudar-ruby-on-rails/index.html","2fa96a45ac62fd147633c16232ab5a45"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","d673708455855c368433763e0c24e738"],["acelerando-comando-dd-no-macos/index.html","0f07d88680e28dd41fba09cfa9d09cbd"],["administrando-dados-usando-express-admin/index.html","d2ba747daf943deb313cf24134ecf722"],["administrando-o-leveldb-com-levelweb/index.html","368c94dc504507d75c2d9bc217dc4de0"],["ajuste-fino-no-eclipse-ide/index.html","623b07680cf3cca373cbf473666e3fff"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","59df4a7a2e402d2bf24746647938c317"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","d1f6b8eb6523a9eea0bfb17a0e75e1ad"],["artigos-e-talks-fora-deste-blog/index.html","c3f92f4e7664cb3fc88210a90615f7a9"],["assets/css/main.css","83bf73c53fa344bea41326efd7d384d4"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","c63f668e13eeeaa59a0790ceb073ba85"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","34b0fcf6b860a8be2617fa714c2a7a12"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","ac78c7bc3e1d5ae8d7490267638460b0"],["brincando-com-leveldb/index.html","3668349883424cbfa8e41b3f5c1175d4"],["brincando-com-o-template-engine-jade/index.html","0aff792358ad5eecaf66d7e1c31c82ed"],["brincando-de-es6-no-meteor/index.html","293ae55a394d626776cfb1ae1fa2f73e"],["como-desmotivar-uma-pessoa-parte-1/index.html","567b437df0461b6f325aefb3d70c09ff"],["como-desmotivar-uma-pessoa-parte-2/index.html","f91a278c29170bae0fbf93fb4780a0d1"],["como-desmotivar-uma-pessoa-parte-3/index.html","b236604de92c8688a05dcf697da0ee6c"],["como-desmotivar-uma-pessoa-parte-4/index.html","dc03528856f60aa88b3461772cd029ea"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","1e8e21c04049d81feaf980e3d6c2c747"],["compactacao-gzip-com-nodejs/index.html","41815b38630d50fdd25218e266e5be17"],["configurando-meteor-e-velocity-no-travis-ci/index.html","c50d18384148096de11624e0818750fb"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","4c6d2e46141c9b4ad887d9f7dff0be01"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","c462305066cb8c7cb154a1326653ceed"],["criando-um-media-center-com-raspberry-pi/index.html","42781cf4a0b613f4bd76e0c51d9acbc3"],["criando-uma-startup-com-pouca-grana/index.html","ddd66bb0d28baf3a083a3b694394c4bb"],["customizando-build-do-cordova-no-meteor/index.html","e6746336a0f6189915ce5dfa4a1bfdb2"],["customizando-npm-init/index.html","65e4698e27da413ac0be28be6761776c"],["deletando-arquivos-repetitivos-no-terminal/index.html","1f3d81bb5450d3747d45e7c367184b87"],["deploying-meteor-no-heroku/index.html","38dc1b0aae820341d80986e70520f627"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","3db8e55b6b261cb94a170201b4815e4e"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","097d0d1cd2a486b1f8edd19a9cd4a705"],["design-patterns-para-javascript-parte-1/index.html","5b5a5f08159decaec81b2a85b6c00d02"],["design-patterns-para-javascript-parte-2/index.html","f541ee599b82be0c354c68c87ec2f419"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","86b34be8a0a0e0b3976853363e473e65"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","d778495ce59fa2e69d90feafbaa9ca73"],["dicas-de-terminal-contador-de-arquivos/index.html","3f304911da30ddd3293956496caa0da8"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","beaf7878dad6a90898ad7f6fa3d869aa"],["dicas-de-terminal-criando-comando-alias/index.html","b8a6ea10e13b04d33d6aadfbfb4cffe4"],["dicas-de-terminal-historico-de-comandos/index.html","2db0f4678e234c2436d44f8dbd04b807"],["dicas-de-terminal-identificando-meu-ip/index.html","a798f4edd8c4821f103d5efbd5662178"],["dicas-de-terminal-matando-processos-da-rede/index.html","a631713771f8cfd5a960e5f6b4f97475"],["dicas-de-terminal-multiplos-comandos/index.html","d6b32ebd964edbc81ddd2ff973abd4e1"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","765bbfad2d6e02dff41bb2e5eb507d54"],["dicas-de-terminal-processos-em-background/index.html","c953d871a477c124824674686dd193fe"],["dicas-de-terminal-trabalhando-com-ssh/index.html","c40559ad427bcc0afdd52584c73716be"],["dicas-de-terminal/index.html","ba1b374dfb18b8ae47820480dc4a0396"],["dicas-para-abrir-um-blog/index.html","8f0afb7cb1264ba78bb9b7006a72ffc1"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","863887b345be8718e936435e6a0109a9"],["dicas-para-um-estagiario-parte-1/index.html","8567c84ed95c61c7c09de412273b01db"],["dicas-para-um-estagiario-parte-2/index.html","123cb0f375ce01f590b8feca6686205c"],["documentando-apis-com-apidocjs/index.html","c1a21483a495b0a2a44beedcefc3f4e2"],["dualboot-no-raspberry-com-berryboot/index.html","09b3f433f5c0db141fb51da0dcafdd35"],["email-weeklys-para-devs/index.html","2193af2e054a02f09036c10674a68819"],["entendendo-como-funciona-os-middlewares-do-express/index.html","7784413c4c38ec9235148662dcb4c285"],["entendendo-o-event-loop-do-nodejs/index.html","76e99f83bece9734785f06da308b849d"],["entrevistando-de-forma-produtiva/index.html","d6567635595fcbfdeede1dc67ed306c8"],["escrevendo-javascript-melhor-parte-1/index.html","12f8cb0f2acc4dc0bed35ac6d1db3769"],["escrevendo-javascript-melhor-parte-2/index.html","4b1e5bf18eb8e330749bdad0444f18d2"],["escrevendo-javascript-melhor-parte-3/index.html","f05ed720e21103a72e41a0e9ce87c293"],["escrevendo-javascript-melhor-parte-4/index.html","dd9a5528699b0b7afbe43be11de4b394"],["estruturando-uma-aplicacao-meteor-1-3/index.html","674c188fa8d1b2275f25f2144a01c685"],["evitando-callback-hell-no-node-js/index.html","267fe6c24e180e998a0caa6bd401cb8c"],["evitando-callback-hell-usando-generators/index.html","ffb1efef6373ad549e280493fc5e8f31"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","b06e877e7e8fa642620c4d88eb39c235"],["executando-funcoes-paralelas-com-modulo-async/index.html","780f224e0669525e30e032eb0ad7e9b4"],["explorando-o-modulo-console-do-javascript/index.html","e834d339de2ea53b88637833006a60b2"],["express-vs-geddy/index.html","64d6ada2bc08971f06d66f4f22d7c22b"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","cca66d5e5b4bce930d7abc1cafd66cf4"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","7e5ead8f6818de3129fc307ee08aba96"],["frontend-moderno-com-browserify-e-babel/index.html","cc47047fe4aa269508f2ee3c326bea1c"],["gerenciando-codigo-fonte-com-git/index.html","2a96ff2964726efe86b2c330e649ed9f"],["gerenciando-o-ruby-gem/index.html","80182af9a57c243cac9a18b99822af2d"],["gerenciando-plugins-no-eclipse/index.html","78691dfe9839eebe3be48892a5667cde"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","6c2f2ab756389908b9033b3436ddcd87"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","97ca20a5992f8514790630841df3d933"],["infografico-the-state-of-node/index.html","bbecea4d5d7e95b10cca5196ac7620d7"],["infografico-what-is-node-js/index.html","512261346aa0594f47d37957a02a2a16"],["introducao-sobre-meteor/index.html","080fb520860330a53094ceecc747d6e4"],["jade-um-otimo-template-engine/index.html","e9efae7c457be61708aa2c87224c83e6"],["lancamento-oficial-do-livro-de-nodejs/index.html","735fafea3528de47c429826210b7e82e"],["light-talk-introducao-sobre-nodejs/index.html","091dd21449561c5f7e370b989aec681f"],["livro-construindo-apis-rest-com-nodejs/index.html","f5e3ca8e2beb914760539ccc2d40ce34"],["mais-um-livro-agora-e-sobre-meteor/index.html","6ec7fc6634d60cb8b7bdf690cc961f32"],["mais-um-livro-sobre-nodejs/index.html","e972f4654d3ad6855c6c8e614b5878fe"],["manifest.appcache","e7f5454184ea3a73f1cc50066529f597"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","55c29a28ee44f8150fb0410cbdc11589"],["meteor-e-seo/index.html","67c5fed8f86fbe1b5b429ead8a666c40"],["meteor-methods/index.html","60a1806c85299666060b45b6c4f2ce29"],["meteor-pubsub/index.html","bef0882e9b14fe68e28998415888a480"],["meteor-um-overview-sobre-a-plataforma/index.html","c19b69d9e71ddad9a693875610826c89"],["meteor/index.html","f4e6d3d9bd3e0d5ce7ef8cd8e26f9625"],["migrando-de-windows-para-linux-parte-1/index.html","aa04d63bfcb0c4e122ad95f73ba6b01f"],["migrando-de-windows-para-linux-parte-2/index.html","52c5c6c1776b04f77b70a8c654f097eb"],["migrando-de-windows-para-linux-parte-3/index.html","7af7dd2bbbe1aa0a94eb4056468a4956"],["migrando-de-windows-para-linux-parte-4/index.html","2c795238f776a8b51099268379a49c83"],["modularizando-frontend-javascript-com-browserify/index.html","8e93a6b70c5158b16c470ad2c695aff9"],["modulos-do-npm-no-meteor/index.html","5e97889a3620e1df6a0ac194984da3bb"],["modulos-essenciais-para-nodejs-parte-1/index.html","03cbbf95d0c16544206c9cca92416002"],["modulos-essenciais-para-nodejs-parte-2/index.html","258e8c29c65852a086a4a746fc43b15b"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","dd88b839c5e62da62fd5084a80ab540e"],["nginx-servindo-nodejs/index.html","a0add2913f3315db53db3927c5c2ea78"],["node-js-para-leigos-child-process/index.html","a375456bba81b4853f997ab4701ffc69"],["node-js-para-leigos-explorando-real-time/index.html","eff8d3728915b62395f186dbc573ea51"],["node-js-para-leigos-framework-express-parte-1/index.html","24f83a0f4b16fe4084d8dbefd50967e7"],["node-js-para-leigos-framework-express-parte-2/index.html","5971fe261f1d8d1d36aad9f33ebe7ebf"],["node-js-para-leigos-instalacao-e-configuracao/index.html","b65cd26dd72f387d2e641d499de9c6ca"],["node-js-para-leigos-jade-template-engine/index.html","2819e9f0b9e442f7fe4cea452eecd1b7"],["node-js-para-leigos-trabalhando-com-http/index.html","96673014e9a0e17c313edd2caccb2b97"],["node-js-para-leigos-utilizando-api-file-system/index.html","922af7047adef904d7bc6629c7d9ff97"],["nodejs-criando-um-mini-chat/index.html","f1f9157a1a22f1345c8a2f6cec0c9fdb"],["nodejs-express-socketio-e-sessions/index.html","d40b016df40344626db0d7a8935bdb24"],["nodejs-javascript-no-servidor/index.html","4cd8a91f4762a39dc58c5033510fc251"],["nodejs-ou-nodemon/index.html","a7de0fb97b3dc9c95f44dae03f2647e4"],["nodejs-para-leigos-a-proposta/index.html","48b8c8dd0ac21684af7e433a98cbecb6"],["nodejs-para-leigos-introducao/index.html","6fba7dea4fc63a6c54a86a86ad9f9c80"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","9032515179c965d69b106ddff3f22e84"],["nodejs-processamento-em-paralelo/index.html","b8d67c925ff143dd5d46e45b8addd8a3"],["nodejs/index.html","0971ae0ef5f93a1861599292dd3fef7d"],["npm-node-package-manager/index.html","cffd74d30ba8670e07acbce83ac88989"],["nvm-node-version-manager/index.html","2c6265d79e977b457fb90ba684dc6d4f"],["o-blog-esta-de-cara-nova/index.html","70f963cc479395d70ad58c94604e8f18"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","89f183d1895b68d69e3a8c3aeb44fbce"],["onde-hospedar-aplicacoes-node-js/index.html","c5e69126ae24acd67fad28b4cc94bca7"],["organizando-um-projeto-meteor/index.html","5a978c534b0987e8031b072793b62793"],["organizando-uma-aplicacao-nodejs/index.html","ca6126cf5d84431340a342c60d90c5d4"],["os-20-posts-do-ano/index.html","cdbfad585ce6be2249218b3ca5c1bac7"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","c07f299d94766fd5c6875df110c62bbc"],["otimizando-aplicacoes-nodejs/index.html","c47d5fad19a5b2fa6f9911cbc1002cc0"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","06420f34b7d7150ff24f8abfee914877"],["praticando-tdd-com-junit/index.html","780ec53c25075fc7b198992ae17de9fe"],["primeiros-passos-com-express-4/index.html","995764dad6ee8ce3efb9518c4a931a76"],["primeiros-passos-com-meteor/index.html","fb969c026238475d2375f901498f165f"],["programacao-assincrona-com-nodejs/index.html","778988eed41146d9efebb7ff2cbc4f4d"],["programador-produtivo/index.html","fb72542690172353e88a0c79cc616b47"],["protegendo-aplicacoes-javascript/index.html","527fbf358dc05d7af667d73db5182061"],["quer-aprender-java/index.html","fc15c651b32a8318fb4747d857c5f632"],["quer-aprender-meteor/index.html","26a0110cc1b35601a8082f3caf9e8b1f"],["quer-aprender-node-js-atualizado/index.html","cdce275879cf523f6e996a073ac7e315"],["quer-aprender-ruby-on-rails/index.html","e0300ff939b9f3de39799b843e8de04f"],["real-time-com-socket-io-no-nodejs/index.html","908d6bc0082e326e82cc1fe60d955a71"],["realtime-com-rethinkdb/index.html","32de6b19fa7cc55e4c192cdc165b80fb"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","e5377974d22551f5db53e519b624e611"],["socket-io-com-redis/index.html","620e00ec9972d981bbefe68e7726ad29"],["split-e-join-de-arquivos-com-tar/index.html","c38899b274df3f904e5007853711656b"],["talk-meteor-for-noobs-no-devinsantos/index.html","ac9dd86301930b816c876ad3204d6183"],["teclas-de-atalho-essenciais-no-eclipse/index.html","c7c4e6bd0ee6f18f774957c9a58cedb2"],["terminal-gerando-arquivo-de-texto/index.html","855b4bde8154bf9e8d8b689d290e2b4c"],["top-20-de-2014/index.html","215486c3e851ec6450c69acdc955bf01"],["trabalhando-com-multiplas-contas-do-heroku/index.html","8d8f125c48dcbb5ec0ae38ab32f88f1a"],["trabalhando-com-validators-no-node-js/index.html","0e7e4ffcb7f084f7aab33115aea754e8"],["tunning-em-servidor-linux/index.html","66e87e6adf1a2b25555bb0764b3b134c"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","23dc0738da939b0ac537ef5d66a6fffe"],["usando-spread-operator-do-es6/index.html","63b00efd6e046ef39ce7726ca71083ae"],["validacao-com-ruby-on-rails/index.html","e054c7a2e92d8ecf046e6921b89017bf"],["vantagens-em-utilizar-sistemas-linux/index.html","1aef8119659fc2f90a73151213ed59ca"],["video-streaming-com-nodejs/index.html","fcfcf11459952641a43c3ab86ac8c344"],["visualizando-portas-da-rede-com-nmap/index.html","b2d841088925e36d1f9ed3cfb1a0d085"],["webscraping-com-node-js/index.html","49a85540b856bc980fecf17d24f374e0"]];
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


/* @preserve Thu, 08 Dec 2016 18:30:42 GMT */