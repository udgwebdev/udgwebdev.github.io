![Customizando Build do Cordova no Meteor](/images/meteor-logo.jpg "Customizando Build do Cordova no Meteor")

Se você estiver construindo um mobile app para Android utilizando Meteor com Cordova, talvez em algum momento, possa surgir a necessidade de você sobreescrever ou customizar o build do cordova em sua aplicação.
Para este caso, é possível fazer um override, extendendo funcionalidades de build do cordova criando na raíz do projeto a pasta `cordova-build-override`, pelo qual será responsável por sobreescrever qualquer arquivo default do build mobile.
Para testar um caso real, vamos resolver o seguinte problema. Caso você tenha algum plugin do cordova pelo qual ainda não está 100% compatível com o **Meteor 1.2**, e por causa disso, ele anda quebrando o build mobile, gerando erros de Lint, você pode facilmente desativar o Lint criando o seguinte arquivo: `cordova-build-override/platforms/android/build-extras.gradle` e em seguida incluir o seguinte código:

``` javascript
 ext.postBuildExtras = {
  android {
    lintOptions {
      disable 'MissingTranslation'
      disable 'ExtraTranslation'
    }
  }
 }
``` 

Tudo que você incluir dentro de `ext.postBuildExtras` será extendido no build padrão do Cordova, neste caso, ele vai apenas desativar o Android Lint para garantir que alguns plugins antigos rodem normalmente no Meteor 1.2.
Até a próxima!