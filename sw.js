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
var PrecacheConfig = [["15-javascript-hacks/index.html","e75d42c6d437cea6965bee950fecf889"],["3-maneiras-de-trabalhar-com-node-js/index.html","c8de6edceb872d22b86d945b08106a8e"],["404.html","90e751f95085ef7a352cff7e859e30d0"],["5-motivos-para-instalar-o-arch-linux/index.html","3e6a2fb6bbc745082835bf360073d5c4"],["5-motivos-para-usar-github/index.html","ded32dd999b1d10436223a9848355a17"],["6-motivos-para-usar-nodejs/index.html","062cffb908a32b03ba1c89241d4c9a40"],["8-motivos-para-aprender-meteor-agora/index.html","25379ffdceaa2ee2963da8653843d8a9"],["8-motivos-para-estudar-ruby-on-rails/index.html","e127d5372f753b22fba1945c6df06c73"],["a-historia-desse-blog-e-o-que-vem-pela-frente/index.html","a8317972fe6205cec432ba764cd85cab"],["acelerando-comando-dd-no-macos/index.html","3ccfdf502eb4f784309626d6c42d2ac3"],["administrando-dados-usando-express-admin/index.html","068ff4f9e58a232edc4b6209d8822324"],["administrando-o-leveldb-com-levelweb/index.html","a78c8e43897e6bee977e76488f2ee67d"],["ajuste-fino-no-eclipse-ide/index.html","c8c17be88e59f0f37b1a6f521db33bee"],["aprendendo-um-pouco-sobre-terminal-parte-1/index.html","3711bcfafdb395d94b7577f390b35b98"],["aprendendo-um-pouco-sobre-terminal-parte-2/index.html","c9f1f55efe0e531e77b623a82b85dcb9"],["artigos-e-talks-fora-deste-blog/index.html","694b4d6e911560132b96234d81ef347b"],["assets/css/main.css","f8f8c9e58f1bbd08c2fcbdc263215da5"],["assets/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/js/circlemenu.min.js","79e3b8554e93591e8d171714aaf8fb18"],["assets/js/main.js","39ec7d93c470572d9c4f2e3b5995fa25"],["baixando-sites-com-comando-wget/index.html","8157d9323b38fa914ad7869eb4be2378"],["brincando-com-estruturas-imutaveis-usando-immutablejs/index.html","c1e2349c87aecb62bb25dbaf944fef94"],["brincando-com-leveldb/index.html","eb63f3844de88de03d1b73aab2d9820e"],["brincando-com-o-template-engine-jade/index.html","88af9137dcbf9762d51885807db2c821"],["brincando-de-es6-no-meteor/index.html","d2cc197bc989b60bd7dfa0ce6f5c3e08"],["como-desmotivar-uma-pessoa-parte-1/index.html","79cd49d514d9ff556f79cb74a598d0ab"],["como-desmotivar-uma-pessoa-parte-2/index.html","20663132504c3452944d810e9e0099e5"],["como-desmotivar-uma-pessoa-parte-3/index.html","fc2ef43c822a941277fcaf14c65fd338"],["como-desmotivar-uma-pessoa-parte-4/index.html","bd2349af068ba2613bf5ad4003176434"],["compactacao-gzip-com-nodejs/index.html","6bf04795f45a4b61772986556c19f21a"],["configurando-meteor-e-velocity-no-travis-ci/index.html","23615f9435d61da77f51c012df7fb90e"],["configurando-mobile-icons-e-launch-screens-no-meteor/index.html","87d4ab2fabfccac2d4f957e2888db56f"],["criando-um-chat-usando-session-do-express-4-no-socket-io-1-0/index.html","6c2ec76b45d2cc5611ce950369bd8bef"],["criando-um-media-center-com-raspberry-pi/index.html","21e95077acf3ae8f3e3580d99664128b"],["criando-uma-startup-com-pouca-grana/index.html","e68ecc1abf28b2fd63af9473576bb0f8"],["customizando-build-do-cordova-no-meteor/index.html","c1d72c8d8560f42932cd0f33f158f6d3"],["customizando-npm-init/index.html","5c135b2c07f73dc269dcd0d36da200f4"],["deletando-arquivos-repetitivos-no-terminal/index.html","945849d40984ba0172910e4732a44435"],["deploying-meteor-no-heroku/index.html","2a19040dd4637c1a4f6bca3d464377a1"],["desenvolvendo-um-sistema-web-do-zero-parte-1/index.html","7cf150799e358c462095f1871635361b"],["desenvolvendo-um-sistema-web-do-zero-parte-2/index.html","10c5c84c66e864c7f47726989971ca59"],["design-patterns-para-javascript-parte-1/index.html","02c17747ee9e13d8d119bd2bd8e449cf"],["design-patterns-para-javascript-parte-2/index.html","43edad58708bcc324fef2066e3844857"],["dicas-de-seguranca-para-aplicacoes-meteor-parte-2/index.html","be024a9da92c300dc297f180e2db80af"],["dicas-de-seguranca-para-aplicacoes-meteor/index.html","c5e5ff06ead6f4fc30d01e930a8fba4f"],["dicas-de-terminal-contador-de-arquivos/index.html","c07573b88612fd9737f06c2152824755"],["dicas-de-terminal-copiando-arquivos-via-scp/index.html","c197ddb9b77f673fd3251670f7b93eab"],["dicas-de-terminal-criando-comando-alias/index.html","55b35bade51ba03a7cc35ba59bd8b8de"],["dicas-de-terminal-historico-de-comandos/index.html","0d561806bdf2bcb794a85c19143620e9"],["dicas-de-terminal-identificando-meu-ip/index.html","affad981955d857f878fcb445dc7757f"],["dicas-de-terminal-matando-processos-da-rede/index.html","2082bfffdac7ccd7e25df81e1cc408c3"],["dicas-de-terminal-multiplos-comandos/index.html","980070ebfe4c3aa96eec0f8bcf329f1b"],["dicas-de-terminal-processamento-paralelo-com-xargs/index.html","7f328cc469fe7723770656ce9d8b599d"],["dicas-de-terminal-processos-em-background/index.html","d8a547476fdb8de9fe6410e53cf787cf"],["dicas-de-terminal-trabalhando-com-ssh/index.html","92c58bb92b8cd75095b9460c665c0080"],["dicas-de-terminal/index.html","b1a0b70613041206ec12b878527d4f61"],["dicas-para-abrir-um-blog/index.html","1caf15be39516844a4f9b3c465f1e23d"],["dicas-para-conquistar-um-bom-trampo-de-ti/index.html","c38ae1fd7a4bcff5980b2f85b505ccd4"],["dicas-para-um-estagiario-parte-1/index.html","a28d02be34bb93110b2aec66965317fc"],["dicas-para-um-estagiario-parte-2/index.html","a2060169d64b42e3b1c124b68663e3ad"],["documentando-apis-com-apidocjs/index.html","2c4619c9d5d99a809a62866157d0ac09"],["dualboot-no-raspberry-com-berryboot/index.html","43e0e3291c33237278618f297d8be9eb"],["email-weeklys-para-devs/index.html","531e6ec24ea4b289a775aadc4315948e"],["entendendo-como-funciona-os-middlewares-do-express/index.html","d4409d820d2d58b221411f62d1f52a0f"],["entendendo-o-event-loop-do-nodejs/index.html","24d25213f757303504c05a654f60c7e4"],["entrevistando-de-forma-produtiva/index.html","e05a6f35e64e99f1c7faa0cabf5c0178"],["escrevendo-javascript-melhor-parte-1/index.html","ee0988c19339f9e4b8226dba315b6ef7"],["escrevendo-javascript-melhor-parte-2/index.html","ff5f6c5a66de763b427d150a3356a0ee"],["escrevendo-javascript-melhor-parte-3/index.html","a2c987659669b39e7fddf26fa7852985"],["escrevendo-javascript-melhor-parte-4/index.html","6ae858f1f1d378f0a5178d86a982bea5"],["estruturando-uma-aplicacao-meteor-1-3/index.html","9ce9d83dd58ee80fff9d5a32d2a21c47"],["evitando-callback-hell-no-node-js/index.html","c7d0ad6aeb5df6c826f857e904580c3c"],["evitando-callback-hell-usando-generators/index.html","11f1b1b7e53729d44eb07bc6b3878047"],["evitando-warnings-entre-audit-argument-checks-e-auto-form-do-meteor/index.html","be33fbfc5733b6108b6b7cbbc15091d7"],["executando-funcoes-paralelas-com-modulo-async/index.html","74f064856c943cf341cbb2b818ebb348"],["explorando-o-modulo-console-do-javascript/index.html","2877899266788a35cd4a7cdb4f9ec645"],["express-vs-geddy/index.html","5add67c5ced20a6c7ae737eeaa17f550"],["favicon.ico","c363ab6ad5eaf4a2972a7fec81bf9379"],["ferramentas-essenciais-para-um-blogueiro/index.html","0cf2d822fd684daee3d4b857581d0522"],["frontend-lindo-usando-babel-para-rodar-es6/index.html","8eb657a19087aab4bb572bc99fe28178"],["frontend-moderno-com-browserify-e-babel/index.html","761dc59c97ecd08207cf5130a64a0116"],["gerenciando-codigo-fonte-com-git/index.html","672acfccd2c8bfa7e120221e50e784fa"],["gerenciando-o-ruby-gem/index.html","de303421c90005b10095bac121aa4ade"],["gerenciando-plugins-no-eclipse/index.html","7108597ad0365a7e2d314fd2f9449117"],["hospedando-aplicacoes-node-js-na-getup-cloud/index.html","8ed0787d85ba0b60ae26ab1e462f3525"],["images/TDD.jpg","b38bf093f8483aea45e449dddc38f0ce"],["images/a-primeira-app-ios.jpg","07578e8fe035da60da22848a462fb26a"],["images/agile-web-development-rails-3.2.jpg","1d79efb8f1a2cba329ae8431faabb0dc"],["images/appfog-nodester.jpg","dd7068dbca5c34ec1f0413cbf4f48cb0"],["images/arch-linux-logo.jpg","cd4979411ef75bf83e9e46a464c16a6d"],["images/async-vs-parallel-small.png","e3babbc75d53514c9447a5039fd5ee1b"],["images/async-vs-parallel.png","5382a0f31469657efaf6a76637a4028c"],["images/babel.jpg","7acf3ff84e19ccb83c0241645d187738"],["images/browserify.jpg","f6ffe73fa65bf645a0b5b249e00ca93a"],["images/building-apis-with-nodejs-cover.jpg","254998d8ab9da07320eaaa2d792116f4"],["images/callback-hell.jpg","668976a6e634dbc8790a0d9b91f71beb"],["images/caminhos-errados.jpg","ee14935bb92fb240d1ee591e9d9653b9"],["images/cardume.jpg","fb430368b4bfbec3594f7b2570a4fddd"],["images/ciclo-do-tdd.jpg","dfdfe8b341c1b65d671e5b88226345ee"],["images/comando-tar.jpg","b1bec198ea655c02e39a591fc8b137e5"],["images/conflitos-culturais.jpg","6c5899d5c44ddbea433849344556fc60"],["images/conhecendo-mundo-nodejs.jpg","a3a3f610632bd409b1391032da7fcae3"],["images/desorganizacao.jpg","b538d135374ec3047a77e173aac75ecc"],["images/devinsantos.png","d05365d61167c05a83000aa952e3da0c"],["images/eclipse-auto-import-auto-indent-save-small.jpg","9daea30e6da1ea217d98303615789d4e"],["images/eclipse-auto-import-auto-indent-save.jpg","57b9e3fcdc75789e4d3ef7837f14f9bb"],["images/eclipse-limite-de-console-small.jpg","4312cd22d31b6c8d87e4b7863cf29cc2"],["images/eclipse-limite-de-console.jpg","fbf423adfee2126fe82c2c64c008a201"],["images/eclipse-logo.jpg","999bc88c45a6e3de9fd584ddbe58de52"],["images/eclipse-marketplace-small.jpg","d8c673e4d6cc6b9a537bbd2c0462a056"],["images/eclipse-marketplace.jpg","2a068fec17fa47b7df2f651b5334896c"],["images/eclipse-search-small.jpg","cb270e8ca9ea5a087648d1a654bf61cf"],["images/eclipse-search.jpg","b8f1869421bb23af95cd88d452f297ca"],["images/eclipse-spellchecking-small.jpg","1633ab8594e68a538f0f1b408461e2a8"],["images/eclipse-spellchecking.jpg","745f4eb480f2334f8a76aa3b202dcac0"],["images/email-weeklys.jpg","3b5ece77ee45027060854a15bfd450ae"],["images/entrevista-em-equipe.jpg","8ba507c129eab8d1d76b89b8eabd3fa6"],["images/es6-logo.jpg","d38b937bb3626b3150b3786bce8a916b"],["images/estagiarios.jpg","69018aa4dbd6a73eeec603108f140ecb"],["images/express-admin-small.jpg","e0bda628d35a5f2093e06513049e1852"],["images/express-admin.jpg","d71f4fc39e09b88ef2c9e25e1cec6c28"],["images/express-logo.jpg","26dde4c1a599f72c2d56a598207bb4ef"],["images/express-socketio.jpg","4fc89cf3685dd2f0efa16977ee3ad973"],["images/express4.jpg","3fc5bf4ed36474d03ffb7406f82f5be1"],["images/falta-de-reconhecimento-profissional.jpg","78c095c24ac58d24eb5153b8675fc8f4"],["images/fofocas-e-preconceitos.jpg","72b8c04859ae48566ecfbd1ae5cc9e04"],["images/garoto-linux-windows-mac.jpg","a1ad569c313933c5a1449194a8ce8cd3"],["images/geddy-logo.jpg","a075b006a085534eb1cd6d9804658c34"],["images/gerenciadores-de-blogs.jpg","6fde5b04085e2c73ac1f84ff9cdf0286"],["images/getup-cloud.jpg","896d06062850a8768ac7578426408a02"],["images/git-logo.jpg","fda7a9bba283e2dc8f98c3627054afa0"],["images/github-logo.jpg","a73e55951ab7ac195dc588cb4b8cd7f6"],["images/gnu-linux.jpg","fe007c29747184ef42ea32555636df57"],["images/heroku.jpg","6aea3e44d79798441ee08aed7d633d6b"],["images/homem-invisivel.jpg","eef0f7ba2131d98f15f9e011d3fe6856"],["images/ilusao-e-decepcao.jpg","0cf89d376d188189cdc80d2b06bc8e65"],["images/immutable-logo.png","67a685d31a735a75ce70c3fc8037bb0e"],["images/jade-logo.jpg","52b6c9b5f36fa21c8822f206bafcd474"],["images/java-logo.jpg","cb5533f95f8ce5d4288ddc292881bb56"],["images/javascript-logo.jpg","a3229fbc58edeafa190f510401fcf9d7"],["images/jscrambler-logo.png","c8308d0d87262b15bba3526764537910"],["images/lean-startup.jpg","f00158a59471b0a2dfaa36da103df545"],["images/leveldb.jpg","c55c7f7607f6705411a56f03217d9242"],["images/levelweb-grafico-de-barra-small.jpg","ae268e989b88a7b70683a6e455c3dcfc"],["images/levelweb-grafico-de-barra.jpg","b05aa9aa8bdd64bdb952abb81c517770"],["images/levelweb-grafico-de-linha-small.jpg","bb1ffedcbfc18b6c01fd0aa496ed6e9f"],["images/levelweb-grafico-de-linha.jpg","236a4608bc33d2d3aea630a02e04ea5d"],["images/levelweb-grafico-treemap-small.jpg","fbb327ea8896fcd40ecc6ca29b0546c8"],["images/levelweb-grafico-treemap.jpg","459dbac30e1f5bcd0816995afc000ead"],["images/levelweb-login-small.jpg","ebfcd85b9a003b75345d7e60b80ab126"],["images/levelweb-login.jpg","cbdb46ad5edfedc2dac7026adf9a062d"],["images/levelweb-visualizando-dados-small.jpg","5957f8548682b3dc3281ce52e47054d2"],["images/levelweb-visualizando-dados.jpg","907b99f6f7df50530e17bca15941279c"],["images/levelweb.png","13aee0442eb963857903e61dfbe618bf"],["images/livro-aplicacoes-web-real-time-com-nodejs.jpg","aa2de5a6c6b8cced3c4e56060f44069d"],["images/livro-construindo-apis-rest-com-nodejs.jpeg","a0dbbf3adeb744a6d128978c1dcb11ac"],["images/livro-de-android.jpg","841b049cb1c27dc6f781f91c1f03716b"],["images/livro-java-efetivo.jpg","54547e9cea8da08bf9010d1240411949"],["images/livro-java-web.jpg","63e3fd91a0619f608600a1f05991f501"],["images/livro-jsp-jstl.jpg","6c0429e4e8eb22cd95f22427e956bb84"],["images/meteor-criando-aplicacoes-web-real-time-com-javascript.jpg","c2b9ac55d3ded3e2c903d2738127a333"],["images/meteor-logo.jpg","3a77b2499e894de59087d140917c61d3"],["images/meteor-seo.jpg","55a139aaec5f4ce96338ae4b46afddea"],["images/mingrando-de-windows-para-linux.jpg","3a50b57ee88114e89ab1952caf973990"],["images/nautilus-ssh-small.jpg","63c3ab2dcac231f94bffd81b804c5cc5"],["images/node-logger-com-nginx-static-small.jpg","f35fb7c2854ebb9ac13851fa0b6e50b7"],["images/node-logger-com-nginx-static.jpg","dca1b8eb59d2d8d76bcdeefb87af8ccb"],["images/node-logger-sem-nginx-static-small.jpg","70743640eeea407df7d693c7325e1c84"],["images/node-logger-sem-nginx-static.jpg","35b8ac95f5f1336079e30cdad6b2ee84"],["images/node-terminal-small.jpg","b0bd517f396a8de3ccbc4dd492e0fc8c"],["images/node-terminal.jpg","c1324759fb10261633a3ba2e687d0206"],["images/node-windows-small.jpg","6ebaf70dac5c14a9faac95cbda16b3f4"],["images/node-windows.jpg","1642f5251b953d7fa43de2ad4ce054ee"],["images/nodejitsu.jpg","12c20fc1118ce5863196160584dadc1b"],["images/nodejs-e-mongodb.jpg","4b285989ab714cb4aaf7fbc017f401da"],["images/nodejs-logo.jpg","1c5696961bb901cfbbf63c308531c4f0"],["images/nodejs-nginx.jpg","c38c745d4eb88232ee8319edc774c6d9"],["images/nodejs-para-leigos.jpg","4e52191793808c0991c542b171ffcc80"],["images/npm-init-small.png","1c11d6579da9ad697be48a97fb6539a7"],["images/npm-init.png","14b9fc5e58465a0744743a3d6337d74d"],["images/npm-logo.png","023f5084daf07239d2d6f0b825ba82fb"],["images/npm.jpg","a7a2d2e87503259f57d73b17047ac6ad"],["images/perda-de-foco.jpg","eb99bf52dc8c0a02846f1ca6bbd978e1"],["images/plagio.jpg","4f3aca492991b1b4f604550be70549a3"],["images/pressao-no-trabalho.jpg","d8e6464648649bf309701fbd3868e718"],["images/programador-produtivo.jpg","7d8b9a0a52d1568ee56be1fb5121ba6d"],["images/programming-ruby-1.9.jpg","b1bbc80304dfc696672d8bcc0cfb9be8"],["images/python-para-devs.jpg","daf60f1829ac2872d400627ca0e3e16b"],["images/rails-3-basico.jpg","2fb4cfe0342f035a077e423edee5fbda"],["images/rails-logo.jpg","6ca96ad27714f064b5b76f1d9692d0d2"],["images/redes-sociais.jpg","5a31b2a1b8280cb310e6849032d45167"],["images/redis-na-pratica.jpg","6dee98fa9e643d4cd4c6b5ec6c0ce5cf"],["images/rethinkdb-logo.png","fc9de1ebd8524ba8e83eafa7933deefe"],["images/ruby.jpg","f4c25c388492b86d520c653f637044a0"],["images/ruidos-de-comunicacao.jpg","a4e226e44a9db01cf5e3706484b26775"],["images/sistemas-web.jpg","03e1c781073cfd65ccc744e709602921"],["images/slide-introducao-sobre-nodejs.jpg","9f2b906ba2250f7f13c0ebac1c063dbe"],["images/socket-io.jpg","ba94701886b5c28c2126060dafda16c7"],["images/speakerdeck-meteor.jpg","3129f01179c6ce0f20470900a53864ae"],["images/ssh.jpg","8f5bcb467f2a1c2787f2419da1cc2494"],["images/startup-money.jpg","cbd0526f7bd5eb8400f520f3bbc392e9"],["images/tdd-caso-de-sucesso-small.jpg","2567965e589329958a84660bfbf165c9"],["images/tdd-caso-de-sucesso.jpg","906d705a683187cb8f2a52a0edfc5626"],["images/terminal-comando-history-small.jpg","6323755af2a573da77355cf703415cff"],["images/terminal-comando-history.jpg","ca9ab3f9eaf7c9f8fb286c466bb30f3d"],["images/terminal-console-linux.jpg","10dfcd4868769b70db9438aee61a25a3"],["images/the-state-of-node-small.jpg","fc7a62c864e34d6331acfbf07c17d2cc"],["images/the-state-of-node.jpg","d374b38b081ac301378034444460ae12"],["images/transito.jpg","3f62f3b46f3c6582d9b8fb726618b587"],["images/trofeu.jpg","b3efec192b6abf6564cc4e152ab17d60"],["images/udgwebdev-logo-114.png","382e47c4037b7b62430c37da1bf84260"],["images/udgwebdev-logo-128.png","079339811025710f2f71756d0587a520"],["images/udgwebdev-logo-144.png","0b62211e0b32623f416a5a911eebc9a0"],["images/udgwebdev-logo-256.png","7ff435a3fe10881aa8c1799fc908731d"],["images/udgwebdev-logo-57.png","b48b25314fe0f4fc649d8447b2e8b2a3"],["images/udgwebdev-logo-58.png","77c7ea248ad1861accbd01377bd20ae1"],["images/udgwebdev-logo-64.png","75f8bd7add0875051458f4fcdcd807b0"],["images/udgwebdev-logo-72.png","db832272719682d7765a2f4cb1fce4ed"],["images/udgwebdev-logo.png","a60f9cd4c6cf39f6a7c3bdb0310fdc4f"],["images/udgwebdev_weekly.png","2057d562e6917eb9a315b47ce7a8f3ce"],["images/unity3d.jpg","900fba77871c51a65fbddc06eeae9034"],["images/web-scraping.jpg","95b475a5d9504704caa8deb7cc6e5d58"],["images/what-is-nodejs-small.jpg","caca4f41455a55a10621eb2da7b6c513"],["images/what-is-nodejs.jpg","12cd44749c927cd28fe0d032b9b7fea5"],["images/zona-de-conforto.jpg","6beb99080eda6d9e0be8772796ec4b49"],["index.html","c4016c065dcde21bae9958a0fa9ddb39"],["infografico-the-state-of-node/index.html","926af6649c8af3e58e8526dc9dfc5aae"],["infografico-what-is-node-js/index.html","a0f0d967321c5e64e24b6f0f536d0636"],["introducao-sobre-meteor/index.html","1d3f0eaae3a3fc3c0d3ea5abf1c3dedc"],["jade-um-otimo-template-engine/index.html","1927e5b5d8f9b58a243a9568f42d8ed7"],["lancamento-oficial-do-livro-de-nodejs/index.html","e148032d1cd1659a04b23f15bbf42d21"],["light-talk-introducao-sobre-nodejs/index.html","5d15efeb90d3bcbc9e10be9b468a5462"],["livro-construindo-apis-rest-com-nodejs/index.html","9505d838ad1ff99129eabf04e71437a1"],["mais-um-livro-agora-e-sobre-meteor/index.html","0c1d5c34d49b28fcdf47045aadf18f97"],["mais-um-livro-sobre-nodejs/index.html","bee918716c4a1607be4f2a2d94357678"],["manifest.appcache","628362bf4a370411b3c79d2f5473dbfb"],["manifest.json","e86909eb3fd9df50b017f5b5e1cf1a1e"],["menu/index.html","6221c6445dddae7f4a26213033e1814a"],["meteor-e-seo/index.html","5bb0d51efeb5fd19303998d0c7e6eadc"],["meteor-methods/index.html","9170654c9b3b4f0959d682550001deb8"],["meteor-pubsub/index.html","a2de616d55098c50a6c8d44dc7f1f783"],["meteor-um-overview-sobre-a-plataforma/index.html","ff3bcd29951828de6cf9027ca877f7f4"],["meteor/index.html","8bd0df813b46827da772584326c05111"],["migrando-de-windows-para-linux-parte-1/index.html","18515ae0443cd743b37203c00a231d9f"],["migrando-de-windows-para-linux-parte-2/index.html","a0c7de520c0fb2b40df3f380eed179c6"],["migrando-de-windows-para-linux-parte-3/index.html","f02845768719bd9be3e44fcd39ac767b"],["migrando-de-windows-para-linux-parte-4/index.html","c98e620ab127335c0020740a749b7339"],["modularizando-frontend-javascript-com-browserify/index.html","b4a8dcb143abb240aba1f46f96ceeb39"],["modulos-do-npm-no-meteor/index.html","6ab2d41bb2d01d2cf4578e37e7f6bd7c"],["modulos-essenciais-para-nodejs-parte-1/index.html","2e61afc1e1a1722a393c4e2992c318cc"],["modulos-essenciais-para-nodejs-parte-2/index.html","5d6f3f418280130520d4b38bcc9a44e6"],["multiplos-diretorios-em-um-comando-dicas-de-terminal/index.html","636faf45f2cf207ed02ae1709f326b40"],["nginx-servindo-nodejs/index.html","80bcddbfb3f02c59199d1601eacc2de3"],["node-js-para-leigos-child-process/index.html","2fa4a13fe88602798410698b27bdb864"],["node-js-para-leigos-explorando-real-time/index.html","4422216ec3a85403dbb499eb5f754d4e"],["node-js-para-leigos-framework-express-parte-1/index.html","b4c5a58990cf6fef99aa56cb48f6eea9"],["node-js-para-leigos-framework-express-parte-2/index.html","81c2393b6f9771d9ab9650b60ab76f09"],["node-js-para-leigos-instalacao-e-configuracao/index.html","a22a0a8c7096e28ce45422852c1a71e9"],["node-js-para-leigos-jade-template-engine/index.html","5984ca07fff48b03a6c64c81594c7907"],["node-js-para-leigos-trabalhando-com-http/index.html","0811ca8a8f1f04d967807600c59c22d9"],["node-js-para-leigos-utilizando-api-file-system/index.html","5d895ba6cf9bac9b600e660eaa28cb74"],["nodejs-criando-um-mini-chat/index.html","0bcdfaba90131a18bae3d089d244fdc5"],["nodejs-express-socketio-e-sessions/index.html","a39faef7de6163df1e91e90289143906"],["nodejs-javascript-no-servidor/index.html","40d4e1fecb6206f58f9b95827aacfff0"],["nodejs-ou-nodemon/index.html","d1aca95edadecef6ff5678abf9923dd9"],["nodejs-para-leigos-a-proposta/index.html","8b09e10d0ad3dcfd32c30b8f17a6c61b"],["nodejs-para-leigos-introducao/index.html","b3d6713d4d97b8164b7ce14b85a7d81b"],["nodejs-para-leigos-tdd-com-nodeunit/index.html","8294aa2f7c0a5825241f9a67e21d63d6"],["nodejs-processamento-em-paralelo/index.html","53113ae1cf786c9f16e2ca2e3df04388"],["nodejs/index.html","4ea3ea2073ab63618e96c5e2d9fd7e0d"],["npm-node-package-manager/index.html","90918af0b6349a0f373c34ff2f83cbbc"],["nvm-node-version-manager/index.html","904321b421bd4daba898a00b6851c325"],["o-que-devemos-esperar-de-uma-faculdade-de-ti/index.html","fe6220fc575a6c82336b773bf3c13f45"],["onde-hospedar-aplicacoes-node-js/index.html","9fdc3e83a1a8436fae78517cc9893b55"],["organizando-um-projeto-meteor/index.html","60782a81aecf9ce71ca298ee3fe68a3e"],["organizando-uma-aplicacao-nodejs/index.html","3693fdadedd943ec6d30621eaf2c8ef5"],["os-20-posts-do-ano/index.html","48b9e9faf268257e15a969ff87f184f6"],["os-atuais-defeitos-nos-sistemas-operacionais/index.html","0671a15a2be39bf460274ba9d9a2d6da"],["otimizando-aplicacoes-nodejs/index.html","87c6188c44acb702d2b0d5be5711b099"],["otimizando-seu-site-para-publicacao-nas-redes-sociais/index.html","5cf5334b7c66de22f3b3fef1c91f12b0"],["praticando-tdd-com-junit/index.html","f0140997f93386cc863a258937b9cdcb"],["primeiros-passos-com-express-4/index.html","1062c5267982c2a7945106f4977ee3f9"],["primeiros-passos-com-meteor/index.html","3186b1be46cbedb21a4498848d6f6f02"],["programacao-assincrona-com-nodejs/index.html","43b518c04971884794fd41769cac2422"],["programador-produtivo/index.html","86609c03f0403d5437253473a19e2666"],["protegendo-aplicacoes-javascript/index.html","280f87643a6c75bd01b65bd055dd957c"],["quer-aprender-java/index.html","6124f5e24c45a607002b13a44314909b"],["quer-aprender-meteor/index.html","bc4c7f724691341d3c21ae7df5df58fc"],["quer-aprender-node-js-atualizado/index.html","c04b936d5d5f7f8c4660f829fd276bf1"],["quer-aprender-ruby-on-rails/index.html","2c9094b1e99187dc8609135fedf0352a"],["real-time-com-socket-io-no-nodejs/index.html","0d597da1d1d6eafbe856416d31352b6a"],["realtime-com-rethinkdb/index.html","ebee3c8c70b3024360db9293298c4a9e"],["robots.txt","448a0739c49527058e0ea41ed5a73abf"],["slides-do-3-devinsantos/index.html","82e8a8d7efef6949af013bd8741f69fd"],["socket-io-com-redis/index.html","746e83f43908e8dabf5c354f57e442e1"],["split-e-join-de-arquivos-com-tar/index.html","4a4744cf665d20e7b001cfbf6b5288c7"],["talk-meteor-for-noobs-no-devinsantos/index.html","931c7cfe299ff42bdc0dc646d45b59bb"],["teclas-de-atalho-essenciais-no-eclipse/index.html","81f0ef81dbef3e74a015df51abc9fc29"],["terminal-gerando-arquivo-de-texto/index.html","0a4c51a11c843af2199ea33662cea43e"],["top-20-de-2014/index.html","24c49b6be7aec389d8242fd94aa34d24"],["trabalhando-com-multiplas-contas-do-heroku/index.html","6b952ba60d721ce8edcf6db2bb188f09"],["trabalhando-com-validators-no-node-js/index.html","6e2077d36c41e2510637a356c915ebe7"],["tunning-em-servidor-linux/index.html","93e47db3516744b7120fe39041114330"],["um-pouco-de-node-js-e-mongodb-na-pratica/index.html","6a37ed358144f82ba75a7b278fe388f2"],["usando-spread-operator-do-es6/index.html","92f0ddac71c89e15ea102b87ec0347b0"],["validacao-com-ruby-on-rails/index.html","a31abc771a738a3b895a96ba2d7fba70"],["vantagens-em-utilizar-sistemas-linux/index.html","3757e4e6c358202e667f473075b3e4dc"],["video-streaming-com-nodejs/index.html","5525860c74d715461cdfd538d24fb410"],["visualizando-portas-da-rede-com-nmap/index.html","efa803c42a83fc2e64162e96582cbfcf"],["webscraping-com-node-js/index.html","814f5c139f902b7319fa751295c5abbd"]];
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


/* @preserve Sun, 04 Dec 2016 20:22:41 GMT */