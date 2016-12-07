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
var PrecacheConfig = [["15-javascript-hacks/index.html","f8890186e422b874fe0181e446463b8d"],["3-maneiras-de-trabalhar-com-node-js/index.html","4b63d3172cbdf85e0126688978eb8c62"],["404.html","fb3c08189b4986925ef552fd93432afb"],["5-motivos-para-instalar-o-arch-linux/index.html","3c4ef0679f2a7aae3421553421057310"],["5-motivos-para-usar-github/index.html","70c0451d6b74a0ec95ae2746b703b7ee"],["6-motivos-para-usar-nodejs/index.html","99edbc6f491fc5202ae6b65a6992f571"],["8-motivos-para-aprender-meteor-agora/index.html","c88802d328b36842d5d26cfaf581477e"],["8-motivos-para-estudar-ruby-on-rails/index.html","219a9124186143b3a83c7a78b0d291f0"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","93b4e24776aee30659f99b00558ab9e1"],["acelerando-comando-dd-no-macos/index.html","0f07d88680e28dd41fba09cfa9d09cbd"],["administrando-dados-usando-express-admin/index.html","6a3e858bdd1d64367d2ac9d342c4c98c"],["administrando-o-leveldb-com-levelweb/index.html","606bf5749507d3bc76c35b15dc7a552a"],["ajuste-fino-no-eclipse-ide/index.html","9f1af46c04543b32fb610bd4766b4704"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","2af395d31bd037fd8d8708cdc68e1e14"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","e952ae839b57be55337e77ec612f2475"],["artigos-e-talks-fora-deste-blog/index.html","78f8601281e221e195d93ac5d44df1da"],["assets/css/main.css","b0f4ae29a06b560ed7b66b48ae8cf5d1"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","195efe44828cf58bf72f94c10e57bc9c"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","865719b9c69c6fbd6fb752b6ce9ffb7b"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","fed73f51dc27dcf58f41e3a8296910df"],["brincando-com-leveldb/index.html","3fffc299e02e1b241b8675f8aaaf7a71"],["brincando-com-o-template-engine-jade/index.html","0aff792358ad5eecaf66d7e1c31c82ed"],["brincando-de-es6-no-meteor/index.html","20367a0250bd382239230fb366a44cf1"],["como-desmotivar-uma-pessoa-parte-1/index.html","b2da0363f8b5822a2178b00779b1fd1e"],["como-desmotivar-uma-pessoa-parte-2/index.html","74433f018c285a35945410d05781bf36"],["como-desmotivar-uma-pessoa-parte-3/index.html","2ea8a953db178c9050d6ba8420b08ad3"],["como-desmotivar-uma-pessoa-parte-4/index.html","f9b6bce697f88c352d19ecc322a05032"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","1e8e21c04049d81feaf980e3d6c2c747"],["compactacao-gzip-com-nodejs/index.html","351d07f8136aea3a7b5583f430a573ce"],["configurando-meteor-e-velocity-no-travis-ci/index.html","21f44340cddbbfae9630f3a8833ae03f"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","2de49a9fa48cf7e405bc002e9be831c2"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","b321dd1e7aa42122cf50d49a670e1d00"],["criando-um-media-center-com-raspberry-pi/index.html","42781cf4a0b613f4bd76e0c51d9acbc3"],["criando-uma-startup-com-pouca-grana/index.html","661f49ada8f99a91ece96e68653228d6"],["customizando-build-do-cordova-no-meteor/index.html","7cbab8547309c579db93ea91c2e33c50"],["customizando-npm-init/index.html","71cf08833a3cc7d7632c377f89cc9fa0"],["deletando-arquivos-repetitivos-no-terminal/index.html","8b1a4f6a7c3570b8a74fa9f215c2b755"],["deploying-meteor-no-heroku/index.html","2308fb1473f642af8b9c0a64eb7b2575"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","e62c6eee527d9036c6b6d62b3e53eb49"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","b6812513ec2ba7f0e4c3106ff90174d1"],["design-patterns-para-javascript-parte-1/index.html","e197ca083714d41609619c9201fefe97"],["design-patterns-para-javascript-parte-2/index.html","d076bc05c8fd7a3d73b53005ad9647af"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","c3c9b57f23a24b5bb529d82a26662507"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","ce5701d69bb29680d9edf3c9407c1de6"],["dicas-de-terminal-contador-de-arquivos/index.html","a700bf42cd3c38f3740f1dc652ab992c"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","fdb6e2506763d30557d29304d6b986fd"],["dicas-de-terminal-criando-comando-alias/index.html","4581b237b40ec07a2325ee54afccafde"],["dicas-de-terminal-historico-de-comandos/index.html","b53b31e3ed266d374106b9c45c734266"],["dicas-de-terminal-identificando-meu-ip/index.html","e7fd9eb49a42c9fffc7e1b6ad941ae05"],["dicas-de-terminal-matando-processos-da-rede/index.html","b1954ef8c593130171b713cf2ac4b381"],["dicas-de-terminal-multiplos-comandos/index.html","ebe5cc34df59ea0f66ebe18d35ce54bf"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","f296a548cac3117b12344e3439ab7bd7"],["dicas-de-terminal-processos-em-background/index.html","5505ee4a166b39ee69ab739d5c567d73"],["dicas-de-terminal-trabalhando-com-ssh/index.html","efa6281f99fc615272183e6ae1777636"],["dicas-de-terminal/index.html","3cc5dc094dcaa138ff16d8263064df08"],["dicas-para-abrir-um-blog/index.html","e13e6929f9ce65837c6c842257315617"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","863887b345be8718e936435e6a0109a9"],["dicas-para-um-estagiario-parte-1/index.html","da9b90ef0baeeb4bb8f5685019683af3"],["dicas-para-um-estagiario-parte-2/index.html","54a3ded008b47c47c827989169c5215f"],["documentando-apis-com-apidocjs/index.html","c1a21483a495b0a2a44beedcefc3f4e2"],["dualboot-no-raspberry-com-berryboot/index.html","09b3f433f5c0db141fb51da0dcafdd35"],["email-weeklys-para-devs/index.html","2a8fb687054c31e49aecadd5f66a8a2f"],["entendendo-como-funciona-os-middlewares-do-express/index.html","3118a657b3de7104d9711418a0177130"],["entendendo-o-event-loop-do-nodejs/index.html","76e99f83bece9734785f06da308b849d"],["entrevistando-de-forma-produtiva/index.html","68a35b5651cd578f877582a5af4eb23b"],["escrevendo-javascript-melhor-parte-1/index.html","3977d241d5205349f77bfd7bef64bb7c"],["escrevendo-javascript-melhor-parte-2/index.html","6c027b89bfff23cd5df5addeae92ec23"],["escrevendo-javascript-melhor-parte-3/index.html","2f5c893771af074f1cb33e92928f4ab4"],["escrevendo-javascript-melhor-parte-4/index.html","ce9ff2c1c5ad44ef67024b7a55a83abe"],["estruturando-uma-aplicacao-meteor-1-3/index.html","3d0f4790dfdbb03997af3dfdea23603c"],["evitando-callback-hell-no-node-js/index.html","12a477b00029b58c0fb086cd90732973"],["evitando-callback-hell-usando-generators/index.html","64ea6e7732a4aa859ced22e2b79b72f8"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","c5cff3d98a53b09bd56f6ab2c476ddf2"],["executando-funcoes-paralelas-com-modulo-async/index.html","eadffe1480fc0ecc6379c68e8b88ed68"],["explorando-o-modulo-console-do-javascript/index.html","51de375a5d19908b55ed933155a30ba8"],["express-vs-geddy/index.html","26d5707e9518a812235fc715d7ab1bfe"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","2c5ca3283e70a57065523883c8dc6eeb"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","c0a7f191942592285297032da2d98cc1"],["frontend-moderno-com-browserify-e-babel/index.html","4f589cc8eb3f396570910e8cd4ee7fa8"],["gerenciando-codigo-fonte-com-git/index.html","f95eb6e82fec4187dd92c4565ecebad4"],["gerenciando-o-ruby-gem/index.html","46de64881e7056a1f75fa7628b821f31"],["gerenciando-plugins-no-eclipse/index.html","7abf15b95873a154f67e2bd76e806dc9"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","2133dd2a88326ff725c59d0c2cb32267"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","578be36f2926871ebe0a62aa59dc7232"],["infografico-the-state-of-node/index.html","b95f601d89e55c0aa57e242fa85e5cd4"],["infografico-what-is-node-js/index.html","513ba0b23f101a681564189ae6e2de9d"],["introducao-sobre-meteor/index.html","cbe0af3be5488c2ac8ac5bce6680a20e"],["jade-um-otimo-template-engine/index.html","bd255d0296a3c041dfadfd70bd326e05"],["lancamento-oficial-do-livro-de-nodejs/index.html","f9b05cb2552d4c9995644df3e76c9ce4"],["light-talk-introducao-sobre-nodejs/index.html","e59030fa466f9f0d54f6629c3cf149f8"],["livro-construindo-apis-rest-com-nodejs/index.html","c1aec73c086fca80f38205323b3012bf"],["mais-um-livro-agora-e-sobre-meteor/index.html","4a31d138d49c05f1eb9d8bc0832ff15b"],["mais-um-livro-sobre-nodejs/index.html","a0cbadf66cfdccf36f84580fa7e41fb3"],["manifest.appcache","a26a232f7306bd58da8f960c3dd8df9a"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","55c29a28ee44f8150fb0410cbdc11589"],["meteor-e-seo/index.html","eee46c907cfde302f1cc57ad0abf17c6"],["meteor-methods/index.html","a7d1d9131498619b711ab478405cdf0f"],["meteor-pubsub/index.html","7ba3238d52a9c4475c98425776ac9f8c"],["meteor-um-overview-sobre-a-plataforma/index.html","fedb747c8104b4af07b4c9d105cbeb94"],["meteor/index.html","f01ab312affb73b64e4589243cb726f6"],["migrando-de-windows-para-linux-parte-1/index.html","6ff3e5ce14d977c371066b543e1254d1"],["migrando-de-windows-para-linux-parte-2/index.html","353f3e26ff32786fcaaa3ddca26bc59f"],["migrando-de-windows-para-linux-parte-3/index.html","8827101715226213b160b3790891181a"],["migrando-de-windows-para-linux-parte-4/index.html","6bbbf63e600bce837aada02d9b538a28"],["modularizando-frontend-javascript-com-browserify/index.html","f1257d1f4e901fef0d3f22559033bbf0"],["modulos-do-npm-no-meteor/index.html","5c53702d8c87ef715991c2f7b5ac7a82"],["modulos-essenciais-para-nodejs-parte-1/index.html","48a44a468b15e06ad4b0f2e40f2660c1"],["modulos-essenciais-para-nodejs-parte-2/index.html","8c12bd22575f6fea6c2188c3c7394f4d"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","d323857169122fc72e3d46af1e258bd4"],["nginx-servindo-nodejs/index.html","84c72cb512784681630147ee3ea2a277"],["node-js-para-leigos-child-process/index.html","b5c526c808b0d1ebf3ef54cb760131aa"],["node-js-para-leigos-explorando-real-time/index.html","f0376cbadb55245ed1c9eff5e37efcf6"],["node-js-para-leigos-framework-express-parte-1/index.html","d9e63ea75a6a71c0a4ef479e62a5c926"],["node-js-para-leigos-framework-express-parte-2/index.html","be06a7a3891847c071066923dc67cd96"],["node-js-para-leigos-instalacao-e-configuracao/index.html","952ab9eee94663aea4efea36342974d2"],["node-js-para-leigos-jade-template-engine/index.html","77410a574e890c14d09781693bb16e25"],["node-js-para-leigos-trabalhando-com-http/index.html","b06c0e0c3aa591b519ee269479eebbf2"],["node-js-para-leigos-utilizando-api-file-system/index.html","ac395fc9f9f29d20699b123a9f86cacd"],["nodejs-criando-um-mini-chat/index.html","1dfe5fe537515632e69944dbc4cff467"],["nodejs-express-socketio-e-sessions/index.html","ff3641243765c86fc69d65afc6d8a2e7"],["nodejs-javascript-no-servidor/index.html","be94c341a9af1f84284ce15600f6ce2d"],["nodejs-ou-nodemon/index.html","bf2dd164b64ee6453e42fa8520c2338b"],["nodejs-para-leigos-a-proposta/index.html","98f9bd0cab47b2f24f1d10178d33d54f"],["nodejs-para-leigos-introducao/index.html","9cc850ebb48591b6b1234d5cd72c427a"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","9f5207b6f582147016de855e62de7533"],["nodejs-processamento-em-paralelo/index.html","b8d67c925ff143dd5d46e45b8addd8a3"],["nodejs/index.html","7cbf3e6ce70dc3c928560f8dbe271197"],["npm-node-package-manager/index.html","56073a79eca5844ddb4f67af9f13164c"],["nvm-node-version-manager/index.html","2c4f81d37ad15e1a58b4a137e60b76c2"],["o-blog-esta-de-cara-nova/index.html","6812828874b69abbf5fd67e0eb5d77db"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","cc350d032ffca6ac983fdb89b2e0013a"],["onde-hospedar-aplicacoes-node-js/index.html","ed7d303f91a7e5ed2c859a5f459755b1"],["organizando-um-projeto-meteor/index.html","f3d2228db0dc3a0963efbd184a605ccb"],["organizando-uma-aplicacao-nodejs/index.html","aa2d275a77e4fe12ce24a5cd1f126a44"],["os-20-posts-do-ano/index.html","ba1ac97da28aa8a961b998f1c34602ee"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","a1670bd3166a0151c0dfba83ebaa6e76"],["otimizando-aplicacoes-nodejs/index.html","28fd5e1c2eb92e77051dccbdf253627c"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","df96d8a8999e2fd709a1e9be181320e4"],["praticando-tdd-com-junit/index.html","1e884e393113603b6070e4e333b03d3f"],["primeiros-passos-com-express-4/index.html","21519fc45eece46d0963668a42a07c2a"],["primeiros-passos-com-meteor/index.html","6c06f605ed1e96c4e4169aa0fa6b33ba"],["programacao-assincrona-com-nodejs/index.html","778988eed41146d9efebb7ff2cbc4f4d"],["programador-produtivo/index.html","4aa5783af5b81e0570148d3a69b8b2a5"],["protegendo-aplicacoes-javascript/index.html","193d79d650d2d47da616c4f52c5587bb"],["quer-aprender-java/index.html","0f265b3476a24788e1bf38174872ebf8"],["quer-aprender-meteor/index.html","d7de9e3d0ac7827b9fe3ca7a2e8107f7"],["quer-aprender-node-js-atualizado/index.html","b0b5297875f93164d1e23e235f487e43"],["quer-aprender-ruby-on-rails/index.html","e9c87d2cb9ae56a2d4e94e1399e37ed5"],["real-time-com-socket-io-no-nodejs/index.html","f0f0641b4351efe40d18d75c0cb4b7a7"],["realtime-com-rethinkdb/index.html","3b620c18bc46bda6897893e759bad513"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","dd0461c7461bd07f30cd28629477fa2b"],["socket-io-com-redis/index.html","6c142abc9ef94931728d2aa0a44c21bb"],["split-e-join-de-arquivos-com-tar/index.html","ea77e3af80809c54f4c8b258c903343f"],["talk-meteor-for-noobs-no-devinsantos/index.html","ac9dd86301930b816c876ad3204d6183"],["teclas-de-atalho-essenciais-no-eclipse/index.html","ac344a172d3d88a8d2e6234b80837273"],["terminal-gerando-arquivo-de-texto/index.html","c64590964e0f07e3391e85400b6cfaec"],["top-20-de-2014/index.html","0d079ce8967121bd9d237e5a59efc4f4"],["trabalhando-com-multiplas-contas-do-heroku/index.html","3b2f902c501186382e34cc7f44498756"],["trabalhando-com-validators-no-node-js/index.html","3a3311846e8e5f4f9d3fb0673342dc9d"],["tunning-em-servidor-linux/index.html","4f5538491cea7ffc952f02ab302d25ac"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","c44eec30637fdfb986ae1236e65701b2"],["usando-spread-operator-do-es6/index.html","418c37fa9adbb873df0ad0109220c01a"],["validacao-com-ruby-on-rails/index.html","e3402c6e386b1c24b89a72f5e987a72a"],["vantagens-em-utilizar-sistemas-linux/index.html","a7671db0d8d5a8c1eae20d4fc9c68f50"],["video-streaming-com-nodejs/index.html","adf39f9899d8821d59ab0e25a1a952b2"],["visualizando-portas-da-rede-com-nmap/index.html","440c8b4af37a734a70bc753b2b276be2"],["webscraping-com-node-js/index.html","8c81383f20ca334fa142dde5fbdaf8ce"]];
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


/* @preserve Wed, 07 Dec 2016 22:43:17 GMT */