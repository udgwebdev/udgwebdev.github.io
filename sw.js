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
var PrecacheConfig = [["15-javascript-hacks/index.html","b882470dd4c2fbbeb29254967dbe3eee"],["3-maneiras-de-trabalhar-com-node-js/index.html","6d54766e4879843a6de1b04c6cf65b22"],["404.html","90e751f95085ef7a352cff7e859e30d0"],["5-motivos-para-instalar-o-arch-linux/index.html","71d56330c8c81d0c8e4f34859cea246e"],["5-motivos-para-usar-github/index.html","ad45675b8583ddd9accc130d4da65c61"],["6-motivos-para-usar-nodejs/index.html","36f3f731838938f6710a2081adfb5c25"],["8-motivos-para-aprender-meteor-agora/index.html","223eae6c4c5d3642fe658bf31fe207a0"],["8-motivos-para-estudar-ruby-on-rails/index.html","17497075ef2295b91f219286c2a86a49"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","b92dc55705d197045c0a6754209476c7"],["acelerando-comando-dd-no-macos/index.html","3ccfdf502eb4f784309626d6c42d2ac3"],["administrando-dados-usando-express-admin/index.html","37f2f1a288d0fd9833fdfbe30f10374f"],["administrando-o-leveldb-com-levelweb/index.html","dff4b958f68460d5346309fd885e1bb8"],["ajuste-fino-no-eclipse-ide/index.html","4000821c520b4ecd5d2993ff135ce25d"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","34e9087eff5e930ec444355409d0c979"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","7c2aa429c6431655427aa192cdd95123"],["artigos-e-talks-fora-deste-blog/index.html","45424f382380cf64ee9299793e9df2ca"],["assets/css/main.css","166d5a208d53624c1d76923d9bf233a5"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","39ec7d93c470572d9c4f2e3b5995fa25"],["baixando-sites-com-comando-wget/index.html","5744eddc6c3ef09267cedd4277c9aeee"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","aaab331b49221d7426ee81ca38cc332b"],["brincando-com-leveldb/index.html","4fb19b1ec0fe2f0dc4e73424a2e2a74c"],["brincando-com-o-template-engine-jade/index.html","88af9137dcbf9762d51885807db2c821"],["brincando-de-es6-no-meteor/index.html","4ab74664a10cadbd5bc9487de76153b6"],["como-desmotivar-uma-pessoa-parte-1/index.html","2c4a06cee38b9199673089d1deb175c1"],["como-desmotivar-uma-pessoa-parte-2/index.html","0ae8a6af4480972ee7a7306f4f578f59"],["como-desmotivar-uma-pessoa-parte-3/index.html","b20f3928d39d9ad27ef51d0f6ca805b2"],["como-desmotivar-uma-pessoa-parte-4/index.html","eb468c982ad77b19c75a32b73685f445"],["compactacao-gzip-com-nodejs/index.html","a430139d15245536a253361cdfb4f59b"],["configurando-meteor-e-velocity-no-travis-ci/index.html","f27bab70e8b3e0eb29a77741555305f1"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","b97d8a3b433c18233e9e1388866be323"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","7467b5704dfe69ff255cfed9d457da33"],["criando-um-media-center-com-raspberry-pi/index.html","21e95077acf3ae8f3e3580d99664128b"],["criando-uma-startup-com-pouca-grana/index.html","8d23955d46d6463a924d540494046854"],["customizando-build-do-cordova-no-meteor/index.html","2676ad77c5335d1a7dbccf52f790b3c4"],["customizando-npm-init/index.html","57f60659ad0742ffd20fc2cb181fb1fb"],["deletando-arquivos-repetitivos-no-terminal/index.html","0d5476915927b18c8c4bb79b97bd6d9d"],["deploying-meteor-no-heroku/index.html","a26aeb51257a9d28da801e1eeeb662eb"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","7ce8a89b5fd99ef29bf30a84d2138ddd"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","41cac9d55ecad99df47501b5fec36049"],["design-patterns-para-javascript-parte-1/index.html","41ccd5a2f69d29bb19d677534cd7a649"],["design-patterns-para-javascript-parte-2/index.html","225e9260ceeeab2fb6ef55a247a46ecc"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","5eb6226a45b875bea10ec1f5990f97cf"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","94a5643aedeab0db17a93668d2a22ea8"],["dicas-de-terminal-contador-de-arquivos/index.html","2ec7ba13103b80dc1b054b5cbdb849e0"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","f3bd3b73f27db1a659b2d44d75543fb4"],["dicas-de-terminal-criando-comando-alias/index.html","a478689173e4be49848310b7bbf57b7f"],["dicas-de-terminal-historico-de-comandos/index.html","867fb75c22edad89dc59ac95b0f3de36"],["dicas-de-terminal-identificando-meu-ip/index.html","7cbf55b4b86a9c5e3a2c7cf06db56dea"],["dicas-de-terminal-matando-processos-da-rede/index.html","df666240c8d563a093bc51f445a6f420"],["dicas-de-terminal-multiplos-comandos/index.html","bac45f04def6a0aa62f335bd94014502"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","71f288a6a7123278d63e71b49399a1fe"],["dicas-de-terminal-processos-em-background/index.html","d86d4b2ed890b12a89ca66d3f7f296ce"],["dicas-de-terminal-trabalhando-com-ssh/index.html","395b3fe9035618987e2412799d2d4b1c"],["dicas-de-terminal/index.html","805218d486cdaa0bc6788c7dd1ebfc38"],["dicas-para-abrir-um-blog/index.html","bcfc5204413697f5cf74b321e333ce1f"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","c38ae1fd7a4bcff5980b2f85b505ccd4"],["dicas-para-um-estagiario-parte-1/index.html","a456e7b2068fd0e3d46b7f43a0b2706d"],["dicas-para-um-estagiario-parte-2/index.html","50ee1f23e2798eaa05f0cae7035c9c73"],["documentando-apis-com-apidocjs/index.html","2c4619c9d5d99a809a62866157d0ac09"],["dualboot-no-raspberry-com-berryboot/index.html","43e0e3291c33237278618f297d8be9eb"],["email-weeklys-para-devs/index.html","e1b0b789d2632dec6e05daeff96eee9d"],["entendendo-como-funciona-os-middlewares-do-express/index.html","f551f938d23db2389165c955fbe3e85b"],["entendendo-o-event-loop-do-nodejs/index.html","24d25213f757303504c05a654f60c7e4"],["entrevistando-de-forma-produtiva/index.html","4598ca18d058c09a24f8893a491292c9"],["escrevendo-javascript-melhor-parte-1/index.html","b602fb368bb98cc2de273e1f2d1d5608"],["escrevendo-javascript-melhor-parte-2/index.html","af512d4841310df3ef048326eec35136"],["escrevendo-javascript-melhor-parte-3/index.html","254579aae6472fe2e81fb45ec25e201e"],["escrevendo-javascript-melhor-parte-4/index.html","9325d86eaca3cdf9c16693e6c0b85e3a"],["estruturando-uma-aplicacao-meteor-1-3/index.html","7a8808479eec1ab1af40d76ff858a18e"],["evitando-callback-hell-no-node-js/index.html","aa0731df1f19c0b5452363c7be84f976"],["evitando-callback-hell-usando-generators/index.html","c373e610a21105019dd94d48ecffcd76"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","3683cd5c8e1046f077e5de19426d12e4"],["executando-funcoes-paralelas-com-modulo-async/index.html","f974b6349f6b3544f036b3142e1dec8c"],["explorando-o-modulo-console-do-javascript/index.html","5f6534a37e7ab49693920a163d44ea61"],["express-vs-geddy/index.html","3fca191eca83639b28e6ea5379ce23d9"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","5f293b8a9727f1ec8e1a4781e1738dc5"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","98f272c6757fea49d58b61c19988b767"],["frontend-moderno-com-browserify-e-babel/index.html","79f098af9d6060a91dd178d4ac212444"],["gerenciando-codigo-fonte-com-git/index.html","a408c073425bfa331e8733573a12959a"],["gerenciando-o-ruby-gem/index.html","3d2b39db02a398c9fc9752b221d4b895"],["gerenciando-plugins-no-eclipse/index.html","e805fe18b70939ffba0ef02669b2a16a"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","db556bb3e0f9ce551b1b70864c770027"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","c4016c065dcde21bae9958a0fa9ddb39"],["infografico-the-state-of-node/index.html","6c7d84c941fa7e6fcd27bb6dfffddb65"],["infografico-what-is-node-js/index.html","245e22c653f03f2f3af80291ff7ec859"],["introducao-sobre-meteor/index.html","2dbadd3d1e1db07d8c9e0b2622dd0fc0"],["jade-um-otimo-template-engine/index.html","6a92036d65299f5ddec57df91537899f"],["lancamento-oficial-do-livro-de-nodejs/index.html","5067c08c21d3fcaf7de092d51d0ea128"],["light-talk-introducao-sobre-nodejs/index.html","90939aa7807c3a71a480c3d306e7691c"],["livro-construindo-apis-rest-com-nodejs/index.html","41295b68e1ba096383c0dd0afcbd2a12"],["mais-um-livro-agora-e-sobre-meteor/index.html","bc324b75ae385b6ae903dfccb2051a70"],["mais-um-livro-sobre-nodejs/index.html","ec5eaa24d2b81cea74408bad698cbbd9"],["manifest.appcache","35264d52caa0fe151201c508d401a855"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","6221c6445dddae7f4a26213033e1814a"],["meteor-e-seo/index.html","60e8776d281bc27b85e67546a644b84a"],["meteor-methods/index.html","f92fb093c89af28f80d7bb81e35bc162"],["meteor-pubsub/index.html","9ed9b67dbd0dec3babedb077fe57840a"],["meteor-um-overview-sobre-a-plataforma/index.html","7a30562d2b6309cdfadeef1f77dbcb79"],["meteor/index.html","7ed777109546473e1e26e78627b26b4b"],["migrando-de-windows-para-linux-parte-1/index.html","a5db0c10ce7b47470d067232884a6f9d"],["migrando-de-windows-para-linux-parte-2/index.html","d387a2b768194c983088ea3ac277da00"],["migrando-de-windows-para-linux-parte-3/index.html","b52e20c471f2b6e79529000bce7db707"],["migrando-de-windows-para-linux-parte-4/index.html","6fa23c131788af266dc807b970f13481"],["modularizando-frontend-javascript-com-browserify/index.html","3b7cf79b13efb72a7df79b8dde691db2"],["modulos-do-npm-no-meteor/index.html","56de1dc9bd31b0812273faf9bb6b9580"],["modulos-essenciais-para-nodejs-parte-1/index.html","cdbf32c9f949a8694a25ab08a4dae9d4"],["modulos-essenciais-para-nodejs-parte-2/index.html","f0ac1c7ad6c963e45a51a86fdece7035"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","3d2244b8d67911980e222c34d1e2c15a"],["nginx-servindo-nodejs/index.html","9fcadb091e9b950e3c26398cd721d903"],["node-js-para-leigos-child-process/index.html","7a21287072f7d4d13496fa17a36c07bd"],["node-js-para-leigos-explorando-real-time/index.html","74a60ea6388b9ddfea3226db8001d7e9"],["node-js-para-leigos-framework-express-parte-1/index.html","6f102678a9a817c54baebf4fe288a9ec"],["node-js-para-leigos-framework-express-parte-2/index.html","ac7cf9f8b4c63324afea66474c98369d"],["node-js-para-leigos-instalacao-e-configuracao/index.html","c86cf113b43ad17598a7c0d7486559df"],["node-js-para-leigos-jade-template-engine/index.html","a23ea3b7ede62256177ce5758c26a0cd"],["node-js-para-leigos-trabalhando-com-http/index.html","607c34fa9578757530a27932fe589179"],["node-js-para-leigos-utilizando-api-file-system/index.html","f0a673a46d23865efadb5b1c089f4aad"],["nodejs-criando-um-mini-chat/index.html","be3c63908019cd336fa7c0d6e4e36faa"],["nodejs-express-socketio-e-sessions/index.html","fd832aa6a2118088050f531b3e9429a8"],["nodejs-javascript-no-servidor/index.html","0566e0468db5bd114509d823ac89317a"],["nodejs-ou-nodemon/index.html","fda14acaa5fa06b2d50a306aa559698f"],["nodejs-para-leigos-a-proposta/index.html","6937892d3b94d5e49278116b41a9f6a4"],["nodejs-para-leigos-introducao/index.html","1b5c5347cba08de2afa2407a21c2293e"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","05503dc924bd7778e9c040535f099a93"],["nodejs-processamento-em-paralelo/index.html","53113ae1cf786c9f16e2ca2e3df04388"],["nodejs/index.html","6a66197c9e01f505f331103c999cb0f5"],["npm-node-package-manager/index.html","caead716071222f75aedf4d85315b1bd"],["nvm-node-version-manager/index.html","a33c9693d97133f25b62decf4ecf02fa"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","5d35eef5f167c07c260c635a66d0751a"],["onde-hospedar-aplicacoes-node-js/index.html","31a86efc56b7c0e99e9368668492632a"],["organizando-um-projeto-meteor/index.html","ed7aeb0e46d1291aa4e03981d9e52f66"],["organizando-uma-aplicacao-nodejs/index.html","17d8f276539b812b452001da823795c9"],["os-20-posts-do-ano/index.html","7435cfc6e70a22bd79eb4cb377dc1567"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","ff5c1df4f39026ba05699e5164d36af0"],["otimizando-aplicacoes-nodejs/index.html","917c399cc424b268cd9335d7b9e253dd"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","0d4a8a13e07bad186289992b748dff35"],["praticando-tdd-com-junit/index.html","2aa60bf488318ec6129eb7ce27374855"],["primeiros-passos-com-express-4/index.html","11f8db7d3ad6aea2c283011e93b0bbb2"],["primeiros-passos-com-meteor/index.html","283dfad0d60c7ee1785b5e20558e3b38"],["programacao-assincrona-com-nodejs/index.html","43b518c04971884794fd41769cac2422"],["programador-produtivo/index.html","b81a31ba054006c1a68861b551515955"],["protegendo-aplicacoes-javascript/index.html","166193d8524edbb17238ebac4e094598"],["quer-aprender-java/index.html","6b9f545d259f2bffe54c2f56a389a70d"],["quer-aprender-meteor/index.html","18b7383064c2dd07e10023ca50f9bf25"],["quer-aprender-node-js-atualizado/index.html","3769bea151a58dcd0448380faa86c9f8"],["quer-aprender-ruby-on-rails/index.html","d1d49dc146f07bd2fe83c773c2367976"],["real-time-com-socket-io-no-nodejs/index.html","c28ca145ca36668dd77c571d2006d921"],["realtime-com-rethinkdb/index.html","f0f290f0455e46166a42f459c3754df7"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","453be87fed335e8f38ff4aac8b89bd97"],["socket-io-com-redis/index.html","ecf8ba94427cbef63d7865a01799dbab"],["split-e-join-de-arquivos-com-tar/index.html","ffaa59cc0a04784cc9c393475ec26710"],["talk-meteor-for-noobs-no-devinsantos/index.html","931c7cfe299ff42bdc0dc646d45b59bb"],["teclas-de-atalho-essenciais-no-eclipse/index.html","beb22a9aec70e86d0b15f2e4647708e8"],["terminal-gerando-arquivo-de-texto/index.html","6346c6f45bf34a32875051925a9fb8c8"],["top-20-de-2014/index.html","73f51313dfa3e558062c8eb446a4bfe4"],["trabalhando-com-multiplas-contas-do-heroku/index.html","ecfe5f64358f375504022aec4ee2e4c9"],["trabalhando-com-validators-no-node-js/index.html","78680c06b38253ac2da30ec22e546be5"],["tunning-em-servidor-linux/index.html","620df2fe7e1fc3d71ee59009a6dafccb"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","47c0f99bbddc2a8f55f6025ccb0e7dbf"],["usando-spread-operator-do-es6/index.html","0f156039705654576fb48c0a9ebc5fe4"],["validacao-com-ruby-on-rails/index.html","5c9ddb566062bc2d6718c76ad3842973"],["vantagens-em-utilizar-sistemas-linux/index.html","c6bbb8349a97d28e0300538cd23d7e94"],["video-streaming-com-nodejs/index.html","c4aa0c14d68c281e23389bd97ed1e32b"],["visualizando-portas-da-rede-com-nmap/index.html","57bbcf65f922c57479f30b8b6c9e2f29"],["webscraping-com-node-js/index.html","26dd0be2a92d4c3deb7e9b7b1e2772d7"]];
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


/* @preserve Sun, 04 Dec 2016 19:48:24 GMT */