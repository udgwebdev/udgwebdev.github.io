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
var PrecacheConfig = [["15-javascript-hacks/index.html","2c3130aca89cc8e34699eb4385332638"],["3-maneiras-de-trabalhar-com-node-js/index.html","c8ebcadb20d3e1bc15d8310c5afe447d"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","b32cee73c63dcf532c887d381698cadf"],["5-motivos-para-usar-github/index.html","e77a8553e5251ee98a30b182c1cc8ac0"],["6-motivos-para-usar-nodejs/index.html","62d66831add8d3fd0568a6fe9884235f"],["8-motivos-para-aprender-meteor-agora/index.html","559d9bf8c11f4e4961810d6a9f2859f1"],["8-motivos-para-estudar-ruby-on-rails/index.html","10cb28c37192da70fbac2e638e205b69"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","bb9ce5962336a900f11831f9a67a5728"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","bc69c922ae601b669318a771100ecddb"],["administrando-o-leveldb-com-levelweb/index.html","0d3409463b4aff3312e05baa22566c37"],["ajuste-fino-no-eclipse-ide/index.html","41af32e38445932694fd8d815a4ebe5a"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","ae7e7feef522c8a3ee8b81828b43fe22"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","98321c5ad49527cd20b5ddd4d6fdd035"],["artigos-e-talks-fora-deste-blog/index.html","b4c722fd01c3a4b5ab73bc07ba64b8fa"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","89389f9e6d876ce2d428f7ce57063d87"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","8edc9654da4bf3c647fe4c2cb415ef95"],["brincando-com-leveldb/index.html","87b34f8fd5898372747f57c0356c731e"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","b3affaab95e2c7a4e63a03f0b91270b4"],["como-desmotivar-uma-pessoa-parte-1/index.html","9dc02805d1dccb4b7e931e45f78025e9"],["como-desmotivar-uma-pessoa-parte-2/index.html","30ee0e293ae24aae0f5f373d163931bd"],["como-desmotivar-uma-pessoa-parte-3/index.html","7724379863a350bfd42e2f211c439405"],["como-desmotivar-uma-pessoa-parte-4/index.html","f5d00e5626ff1fcd7679d0433cff63bb"],["compactacao-gzip-com-nodejs/index.html","9558cf2b224ecaa72d0dad6afd94546a"],["configurando-meteor-e-velocity-no-travis-ci/index.html","ab827fe148e78ab0ecab77d41fd6abe2"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","fafd3b81f6b4a5017281001af798cd9f"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","70456aec15583ade3ad5212dd280e383"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","3af8c77ffe7bb3e94f62ccb0e1e380e1"],["customizando-build-do-cordova-no-meteor/index.html","c09821d1f54a5a594af2826821bf2fa4"],["customizando-npm-init/index.html","24f711cb4106c4a07335df6a730bb346"],["deletando-arquivos-repetitivos-no-terminal/index.html","0eae2c0e4aa3f6a64a67229b772a2108"],["deploying-meteor-no-heroku/index.html","bc1a306ec75fe33806de6295f3d45140"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","8347f4dfecf811ba6626f084dc8bdc41"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","a5e89f00b01570e62f346da209225f01"],["design-patterns-para-javascript-parte-1/index.html","2566d25c2600b6f8552ebb55d8ee7022"],["design-patterns-para-javascript-parte-2/index.html","e525bacb853bbd378a3dfefc0a64620a"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","1eaed725a1fa9c6682944f4520bfe384"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","035e9957a868501940dfdc3d927530ad"],["dicas-de-terminal-contador-de-arquivos/index.html","1ca8ca6b4ec2355fb67a9f490dec7b2b"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","1e1110e087333d613b7f666025a2e332"],["dicas-de-terminal-criando-comando-alias/index.html","e196114319c201aa92c8cb8036ae072b"],["dicas-de-terminal-historico-de-comandos/index.html","29cdcea3e8b7fb1146b8b8365e9acde3"],["dicas-de-terminal-identificando-meu-ip/index.html","a84261ff3a9d73448deab5cfcb0887e1"],["dicas-de-terminal-matando-processos-da-rede/index.html","9000a107bf56e2cecc3dc88379a70e0b"],["dicas-de-terminal-multiplos-comandos/index.html","3fec211044306e02449079a95b66658b"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","86e426d53e6472a171ddb714b2815336"],["dicas-de-terminal-processos-em-background/index.html","3c1a48b51682639466e7d2bc282c03ac"],["dicas-de-terminal-trabalhando-com-ssh/index.html","5bbddc53495be3d8a8fc3d4d3730e845"],["dicas-de-terminal/index.html","6d793c41b7f5226cedffab062f8dcc04"],["dicas-para-abrir-um-blog/index.html","055057566d6e69b522b9ed181321dc2c"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","f76be9f9e794a22dc9031c9e737c5afb"],["dicas-para-um-estagiario-parte-2/index.html","9be05fa73f69db548ea0a17257b32eb4"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","885d88f33f63cecb5f30006df05cdc23"],["entendendo-como-funciona-os-middlewares-do-express/index.html","8d4d28bb5690753f1bf2957d744f1b85"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","86b11adb1c278ff1ce337232be8d9012"],["escrevendo-javascript-melhor-parte-1/index.html","f4ca61079158268304af9a5d53a0be2b"],["escrevendo-javascript-melhor-parte-2/index.html","7a6836eb8a5beb6b78e334c52c738ccd"],["escrevendo-javascript-melhor-parte-3/index.html","d1ed0fd38dc5dec71b89d2fad8aefb0e"],["escrevendo-javascript-melhor-parte-4/index.html","8b29882d9803182b795033399b7ece8b"],["estruturando-uma-aplicacao-meteor-1-3/index.html","db813b82e91dba5ad5ade61c111a4794"],["evitando-callback-hell-no-node-js/index.html","6db45247487e7f39c987518049ce348d"],["evitando-callback-hell-usando-generators/index.html","9b1f1b1f0cc88d3f86992c2a5503bb69"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","25c5f832b840b8c9a7b44a18b01f9ce5"],["executando-funcoes-paralelas-com-modulo-async/index.html","e511094a7fdcc481b977cfb73f656183"],["explorando-o-modulo-console-do-javascript/index.html","e95c5a3a8fc11bf543f939a72b07ff30"],["express-vs-geddy/index.html","98faf991a61e1e0d7a7bddc642871481"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","956d57b796dfc5730ae86397ea4f3e63"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","60ac45f270f50828415f7fa4999166f7"],["frontend-moderno-com-browserify-e-babel/index.html","327c17bccc5842e36e97c6bb9d22f804"],["gerenciando-codigo-fonte-com-git/index.html","fbc1fd1a003943f0a82120856a980210"],["gerenciando-o-ruby-gem/index.html","21a8c41fe7ff690bb74a094819067208"],["gerenciando-plugins-no-eclipse/index.html","fff502c6a23a31156039e8ef399ad724"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","abe3dcc0a64a7b24cbcd653617044e87"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","1a1f02d082c1eef0c6754df63688e71b"],["infografico-the-state-of-node/index.html","7b3d7f126f2fabaf3276e4ea4745b32f"],["infografico-what-is-node-js/index.html","6bcb3519fe78305842bbd6cb6a88970a"],["introducao-sobre-meteor/index.html","87108e8eb77df2b4182337ab33c80865"],["jade-um-otimo-template-engine/index.html","9888423e007d93fa1ac1d8ae76094db6"],["lancamento-oficial-do-livro-de-nodejs/index.html","33a108271cdfc193ed4e1dcb7d013d65"],["light-talk-introducao-sobre-nodejs/index.html","12ee87945e515f6c5c0c6de6269f0462"],["livro-construindo-apis-rest-com-nodejs/index.html","ec46eb1dccf9d7514113a07d283f91be"],["mais-um-livro-agora-e-sobre-meteor/index.html","8fc2402dac819da67939db01bba9165b"],["mais-um-livro-sobre-nodejs/index.html","b115aa4cd09ed9114daeb75eabef141f"],["manifest.appcache","1252f154b31f6848bb2a340b299dea67"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","3df4e4d5cd44e986ae97f3e39e8ead65"],["meteor-e-seo/index.html","d0fc5495afa4bc41343eb9ada52eb685"],["meteor-methods/index.html","d31ce6929bff5d86e827ed316d2f5718"],["meteor-pubsub/index.html","64a4aa9e66b5c4d04b06e354e98ba6d2"],["meteor-um-overview-sobre-a-plataforma/index.html","93cc0525d420da95c8508d375b0416f1"],["meteor/index.html","cbd669a596934084f0588a192995dae1"],["migrando-de-windows-para-linux-parte-1/index.html","d2c940ab22d18462b8e2f91caeb6381c"],["migrando-de-windows-para-linux-parte-2/index.html","dcba93133cdcb1e7a4f0b577f7156621"],["migrando-de-windows-para-linux-parte-3/index.html","8984c280cd9b447534d879565122125e"],["migrando-de-windows-para-linux-parte-4/index.html","e54d84bfb0e34782c1c89ef344e5b82d"],["modularizando-frontend-javascript-com-browserify/index.html","163dded5cb9fd84882ceaa892d204eaf"],["modulos-do-npm-no-meteor/index.html","04329ac51cc58e7a6e057bfae2cfc10c"],["modulos-essenciais-para-nodejs-parte-1/index.html","48f70c50032f01dcffe9606863c62c3b"],["modulos-essenciais-para-nodejs-parte-2/index.html","e453f230a1985b2bfc77a265f523404c"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","ab79fa2af16ec9d683211b21b9d2fb30"],["nginx-servindo-nodejs/index.html","7fd14e500a6d8e38dd4ad1120c4432a5"],["node-js-para-leigos-child-process/index.html","3cc88418cee5f6ed0968c4850ee68013"],["node-js-para-leigos-explorando-real-time/index.html","bd2b37e61bdf1080c01beaf1a3a07567"],["node-js-para-leigos-framework-express-parte-1/index.html","6f6d00cabcb7c7598348509f18dfe46f"],["node-js-para-leigos-framework-express-parte-2/index.html","2aee83ecb343cc8ed14367a70a7abf81"],["node-js-para-leigos-instalacao-e-configuracao/index.html","d1c1629a3f4df12ef7bedea0f4135bbb"],["node-js-para-leigos-jade-template-engine/index.html","a4ebfb2f70a782b4234bbd47bfb86e5a"],["node-js-para-leigos-trabalhando-com-http/index.html","75ba0382d4d8be8982e7de9491c296a6"],["node-js-para-leigos-utilizando-api-file-system/index.html","9989cba8221c81e7a4aa2975f6c8043a"],["nodejs-criando-um-mini-chat/index.html","5181385b9cf99955813838c5f8276b29"],["nodejs-express-socketio-e-sessions/index.html","53bbdd039253ca026db0303c4a7746b6"],["nodejs-javascript-no-servidor/index.html","f5ace6d54682b2844589e4d7740762e4"],["nodejs-ou-nodemon/index.html","ac1d7de4bbf12b272b9241c8023e642f"],["nodejs-para-leigos-a-proposta/index.html","c961887cca4870f891a58cb3d2a00cd0"],["nodejs-para-leigos-introducao/index.html","32e7d618f2dd412395d4f492e9edba55"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","7a0088983ab6a7bdf9e12dcb8682110e"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","bb58da9aa594826bf5d0548a042d2a73"],["npm-node-package-manager/index.html","4132fbcc936251184814f0ab7eadc3eb"],["nvm-node-version-manager/index.html","4cffb2a3a9b4279c742f8e748830f3df"],["o-blog-esta-de-cara-nova/index.html","ca3fc73bd4dac6ab67ba5cd4e3e29425"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","77902c20860f6544880362fef336fe0f"],["onde-hospedar-aplicacoes-node-js/index.html","406fb23ed1c39dc08a0c178056b7d34b"],["organizando-um-projeto-meteor/index.html","1069aba06a963a033b258dcd34d93376"],["organizando-uma-aplicacao-nodejs/index.html","bac72a4b040912da70ee7919ececf031"],["os-20-posts-do-ano/index.html","9fd8a7d69afd694d1a3652b85c66fcdc"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","af49a30d45b661aaaad1f1196b6e2171"],["otimizando-aplicacoes-nodejs/index.html","1d2cf2cb6d45d40e9b53bc825767b41a"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","79111a897e2ee94f960182a4a9e4d460"],["praticando-tdd-com-junit/index.html","e2fab4d6e98a3c10032ff50ec5e31d0f"],["primeiros-passos-com-express-4/index.html","9afb4b89c81b852a34602c1e2a7e5b22"],["primeiros-passos-com-meteor/index.html","a5ea6388eb8fbe562b5459202e3f0ad7"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","c659d61ecfefc2974a19f7900d8d0053"],["protegendo-aplicacoes-javascript/index.html","7f0601b7e58f7a659204d7cc902a4aec"],["quer-aprender-java/index.html","b0a53b40de28808410aa78a0c1a36b96"],["quer-aprender-meteor/index.html","846eb15cfae64f828884d575466062b3"],["quer-aprender-node-js-atualizado/index.html","0d7ee6789f9fbce8df584f8d16f8af72"],["quer-aprender-ruby-on-rails/index.html","9e01330ca2b62339a38f891fb9cc3221"],["real-time-com-socket-io-no-nodejs/index.html","b3226aff5432dab82bff39b3614a93a7"],["realtime-com-rethinkdb/index.html","f15530d6b411c6ecea070d45bc54cc03"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","bd270b47fad488019ca358e895f39da0"],["socket-io-com-redis/index.html","5cec5774181b0d90d4c7b2c7ed8c9be1"],["split-e-join-de-arquivos-com-tar/index.html","290adf1216169812ea928394b81d0029"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","9705eca9eb493d0109969b221d454936"],["terminal-gerando-arquivo-de-texto/index.html","4ca8419ec2c0e8c7192feb9248d70b89"],["top-20-de-2014/index.html","50e972ae0c687f5290e480afbc90d3a6"],["trabalhando-com-multiplas-contas-do-heroku/index.html","9687fd4458017bff8310915f8ca9454b"],["trabalhando-com-validators-no-node-js/index.html","3e824522f958d5db1410937c5cb4fc80"],["tunning-em-servidor-linux/index.html","fb9affaed56bcd74f645173ed5cd0e4b"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","fbb7f6ec5ecb50005ed596533ba9a1d4"],["usando-spread-operator-do-es6/index.html","d5dfda89b6a679b4a850c07b04c7c8fc"],["validacao-com-ruby-on-rails/index.html","269478057fff828be3e8dd30c26e0669"],["vantagens-em-utilizar-sistemas-linux/index.html","700c6324620d7de85d7410542ae2a48c"],["video-streaming-com-nodejs/index.html","0d6cd9727a597c7df51d5206b01c8dcd"],["visualizando-portas-da-rede-com-nmap/index.html","64d14604f6229e7e6af08dfa31aec730"],["webscraping-com-node-js/index.html","b941128296eb93d2d249ec22ce6b7358"]];
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


/* @preserve Mon, 05 Dec 2016 22:58:05 GMT */