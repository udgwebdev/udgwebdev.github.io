![Configurando mobile icons e launch screens no Meteor](/images/meteor-logo.jpg "Configurando mobile icons e launch screens no Meteor")

Se você pretende construir uma aplicação mobile usando Meteor com Cordova, será necessário incluir no app todas as resoluções de ícones e launch screens necessárias para que seu app renderize essas imagens nas principais telas de smartphones e tablets Android, iPhone e iPads.

Para isso, apresentarei nesse post um exemplo prático de como configurar arquivo `mobile-config.js` incluindo as principais resoluções de ícones (via função `App.icons()`) e launch screens (via função `App.launchScreens()`), todas as imagens precisam estar em formato PNG. Veja abaixo as principais resoluções:

``` javascript
 App.icons({
   // Resolução: 60x60
   "iphone": "private/images/icons/iphone.png",
   // Resolução: 120x120
   "iphone_2x": "private/images/icons/iphone_2x.png",
   // Resolução: 180x180
   "iphone_3x": "private/images/icons/iphone_3x.png",
   // Resolução: 72x72
   "ipad": "private/images/icons/ipad.png",
   // Resolução: 144x144
   "ipad_2x": "private/images/icons/ipad_2x.png",
   // Resolução: 36x36
   "android_ldpi": "private/images/icons/android_ldpi.png",
   // Resolução: 48x48
   "android_mdpi": "private/images/icons/android_mdpi.png",
   // Resolução: 72x72
   "android_hdpi": "private/images/icons/android_hdpi.png",
   // Resolução: 96x96
   "android_xhdpi": "private/images/icons/android_xhdpi.png"
 });
 App.launchScreens({
   // Resolução: 320x480
   "iphone": "private/images/launch/iphone.png",
   // Resolução: 640x960
   "iphone_2x": "private/images/launch/iphone_2x.png",
   // Resolução: 640x1136
   "iphone5": "private/images/launch/iphone5.png",
   // Resolução: 750x1334
   "iphone6": "private/images/launch/iphone6.png",
   // Resolução: 768x1024
   "ipad_portrait": "private/images/launch/ipad.png",
   // Resolução: 1536x2048
   "ipad_portrait_2x": "private/images/launch/ipad_2x.png",
   // Resolução: 200x320
   "android_ldpi_portrait": "private/images/launch/android_ldpi.png",
   // Resolução: 320x480
   "android_mdpi_portrait": "private/images/launch/android_mdpi.png",
   // Resolução: 480x800
   "android_hdpi_portrait": "private/images/launch/android_hdpi.png",
   // Resolução: 720x1280
   "android_xhdpi_portrait": "private/images/launch/android_xhdpi.png"
 });
``` 

Agora você tem uma referência para usar em suas aplicações mobile, essas resoluções também são usadas em outros frameworks como, por exemplo, Phonegap. Até a próxima!