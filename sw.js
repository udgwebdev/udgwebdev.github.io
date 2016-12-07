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
var PrecacheConfig = [["15-javascript-hacks/index.html","c9a36c1b8142501b3224ee6bc4d5eb13"],["3-maneiras-de-trabalhar-com-node-js/index.html","c84aaf5d11490065b87cbff56c7ff570"],["404.html","044c3eb4433e5d166d3cc3cbfaac7237"],["5-motivos-para-instalar-o-arch-linux/index.html","20e45f887535cbc7c3ec4a3e804145b0"],["5-motivos-para-usar-github/index.html","bb88460c6f81e3f2e314ec37c09f00ae"],["6-motivos-para-usar-nodejs/index.html","4dd4f6cf39afab0ae0f2a79218198ded"],["8-motivos-para-aprender-meteor-agora/index.html","573d2365f749d503e58f552ed139128e"],["8-motivos-para-estudar-ruby-on-rails/index.html","b0af4569359df5ef6e8233f00e4fa45a"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","ed32ef265823f5de5525af307bf2c1a2"],["acelerando-comando-dd-no-macos/index.html","989753e4c5a15d85ec3ec90d5a163f36"],["administrando-dados-usando-express-admin/index.html","6e92adc68409c7f91e3d062a673b2fb1"],["administrando-o-leveldb-com-levelweb/index.html","0f625dfb05e2628a055ebb12586ad3e2"],["ajuste-fino-no-eclipse-ide/index.html","40279b365c432ea01c2fcfaaa7979450"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","c3dd330c887999611c13a53fb4c7d1d4"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","f6ecfca0efa444a161a229881c96d8e8"],["artigos-e-talks-fora-deste-blog/index.html","d63e9ebfd10f1740f1703d8557e3e66b"],["assets/css/main.css","4d62fb5f566454df8d582c0b8ad69083"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","a4c1e88d3c0df02a7a11cd352e2c3303"],["assets/js/tooltip.min.js","ffd37ca8dd4889e8b1f0c03b456c96cd"],["baixando-sites-com-comando-wget/index.html","6b2204d4b0e06ee9035410e8772b81eb"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","295c38aa904cd9336fa11c8071990305"],["brincando-com-leveldb/index.html","1d7e16337600643f3e8681dddaba00c5"],["brincando-com-o-template-engine-jade/index.html","3cf7037f7209003aa3e4be3d76477b62"],["brincando-de-es6-no-meteor/index.html","744ac7baeabcb44a0a8b87cab56c92d4"],["como-desmotivar-uma-pessoa-parte-1/index.html","0ee4beaa23b7e4c9b298c7caccb24c66"],["como-desmotivar-uma-pessoa-parte-2/index.html","4a35ef6989fa9cc82f2de15564896cd2"],["como-desmotivar-uma-pessoa-parte-3/index.html","296bd82dc298dd8b199ff7a738c61a23"],["como-desmotivar-uma-pessoa-parte-4/index.html","f7642dbeafac647658255ffaf4b346e1"],["como-obter-conta-bancaria-estrangeira-sem-sair-do-brasil/index.html","43bd2f7b62fa4830f25ae9c310a96c3f"],["compactacao-gzip-com-nodejs/index.html","cd3aedbeb3366158463afeb106e53a02"],["configurando-meteor-e-velocity-no-travis-ci/index.html","1bc66fde269ec45e6f1c63ab6e19daa3"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","03c1381bc57f752cadf6d79a01976d52"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","d3d3e0935ca423ad5ace3e9376430289"],["criando-um-media-center-com-raspberry-pi/index.html","9133babafe0d8c9a6c796040f75806b6"],["criando-uma-startup-com-pouca-grana/index.html","27e04c091fe309e1e859156f2891cc3d"],["customizando-build-do-cordova-no-meteor/index.html","c37bb1358fc7fd2139dd12fbdbd4f4e2"],["customizando-npm-init/index.html","77322b8da28623514d28213c6d3efee4"],["deletando-arquivos-repetitivos-no-terminal/index.html","b227372a2e96290d932bb30c443a99ef"],["deploying-meteor-no-heroku/index.html","1215f6b6c7512f5f2fbe9bdec97a4aa0"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","31772f9b85dd2766f1f6df0143b3eeab"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","08c3588bffae29a9e95cb997826b15e0"],["design-patterns-para-javascript-parte-1/index.html","9369006003bf5d29bae32551abeda24e"],["design-patterns-para-javascript-parte-2/index.html","1bff8f6c9fc79f233235fa5108dfaecd"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","51ba76388af0d950f8a000a77d5c1133"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","b18074e921a0a587b8c038d85991cf54"],["dicas-de-terminal-contador-de-arquivos/index.html","96148e101e7feb8fda770675422accaa"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","b980c271bb07bab659368f5b5773ca54"],["dicas-de-terminal-criando-comando-alias/index.html","f6b88ef322c45efd5f2b3d2180656c75"],["dicas-de-terminal-historico-de-comandos/index.html","ee2d156433a98a3c7d53e7ab792b6936"],["dicas-de-terminal-identificando-meu-ip/index.html","f563cbebd0b1ba1da3936b257ba4c849"],["dicas-de-terminal-matando-processos-da-rede/index.html","f7976e77d93b5ab061cca90d036d6d83"],["dicas-de-terminal-multiplos-comandos/index.html","99e9db30f68ff4ae7615da8b7e28c739"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","fe7d77fdaea6adf3577a4409d82b2be1"],["dicas-de-terminal-processos-em-background/index.html","993fb31ebf095d2ec8279462545b4405"],["dicas-de-terminal-trabalhando-com-ssh/index.html","b7da0b355f10a6d0f253356f86336d4a"],["dicas-de-terminal/index.html","f99f1a9bbd6c835f4d73433fb0b3f0ef"],["dicas-para-abrir-um-blog/index.html","02639c39fb60c69b6313aef6bc08016e"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","244ac99cefa5e8ca29dcf1456d9c77dc"],["dicas-para-um-estagiario-parte-1/index.html","95e5ec635b83d5637d53cf1290454a47"],["dicas-para-um-estagiario-parte-2/index.html","2100e7dc93207129032b708b016f98aa"],["documentando-apis-com-apidocjs/index.html","e9072db7339a0fc25bb70ae93655f637"],["dualboot-no-raspberry-com-berryboot/index.html","a1c022e7d7480b90cc9dcd165cb39d14"],["email-weeklys-para-devs/index.html","8265bf08c5a6a60d88bdd25cf26b13dc"],["entendendo-como-funciona-os-middlewares-do-express/index.html","328f047c18a7839ce3118a24144ba71f"],["entendendo-o-event-loop-do-nodejs/index.html","065711d3b514cb524144813a738926d3"],["entrevistando-de-forma-produtiva/index.html","8ddb6ca1ad5a0fdee67207eface01e9f"],["escrevendo-javascript-melhor-parte-1/index.html","7237a9667d61035d06d9b1b8059463f7"],["escrevendo-javascript-melhor-parte-2/index.html","b32035db1ed2a909bd05deb3ebe837af"],["escrevendo-javascript-melhor-parte-3/index.html","9ce88bb9e6c978a0cdc14773310ede7b"],["escrevendo-javascript-melhor-parte-4/index.html","feda0e8c4f1bdfe20e722a121d067a21"],["estruturando-uma-aplicacao-meteor-1-3/index.html","a98d76c3ef201ed48687884572632fd5"],["evitando-callback-hell-no-node-js/index.html","159f914e32f11ef669d2203f89be8903"],["evitando-callback-hell-usando-generators/index.html","6d4a854d1c87e83b057886eaab866073"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","a52a18cc6e88899b591530b238c8f2e0"],["executando-funcoes-paralelas-com-modulo-async/index.html","a8e6f3d25466992ee4d46b7e0555888f"],["explorando-o-modulo-console-do-javascript/index.html","e846436a898c336d98b43950969d9976"],["express-vs-geddy/index.html","493d95c1e5d798ce53a48e15e8fc8781"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","14b1fa67e9635d2d2de35588c47973e3"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","802cfe9b517b569fe766d49904e3a920"],["frontend-moderno-com-browserify-e-babel/index.html","24a3a4f604a7b52c01861bda1620f588"],["gerenciando-codigo-fonte-com-git/index.html","3ff3edd73cdc834c723348b2ac000837"],["gerenciando-o-ruby-gem/index.html","ac8ea4f3f4d407283eef5cabe3c392c5"],["gerenciando-plugins-no-eclipse/index.html","9cdebc3d0f423394a1d85760289540a7"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","34b763343c3c12cb8a5c47c51e1a3b9a"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","cd747665de12187a1fc8cdaa3b166e78"],["infografico-the-state-of-node/index.html","88ef031d0a572c9955d3361590853adb"],["infografico-what-is-node-js/index.html","b8d37a06e8b1f0782bb611c577d7d358"],["introducao-sobre-meteor/index.html","4f68e0dd4a24c416bf5e045819890961"],["jade-um-otimo-template-engine/index.html","e1fdd232cf0aed2041dffa8d33e7dab9"],["lancamento-oficial-do-livro-de-nodejs/index.html","adc068d22a00a8295410e9226e429425"],["light-talk-introducao-sobre-nodejs/index.html","b42979b8cb85d853ed0c4e763b029d1d"],["livro-construindo-apis-rest-com-nodejs/index.html","3b062eab4fd7d2a387709a5ba79e2de1"],["mais-um-livro-agora-e-sobre-meteor/index.html","c6700715bebdc911dfceafdbd71655cd"],["mais-um-livro-sobre-nodejs/index.html","7b66f17515383af1d7552f1fafe5f6ac"],["manifest.appcache","b4f897230718f5d2590ff4932f1f042e"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","92cafb0e60ad51c59543a5ce7498cad1"],["meteor-e-seo/index.html","281760511bdb8000936beb5b74d107ec"],["meteor-methods/index.html","ac2d2157b48e41c9768362d741d621c6"],["meteor-pubsub/index.html","2a3652df589c4087b816a821c8b9cf03"],["meteor-um-overview-sobre-a-plataforma/index.html","1eee0c19d435faaa71785d042cce4bbd"],["meteor/index.html","0f1b9837d9b305609598549837b2e067"],["migrando-de-windows-para-linux-parte-1/index.html","4311348e4571fbb6d9efd4a4aca72209"],["migrando-de-windows-para-linux-parte-2/index.html","5b4e05b22af6fff95d36ce2e21b96bf9"],["migrando-de-windows-para-linux-parte-3/index.html","48bcad527698d2196e853050b971f309"],["migrando-de-windows-para-linux-parte-4/index.html","c38c3ed72f4cdf228d1f5c123b394524"],["modularizando-frontend-javascript-com-browserify/index.html","5dba82d7ae0498d86cd0136e01dad752"],["modulos-do-npm-no-meteor/index.html","8851d38644a0668fe138ada0c7dc5678"],["modulos-essenciais-para-nodejs-parte-1/index.html","a636b5b53e76b93555c3d72fe1b1bd75"],["modulos-essenciais-para-nodejs-parte-2/index.html","fc56a04fd0589dd1450cb2d44a8fef97"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","42ed87bd8896c6e916780d2fcb2fd88a"],["nginx-servindo-nodejs/index.html","62be883fe3167c36cb5542fc1b3063e4"],["node-js-para-leigos-child-process/index.html","fa03a3aa446692b0502bc360c3de0b62"],["node-js-para-leigos-explorando-real-time/index.html","8222fee6f3200214d55dbc55c30b3500"],["node-js-para-leigos-framework-express-parte-1/index.html","46e8875cd47ac4c974bd9174a99e3ed9"],["node-js-para-leigos-framework-express-parte-2/index.html","c4934100724f49a5c42aca443408ea00"],["node-js-para-leigos-instalacao-e-configuracao/index.html","85a1c88ae14e31b8f625678ec2a511ca"],["node-js-para-leigos-jade-template-engine/index.html","42e579f10883a3fe9f2f3f610a59bd9b"],["node-js-para-leigos-trabalhando-com-http/index.html","2522073bd67d331bcd10f125efcebe76"],["node-js-para-leigos-utilizando-api-file-system/index.html","beb6001586f953aca772911d5b989817"],["nodejs-criando-um-mini-chat/index.html","79af09c50b1932a3af47a32b54f0a43f"],["nodejs-express-socketio-e-sessions/index.html","dcc18400dae52118eef62d423f914393"],["nodejs-javascript-no-servidor/index.html","f7e58e163a4f9de9ef389d4506bbdb00"],["nodejs-ou-nodemon/index.html","73d0dedba4a56a9c864677f79a528dc1"],["nodejs-para-leigos-a-proposta/index.html","fc5692e54977d015ffaeee52e93f5bed"],["nodejs-para-leigos-introducao/index.html","01ce2552e3aca0cf3765faa7a43c5b1d"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","32b868983a3e68a5d084a9f74934aa6d"],["nodejs-processamento-em-paralelo/index.html","2f716d21364548f9f98086d36ae7dce6"],["nodejs/index.html","252d2771944b14bc8bf196bde4d3d766"],["npm-node-package-manager/index.html","4caf8f2c94add96007785c87e47d210a"],["nvm-node-version-manager/index.html","efdb5a2cd92f24904ea1d6a0e3e90a3d"],["o-blog-esta-de-cara-nova/index.html","668b6375df61d1f3331842bd53a084d5"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","fc67880c755498ac332c5b0394cae226"],["onde-hospedar-aplicacoes-node-js/index.html","90b791cf57deaf5804a0ca5c686b96fd"],["organizando-um-projeto-meteor/index.html","f5be89248ab7a1a183115aba0c903cab"],["organizando-uma-aplicacao-nodejs/index.html","a14c8b11041fe7bcfdc678b07257f39a"],["os-20-posts-do-ano/index.html","50d1f702d75f2a3de1f71ab8a463399e"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","72e1edaf41b4586f69fb2d6df765e8fa"],["otimizando-aplicacoes-nodejs/index.html","3fa9c8b71a1ff97f0b70ee0fbb5917ef"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","9a3687ef260a9e4230fadbc3c22bd8ee"],["praticando-tdd-com-junit/index.html","d26a92e2544fb861a6563088507251c7"],["primeiros-passos-com-express-4/index.html","1ee7d6eb9d3859e9a2baf9ae0e6fba7b"],["primeiros-passos-com-meteor/index.html","8479412ec828f6be84492624dec28f5c"],["programacao-assincrona-com-nodejs/index.html","de6831cd05b671d230481919160b29b8"],["programador-produtivo/index.html","9541af1cc1219159e57c3914024bf81d"],["protegendo-aplicacoes-javascript/index.html","17f1e34906015904e386f17f654b04ec"],["quer-aprender-java/index.html","fc9aaabbe57434e90851e6b063dd4766"],["quer-aprender-meteor/index.html","ade1456efa3c3f784e66b83b62dea22d"],["quer-aprender-node-js-atualizado/index.html","9ae4857f696054211c3e8a6ffb41dfc3"],["quer-aprender-ruby-on-rails/index.html","8e072afa6a418f50c54536f9db1ecea2"],["real-time-com-socket-io-no-nodejs/index.html","8b2881bb7514dc02352c7715f4fda26b"],["realtime-com-rethinkdb/index.html","c9f8a7f799c941d9789895b5576c35d5"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","c1206970cc915523d345b3d24c43ea00"],["socket-io-com-redis/index.html","679915a99ae1936a92f94a3b7c5446ed"],["split-e-join-de-arquivos-com-tar/index.html","8fb4fa7585fe8f59be74130b8d5acb19"],["talk-meteor-for-noobs-no-devinsantos/index.html","406dc75e2b35f11fc6a7f39586d5e904"],["teclas-de-atalho-essenciais-no-eclipse/index.html","244d7f6508e1460795813decd00cd043"],["terminal-gerando-arquivo-de-texto/index.html","484af1df3cfdb27b11e9662eb47b938e"],["top-20-de-2014/index.html","ed80d5b4a8c8bf72edaed994101c54cc"],["trabalhando-com-multiplas-contas-do-heroku/index.html","57ebf039848b5e8470007c814a05113d"],["trabalhando-com-validators-no-node-js/index.html","2b5911928b75154a46fd83374762e443"],["tunning-em-servidor-linux/index.html","ca2c0bf17e43297315071aad34ae8d04"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","79fbe48ad77aaa7396f0a79db40c128e"],["usando-spread-operator-do-es6/index.html","7b26e6387c68d855fb3eb2993e264401"],["validacao-com-ruby-on-rails/index.html","c597ea01f05567ebbde4afa1b633d028"],["vantagens-em-utilizar-sistemas-linux/index.html","f4bb352ef00806e404628833c33b7808"],["video-streaming-com-nodejs/index.html","8d2f0a5eba595497a2b37ed831b7033b"],["visualizando-portas-da-rede-com-nmap/index.html","adf46f40c7647c88fb329b7c4db97b5d"],["webscraping-com-node-js/index.html","8b427b7783667dca2ab20a088310a1bb"]];
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


/* @preserve Wed, 07 Dec 2016 17:47:48 GMT */