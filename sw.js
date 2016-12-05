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
var PrecacheConfig = [["15-javascript-hacks/index.html","052091caae121801ec9564dc33767626"],["3-maneiras-de-trabalhar-com-node-js/index.html","b3545a04614f215ad2e1afbcbfd2e0bc"],["404.html","90e751f95085ef7a352cff7e859e30d0"],["5-motivos-para-instalar-o-arch-linux/index.html","b2559e22b3a0379612780d1c62c0b485"],["5-motivos-para-usar-github/index.html","f27496399c9facd6cd8f8ed0da363a2b"],["6-motivos-para-usar-nodejs/index.html","518ca294fc4006f2ff72da25079780ac"],["8-motivos-para-aprender-meteor-agora/index.html","bfb42b4009e1b6fb4293d4cb16ea53ee"],["8-motivos-para-estudar-ruby-on-rails/index.html","cbd760113f8f8692e1649ce6ac115fca"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","5f0b2aafab2fd6303f11ff83a28813f7"],["acelerando-comando-dd-no-macos/index.html","3ccfdf502eb4f784309626d6c42d2ac3"],["administrando-dados-usando-express-admin/index.html","fcdbce3d77debde70bb000376bcf8b65"],["administrando-o-leveldb-com-levelweb/index.html","aa09a9bcea4e50c69978d351c24ab0cb"],["ajuste-fino-no-eclipse-ide/index.html","0e1adf9685045a9b0b1b0350fa467ae8"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","0fb2c1d448b0f20156038eccc9f82c20"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","1846e2dbc0d8f99b73c580feade0f9eb"],["artigos-e-talks-fora-deste-blog/index.html","5a2823af5464744b92b17cc0f4fdd7ce"],["assets/css/main.css","f8f8c9e58f1bbd08c2fcbdc263215da5"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","39ec7d93c470572d9c4f2e3b5995fa25"],["baixando-sites-com-comando-wget/index.html","d39b660584d1058110805261c7026633"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","cd7dabc19a60e76349066f6acdf72ee8"],["brincando-com-leveldb/index.html","1d63b6afef323500c698373c57a5a857"],["brincando-com-o-template-engine-jade/index.html","88af9137dcbf9762d51885807db2c821"],["brincando-de-es6-no-meteor/index.html","c9978f098446abb9002f459109fb1e4a"],["como-desmotivar-uma-pessoa-parte-1/index.html","708ca9c5cf0b0e5448abd256c3c09b0b"],["como-desmotivar-uma-pessoa-parte-2/index.html","c965007088fe020a88e5801de50120bc"],["como-desmotivar-uma-pessoa-parte-3/index.html","a950be3e78940a2b076d3d4e8eab4123"],["como-desmotivar-uma-pessoa-parte-4/index.html","c9c1d11c49eaf7a2a9f2ee87aafa9b6e"],["compactacao-gzip-com-nodejs/index.html","c7a922443a67f4f85b0569fe5b07cd07"],["configurando-meteor-e-velocity-no-travis-ci/index.html","bffb7e734dbca7cd402f21d1dd7e2d97"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","9da76624e3fba091d375497be8052613"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","e8620c4a2c7482da3a3a508845df4ea9"],["criando-um-media-center-com-raspberry-pi/index.html","21e95077acf3ae8f3e3580d99664128b"],["criando-uma-startup-com-pouca-grana/index.html","b58a99dee89359690772a71a4a23c39e"],["customizando-build-do-cordova-no-meteor/index.html","82e4309ba63c2093e085e40172622430"],["customizando-npm-init/index.html","07ac2cda567257229459ddcf6ad00c18"],["deletando-arquivos-repetitivos-no-terminal/index.html","f9a8c561d527e23adab7b5ed8a2c11b5"],["deploying-meteor-no-heroku/index.html","676a26f34e7ac87fdecad4a9188eb72f"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","e116d0011fc0ffc2f2ff98264d5aea5e"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","029a11685c6412117cf9e5e5bf164a15"],["design-patterns-para-javascript-parte-1/index.html","c00ba4aa5c0f1cc849f97c7af221105f"],["design-patterns-para-javascript-parte-2/index.html","10bafb996b5b386696e2366ae4b235dd"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","d1fc432a20b8ef9ece7535e92db29829"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","96966664c7aa2a6fd895969bc84c850d"],["dicas-de-terminal-contador-de-arquivos/index.html","aed7240c2ad9ebc79f404c9edf24d686"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","3b2a4d89f8991868e2e884a19bfeb853"],["dicas-de-terminal-criando-comando-alias/index.html","dcf55dde2d64a3bff28dc73c3284153d"],["dicas-de-terminal-historico-de-comandos/index.html","bf0d356caa74760a9b582fda5578fef5"],["dicas-de-terminal-identificando-meu-ip/index.html","4edd89cce7af9a41928425b1f9603ad9"],["dicas-de-terminal-matando-processos-da-rede/index.html","d7a6a29db269608263bec58914dfccb4"],["dicas-de-terminal-multiplos-comandos/index.html","51f98c6a5e52c5ea5ee2affe0a4f1acb"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","e116216a9de1969c05b2819d1d239f65"],["dicas-de-terminal-processos-em-background/index.html","e3b399357921145b76676ed88657707d"],["dicas-de-terminal-trabalhando-com-ssh/index.html","60c60d7ceec88af69a3d75ff1c405805"],["dicas-de-terminal/index.html","58b18ebb83960aacf91c02c5ee3208a3"],["dicas-para-abrir-um-blog/index.html","ab9bfc8fdd88b1c5eeb32878b84a7a7a"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","c38ae1fd7a4bcff5980b2f85b505ccd4"],["dicas-para-um-estagiario-parte-1/index.html","eda248810184a7e8e12519de66d1b83e"],["dicas-para-um-estagiario-parte-2/index.html","aace43f987c7ff9e9f594516235b3702"],["documentando-apis-com-apidocjs/index.html","2c4619c9d5d99a809a62866157d0ac09"],["dualboot-no-raspberry-com-berryboot/index.html","43e0e3291c33237278618f297d8be9eb"],["email-weeklys-para-devs/index.html","52334b9fda88abd2e6b94482bc131a23"],["entendendo-como-funciona-os-middlewares-do-express/index.html","4b896dc33acaec76b91452038493d5e7"],["entendendo-o-event-loop-do-nodejs/index.html","24d25213f757303504c05a654f60c7e4"],["entrevistando-de-forma-produtiva/index.html","70356aa5f3aeaa98e34af0d14fce3bd1"],["escrevendo-javascript-melhor-parte-1/index.html","85ecd0d7d2e5cfd469ac45433e1288d7"],["escrevendo-javascript-melhor-parte-2/index.html","47e606cf5d4f6b95405caad18887fd9a"],["escrevendo-javascript-melhor-parte-3/index.html","49364ec8e218ae2dbeb3bc1789c55ff6"],["escrevendo-javascript-melhor-parte-4/index.html","b72bade69eff4b205cb5a257f35c4ddc"],["estruturando-uma-aplicacao-meteor-1-3/index.html","c02e43860899849c13b57563a3ca1c9b"],["evitando-callback-hell-no-node-js/index.html","240ab4bedfd9746d5fae98dff54daaa1"],["evitando-callback-hell-usando-generators/index.html","b0081fde15029f75433ad78177922eca"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","bce4da447f6c5e3c530bf78a60b4f8b8"],["executando-funcoes-paralelas-com-modulo-async/index.html","0c642e2af40f1c067b32a650b4b45d47"],["explorando-o-modulo-console-do-javascript/index.html","4df894d4ed7af3e01797d194c62b5e33"],["express-vs-geddy/index.html","82a0885522e518a5daf9dafc8b3961b1"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","7fac661f007ec10537d30389ed3d5b0a"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","d561fb829320d9a060f7bb50bb3a9c3b"],["frontend-moderno-com-browserify-e-babel/index.html","ade95857ba5fa9adee6ea6705a3b86cb"],["gerenciando-codigo-fonte-com-git/index.html","74287ae3e69e8375ad94a4cbb40469ba"],["gerenciando-o-ruby-gem/index.html","2af540c4ab712ed49a277deb1faba06d"],["gerenciando-plugins-no-eclipse/index.html","78b99a37eb2afc20db44cab4560d419d"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","cd8901ae362e7c98867702573610713a"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","bf7d1f2232b01dd2c79d8ab6c238369d"],["infografico-the-state-of-node/index.html","7c089776f17f6ea1e645483cfebb780b"],["infografico-what-is-node-js/index.html","6bd3258d7e377096268dd45f0164071c"],["introducao-sobre-meteor/index.html","b4eb750807a03c51f631d7a7b3ea40c8"],["jade-um-otimo-template-engine/index.html","bb88b0c335a5cc216de249fbfbfccb88"],["lancamento-oficial-do-livro-de-nodejs/index.html","6df065d94785696434785922bde8d9d5"],["light-talk-introducao-sobre-nodejs/index.html","49f1b5b804ffc6af551f884af9f3850c"],["livro-construindo-apis-rest-com-nodejs/index.html","514e73bd34aa6fd661fd24751e8c041a"],["mais-um-livro-agora-e-sobre-meteor/index.html","8967723342a9f8cff098740bb39a02ec"],["mais-um-livro-sobre-nodejs/index.html","924b9317d1586ad0cb87e30f7cfb0954"],["manifest.appcache","5ffa099cccebace2915d1cf0683c71c4"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","6d8bb99d2e6427c5e28249da77325c3c"],["meteor-e-seo/index.html","93264cb701e9cc685368a266d32af7be"],["meteor-methods/index.html","d2258398871c2b1a4ef7a59ef7a3205b"],["meteor-pubsub/index.html","5b8d469723315b33286083622d96549f"],["meteor-um-overview-sobre-a-plataforma/index.html","523fbbec04d9173c9c10d97fda2e6db6"],["meteor/index.html","688eef66472861e85fd67c8136f0ff4c"],["migrando-de-windows-para-linux-parte-1/index.html","db456ef21a7d5e2bf8124732b2634754"],["migrando-de-windows-para-linux-parte-2/index.html","837b1e8dd0cf623f32cf36fc49e8043c"],["migrando-de-windows-para-linux-parte-3/index.html","260ad4f39d0aef972e959aea057ac164"],["migrando-de-windows-para-linux-parte-4/index.html","d246a184dc2da6806e0e606a642267a7"],["modularizando-frontend-javascript-com-browserify/index.html","1b6985b0d482e478fb3f17b8e39bbcc3"],["modulos-do-npm-no-meteor/index.html","7b4af9923419fb5c94cd6334d8ba3af7"],["modulos-essenciais-para-nodejs-parte-1/index.html","373537f40d77fa2c81e66cab7cdcd32b"],["modulos-essenciais-para-nodejs-parte-2/index.html","5c5c3cdaa6ac67bc92ea886550c81348"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","0deca008b47d8d4274377d55877dcb51"],["nginx-servindo-nodejs/index.html","25ad37d95a2a425a9c3d8719016ca8d9"],["node-js-para-leigos-child-process/index.html","1f6976ab60cb3093d998ab7fdcf74195"],["node-js-para-leigos-explorando-real-time/index.html","4799a44d7f66482a176f343ca9c71e21"],["node-js-para-leigos-framework-express-parte-1/index.html","ac8b7fd3de8f4a7995aa6388f165fd1a"],["node-js-para-leigos-framework-express-parte-2/index.html","71182dbdab701f41b4d19e7bb5a8a23a"],["node-js-para-leigos-instalacao-e-configuracao/index.html","a2a7aa489769368609093cb3b4b57c68"],["node-js-para-leigos-jade-template-engine/index.html","95f0d669ecd48e4aa10c460778da2a36"],["node-js-para-leigos-trabalhando-com-http/index.html","772ca11fd31086fa1b326f8fb2cf9439"],["node-js-para-leigos-utilizando-api-file-system/index.html","fa3514b64565644d655d6a7b8ace0992"],["nodejs-criando-um-mini-chat/index.html","c7c38b29c623d7636baaca7d97970031"],["nodejs-express-socketio-e-sessions/index.html","b8ec136e8c8d351751067f7614e03fea"],["nodejs-javascript-no-servidor/index.html","90891041bb8c09927aa62e44c2c753f1"],["nodejs-ou-nodemon/index.html","464ec135bb6d7e6f48b5b0aa68f980c6"],["nodejs-para-leigos-a-proposta/index.html","87dcccedaceb6dce30817ded2fa918a5"],["nodejs-para-leigos-introducao/index.html","f80950cd88a2dbcdc75fdcb8c13e775d"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","20c25eb4c35a8e3f8ade203f2cd83dec"],["nodejs-processamento-em-paralelo/index.html","53113ae1cf786c9f16e2ca2e3df04388"],["nodejs/index.html","eb071a0ddacd9644d5a592bfb2a1e2c4"],["npm-node-package-manager/index.html","450c1c2da700fe646441d83ec93937d7"],["nvm-node-version-manager/index.html","d654d67eb973c9a78d25e847ca3718a7"],["o-blog-esta-de-cara-nova/index.html","e657b06bc108afe5ab7b08d292cf575d"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","36b571f052fbb509804a790e8cda5e0d"],["onde-hospedar-aplicacoes-node-js/index.html","502c74040f9fd651b361b1bb2d893192"],["organizando-um-projeto-meteor/index.html","4ab248608ede159e01b545b71fb639c8"],["organizando-uma-aplicacao-nodejs/index.html","7e7438b12d92a93f506e87ad6ad6a1cc"],["os-20-posts-do-ano/index.html","2b487c7cb466eae0231b484584325c47"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","d8d90d93ae5bf436f16ef28100f4dcc5"],["otimizando-aplicacoes-nodejs/index.html","3aa7602da6b61a49cd76b4f5db513152"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","0c4485308719262a0e76117f721acac8"],["praticando-tdd-com-junit/index.html","9c1e9f75650b215c361a92bdd4890f76"],["primeiros-passos-com-express-4/index.html","a3cf97d31c76413734ef55a3d36481fe"],["primeiros-passos-com-meteor/index.html","39cc33c4be4b5b751f767927fe49ae4a"],["programacao-assincrona-com-nodejs/index.html","43b518c04971884794fd41769cac2422"],["programador-produtivo/index.html","917c233426b9044743b49a5a0bec7904"],["protegendo-aplicacoes-javascript/index.html","9e1de31236ec1bdd9c0bcabac05d7594"],["quer-aprender-java/index.html","c551b3ebbcab60259b63de99085c6b65"],["quer-aprender-meteor/index.html","f78f5016e392f1ad33ac5761c60acb50"],["quer-aprender-node-js-atualizado/index.html","8437ef084d128f84ef57d879fb4c9723"],["quer-aprender-ruby-on-rails/index.html","f230ee50cb85e894349887b4973b4df0"],["real-time-com-socket-io-no-nodejs/index.html","02637c63e7267adab30d4d31790935e0"],["realtime-com-rethinkdb/index.html","b6f049de4b5545542e3bdc4b10a68234"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","3f161c05c89be718164a1a9f698598f8"],["socket-io-com-redis/index.html","2d90a36ff7f601f7c848bc06e4db87e4"],["split-e-join-de-arquivos-com-tar/index.html","06c9c7afee7ccdad1db3bd77fc88158b"],["talk-meteor-for-noobs-no-devinsantos/index.html","931c7cfe299ff42bdc0dc646d45b59bb"],["teclas-de-atalho-essenciais-no-eclipse/index.html","67cd6324c85765fca17a17dd5f040d10"],["terminal-gerando-arquivo-de-texto/index.html","824f3dd359157673a154c41f1e55d889"],["top-20-de-2014/index.html","07f7cb7336667580127d2b40e77f6560"],["trabalhando-com-multiplas-contas-do-heroku/index.html","70a23e5483edb61bfbc2bc8b01c836c2"],["trabalhando-com-validators-no-node-js/index.html","82a1358607694aeaefe1c52b89a08002"],["tunning-em-servidor-linux/index.html","45ed62078ca3e3c12c2bebc6aa69c60e"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","d17daf770d1ba164d654dd89d40b25a3"],["usando-spread-operator-do-es6/index.html","35b60ca19e3e7865cfe67f1c64f3d5af"],["validacao-com-ruby-on-rails/index.html","7c62c518e4efc8473dd10e9301077386"],["vantagens-em-utilizar-sistemas-linux/index.html","630d10d20bb75d0b2026e5e7ce442150"],["video-streaming-com-nodejs/index.html","6c6ac1f43a295cbea36a69584d0e8672"],["visualizando-portas-da-rede-com-nmap/index.html","a853efdc8c0603cf2c4fb140f659f50b"],["webscraping-com-node-js/index.html","344df5f602b5e5e2a79c0eb33103f2cd"]];
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


/* @preserve Mon, 05 Dec 2016 14:36:07 GMT */