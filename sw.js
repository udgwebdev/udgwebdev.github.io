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
var PrecacheConfig = [["15-javascript-hacks/index.html","a1df707a3814b2d16b5f6271db29e05d"],["3-maneiras-de-trabalhar-com-node-js/index.html","bb2c3e1ef85615aa46873854ca7d44ac"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","90355a8f18876832916308ee2cb5cebe"],["5-motivos-para-usar-github/index.html","e6a631b076c1c1517769dcbed8997431"],["6-motivos-para-usar-nodejs/index.html","9e5b8c5f6f79e370bf904d61d3f83900"],["8-motivos-para-aprender-meteor-agora/index.html","2a25ce58748750009247476a85c25198"],["8-motivos-para-estudar-ruby-on-rails/index.html","b35f4262b9fd00ef6c4bdbb48907526e"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","5433ff5c6897aecf1f2e8465f4233284"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","970bfb6e2a0c06553520be9849a6de24"],["administrando-o-leveldb-com-levelweb/index.html","4191c551927de200480d6380f00e0a5f"],["ajuste-fino-no-eclipse-ide/index.html","736c6500d926abfdadaed73b102ed4e1"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","767355fbe1c16ba3844c52a3a3138f35"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","8d7c4a4e815ef835e5018bc887e659aa"],["artigos-e-talks-fora-deste-blog/index.html","710c8bdc2998a9a2c9cc607bbbc6415a"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","5f44834a8ce89934f6c1d26db1a2498f"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","6933ee1a49da5b4ae2c247848656ea32"],["brincando-com-leveldb/index.html","40874af990f68b3c4e2b03a15ef30185"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","ba792c7ce8b1f0a1a149293013a4f069"],["como-desmotivar-uma-pessoa-parte-1/index.html","618d2f9ff3016699e4f89ee577bbd295"],["como-desmotivar-uma-pessoa-parte-2/index.html","a4bcbaf44f66d91e459113fe634dc292"],["como-desmotivar-uma-pessoa-parte-3/index.html","56544ee4634721ba53b7c04f254e4762"],["como-desmotivar-uma-pessoa-parte-4/index.html","4f9c7213af251e7f3546d85bac3fb8a0"],["compactacao-gzip-com-nodejs/index.html","8c1e426ff824283f58fb141a1ac7c589"],["configurando-meteor-e-velocity-no-travis-ci/index.html","da0fd0f831e7e109a4795b8e0e6a9d12"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","46e004bc0fb3d0553018ba4444e20d34"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","aa1e110f90ac815e8371fcfe683551ce"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","dc7976ab13ff147d8689825193a03de6"],["customizando-build-do-cordova-no-meteor/index.html","882c249dc039dc4ee8b197f7f21fdeed"],["customizando-npm-init/index.html","d2e43caf3654097fb9efcb11152499c6"],["deletando-arquivos-repetitivos-no-terminal/index.html","ebca040b989de406121b072ad6330035"],["deploying-meteor-no-heroku/index.html","1033cb05d28aef827a0c46e7cec3e275"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","34dd2f711c801859340468a444c24831"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","16c97e145be61178ad61325f7ec457a2"],["design-patterns-para-javascript-parte-1/index.html","8ece2d76af851bf71db27bcf93ffad4e"],["design-patterns-para-javascript-parte-2/index.html","9637a9ccd2b6cc0873e2ead7fd6e461b"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","f231d60bafdecbf18c518830ced38af4"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","290fc6fc7fccac6f01a13281c5ef4301"],["dicas-de-terminal-contador-de-arquivos/index.html","cdbf564d6285f68e51e46e3a54bacd8e"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","e1bd403a9e0244141b23b71d4f9b283c"],["dicas-de-terminal-criando-comando-alias/index.html","0079b8c1b9cc0d7b088efcef3bbf67c7"],["dicas-de-terminal-historico-de-comandos/index.html","904fc798f3dd316f1132698f761e5255"],["dicas-de-terminal-identificando-meu-ip/index.html","e833dd3e0fed2010b5bf16b76d378d05"],["dicas-de-terminal-matando-processos-da-rede/index.html","7b5df54d31e623cc3d9cd626d2335cd0"],["dicas-de-terminal-multiplos-comandos/index.html","cccaa646b6f6f8c2886dbe0b0ba0ad7d"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","f6466c0d90b9c84bc97d4699493206af"],["dicas-de-terminal-processos-em-background/index.html","7560a74f1075e98d52ae3cc65a6f1ac1"],["dicas-de-terminal-trabalhando-com-ssh/index.html","ead9215ccbad931936e871f13048bfad"],["dicas-de-terminal/index.html","274a0136d454357f6198265198b779cb"],["dicas-para-abrir-um-blog/index.html","f98a38460c5e16067d0667a21ae28a6f"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","d4b21fd085769cb9450ac36368e84bba"],["dicas-para-um-estagiario-parte-2/index.html","96ca66f84e18a0aaad07614ee5155441"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","a143700bbbc36e88b3133786bfef27b5"],["entendendo-como-funciona-os-middlewares-do-express/index.html","a7f510893f499288d6473ecc49a9975c"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","f981c7d1282daff3f071f523b79501a4"],["escrevendo-javascript-melhor-parte-1/index.html","d199b091bdff409804a01508ef9d25d0"],["escrevendo-javascript-melhor-parte-2/index.html","d818e1c21508c378beaba46b0c604ab5"],["escrevendo-javascript-melhor-parte-3/index.html","0bbff86dc5ed61619d01ebcbc3490aa4"],["escrevendo-javascript-melhor-parte-4/index.html","2bb1f22b7b5352ac8afdc5bd33add38c"],["estruturando-uma-aplicacao-meteor-1-3/index.html","6a3c18ece5f859e7077fad74ea29243d"],["evitando-callback-hell-no-node-js/index.html","e89f1cd6d071a764ff27e9322bfc366b"],["evitando-callback-hell-usando-generators/index.html","3275a10e070050feda90dfa9abe6d45f"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","4d64711211b000edebdeda69619b7da9"],["executando-funcoes-paralelas-com-modulo-async/index.html","6a36d4471f6fddba8c44a335b42f8453"],["explorando-o-modulo-console-do-javascript/index.html","c26dc7f9e6daf945a108934b178e71cd"],["express-vs-geddy/index.html","934c6a15e09c5d4bed5b4bb8c5ed07bb"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","2d3f13fb4f2f8563bec4dd7cbe872940"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","0f584dc3abbc8b22e4370e02d1973201"],["frontend-moderno-com-browserify-e-babel/index.html","617d4996fc5e650a02195384c5b661e9"],["gerenciando-codigo-fonte-com-git/index.html","bd727d6f50217e30670ec4fd4f131d5b"],["gerenciando-o-ruby-gem/index.html","f9824739bb89ebf41e065f96adb4ea22"],["gerenciando-plugins-no-eclipse/index.html","685a5981d4b07fe381ec531f85a88b3d"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","8c9882d59351cf91538fa27d2846da17"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","5663bad2889577ef1a9145364f7bc47e"],["infografico-the-state-of-node/index.html","25d1c344b71a79fdcae0093faadbca90"],["infografico-what-is-node-js/index.html","e8caad8d1ef5d718eafc6301c1be6d4d"],["introducao-sobre-meteor/index.html","5b61c83751b3fe8f3269b6136369ca5b"],["jade-um-otimo-template-engine/index.html","a12f6b5b97ee7f44c6b87e6661cd72f2"],["lancamento-oficial-do-livro-de-nodejs/index.html","6fd5c9f46b834624aaa6f4385aca9b30"],["light-talk-introducao-sobre-nodejs/index.html","c88cb07366b341249d6f92210ee0dc70"],["livro-construindo-apis-rest-com-nodejs/index.html","eb171c82668be15ac6628238e9a97bbf"],["mais-um-livro-agora-e-sobre-meteor/index.html","7777b90bc51b7dccc9f891be9abd8416"],["mais-um-livro-sobre-nodejs/index.html","38d3e12530b5223e58ff021b4848353a"],["manifest.appcache","ba4c4498695663c3fb518989709c83c1"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","3df4e4d5cd44e986ae97f3e39e8ead65"],["meteor-e-seo/index.html","194a72971e03e0a956fa7c721aeb21bf"],["meteor-methods/index.html","c5cfa0c7ffdff89384e37ef704fe94a7"],["meteor-pubsub/index.html","5be944f5132ebbc94346efdebc34ca20"],["meteor-um-overview-sobre-a-plataforma/index.html","0bd33c5c54bb0113c1a55e06f5b168d6"],["meteor/index.html","32ab96276758061d17e88da0d2d92d06"],["migrando-de-windows-para-linux-parte-1/index.html","4faca6350c66ad15758d82a0ba202c4d"],["migrando-de-windows-para-linux-parte-2/index.html","e818873773ca9941c6ea989102b79f53"],["migrando-de-windows-para-linux-parte-3/index.html","7eb3881c2f2f4e9e40acfa1660d8b824"],["migrando-de-windows-para-linux-parte-4/index.html","7c09b07377d01809c6774d60fa85d802"],["modularizando-frontend-javascript-com-browserify/index.html","f72c22ab689fafd0a2d380018b7b2e28"],["modulos-do-npm-no-meteor/index.html","bf929ce0e9a534202e815622887d298d"],["modulos-essenciais-para-nodejs-parte-1/index.html","b65c792a5da706374f9d2d3d06e292e7"],["modulos-essenciais-para-nodejs-parte-2/index.html","d9dd0db684a14f7d2b3d7454b0cde67d"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","71b78be36a141ae42337e9f222d31100"],["nginx-servindo-nodejs/index.html","ee90db98826ffd6e3791a0d2eabefb6c"],["node-js-para-leigos-child-process/index.html","05f4b9519ef6b0ad41b5e92e46394b2f"],["node-js-para-leigos-explorando-real-time/index.html","ed767cff7dc0ca1d21a1e4da5db636da"],["node-js-para-leigos-framework-express-parte-1/index.html","5b48cabcdb2a9936d9f29b9bb449e824"],["node-js-para-leigos-framework-express-parte-2/index.html","4f70f1898a9740f2034d0702d2fc09fd"],["node-js-para-leigos-instalacao-e-configuracao/index.html","dd2540289a07705cf2a5487665a03cd5"],["node-js-para-leigos-jade-template-engine/index.html","8d75be0639df69d65bc086c00ed55243"],["node-js-para-leigos-trabalhando-com-http/index.html","97308c142e76e9a0962b1dc513a7c9e6"],["node-js-para-leigos-utilizando-api-file-system/index.html","f9ed1b1b892ccded1bc8caad225df8cc"],["nodejs-criando-um-mini-chat/index.html","a9dc520d4cece76735ddfad276ddc214"],["nodejs-express-socketio-e-sessions/index.html","9d23ba9b389a06c14c4bc5a8958baa24"],["nodejs-javascript-no-servidor/index.html","7c6f4fb4f9b4d26fe834b498419e6d0c"],["nodejs-ou-nodemon/index.html","6c487f02c43e9389b360935cc0302dec"],["nodejs-para-leigos-a-proposta/index.html","ad34896ab921d13689f31f81660f4da1"],["nodejs-para-leigos-introducao/index.html","68993efaa9f1463a249e14dbb34e59e8"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","f3ffc32b67f1bf8849ba7355fe6e7285"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","75cb60604e3b40ad2445de047be0a5d0"],["npm-node-package-manager/index.html","ddc9992db20e631768b775ea26b5e472"],["nvm-node-version-manager/index.html","fe237d096469a79443579bfda4662f45"],["o-blog-esta-de-cara-nova/index.html","56cbb183349c2558123657f6809eae10"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","9d6ef0f35827c37c68f08b5a75a53295"],["onde-hospedar-aplicacoes-node-js/index.html","62cd5a18a69e5072218d3f3dcd7c446f"],["organizando-um-projeto-meteor/index.html","0e8c76770b801072e991814aa0a57850"],["organizando-uma-aplicacao-nodejs/index.html","d65bc3381a897fc6ee8e4646cdddb051"],["os-20-posts-do-ano/index.html","761d9b123b2e33645244bd8cea1acfad"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","9828378918fe23cad53142c0f2d57255"],["otimizando-aplicacoes-nodejs/index.html","70023672c0fefcfd6d131f24c248f004"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","662b481150740c666a59d1c2da405358"],["praticando-tdd-com-junit/index.html","fe27cce89c3e7672cc1917f4a6be25fa"],["primeiros-passos-com-express-4/index.html","3760829f07211b4a41f75a4a84bd4f59"],["primeiros-passos-com-meteor/index.html","e8a9b7455eafb9023b020576e5ce7648"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","6a2d629532a70c363faab70fff24a20f"],["protegendo-aplicacoes-javascript/index.html","87f6439f72ad5b89b289c6a37693d85b"],["quer-aprender-java/index.html","f2d6551acdc262bd0ed631285ac9b58e"],["quer-aprender-meteor/index.html","1c89a7c496e4ccf4bf0cab6db87d494a"],["quer-aprender-node-js-atualizado/index.html","b60ea406ff94d9526ef71199ddd82314"],["quer-aprender-ruby-on-rails/index.html","383327e2c0ec01dc3c92d1145f9c55db"],["real-time-com-socket-io-no-nodejs/index.html","52875fd1b93869e9e5c69ed34d21d2cf"],["realtime-com-rethinkdb/index.html","291dad7d150296aba6287c7be2a48c67"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","3b7378ddf1328994bb3520be76faf462"],["socket-io-com-redis/index.html","1122658e672a86e1b79d327e607eed67"],["split-e-join-de-arquivos-com-tar/index.html","10085ff0468f9e84f29b1f3dcdc2ca15"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","45ebec431c63a5143adccb045759276a"],["terminal-gerando-arquivo-de-texto/index.html","62077826f13c9466b15ba34550e1644b"],["top-20-de-2014/index.html","60d66d449729e76ba254c15bc22a72fc"],["trabalhando-com-multiplas-contas-do-heroku/index.html","4aedc3d276abb107abc559d53d93f824"],["trabalhando-com-validators-no-node-js/index.html","3bbcfb962773c6d0a3ae31aa61d034c2"],["tunning-em-servidor-linux/index.html","8dae6163118c1cb4106702057a1f423a"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","ad80ec40c4452aa18fbd0cfdc3d53b1f"],["usando-spread-operator-do-es6/index.html","9b81b4e41218e639917b83e173d24f84"],["validacao-com-ruby-on-rails/index.html","0ff37b07be06daab9653d5d9d69a0c04"],["vantagens-em-utilizar-sistemas-linux/index.html","dcd3c05acbdc18f609186235dff91494"],["video-streaming-com-nodejs/index.html","45dd6a6dc95de9adcce65271a01002c2"],["visualizando-portas-da-rede-com-nmap/index.html","3fe33413eb958ebdf9696aeacc46a3f9"],["webscraping-com-node-js/index.html","dcad7a52121e5b46fa5055b1f37fd72d"]];
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


/* @preserve Tue, 06 Dec 2016 13:13:07 GMT */