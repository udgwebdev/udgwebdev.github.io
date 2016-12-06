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
var PrecacheConfig = [["15-javascript-hacks/index.html","d56089068e312380b970c9c3ca087dba"],["3-maneiras-de-trabalhar-com-node-js/index.html","779dab90aadc1534469af16898063a35"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","88d533543b1c2ed13921722f7f8e07a4"],["5-motivos-para-usar-github/index.html","999e6726b68623430968b7286d3831bc"],["6-motivos-para-usar-nodejs/index.html","7ad9b42ab81f4a3c390d99d564c92e24"],["8-motivos-para-aprender-meteor-agora/index.html","d5d08fa6e57fe69139e870183fdf0f19"],["8-motivos-para-estudar-ruby-on-rails/index.html","b14e0e79dc1a98e297ad168522f19018"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","1b5e1e207942a6a3530e7b078a87b50a"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","91e7d701ea46aa6d2ff81defe4c653fc"],["administrando-o-leveldb-com-levelweb/index.html","872da39d1c38069c2cfaa61e9d4a7bc2"],["ajuste-fino-no-eclipse-ide/index.html","a80ea0ccb05bcec98739925ac45c926b"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","b697bc1320c1c96e791c380810b75802"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","ce7e27b5fd885be8f782900c4e7447cb"],["artigos-e-talks-fora-deste-blog/index.html","f48d20b729f9c8968e721d35a96afca7"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","f0aaebacb01b843f238692ff89643c4a"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","f73fc9719695ec1cfc16538b27fcd4aa"],["brincando-com-leveldb/index.html","48160e49b28b6df7ed48761f27cd042d"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","ab34c1f026736f0ab4ecda8f3c20176d"],["como-desmotivar-uma-pessoa-parte-1/index.html","68ae8f5bc5f76cfb0dc7fd227ab773b5"],["como-desmotivar-uma-pessoa-parte-2/index.html","72baee83ecf1e564c20423f6a255b947"],["como-desmotivar-uma-pessoa-parte-3/index.html","eadfec2bac37446687797bbf5db23dd6"],["como-desmotivar-uma-pessoa-parte-4/index.html","93ed7031d5c9a2a5d4b18a9741dca509"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","43bd2f7b62fa4830f25ae9c310a96c3f"],["compactacao-gzip-com-nodejs/index.html","6dbe9ac68ddc1250d582b1ee43957f19"],["configurando-meteor-e-velocity-no-travis-ci/index.html","edb5d3ffb594926916e33b4721a73b61"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","a4d746e7f1082fc7126f75e77c7dfbd4"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","5362a06ec6ee19e52188029350c85851"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","1f565499de4f35fca5da38e31da325e9"],["customizando-build-do-cordova-no-meteor/index.html","cbe8b0963fc68fb3beb993d9471b6b43"],["customizando-npm-init/index.html","c0cff546530cb4e9d42138d4c6531ced"],["deletando-arquivos-repetitivos-no-terminal/index.html","5d93c882b6fc8f5bbd518f666f590008"],["deploying-meteor-no-heroku/index.html","eb85b9c068598783ba27cb6af5dfa6c3"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","a33eba6bc0245842f4da5066f3b006be"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","c296f560ca1c6d6e401a4b66ac4a4080"],["design-patterns-para-javascript-parte-1/index.html","bb0939ceb6ad4bba165ea5584caf89d0"],["design-patterns-para-javascript-parte-2/index.html","5bac7d24e04db7f5a0029053cd722559"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","be64ab65f2bc1f7c5feb56dd197c0574"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","93a43dfa449a9c3db33b462052a9cbc0"],["dicas-de-terminal-contador-de-arquivos/index.html","3f34eb18399d0e749be906492173e310"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","49cd4c60daf678f651fd2ea54301a242"],["dicas-de-terminal-criando-comando-alias/index.html","298dbb30f237dd10249e293bbcd1173b"],["dicas-de-terminal-historico-de-comandos/index.html","ffdcc2fac9f1de3bcf1a9b86403d3bd7"],["dicas-de-terminal-identificando-meu-ip/index.html","27d3463b89370090d80c75a2003e7d92"],["dicas-de-terminal-matando-processos-da-rede/index.html","12da8598cf9aebe40acbd297df807499"],["dicas-de-terminal-multiplos-comandos/index.html","15347fa5677ebd8c6da8b8ce6a5434ce"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","5002346a0761149818caae3f2d55d7e6"],["dicas-de-terminal-processos-em-background/index.html","1e5a8dfca5cfff7ae3fef4061e156c24"],["dicas-de-terminal-trabalhando-com-ssh/index.html","9e590384246270717ab40cc420bf663f"],["dicas-de-terminal/index.html","6598d4f1c9e14f1b3b68818b4de39de4"],["dicas-para-abrir-um-blog/index.html","1e90c566240093920518efc46f647328"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","304aea57ab95566a5bbcafd65999b649"],["dicas-para-um-estagiario-parte-2/index.html","f17bdc542559149dd7f9281837f4a201"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","796452a10b59523cb042001b2cee535d"],["entendendo-como-funciona-os-middlewares-do-express/index.html","9951281affbff9789a8c666e193fa851"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","8c68753fa3e77a1bf1ee93c630a84614"],["escrevendo-javascript-melhor-parte-1/index.html","0c3f83fdc0dff0289b405e83d02befab"],["escrevendo-javascript-melhor-parte-2/index.html","3fb98a3280cc83b138d0d35fd01dea30"],["escrevendo-javascript-melhor-parte-3/index.html","902da3bcd53c28f524edf5700b592d80"],["escrevendo-javascript-melhor-parte-4/index.html","e6efa0bdd271660fca26ae0684e861b3"],["estruturando-uma-aplicacao-meteor-1-3/index.html","725af5ab6b69f1608457023ca3425baf"],["evitando-callback-hell-no-node-js/index.html","cd6571911ddc76834607e271babd1ede"],["evitando-callback-hell-usando-generators/index.html","f7f64fbac786d739154ed65fc7b7f5ce"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","d93ea05ef0c346047a068d19f619654f"],["executando-funcoes-paralelas-com-modulo-async/index.html","00c0097b6efaaa41e7e879db9f0c93d6"],["explorando-o-modulo-console-do-javascript/index.html","9fbdd16fded689a92eb182927239d919"],["express-vs-geddy/index.html","f187f5bc30e91e422d23a3573a458ef3"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","fb3826c6eb7e0813dd03655cab16ded2"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","8c5cf19108bb9aa75bafe8e3d93a7ef7"],["frontend-moderno-com-browserify-e-babel/index.html","82e59eaddd2ae4012a7e320136e74319"],["gerenciando-codigo-fonte-com-git/index.html","4960bf920933010bdbf7e8cb0c74bcc1"],["gerenciando-o-ruby-gem/index.html","ce1bc378fb9dabea6daae7bbb5c21533"],["gerenciando-plugins-no-eclipse/index.html","16c4d717d4dc81df5a34a8992cc7d42d"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","a84e24a61a652a7c879ea80b298cc7ce"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","2bdcdcf26342757c3beab470471dd2d7"],["infografico-the-state-of-node/index.html","6fe72c2cf98cb52e2133a19c764fd0f9"],["infografico-what-is-node-js/index.html","626cf7bae1a2eebec121c485bac013c6"],["introducao-sobre-meteor/index.html","1f22a51e45097141bc24fbea9f291d13"],["jade-um-otimo-template-engine/index.html","da95cc99cb8ae8c1a80d8a053d7aa7a1"],["lancamento-oficial-do-livro-de-nodejs/index.html","5c7e504cb0751fc23136eb1c980ec08e"],["light-talk-introducao-sobre-nodejs/index.html","053a1484bceebc0aef5dfee31a39cda2"],["livro-construindo-apis-rest-com-nodejs/index.html","e3fdaffa204934d47cc5da81ff3627fa"],["mais-um-livro-agora-e-sobre-meteor/index.html","35d0283cb1a1dd93e64d99f1631065b7"],["mais-um-livro-sobre-nodejs/index.html","2907421b914bc2f88c7dd73d7af3b561"],["manifest.appcache","76a3060272c9788b6359e98a2b294cc3"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","92cafb0e60ad51c59543a5ce7498cad1"],["meteor-e-seo/index.html","cb598c425d81366148dfd6227de91542"],["meteor-methods/index.html","a8330654650c8dfc74f09517b58b177c"],["meteor-pubsub/index.html","1e380547f8e7dfd46185806e874bb2b8"],["meteor-um-overview-sobre-a-plataforma/index.html","3446f9e154454e89c75205376ab347aa"],["meteor/index.html","fb40d3e6854f1a4b7c410354e968ff75"],["migrando-de-windows-para-linux-parte-1/index.html","51edb61e16d160e27143a26397a850b2"],["migrando-de-windows-para-linux-parte-2/index.html","0957f740664a6e1b8f18548a714de080"],["migrando-de-windows-para-linux-parte-3/index.html","b444fd0c3fba74d6a4caa3d1111cb067"],["migrando-de-windows-para-linux-parte-4/index.html","92ae6c638243b89d4e4e550fe23aa4c1"],["modularizando-frontend-javascript-com-browserify/index.html","5c65a9af2c288db1ca1d46ce94f9c475"],["modulos-do-npm-no-meteor/index.html","8dc34f856ec236b62de6928585f29775"],["modulos-essenciais-para-nodejs-parte-1/index.html","e6eac3b90b8fb3a507b231254844c87a"],["modulos-essenciais-para-nodejs-parte-2/index.html","134ac8753726972d67795dc8f8b2f751"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","d1600d361ab09227f1b35a75707a134f"],["nginx-servindo-nodejs/index.html","56e83566e1c4d5036f8b54f4a0ff509d"],["node-js-para-leigos-child-process/index.html","840e5b1faa8fe99e01193751aea7dfab"],["node-js-para-leigos-explorando-real-time/index.html","af406878cb084521e271e04f4c3f741f"],["node-js-para-leigos-framework-express-parte-1/index.html","7f7993ffbfaa6e709892fc9f5708af6a"],["node-js-para-leigos-framework-express-parte-2/index.html","3acb4e1e015b76cd984b8bc8004c6e4c"],["node-js-para-leigos-instalacao-e-configuracao/index.html","d5f9a74bd1bdc7d40419d3aa8fcf21e1"],["node-js-para-leigos-jade-template-engine/index.html","5171b101d70b64de332c29bc09be473a"],["node-js-para-leigos-trabalhando-com-http/index.html","bfaa508fb69f658e72b099e600e26003"],["node-js-para-leigos-utilizando-api-file-system/index.html","8d08e31d4e0fa892a7cb69e422917e60"],["nodejs-criando-um-mini-chat/index.html","14f4ca3df9ad87e558dc0b2bf399cd28"],["nodejs-express-socketio-e-sessions/index.html","22764fb5ddaef78d1b073c8bc7a03e75"],["nodejs-javascript-no-servidor/index.html","b0e33a7c2135ff82643dc2566dedebcc"],["nodejs-ou-nodemon/index.html","c462eb664b79241e3ab3c003d79f9a89"],["nodejs-para-leigos-a-proposta/index.html","ba9830e4cbabfed16ef25ab0e9a49ad8"],["nodejs-para-leigos-introducao/index.html","cff3d749417ecccbb1bee3b7d4903672"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","e66a53c9fd79848532283978c035b4f3"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","f881de12834aac8efa6991d3ee21ac58"],["npm-node-package-manager/index.html","89cd355df90a3eab077252cbfb63c4c7"],["nvm-node-version-manager/index.html","eef0098880eb463ec1751c85f9023577"],["o-blog-esta-de-cara-nova/index.html","8cf77e6078e781ce88fbf352366645f6"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","05b2c09620576acaa297896031d3baa1"],["onde-hospedar-aplicacoes-node-js/index.html","122a6df654ef223343e99ebadaf984c4"],["organizando-um-projeto-meteor/index.html","2c36093a98ca2c163107e9e64c4f2e24"],["organizando-uma-aplicacao-nodejs/index.html","f1b12e2c67cc28e1f212c852e6d334b3"],["os-20-posts-do-ano/index.html","4b6bb04772337b0cf05271d733f6623a"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","b6d37a5c7dc65caf830bc18caf250b5a"],["otimizando-aplicacoes-nodejs/index.html","8de522c91c30f6bcab0b460d9ba04d34"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","ae8f1e0eeba9ae338d6c3f153816bc74"],["praticando-tdd-com-junit/index.html","6478aee3c5cfcab1b101530e8d90ac1b"],["primeiros-passos-com-express-4/index.html","aadb3112969efeb154b865af4f5be00d"],["primeiros-passos-com-meteor/index.html","152f5d8b30c002bd4ede8d76eecc22bd"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","10629f03c6c5605d92600c22a2745f6f"],["protegendo-aplicacoes-javascript/index.html","6ec7f0a1e8df713f87b7b566988e5de3"],["quer-aprender-java/index.html","75c670e45e2905b0bc938257b34b6cb4"],["quer-aprender-meteor/index.html","b2e94f2d83c5990d53b7c025b6c21e78"],["quer-aprender-node-js-atualizado/index.html","9341af506bc2e4bfbb6844bc35e91488"],["quer-aprender-ruby-on-rails/index.html","4b3dbd946ff0df7f321f7e1cf1d4b21e"],["real-time-com-socket-io-no-nodejs/index.html","e42e9a1fc30fc2fc2ec25861a5ffe0ea"],["realtime-com-rethinkdb/index.html","b46b99b46e1c2d8a36725d3744ff3140"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","3ce6c1a47bc39ad04935c2252158979e"],["socket-io-com-redis/index.html","a8d8d1a157d44f32f1b284d4a6a75950"],["split-e-join-de-arquivos-com-tar/index.html","7b78c1820f99704def845e73e79e35c0"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","cd0e0d1a4df188cfcf26a3d73c19b123"],["terminal-gerando-arquivo-de-texto/index.html","290fd0a06133a6df77ba19641895023e"],["top-20-de-2014/index.html","d9bb4a4953520c427c8019269830b545"],["trabalhando-com-multiplas-contas-do-heroku/index.html","77fae6112890ed07869b6d58746a959b"],["trabalhando-com-validators-no-node-js/index.html","dac429bb1447dbc9ce703adfff5ece7a"],["tunning-em-servidor-linux/index.html","12dae3c93ce7e46b3fc29e1c924fd922"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","302f30606944279fbf03d13ac0e6c0d3"],["usando-spread-operator-do-es6/index.html","8e048511c26c05919f3186bbeb78d1b2"],["validacao-com-ruby-on-rails/index.html","ba691cd28a0307bb0427be41e77a2499"],["vantagens-em-utilizar-sistemas-linux/index.html","c6ec06327375a9db330ac35c108e3cb3"],["video-streaming-com-nodejs/index.html","6e1d61e8925c36fe015b86a6277968af"],["visualizando-portas-da-rede-com-nmap/index.html","a6638785357a0686a1dffc6e04a6443d"],["webscraping-com-node-js/index.html","bca798f56e5944c2626c81ffe1d9acec"]];
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


/* @preserve Tue, 06 Dec 2016 19:12:07 GMT */