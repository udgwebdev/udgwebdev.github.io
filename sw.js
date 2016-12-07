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
var PrecacheConfig = [["15-javascript-hacks/index.html","325156365806a1fdc0080bb6ed4a6377"],["3-maneiras-de-trabalhar-com-node-js/index.html","c8e597bad88f474a15d14e8ba6f4f401"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","956781dc1091e8c17cd1750dfbfd2da9"],["5-motivos-para-usar-github/index.html","1f8bc5e856331597da187f5ecf8b1ffe"],["6-motivos-para-usar-nodejs/index.html","fee27c19bef0abef7a3a48c7f6cf75f6"],["8-motivos-para-aprender-meteor-agora/index.html","86cdd9572599f35b532dd71f58488637"],["8-motivos-para-estudar-ruby-on-rails/index.html","0b2dc4530bb54b125f459d0efce74dab"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","f58c6fda729a2f69d7889e1bcce4d728"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","0f62cf5e2c59a14e859b6aeccd8af1b6"],["administrando-o-leveldb-com-levelweb/index.html","3b6c3101384bd3ee71724d49b4de48eb"],["ajuste-fino-no-eclipse-ide/index.html","336b4d74429a6dea69ff3a24500c20b0"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","275e302cb7a81d78b8a39010cf5dc930"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","7f79dcced4e5b816d781c65a9a43e2b0"],["artigos-e-talks-fora-deste-blog/index.html","f5b12faa662adadde90369712500fcbd"],["assets/css/main.css","4d62fb5f566454df8d582c0b8ad69083"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","7c06f5903818c0881d2df47a33296eb7"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","861b04ea8cde70a31a5accc86eda3cb8"],["brincando-com-leveldb/index.html","3aabf7c26b2b9c3c3d909bdb0c8806c1"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","6317c076a14072915a836f15229c0a4d"],["como-desmotivar-uma-pessoa-parte-1/index.html","0e31fd13e7234dc37992142527d138aa"],["como-desmotivar-uma-pessoa-parte-2/index.html","a2095d326494e9f7fafa72b6f5e793c7"],["como-desmotivar-uma-pessoa-parte-3/index.html","c62c2ff49869b6fb62ec1e7ff2d2f8cc"],["como-desmotivar-uma-pessoa-parte-4/index.html","7eccd95c0648b706512097d2ba458fff"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","43bd2f7b62fa4830f25ae9c310a96c3f"],["compactacao-gzip-com-nodejs/index.html","203100723440b682198d0c7bfe02b61e"],["configurando-meteor-e-velocity-no-travis-ci/index.html","4380f9e9bc699bafcc34b01de40f7e84"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","15fb67b90716305fb72815d0e108b109"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","083da980c22978873bed1debd85a2c6c"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","29d91972671d079c4d0c68d26e8f8b0f"],["customizando-build-do-cordova-no-meteor/index.html","06da44271fb232445206cc3981bbf9bd"],["customizando-npm-init/index.html","8711dc48695026d78397e07270ef0975"],["deletando-arquivos-repetitivos-no-terminal/index.html","729438f644806a973956d8d99274c2d4"],["deploying-meteor-no-heroku/index.html","b4f0cc6ade578e7e0dfe74d2541b1568"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","07d89ab1431d490944f84f0429c3dcd1"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","9f382b642712c4c4231c3cde2138be69"],["design-patterns-para-javascript-parte-1/index.html","d77a7b9e662a9d8b95019945d74a71fa"],["design-patterns-para-javascript-parte-2/index.html","44d7857400d3ed89453e54f4bae46d46"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","8b83e267734831bafdb9ee12dc61c401"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","d9482180b2a9d1399303e3014ea2ec34"],["dicas-de-terminal-contador-de-arquivos/index.html","1ba27ec506800aa32963158f1127a43d"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","fa5992dfd3f938546be6b96472e820e9"],["dicas-de-terminal-criando-comando-alias/index.html","f9f137f91e9cb3eec3e252e0061b6e94"],["dicas-de-terminal-historico-de-comandos/index.html","1103894f27dbeb95369d165cb071cb75"],["dicas-de-terminal-identificando-meu-ip/index.html","f9253c2755b0f566fa18ca55cf49b92d"],["dicas-de-terminal-matando-processos-da-rede/index.html","90a8cc13f14f26b874b43f79b1699339"],["dicas-de-terminal-multiplos-comandos/index.html","5da7c72d4fea1e67b80d2575d78acf91"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","515daa8cee2252c41941f99a13424163"],["dicas-de-terminal-processos-em-background/index.html","78cd57edf066c2ba7ba981db6c58a0b7"],["dicas-de-terminal-trabalhando-com-ssh/index.html","ca6c2e9c64d7e4de655122059d218c3d"],["dicas-de-terminal/index.html","91e642f2a8ab169a98802d2b642b8e21"],["dicas-para-abrir-um-blog/index.html","b74d3f745f13d7d925bd19b6fa0bcc49"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","f7d37be905872f96e2aee1f4040a9aca"],["dicas-para-um-estagiario-parte-2/index.html","4eb0d0bafb78de25387d1e6ce3d59c9c"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","7ad90e69172f13070efbda06bd4975cb"],["entendendo-como-funciona-os-middlewares-do-express/index.html","2390f7921b873ff58aa221514fc78933"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","42dd74137ab6a38ade619f5011dad5c4"],["escrevendo-javascript-melhor-parte-1/index.html","de35d88b28f1dd6cbda3b83b9cc1e759"],["escrevendo-javascript-melhor-parte-2/index.html","ca5eb254958444bb0e6e39a05acaaf01"],["escrevendo-javascript-melhor-parte-3/index.html","bbfc1f14f3aed2b334e3c05b4a7cc090"],["escrevendo-javascript-melhor-parte-4/index.html","20f1d09a75aa48191c0dcbc7554c97da"],["estruturando-uma-aplicacao-meteor-1-3/index.html","b700b708a14fd70ff650b438b412a68e"],["evitando-callback-hell-no-node-js/index.html","03de74c031d3e76b971789a244b9dbae"],["evitando-callback-hell-usando-generators/index.html","259fb748dccfa642fe8c8817a97778a6"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","a11d3f4d4b2de74f52657ba2d328ffcb"],["executando-funcoes-paralelas-com-modulo-async/index.html","e18d132a07fd801fb9a6d22add239a7b"],["explorando-o-modulo-console-do-javascript/index.html","c0927f7f61eeeabd734cde5c927c5c34"],["express-vs-geddy/index.html","a6abeda280ea41302d4797ef307c6e17"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","c5aee3ea7c97a97f0f7b7b37de0cbe7a"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","2263fa32656059a6b48bc820a179b6c9"],["frontend-moderno-com-browserify-e-babel/index.html","0b6f7e2290c2dbc15d2009f670f4a3b3"],["gerenciando-codigo-fonte-com-git/index.html","a62a09995ac7f7001fb6c739f60e4b2b"],["gerenciando-o-ruby-gem/index.html","7b08c4925333caaedfc9e71c757ebaeb"],["gerenciando-plugins-no-eclipse/index.html","14e9ce2f335d3aeaa892ffa5eb733acc"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","86408ccad4ffb400645c58bd8dfc546b"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","cd747665de12187a1fc8cdaa3b166e78"],["infografico-the-state-of-node/index.html","44c84774dfd2afd705fad04031104f6a"],["infografico-what-is-node-js/index.html","b582d944622f804b74fb3f514920f273"],["introducao-sobre-meteor/index.html","199ac3eb5050b6bb744d09a5cbaf9361"],["jade-um-otimo-template-engine/index.html","611533749e83ac33d9ed95bd1641a26e"],["lancamento-oficial-do-livro-de-nodejs/index.html","5f234170543027b87bdd8a9c64fc82de"],["light-talk-introducao-sobre-nodejs/index.html","7097410b245df0180fe31078c9a32a5a"],["livro-construindo-apis-rest-com-nodejs/index.html","9861331b67b2644ec63ebc601a79f8b0"],["mais-um-livro-agora-e-sobre-meteor/index.html","253dd24fe974af9d3a94b4ab868c3306"],["mais-um-livro-sobre-nodejs/index.html","9d4f8ba9f18a70175d95ce94a2e95e9a"],["manifest.appcache","b46324d3f8626100e41c6252a3f5da21"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","92cafb0e60ad51c59543a5ce7498cad1"],["meteor-e-seo/index.html","379ed769d56ef9b0c027cb19f4a4b670"],["meteor-methods/index.html","c7a6247354bb75947f4b297b41e5a4ca"],["meteor-pubsub/index.html","c1a0acda47adad10fcc46de252d0fd89"],["meteor-um-overview-sobre-a-plataforma/index.html","bc848b3c9d419412c1b390866cc25001"],["meteor/index.html","b2ba98b37e84b09f2faca09627877d0e"],["migrando-de-windows-para-linux-parte-1/index.html","863f8a9726d8f79d198d0a0925fdea77"],["migrando-de-windows-para-linux-parte-2/index.html","1324ee0e01c1622353b25e709bc191a0"],["migrando-de-windows-para-linux-parte-3/index.html","04c1108bf5382f33c38e278207c1a7a5"],["migrando-de-windows-para-linux-parte-4/index.html","93ca1e88897a9d157f8b687ce1186fc1"],["modularizando-frontend-javascript-com-browserify/index.html","2a1167fbd810a0a6744650c367f76e22"],["modulos-do-npm-no-meteor/index.html","135ffa6f0f86af1bc1d5ce1c9c255f44"],["modulos-essenciais-para-nodejs-parte-1/index.html","d6d67f00456df1600cd6afc1e375ae18"],["modulos-essenciais-para-nodejs-parte-2/index.html","4a22dffb7a54cf10f2cb6f5b6dd523c3"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","458284e6eb51be48f41a243805e71533"],["nginx-servindo-nodejs/index.html","fb7aa5961f0c63cbd58d66f2601fb285"],["node-js-para-leigos-child-process/index.html","1125c5d31ced905894ed1be519850c73"],["node-js-para-leigos-explorando-real-time/index.html","62415624e23a9668d450276983aa6821"],["node-js-para-leigos-framework-express-parte-1/index.html","2cf635980314f2fe09e11fa4ee1a9d0f"],["node-js-para-leigos-framework-express-parte-2/index.html","fff3ef165d18af1a616c768c94bbc667"],["node-js-para-leigos-instalacao-e-configuracao/index.html","97dfdaddbe25511261e0c7079593c849"],["node-js-para-leigos-jade-template-engine/index.html","802a216e6039130984d161fe97d77556"],["node-js-para-leigos-trabalhando-com-http/index.html","9e2bfc8c2bc24007f22b266175642ae8"],["node-js-para-leigos-utilizando-api-file-system/index.html","59ea10809cac5cfab1e5e61ba18583ad"],["nodejs-criando-um-mini-chat/index.html","4228f5c7b1de14d654c3724f7fed34cb"],["nodejs-express-socketio-e-sessions/index.html","ba9b3acde8a5d56b4d3e9bb9e6b6106a"],["nodejs-javascript-no-servidor/index.html","a10a46111b1acbd62f6a11bb4c8d0a69"],["nodejs-ou-nodemon/index.html","c6f6718f5da7750356e104d7e6a62645"],["nodejs-para-leigos-a-proposta/index.html","ff986119e16cd3770940a66eeaa5a6cb"],["nodejs-para-leigos-introducao/index.html","ee87ee089904a4c770926cd016b54fcd"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","d37c088a796b6b016b3b6d07163f244f"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","aa79e10b106274877013ef03bd20d560"],["npm-node-package-manager/index.html","3328b437fa1a3fa3608ed7a5aab53db4"],["nvm-node-version-manager/index.html","2c3be19d39040ed2c50a73a2e114351e"],["o-blog-esta-de-cara-nova/index.html","a1835b062a8e8a9394face88394b1df5"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","33057eeaf67c3a17f27296fafe982658"],["onde-hospedar-aplicacoes-node-js/index.html","4fc0e09281509156878401fa95aac9ae"],["organizando-um-projeto-meteor/index.html","e138eb1b189ef2fe11dbc8ae43d90b66"],["organizando-uma-aplicacao-nodejs/index.html","33e946b5c2bde99a18f83e800d05ebbc"],["os-20-posts-do-ano/index.html","a3d0987761d2199a8ea5b891082cf2a3"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","1eea92d29b39d00db9156f5e3d7f63c6"],["otimizando-aplicacoes-nodejs/index.html","7d69dd7bcf85d46c0f4a51f1f2e8e1fc"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","1ac0f8ee50310d9529d410ddc1e3c2e2"],["praticando-tdd-com-junit/index.html","7099f59ef862bc3a08f551099da5727b"],["primeiros-passos-com-express-4/index.html","24f30b04060c30ab57af1945244b593c"],["primeiros-passos-com-meteor/index.html","d6fc8c94ba551c5f33f5f0f8ced22eea"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","66cbe0651114b5ef24e72e61b1bcf690"],["protegendo-aplicacoes-javascript/index.html","5a6c6a7e388bd086d62d724dc7fd7db6"],["quer-aprender-java/index.html","4a0c86348178fd3fa9319c57712fdfe7"],["quer-aprender-meteor/index.html","d71bf900ec47965c4e2e341c0623ce4b"],["quer-aprender-node-js-atualizado/index.html","4b339043c34b8012fd1ee53a1e5d39ce"],["quer-aprender-ruby-on-rails/index.html","eba5d0f5aff4f90c371a5ebc44190295"],["real-time-com-socket-io-no-nodejs/index.html","8bf1fb5c1c74515d800b16a0ddc04e11"],["realtime-com-rethinkdb/index.html","9bab1cc427b2ae2707d5d3b7f18445cf"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","d11973cbb53fcf2e70c344165dbf9a95"],["socket-io-com-redis/index.html","0b2905301782f20327de16f212348420"],["split-e-join-de-arquivos-com-tar/index.html","4d8b4fae8f69cf4bf99335b194e332a0"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","7b4d698c8dbedaf627ce1de527c8578a"],["terminal-gerando-arquivo-de-texto/index.html","278b48f8c99a6190574186e28d39e6a9"],["top-20-de-2014/index.html","9d4e63a5daa3948f96c94fab6091d3fc"],["trabalhando-com-multiplas-contas-do-heroku/index.html","209494d9fe75a16440148007bc6d625a"],["trabalhando-com-validators-no-node-js/index.html","a7ce6cde3040c71bd6b4848698df60f5"],["tunning-em-servidor-linux/index.html","f4b2e315c673fe339e07f9d42ad7fd89"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","a03e280bfebad79d280961e558ab077f"],["usando-spread-operator-do-es6/index.html","c20c2cb6b5a0ff335a87e38d490ad2eb"],["validacao-com-ruby-on-rails/index.html","d05193a29020c0305a91bf727b5cc8fa"],["vantagens-em-utilizar-sistemas-linux/index.html","3ce6a7641949b90debd0c3caca2fd3a6"],["video-streaming-com-nodejs/index.html","d6669b2f48d82c0c086a168e9bdef0c9"],["visualizando-portas-da-rede-com-nmap/index.html","214c29287824c31f6ce816d5ce071036"],["webscraping-com-node-js/index.html","6203ca70bca3b787b165ce8ac557dbc3"]];
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


/* @preserve Wed, 07 Dec 2016 16:59:35 GMT */