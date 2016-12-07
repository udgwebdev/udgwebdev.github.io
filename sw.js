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
var PrecacheConfig = [["15-javascript-hacks/index.html","61fc7ef670d3fe3d1680c84262d3f04c"],["3-maneiras-de-trabalhar-com-node-js/index.html","695c5a16f23c33c24c2093e8efb6ce16"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","ea4e17703427c00d0338d5ef5bccbe7a"],["5-motivos-para-usar-github/index.html","03e30a2ce31be35503988cc000988be4"],["6-motivos-para-usar-nodejs/index.html","9f74d3f6922668929b3713cee3d56548"],["8-motivos-para-aprender-meteor-agora/index.html","fd80cd8dbd89dc18e30630ae89ef63b4"],["8-motivos-para-estudar-ruby-on-rails/index.html","ace494699954fa6762b6e95338206892"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","be0651e44b750cb666b1fb8dbd651c64"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","b27d82a73593a10cb20fc43be6281013"],["administrando-o-leveldb-com-levelweb/index.html","b5907bdf259af45c6302349236c629b1"],["ajuste-fino-no-eclipse-ide/index.html","03476464b9d39f751036482a5e9bbf77"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","595b5fab12eec424f4c17783537a02b2"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","a79f6c8937139ea109bc0b4bd11e19bd"],["artigos-e-talks-fora-deste-blog/index.html","0654293598d8972eabc29f4223b2c97c"],["assets/css/main.css","80e83be56703eb1816757b302c2386c8"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","843d7ce6c324b4709293fdda2c684867"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","0f230e888115e990171a36d96398377b"],["brincando-com-leveldb/index.html","ce5d7a6b972ec59637462d5a383559d0"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","d5c3f6a4eca1217f4f37069243def787"],["como-desmotivar-uma-pessoa-parte-1/index.html","f96686e25e93fa094c8b148daa094fa1"],["como-desmotivar-uma-pessoa-parte-2/index.html","d78895034a3750fe8542e7fbb794009f"],["como-desmotivar-uma-pessoa-parte-3/index.html","63f3be04c9817b0c539aed762cc16354"],["como-desmotivar-uma-pessoa-parte-4/index.html","1067a25f717e9268acf17da8b7673fa2"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","43bd2f7b62fa4830f25ae9c310a96c3f"],["compactacao-gzip-com-nodejs/index.html","8810a0e3ec299cb1ac04e47618ab5f9d"],["configurando-meteor-e-velocity-no-travis-ci/index.html","83538d5a7c33c1ed835d37824c6b596a"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","7c030d8210e04d761c76fda22223b9b5"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","1b56ed02ffbb2f5296b428d1705bee5e"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","5013e18e05b9521a2a9b633e06fc6cd5"],["customizando-build-do-cordova-no-meteor/index.html","e1035e2365e68c5581295d30c697cd17"],["customizando-npm-init/index.html","7276206d4ce989d9627c3f248bff15e4"],["deletando-arquivos-repetitivos-no-terminal/index.html","69b729b374ca0ac6265dd100d7ba0885"],["deploying-meteor-no-heroku/index.html","66703fc65badd612ea0bb5b94c6af5f1"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","f5a0376524d80dec43fc5de01937cacb"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","23eb2ed22395ac6d4c1c8a70c92451f9"],["design-patterns-para-javascript-parte-1/index.html","5b597c82c666d742fe6074461a57fca9"],["design-patterns-para-javascript-parte-2/index.html","a53f88f5c66396da9e1be41da49c109c"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","c9fa2a6f38f1497b873d534167ebe1df"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","3a9994e925718c64fb4632aa81986506"],["dicas-de-terminal-contador-de-arquivos/index.html","5d28f31e0bc6cae3c3132d4c6142ca57"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","5ee29143d672a507ffd749bf2fc59b4c"],["dicas-de-terminal-criando-comando-alias/index.html","f4637038b8f9292530407caaec7075e1"],["dicas-de-terminal-historico-de-comandos/index.html","d1f4d97a9bfbd3a2178ae22ae7980cb8"],["dicas-de-terminal-identificando-meu-ip/index.html","8e969adb3d84f1c88047251a5d31f83e"],["dicas-de-terminal-matando-processos-da-rede/index.html","bf29a00c7c2a806b996cd60444dc581f"],["dicas-de-terminal-multiplos-comandos/index.html","cb8965b5ada585ab03199f95274a5b11"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","1b6664c5f67013280d4ef2ce44469e86"],["dicas-de-terminal-processos-em-background/index.html","0a8216ebaae24a7e85077f325d527501"],["dicas-de-terminal-trabalhando-com-ssh/index.html","7a79d2e291db7ca79b9837b91fd56afd"],["dicas-de-terminal/index.html","91e642f2a8ab169a98802d2b642b8e21"],["dicas-para-abrir-um-blog/index.html","8abff670c29611dc7b423d9994eb5d84"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","60112a8580f73ae96a76bdf9567e3842"],["dicas-para-um-estagiario-parte-2/index.html","f292aa5387a32e29c695a1c21bbaecc2"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","4afd8f73c5cdd249a21890ec5402da9f"],["entendendo-como-funciona-os-middlewares-do-express/index.html","b5f4d1c9267510ac91f2e1fd190454f7"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","2ae5a9ad5a77cc531bcb76a91e451f77"],["escrevendo-javascript-melhor-parte-1/index.html","0b724297ae904a2a2d711faa951a3af8"],["escrevendo-javascript-melhor-parte-2/index.html","9f8f322c2ecfa2bbf4a379cad0bb8b83"],["escrevendo-javascript-melhor-parte-3/index.html","fa3746688a0f202286e70f6f8eb6319e"],["escrevendo-javascript-melhor-parte-4/index.html","407e9fd7b6bb2df2fea7287fbff56e31"],["estruturando-uma-aplicacao-meteor-1-3/index.html","73a1f67629de413819856e99c4add8bc"],["evitando-callback-hell-no-node-js/index.html","31152393be00fff1c8c6c5f23d949d27"],["evitando-callback-hell-usando-generators/index.html","f8a5bc2b7eabdeda4fe551c9a7a68e07"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","6ac48fc24d138d23c1c56304fe9031e3"],["executando-funcoes-paralelas-com-modulo-async/index.html","4c4054ab135b5be43a57af0085e15c7b"],["explorando-o-modulo-console-do-javascript/index.html","705dfe55008a1692b3e7b95d0707ef67"],["express-vs-geddy/index.html","68fba85d868ff4a82fc77883db18f5a0"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","5bf87031ec9fbcfba8fe74fbc8f64ed5"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","d67e9e38a3c947a032c8ff3dac0f2b15"],["frontend-moderno-com-browserify-e-babel/index.html","879db761566cc9d75cf878965d903af2"],["gerenciando-codigo-fonte-com-git/index.html","51162f9359d803840bc745ddab4bf67b"],["gerenciando-o-ruby-gem/index.html","cccb5a85f946d3c9038f58e883a1e820"],["gerenciando-plugins-no-eclipse/index.html","c784091f9a1867c640bef2719c989add"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","86353d94b3a222916de772dfaec59427"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","cd747665de12187a1fc8cdaa3b166e78"],["infografico-the-state-of-node/index.html","08caf54ada040b92e0b149fd9926d47a"],["infografico-what-is-node-js/index.html","9845895ce85f54cca4fc64630845169a"],["introducao-sobre-meteor/index.html","c9511cf92a5f0d906500b1498307a2d4"],["jade-um-otimo-template-engine/index.html","8656298371999c2d29722c56ff45c07c"],["lancamento-oficial-do-livro-de-nodejs/index.html","ef3835598065d5b0b0daef7fed808b8b"],["light-talk-introducao-sobre-nodejs/index.html","2447ecb610d8a02c266e37b25c276539"],["livro-construindo-apis-rest-com-nodejs/index.html","74354937de00a0a045b4ef659db34bbf"],["mais-um-livro-agora-e-sobre-meteor/index.html","9d2db323c4535f8edd97b0e5fa36aab3"],["mais-um-livro-sobre-nodejs/index.html","0bfac3ea4ec257255050df2eeff82433"],["manifest.appcache","130413aa1105c151b7aa2a2724899d70"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","92cafb0e60ad51c59543a5ce7498cad1"],["meteor-e-seo/index.html","b25e227357d666c62ebbcc4cbe270888"],["meteor-methods/index.html","d5cda771014b5cdd7f5904079f6001dc"],["meteor-pubsub/index.html","127620df291765bda021a23ac3bc9e60"],["meteor-um-overview-sobre-a-plataforma/index.html","04df36566d3565cbaba9308fa80b9145"],["meteor/index.html","b2ba98b37e84b09f2faca09627877d0e"],["migrando-de-windows-para-linux-parte-1/index.html","5cb46676a5f2f94d27207bc2629e3daf"],["migrando-de-windows-para-linux-parte-2/index.html","aa95b6f14783ca7f573697f7a62bc8ee"],["migrando-de-windows-para-linux-parte-3/index.html","1b326610d845fd44b45ec186d6e4c81b"],["migrando-de-windows-para-linux-parte-4/index.html","b3b3c493464fef8df121b41ed4d9bf91"],["modularizando-frontend-javascript-com-browserify/index.html","6cfc6d922526c438afc1c2ddccb9011c"],["modulos-do-npm-no-meteor/index.html","0e10ddc9e21f96fb38c1cac2fd9e9847"],["modulos-essenciais-para-nodejs-parte-1/index.html","12a518e0ba0f3bdbaa29bf7c18291449"],["modulos-essenciais-para-nodejs-parte-2/index.html","276c04b8a72a23b126cfa4fa7db1edfb"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","bbe170e7e6a460185cadbac67c678bb9"],["nginx-servindo-nodejs/index.html","584b045b941ed2f20826e947aeecb46a"],["node-js-para-leigos-child-process/index.html","b74f6ccaad97bf6d71f36bd53516a0ac"],["node-js-para-leigos-explorando-real-time/index.html","3b03b816a4254c1be0c29425f61ce897"],["node-js-para-leigos-framework-express-parte-1/index.html","72ee2b8be1d64e0ef6f54fb4176c85ba"],["node-js-para-leigos-framework-express-parte-2/index.html","a8098ad3997f44d4acb6923b63ecb75a"],["node-js-para-leigos-instalacao-e-configuracao/index.html","496b06184b3d2766208478e66cc11dc9"],["node-js-para-leigos-jade-template-engine/index.html","d3640790e0ae3dc9325d044a0a80d421"],["node-js-para-leigos-trabalhando-com-http/index.html","f030e8d7ded20cc212ce75b029d86ffa"],["node-js-para-leigos-utilizando-api-file-system/index.html","6bff5f80262f0b92b0b18e73095d5d6b"],["nodejs-criando-um-mini-chat/index.html","e699c391c93ed2c2c09040a345b491be"],["nodejs-express-socketio-e-sessions/index.html","eb80cb3af30900d43ddf8fe49255fea9"],["nodejs-javascript-no-servidor/index.html","32058bc32ff1399bb109482fe6ee86d1"],["nodejs-ou-nodemon/index.html","f05cbaea0ed0e6bd0f106f3121e18c8c"],["nodejs-para-leigos-a-proposta/index.html","00ce73c90968346585a8a55d4db26513"],["nodejs-para-leigos-introducao/index.html","dd7b4bd4e4373cc5db18068d9add5449"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","88ebeeb41a583e77156b02eabf4d7bea"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","aa79e10b106274877013ef03bd20d560"],["npm-node-package-manager/index.html","e2b718e1371dfcbbc45d60b71c73d8e4"],["nvm-node-version-manager/index.html","0573ef1f07d3906c15f005f85a2466c3"],["o-blog-esta-de-cara-nova/index.html","88f1cbb5b1639e884f250ad75d654a82"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","76d08eedd32b7450123f22fee8a53a47"],["onde-hospedar-aplicacoes-node-js/index.html","f0277a51055432d56fb0cd98d317062c"],["organizando-um-projeto-meteor/index.html","ded3ec5e11083dbbde8efe2855b8770a"],["organizando-uma-aplicacao-nodejs/index.html","aa49700f23ad6c4bc5648cb1e777730f"],["os-20-posts-do-ano/index.html","2f0df46408dec4cefc81941df27b810a"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","cdbb0dcfb208fc0f29820a8c849e34ef"],["otimizando-aplicacoes-nodejs/index.html","d9affe56fd17e2fca753f96082367ab6"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","bd8189b599c4f9cab5d4a85ac8722386"],["praticando-tdd-com-junit/index.html","c233b6cf6530c9b729b347a25f4d7d8f"],["primeiros-passos-com-express-4/index.html","e23c72474a5387de3ed0a095b09cafcb"],["primeiros-passos-com-meteor/index.html","92ec308c71e0fce9f10452e40b4be0aa"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","0ed28f6cfbc561ec009e64dd431924ad"],["protegendo-aplicacoes-javascript/index.html","2262c435f70fdd0fa4f6cdd1c9571950"],["quer-aprender-java/index.html","f1748e2442e37b524c467c572fbf0aa7"],["quer-aprender-meteor/index.html","9e20cabe5986eef2cc6beb084bbef472"],["quer-aprender-node-js-atualizado/index.html","928cef2a3a30dd2bdc14de8b3ae87422"],["quer-aprender-ruby-on-rails/index.html","e69aa8e976d8e93370e508e0ec0e11f3"],["real-time-com-socket-io-no-nodejs/index.html","b824f2558b623884ce5121ed840de04a"],["realtime-com-rethinkdb/index.html","b66cc27a2b6c88a2f4785cb0719dc54b"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","27d24e76a27a72aceeda182a6d9bc328"],["socket-io-com-redis/index.html","2cb6df496d17397adc2187f335e56d80"],["split-e-join-de-arquivos-com-tar/index.html","dfec5a7de87421e7695699a9810f93b0"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","2e6f53052b40ce4b2f7e87637ee2c435"],["terminal-gerando-arquivo-de-texto/index.html","b4debc6d69d7a429acb51cc3d45f7579"],["top-20-de-2014/index.html","4c4831ce6cfd672bfef68cb44341f666"],["trabalhando-com-multiplas-contas-do-heroku/index.html","9803474878e95375c70498e01764d47a"],["trabalhando-com-validators-no-node-js/index.html","d959d6238f3242be68ac1e7e1332dbcc"],["tunning-em-servidor-linux/index.html","5fce9edf3811ff71bfdc2e0ca0b708c1"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","b5fe9dd63d00edbcc1c4458a5cc6c241"],["usando-spread-operator-do-es6/index.html","55edf82798822c887e9efdd2f47b73a6"],["validacao-com-ruby-on-rails/index.html","8e1e1ecc9d9a2153d4499153139e3b35"],["vantagens-em-utilizar-sistemas-linux/index.html","01272c583bafc76d7b092fd82dd865e7"],["video-streaming-com-nodejs/index.html","d9ecf95710a4bf15d7a6e017d14bd1bf"],["visualizando-portas-da-rede-com-nmap/index.html","93e1650a06ae0cf92cd7997fba4b1d5a"],["webscraping-com-node-js/index.html","bd701da08672351343eee47c64ad323c"]];
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


/* @preserve Wed, 07 Dec 2016 12:38:12 GMT */