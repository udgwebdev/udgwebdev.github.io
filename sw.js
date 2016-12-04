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
var PrecacheConfig = [["15-javascript-hacks/index.html","d522084acc1b37e05b587e0a57e98e28"],["3-maneiras-de-trabalhar-com-node-js/index.html","bb3cf74fea52f24819a75dd6afe069a6"],["404.html","90e751f95085ef7a352cff7e859e30d0"],["5-motivos-para-instalar-o-arch-linux/index.html","62f9e7a069cff448bf846d1de2a78f01"],["5-motivos-para-usar-github/index.html","85abfb2d2027646148db4b2704c9e9d3"],["6-motivos-para-usar-nodejs/index.html","1cfbc22b658cea5d46c2048890cc1784"],["8-motivos-para-aprender-meteor-agora/index.html","d829e05ab7d05924682ad3d0efb55973"],["8-motivos-para-estudar-ruby-on-rails/index.html","4c3207d53fead3668554e73ed970f7fe"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","42e216e12223435c7ce747eb885c2821"],["acelerando-comando-dd-no-macos/index.html","3ccfdf502eb4f784309626d6c42d2ac3"],["administrando-dados-usando-express-admin/index.html","4a9c8f00088cd24cbde17ae799ba5626"],["administrando-o-leveldb-com-levelweb/index.html","4039b0ef6dd5d844ac38e792feb4013d"],["ajuste-fino-no-eclipse-ide/index.html","15d7b42be24542dd8a37f9655a732b08"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","3b2f94f94b38b07a25d41bc442a3e4f1"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","17143a6a7cef4c7b10b690126455c311"],["artigos-e-talks-fora-deste-blog/index.html","f42118bc32dade0c234e05a52f97b96d"],["assets/css/main.css","f8f8c9e58f1bbd08c2fcbdc263215da5"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","39ec7d93c470572d9c4f2e3b5995fa25"],["baixando-sites-com-comando-wget/index.html","9f5c48741d40c3ac4a0bda3ddb825eb1"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","402c8e553ac654d36536d0da0b68f37b"],["brincando-com-leveldb/index.html","bbabdd44e66df63362a5346a351eb7dd"],["brincando-com-o-template-engine-jade/index.html","88af9137dcbf9762d51885807db2c821"],["brincando-de-es6-no-meteor/index.html","3847156e1d63c82ce8cd825a9a0480f1"],["como-desmotivar-uma-pessoa-parte-1/index.html","a3458fe9ebe752aa6ff7825bd423b685"],["como-desmotivar-uma-pessoa-parte-2/index.html","57e3b13cc259e74d1533de522973eaf9"],["como-desmotivar-uma-pessoa-parte-3/index.html","6dff814ec5fe935db77592606e4017a7"],["como-desmotivar-uma-pessoa-parte-4/index.html","9c3a08742611c376fb89382b9ba500d8"],["compactacao-gzip-com-nodejs/index.html","74f0360dd02c64a73dc9f2a36b9653de"],["configurando-meteor-e-velocity-no-travis-ci/index.html","96e4315a46fd4353540642c8195609a3"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","3861be10248ac0852427ed840b8a0348"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","e5c9f152fe76f4778da2bc74dbb9a87b"],["criando-um-media-center-com-raspberry-pi/index.html","21e95077acf3ae8f3e3580d99664128b"],["criando-uma-startup-com-pouca-grana/index.html","822f13e806773d127fd13104ab7899fa"],["customizando-build-do-cordova-no-meteor/index.html","428b32ef9c4145bd1768f87c6194c9d0"],["customizando-npm-init/index.html","fa70362f6d0b11fca70ace151ed22e69"],["deletando-arquivos-repetitivos-no-terminal/index.html","d3aa440c1636f25a3d07747804b492d1"],["deploying-meteor-no-heroku/index.html","3d6a47a4d0880fd18c4fe7856caf1bfe"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","a626eda1594e2e04a5ae2d89ab7554f7"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","c70948343cb48c015118395eb125163f"],["design-patterns-para-javascript-parte-1/index.html","85a6fe68a7df4a6138085cdc3eb1050f"],["design-patterns-para-javascript-parte-2/index.html","b6621655b4e00f320a4436f04c2e6083"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","0f207e24a0420cc1b852cca925087cfb"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","e805229c1766b44f18182b293a3858c9"],["dicas-de-terminal-contador-de-arquivos/index.html","82191764d780bfc3d8b1320408326bca"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","256bb8fb5820af9bc73572940c87c906"],["dicas-de-terminal-criando-comando-alias/index.html","e464d8691464b32deb4fb8f03515363e"],["dicas-de-terminal-historico-de-comandos/index.html","d01665a7c4970d5649b994b762ebcbdf"],["dicas-de-terminal-identificando-meu-ip/index.html","f0aa8e640551f6462fa447dcaeeee3cc"],["dicas-de-terminal-matando-processos-da-rede/index.html","b4e75fcc967ff8f3b4d1cc83af7ed9f6"],["dicas-de-terminal-multiplos-comandos/index.html","2c3b3541ba19c2ffd524fbbb3a2cb8a1"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","784c4e40889c5e7b2432c324281269df"],["dicas-de-terminal-processos-em-background/index.html","a6b605fb0aa1060c7bb020f9d9e6c1cd"],["dicas-de-terminal-trabalhando-com-ssh/index.html","03d73b04be0bbb2b343b41ce8da46b13"],["dicas-de-terminal/index.html","b1a0b70613041206ec12b878527d4f61"],["dicas-para-abrir-um-blog/index.html","39595f14333d19f07ea63a1e61461671"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","c38ae1fd7a4bcff5980b2f85b505ccd4"],["dicas-para-um-estagiario-parte-1/index.html","ef779ae7c0ad4aa34157fe6af47024ea"],["dicas-para-um-estagiario-parte-2/index.html","37b40f2ae756a3702c136b946f70237d"],["documentando-apis-com-apidocjs/index.html","2c4619c9d5d99a809a62866157d0ac09"],["dualboot-no-raspberry-com-berryboot/index.html","43e0e3291c33237278618f297d8be9eb"],["email-weeklys-para-devs/index.html","e3274adaee573742f57397bdc7a58eef"],["entendendo-como-funciona-os-middlewares-do-express/index.html","992eb4b3dea15245eac3ec886a1ece72"],["entendendo-o-event-loop-do-nodejs/index.html","24d25213f757303504c05a654f60c7e4"],["entrevistando-de-forma-produtiva/index.html","cb0f7f40f3580ee75ff11f9ab06bcd18"],["escrevendo-javascript-melhor-parte-1/index.html","2f22f6d19155ff704fe5d95eb669e157"],["escrevendo-javascript-melhor-parte-2/index.html","da82b91fcef85d6fa8dafc19113df13a"],["escrevendo-javascript-melhor-parte-3/index.html","a22ee4f7606c3d8a6dd78dc356575cde"],["escrevendo-javascript-melhor-parte-4/index.html","ba154c9e1bd2186d86482ed02d5abdb7"],["estruturando-uma-aplicacao-meteor-1-3/index.html","f6a0930702aefb61b259fede30af098c"],["evitando-callback-hell-no-node-js/index.html","dee6c4589b75a521d2b7861bc92627a1"],["evitando-callback-hell-usando-generators/index.html","ca091525cdd47c8b53aafaae23d36ac0"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","2c45ae49b230a8df62b3f3c741650b81"],["executando-funcoes-paralelas-com-modulo-async/index.html","40472ebdadef3df81edec299d4fbf0d4"],["explorando-o-modulo-console-do-javascript/index.html","27ee2503db932b531d4633d65f6f492e"],["express-vs-geddy/index.html","563ba2e6aa80293700f881e64247a6eb"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","fda658d752564614021c0f2c9961b009"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","972d6b2edd75d9e51de90d4d97b1c401"],["frontend-moderno-com-browserify-e-babel/index.html","10eb92010b7ce674ef5fddc9425ee9c8"],["gerenciando-codigo-fonte-com-git/index.html","af3a6d6a1bc2a8a07d74ddd39b2c53a9"],["gerenciando-o-ruby-gem/index.html","50ef80491a54e439d7e96c137f45b787"],["gerenciando-plugins-no-eclipse/index.html","bf1e275e31e7d3a45c9bf11579caf123"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","fb2152a0f9d3993fd8e40db4f3828e3b"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","c4016c065dcde21bae9958a0fa9ddb39"],["infografico-the-state-of-node/index.html","41a7f50d3dbb69cc2e20813fc5b921ee"],["infografico-what-is-node-js/index.html","a7a44de662d3bc69cc488cdbd6d7d261"],["introducao-sobre-meteor/index.html","7f9684ee2038637b7d7e02dcd8a1b7f7"],["jade-um-otimo-template-engine/index.html","995d73ac6510463e7ec5421bb172177e"],["lancamento-oficial-do-livro-de-nodejs/index.html","5a6f5bc6eca845aa5e3caec336a07a45"],["light-talk-introducao-sobre-nodejs/index.html","7735598c5fed66e0aeaaac20f780d901"],["livro-construindo-apis-rest-com-nodejs/index.html","58383e78829ecd687c3c1ed0f0dc92c8"],["mais-um-livro-agora-e-sobre-meteor/index.html","5364a119790364c0b97cf5f69abb0588"],["mais-um-livro-sobre-nodejs/index.html","4bec249a8f6cc349491e30cf6408dc2c"],["manifest.appcache","ba54688a0ae60a160aefe024d095b076"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","6221c6445dddae7f4a26213033e1814a"],["meteor-e-seo/index.html","6437b8449a681c008141682b73e75dba"],["meteor-methods/index.html","e043a457435259295dc6ac392692d8b0"],["meteor-pubsub/index.html","899262ea4d373f8f4e457b06241e3037"],["meteor-um-overview-sobre-a-plataforma/index.html","4288311962ceccd9e747c62a2a26247c"],["meteor/index.html","8bd0df813b46827da772584326c05111"],["migrando-de-windows-para-linux-parte-1/index.html","0b2360ba321191c65636268cdc77ce7a"],["migrando-de-windows-para-linux-parte-2/index.html","ce2b615594af591ac1f6f7dc9fabf741"],["migrando-de-windows-para-linux-parte-3/index.html","6a49b534ccdfb3117711355831c91cfa"],["migrando-de-windows-para-linux-parte-4/index.html","e98f9cfbb596eba500d3257d5f2cc763"],["modularizando-frontend-javascript-com-browserify/index.html","a279d1a4511806c0e942d11f850b1e3d"],["modulos-do-npm-no-meteor/index.html","f46046d726d06728724eb200355fe983"],["modulos-essenciais-para-nodejs-parte-1/index.html","c4203ca13c1caef6a93a9ab0070ceb06"],["modulos-essenciais-para-nodejs-parte-2/index.html","5ce88499a956a513bbdace6d5e21d34b"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","995b4d13bc699c7b2770877b6d09d64e"],["nginx-servindo-nodejs/index.html","c01f80b2f96b7a2e462eec67431f5c87"],["node-js-para-leigos-child-process/index.html","56903635b3a60e23cb85e2161553fc25"],["node-js-para-leigos-explorando-real-time/index.html","c9529f7980629295b2bb15c2f257710b"],["node-js-para-leigos-framework-express-parte-1/index.html","fb17dad641ee65ed636dc1c3ff423be0"],["node-js-para-leigos-framework-express-parte-2/index.html","7194c6558067bd6f6014fc1f920efd3b"],["node-js-para-leigos-instalacao-e-configuracao/index.html","f809e0904e9db75100c66edb80171b12"],["node-js-para-leigos-jade-template-engine/index.html","a0ca7d634f2820e7b7b0270047a63e91"],["node-js-para-leigos-trabalhando-com-http/index.html","7a1d525b45779405f2e5e93ea386a757"],["node-js-para-leigos-utilizando-api-file-system/index.html","07628d1d7bb3beff140bc93cbf5a45ea"],["nodejs-criando-um-mini-chat/index.html","b6012772bc2e95edbfca7f5027a49b53"],["nodejs-express-socketio-e-sessions/index.html","93aa37202cb54f3fe37dcce537fa06b5"],["nodejs-javascript-no-servidor/index.html","5dd22b0792b0ed2b99a609c89614580a"],["nodejs-ou-nodemon/index.html","15885f6e14d0fb9a54645bffb8b34935"],["nodejs-para-leigos-a-proposta/index.html","6738798b85b7a3e1c92d8bc5cd986841"],["nodejs-para-leigos-introducao/index.html","9a2e291f558c260feeb1da1fc0ec604a"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","81e1ca64d75b5add3d8ff40f822bfc9c"],["nodejs-processamento-em-paralelo/index.html","53113ae1cf786c9f16e2ca2e3df04388"],["nodejs/index.html","4ea3ea2073ab63618e96c5e2d9fd7e0d"],["npm-node-package-manager/index.html","5d301d20bebc110416b7bce0f2eb9116"],["nvm-node-version-manager/index.html","c98a9d038f578dfbe3126dc3aa2633c1"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","5099e1c529382eb446bdcca5997401cc"],["onde-hospedar-aplicacoes-node-js/index.html","06e174379332f35a9358cf4acb6e4d8b"],["organizando-um-projeto-meteor/index.html","c7d24c738b514001e55c250a39f65cd6"],["organizando-uma-aplicacao-nodejs/index.html","75c4445a8e304e53464dc962127542a8"],["os-20-posts-do-ano/index.html","ae4230325f2173c473905ee08e8cbede"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","8a5798ee04e48339345e79e75862c84b"],["otimizando-aplicacoes-nodejs/index.html","8ef3d5df0780facaffc63526db3fa316"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","ce82a11a70cf4a9025611810533faf5f"],["praticando-tdd-com-junit/index.html","579d4bd20a4d4df51bb68fb6f64f4e0b"],["primeiros-passos-com-express-4/index.html","d30a548e0d5953c323c11779ea5fc023"],["primeiros-passos-com-meteor/index.html","d36401cf6d12023486f30459a55c9ced"],["programacao-assincrona-com-nodejs/index.html","43b518c04971884794fd41769cac2422"],["programador-produtivo/index.html","ce1864817af8ffe81bc7e4ad84916a70"],["protegendo-aplicacoes-javascript/index.html","a6de6b0d81fc42fda1261f1b9ad27ce3"],["quer-aprender-java/index.html","fd16f7f92ab0ffbb6e3ad3c9d9a29758"],["quer-aprender-meteor/index.html","6813835ce7f20e790054a74df219f56c"],["quer-aprender-node-js-atualizado/index.html","99be6d51326431de9ca12bcc432e1320"],["quer-aprender-ruby-on-rails/index.html","73c638a663084e90e2849aa58480788c"],["real-time-com-socket-io-no-nodejs/index.html","e1bf670947753327b88b35550f1189dd"],["realtime-com-rethinkdb/index.html","ac3b4e01394929dfe6987a4999fbd5a8"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","5290fb14f1268d505e9df0fa20a99148"],["socket-io-com-redis/index.html","4780b96f2eefe16e6afa537712485610"],["split-e-join-de-arquivos-com-tar/index.html","7c0f4f00056b193eb24b8c217d248b05"],["talk-meteor-for-noobs-no-devinsantos/index.html","931c7cfe299ff42bdc0dc646d45b59bb"],["teclas-de-atalho-essenciais-no-eclipse/index.html","1a83fd2882fcc5ef4ce21dd0ba26998a"],["terminal-gerando-arquivo-de-texto/index.html","83d6ff141c8a88a512ea57c061457c65"],["top-20-de-2014/index.html","58520201f55df037a07ffaa4d4c341f6"],["trabalhando-com-multiplas-contas-do-heroku/index.html","b3ed37891c04cf7dfa343c56934b7e01"],["trabalhando-com-validators-no-node-js/index.html","d40937d64e1d041df1902120d9a0ff43"],["tunning-em-servidor-linux/index.html","0bc48b0a295ff61b213e7fe06c229cf1"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","ecdded82b456303244eacae09de9b872"],["usando-spread-operator-do-es6/index.html","3b1206ab9badbbf5a916e60366b71147"],["validacao-com-ruby-on-rails/index.html","6f8e3693accb2ba6f03d50e5ce25f57b"],["vantagens-em-utilizar-sistemas-linux/index.html","ad371cc9c2228f66fd26522da5fe3f68"],["video-streaming-com-nodejs/index.html","d7607882ecdd8b93d0f4f0e82ee102c5"],["visualizando-portas-da-rede-com-nmap/index.html","68409a3bd9e89ffbca398eedb1aed4d3"],["webscraping-com-node-js/index.html","47021ed32ed69d3f0e531431d73f6601"]];
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


/* @preserve Sun, 04 Dec 2016 20:09:57 GMT */