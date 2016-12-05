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
var PrecacheConfig = [["15-javascript-hacks/index.html","19df25c9ea7d169a5a396279b2367c0b"],["3-maneiras-de-trabalhar-com-node-js/index.html","5ecdcd239ea6ab7d50eb7d6ec0294c28"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","e8cfa779f83bf85a91d5f9a7dbf1c96a"],["5-motivos-para-usar-github/index.html","257a06bf8174e3968491318c1df23a12"],["6-motivos-para-usar-nodejs/index.html","acbd0999e9469c3740083aa0ac66453f"],["8-motivos-para-aprender-meteor-agora/index.html","82b8a30cf6569bbf9cc4be170c9c7dd1"],["8-motivos-para-estudar-ruby-on-rails/index.html","1af1bea45bd0c5785b28cb2d35a9f844"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","93c28f210002de2774ddaf25834fc814"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","8f62afa25b2c257235f12ae85aceb054"],["administrando-o-leveldb-com-levelweb/index.html","e3fedea41af9032b1bb949376c2a20cd"],["ajuste-fino-no-eclipse-ide/index.html","64898e67829f83468a51e7a0f4970014"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","490c53c7f9954ab5f5ec18fb3f003743"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","8286913318f8e336938a0976f2fb4404"],["artigos-e-talks-fora-deste-blog/index.html","bfa26a07beb66694072580dce7c105b0"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","2531f88bec449bc61b3d2a880e3fbca3"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","a487a306804ad28a17ad6bccfd8afa06"],["brincando-com-leveldb/index.html","6575232f6cfd7205e1ade145ce5bbd19"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","3859a2f8835f8d570510b2e0da0657b0"],["como-desmotivar-uma-pessoa-parte-1/index.html","6eba6da02d01d036c05c3eca4b164455"],["como-desmotivar-uma-pessoa-parte-2/index.html","057b6de4833a2d1493af843404350d7d"],["como-desmotivar-uma-pessoa-parte-3/index.html","feeeea2d15e17550f9778359921948cb"],["como-desmotivar-uma-pessoa-parte-4/index.html","f8ab82a87afe65ca614f0d46a6bb5dda"],["compactacao-gzip-com-nodejs/index.html","000dcb1d8f31de4773126dcdafc3a222"],["configurando-meteor-e-velocity-no-travis-ci/index.html","c0fac5498ecf599e49cfabe57262ac88"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","bca238fd19b5fc39a70ce2eb5af97858"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","b71b6f7fa1253d712d60f4184882da42"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","f233443aa284cf4d24f090b791c6d685"],["customizando-build-do-cordova-no-meteor/index.html","cb7dd8326497b87b0f5d13973721d451"],["customizando-npm-init/index.html","4d5ce2ca0d25883405c2ba486dfc5b40"],["deletando-arquivos-repetitivos-no-terminal/index.html","7dfa75ec2f1e8393335cf36e3a2aa382"],["deploying-meteor-no-heroku/index.html","fe49e1a3bbcbbe101d401160b533d58a"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","ea7979424837def389cc5362daabd3ba"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","008bdda270c5b5fab1d24aba80c79423"],["design-patterns-para-javascript-parte-1/index.html","26cf30535fb25837e692f9fb6de46a2c"],["design-patterns-para-javascript-parte-2/index.html","44e73e5b8b04fe81b3e6487023bb182e"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","7b88293bed942da4b99e7a02c422bee2"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","bb4bebfe443954e78e429e17e01c568e"],["dicas-de-terminal-contador-de-arquivos/index.html","7b9eb83afc488bb2d83bc1c3bd829125"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","6cfa5b9f60eb9977b2f6ad499bf5d7f7"],["dicas-de-terminal-criando-comando-alias/index.html","4259785d40ccd75fbc8dd8992f6e9ac8"],["dicas-de-terminal-historico-de-comandos/index.html","9134fa38dc30746e892eb3b6e4da7a05"],["dicas-de-terminal-identificando-meu-ip/index.html","e792e01e9b54e5ce31b96d2d6becc367"],["dicas-de-terminal-matando-processos-da-rede/index.html","8af68d27977e6a3247c4e4117e68903b"],["dicas-de-terminal-multiplos-comandos/index.html","45fd8cf411e5816607040d781ab3b0c9"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","1d22c7024602e6da8fd2f122201e5f58"],["dicas-de-terminal-processos-em-background/index.html","7b6dc5f53131009563635642d106fb5c"],["dicas-de-terminal-trabalhando-com-ssh/index.html","dbe9e7208ae8e8f828d2bb966630a76b"],["dicas-de-terminal/index.html","274a0136d454357f6198265198b779cb"],["dicas-para-abrir-um-blog/index.html","41884e8ed80f1b3d52a2ba66f987314d"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","753a91e998850c799c1973b584fe30f4"],["dicas-para-um-estagiario-parte-2/index.html","5144985dda5c65066e7dd79849d224d8"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","52f4a493df8023c9cdcd8b894d64b56a"],["entendendo-como-funciona-os-middlewares-do-express/index.html","744fffd412a1d105a5721203cb91e6d5"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","c7af7139086df45e87b9bd00a2747ac2"],["escrevendo-javascript-melhor-parte-1/index.html","849f986723e2b3189974e056839cf1a0"],["escrevendo-javascript-melhor-parte-2/index.html","e93b986472efe6c43fafccdbb4b9b517"],["escrevendo-javascript-melhor-parte-3/index.html","afdcf9241a1c3d8af501b5405761647b"],["escrevendo-javascript-melhor-parte-4/index.html","1187438d2715b2b6e3c36109508849cc"],["estruturando-uma-aplicacao-meteor-1-3/index.html","4235220e7ee13d803cfaad6e9e95d8e9"],["evitando-callback-hell-no-node-js/index.html","52b292af0b7f410d608ce02d39e7c328"],["evitando-callback-hell-usando-generators/index.html","b2f3f47507d86c334bd59fc0097fce9e"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","84a7e98af876eb14909e96a1041aeff4"],["executando-funcoes-paralelas-com-modulo-async/index.html","4a24abea009f604913f58ad136e7233c"],["explorando-o-modulo-console-do-javascript/index.html","8e5452a8135f076fca25a48688c79217"],["express-vs-geddy/index.html","cd69227039384f8cc8401ca0f54f6c07"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","37a8b9cddd195d8706cadfe22871edf4"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","68caa23b4db2aa157d6fa690faa90b31"],["frontend-moderno-com-browserify-e-babel/index.html","bc071b0e7b31a5f0150e5f0444d52227"],["gerenciando-codigo-fonte-com-git/index.html","06342ee6dda51d70ce26dcc5f75d87b3"],["gerenciando-o-ruby-gem/index.html","6c960dc2b513841659a68ac67bc2b0de"],["gerenciando-plugins-no-eclipse/index.html","b27439e6549e79910cc7d0bf20c77574"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","bb941e0a19e7ab9b28de9f5bbcd415d0"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","5663bad2889577ef1a9145364f7bc47e"],["infografico-the-state-of-node/index.html","39c69037ead07d23c0929ad963aa8454"],["infografico-what-is-node-js/index.html","e85105b9179f826b3a0c4515fcf62ece"],["introducao-sobre-meteor/index.html","9394085dfe7def4db2728f33014774bc"],["jade-um-otimo-template-engine/index.html","6fd7325719524b9613af1cdbbacb9c31"],["lancamento-oficial-do-livro-de-nodejs/index.html","79a0535d8732d9662fd4e5ff77b864ec"],["light-talk-introducao-sobre-nodejs/index.html","386890c1129de217ad8d5d78bb8c5b09"],["livro-construindo-apis-rest-com-nodejs/index.html","ef6fd4911d8ff046f88528fa42ab384e"],["mais-um-livro-agora-e-sobre-meteor/index.html","5886ed533d80c6a6cbf33cb7d3f90637"],["mais-um-livro-sobre-nodejs/index.html","d22f03b2b5a730683b381c7ea11454a6"],["manifest.appcache","46b13c2596399452d193d2b331a28d61"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","3df4e4d5cd44e986ae97f3e39e8ead65"],["meteor-e-seo/index.html","04c5a861c1a2027cdf3ba83bd1b4d5f4"],["meteor-methods/index.html","3c6fddd90216849aed003973a3bb43e2"],["meteor-pubsub/index.html","a1560d2476b3561e2b156dac52599294"],["meteor-um-overview-sobre-a-plataforma/index.html","6cf503fbc307d3f50e9b0e8b64f765fc"],["meteor/index.html","32ab96276758061d17e88da0d2d92d06"],["migrando-de-windows-para-linux-parte-1/index.html","aca7c9b6e960f24d3c6e6a5de4288bca"],["migrando-de-windows-para-linux-parte-2/index.html","92c9e9a89a821be3793415b2897a0f38"],["migrando-de-windows-para-linux-parte-3/index.html","51b12e947d17db895b803d99679f0dfa"],["migrando-de-windows-para-linux-parte-4/index.html","f34fe2e7551ca583c5d946b01a5c37fc"],["modularizando-frontend-javascript-com-browserify/index.html","cf2b1b6b936153c6a9dc6e2d59a2df44"],["modulos-do-npm-no-meteor/index.html","d4783e8788fd20a54b017f191f9f6adb"],["modulos-essenciais-para-nodejs-parte-1/index.html","7ff59bf9187eec60fd262033b68ffec2"],["modulos-essenciais-para-nodejs-parte-2/index.html","84c5005f4a506c0309f690c232154379"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","cb68b65c48950b9191da808986ad6ac7"],["nginx-servindo-nodejs/index.html","b74c00dd0c7af254456ae09f2db9c43e"],["node-js-para-leigos-child-process/index.html","d561dec1ebf093257cab749cd542bf78"],["node-js-para-leigos-explorando-real-time/index.html","0d2f7aeb71a03998f4999d24449c05b8"],["node-js-para-leigos-framework-express-parte-1/index.html","c271c1b4307a8ff6bf5566b7b5b90bae"],["node-js-para-leigos-framework-express-parte-2/index.html","b569203487a4fd5d670397449ffcd419"],["node-js-para-leigos-instalacao-e-configuracao/index.html","3be8bcc130a42fb7abdd42a3f38c11be"],["node-js-para-leigos-jade-template-engine/index.html","49c5d9494d2e69f1422e9d0acd1d0152"],["node-js-para-leigos-trabalhando-com-http/index.html","2e91646775f753f4e0acdfed20027bd2"],["node-js-para-leigos-utilizando-api-file-system/index.html","54edc245ca94eff5baf3b80deca9b116"],["nodejs-criando-um-mini-chat/index.html","b8fb4e17537a7900775127a0e2095f85"],["nodejs-express-socketio-e-sessions/index.html","6ba9e896140384b166b14026d4e30655"],["nodejs-javascript-no-servidor/index.html","3544840fbe94f61a64fd815ae02f63a8"],["nodejs-ou-nodemon/index.html","f22328a6cc15b1d12539665ac4be85eb"],["nodejs-para-leigos-a-proposta/index.html","93c14d90e60320c6434435f83e2f2348"],["nodejs-para-leigos-introducao/index.html","2077fc604a5b938177f7132c409f985e"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","d271514670e42d95fba4fdc361390ef0"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","75cb60604e3b40ad2445de047be0a5d0"],["npm-node-package-manager/index.html","271ba3f6e4e27f9635db3f39c4a10d02"],["nvm-node-version-manager/index.html","02bf9fd9fcc31179c3b0aaa4827a9f71"],["o-blog-esta-de-cara-nova/index.html","bbbde55403a584ca3582cb830e4cc90e"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","f0c526007cbe1d7ead33d2c170e5efbe"],["onde-hospedar-aplicacoes-node-js/index.html","d00c72f80e973e33321c782426cabe09"],["organizando-um-projeto-meteor/index.html","a2936194bd837198716a0505eaf3eb6c"],["organizando-uma-aplicacao-nodejs/index.html","dbef5d9786da266c08b47c3a1194f55c"],["os-20-posts-do-ano/index.html","9b90a51db613216ebfa204b75109ba16"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","6ab6da46b47fc697ff86401db239f51d"],["otimizando-aplicacoes-nodejs/index.html","1c9e92e79391f13fa6b7888bb195b7a8"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","3c56a9c8b8e4b447de2ff234eebd3b66"],["praticando-tdd-com-junit/index.html","f38f7ec6e455b8a20cf972ca2cc83f9d"],["primeiros-passos-com-express-4/index.html","75bdbeb8b465e1dbf778fd54a21f1927"],["primeiros-passos-com-meteor/index.html","f2ae4359e4d4f9214480fd7744afb7dd"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","0a0a740592e9e1d91aab9159bf943f3e"],["protegendo-aplicacoes-javascript/index.html","30cba84b276e55bf05e3c0861b3f52af"],["quer-aprender-java/index.html","cc4015d8dd480540b7177a398050433b"],["quer-aprender-meteor/index.html","ff5e6a18dbc3e16540074c530f8c6812"],["quer-aprender-node-js-atualizado/index.html","5b2170bc68ccc02c447f785cb069aa97"],["quer-aprender-ruby-on-rails/index.html","ccce559243a55be26efdbb715a6a2ad8"],["real-time-com-socket-io-no-nodejs/index.html","5c1ea62cc1d0f85db7eca3442364490f"],["realtime-com-rethinkdb/index.html","e208ddbc780919bce11e103d356bfb4c"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","8f1fda73929e75f5d686e7bf603819bc"],["socket-io-com-redis/index.html","c93ecc7c8d969cf1cc84239412e7ca4c"],["split-e-join-de-arquivos-com-tar/index.html","119e2da789025acef66c0b88e9611a8a"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","08eb33b1dde442f47fb58fcf65edeed3"],["terminal-gerando-arquivo-de-texto/index.html","8c5f30809ed19c6f04451b567950a57e"],["top-20-de-2014/index.html","affb7f534721aedc68cad26bbc68312e"],["trabalhando-com-multiplas-contas-do-heroku/index.html","7fe89a02fdbe7a469c374e5057d7d2b1"],["trabalhando-com-validators-no-node-js/index.html","96c35640fb82b893787da44062f83eb9"],["tunning-em-servidor-linux/index.html","3f4d8bda74b87e9dbcbbcd819be2a7ab"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","c54302bbc23535cec59072c5b3bb84a7"],["usando-spread-operator-do-es6/index.html","14d3beca0e4884834d58cad9b493ddc1"],["validacao-com-ruby-on-rails/index.html","15e3dea1178113d6ce4dad183528db1f"],["vantagens-em-utilizar-sistemas-linux/index.html","90aaabfeee113ad3f524238fbc9e612a"],["video-streaming-com-nodejs/index.html","399509c6e7ad2e8dec674b59771c3725"],["visualizando-portas-da-rede-com-nmap/index.html","99cdec7dea0834b034c84c6b50807484"],["webscraping-com-node-js/index.html","127a4f7a15b9a8626b4e83e8f12ead7c"]];
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


/* @preserve Mon, 05 Dec 2016 23:01:20 GMT */