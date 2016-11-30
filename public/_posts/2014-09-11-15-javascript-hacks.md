![15 JavaScript Hacks](../images/javascript-logo.jpg "15 JavaScript Hacks")

Neste post vou compartilhar 15 Hacks extremamente úteis para se aplicar em JavaScript. As dicas são um acumulado de magias avançadas que visam diminuir o tamanho do código ou realizar um código de forma muito eficiente. Então let's go hack!

### 1) Concatenando strings direito

Com certeza um dev já precisou uma vez na vida montar uma string com base na concatenação de outras strings e de alguma forma acabou criando um código similar a este:

 ``` javascript
 var result = "";
   for (var i = 0; i < 100000; i++) {
       var user = "user: " + i + "\n";
       result += user;
   }
   console.log(result);
``` 

Sem dúvidas, a primeira solução que vem em mente é a de utilizar o operador `+=` para concatenar dados para uma string principal, isso é muito comum e largamente utilizado. Porém o problema surge somente quando você precisar concatenar muitos dados (principalmente quando são dados grandes!).
Neste caso o recomendado é trabalhar com arrays. Primeiro você cria o array (`var result = [];`), a cada iteração você vai adicionando os dados usando `result.push(valor)`, para que no final do loop a geração da string concatenada seja realizada via função `result.join("")`, veja abaixo:

 ``` javascript
 var result = [];
   for (var i = 0; i < 100000; i++) {
       var user = "User: " + i + "\n";
       result.push(user);
   }
   console.log(result.join(""));
``` 

### 2) Convertendo para boolean usando "!!"

Muitas vezes precisamos checar a existência de uma variável, ou seja, se ela possui um valor válido que seja considerado como **"valor verdadeiro"**, para isso, utilizar `if (variavel)` automaticamente vai retornar falso se a variavel conter qualquer um desses valores: `false, 0, null, "", undefined ou NaN`, e é claro que diferente desses valores citados a condicional vai retornar verdadeiro.
Porém as vezes, você pode precisar converter uma varíavel para boolean e ae neste caso o jeito eficiente é usar o operador `!!`, por exemplo:

 ``` javascript
 function User(name) {
     this.name = name;
     this.hasName = !!name;
   }
   var user = new User("Caio");
   console.log(user.name); // Caio
   console.log(user.hasName); // true
``` 

Neste caso qualquer tipo de valor válido que você inserir em `new User("Joao")` o seu atributo `this.hasName` será verdadeiro.

### 3) Convertendo para numbers usando o operador "+"

Essa magia é muito, mas muito foda! E também simples de se fazer. Quando uma string contém apenas números ela pode ser convertida para number utilizando apenas o operador `+`, caso contrário será retornado um `NaN` **(Not a Number)**. Veja esse exemplo:

 ``` javascript
 function toNumber(strNumber) {
     return +strNumber;
   }
   console.log(toNumber("1234")); // 1234
``` 

### 4) Capturando milisegundos de uma data usando denovo o "+"

Assim como o operador `+` converte uma string para number, ele também converte um objeto Date para um number que consequentemente seu retorno será os milisegundos de uma data:

 ``` javascript
 console.log(+new Date()) // 1410480611962
``` 

### 5) Condicionais usando short-circuits

Se você tem um código semelhante a esse:

 ``` javascript
 if (conected) {
     login();
   }
``` 

Você pode encurtá-lo usando apenas a combinação de uma variável com uma função através do operador lógico `&&`. Resumindo, o código anterior pode ficar em uma única linha, da seguinte forma:

 ``` javascript
 conected && login();
``` 

O mesmo pode ser feito quando se precisa checar seu um objeto existe, para em seguida executar seu respectivo método:

 ``` javascript
 user && user.login();
``` 

### 6) Use o operador "||" para criar default values

Quando se tem um objeto que precisa de valores default quando nenhum parâmetro é passado para ele, você pode usar o operador lógico `||` para checar se será usado os parâmetros válidos do construtor ou se será usado um valor default, por exemplo:

 ``` javascript
 function User(name, age) {
     this.name = name || "No name";
     this.age = age || 18;
   }
   var user1 = new User();
   console.log(user1.name); // No name
   console.log(user1.age); // 18
   var user2 = new User("Caio", 25);
   console.log(user2.name); // Caio
   console.log(user2.age); // 25
``` 

### 7) Cacheando array.length em um loop

Essa dica é muito simples e tem um impacto imenso quando se trabalha com arrays gigantes. Basicamente todo mundo itera um array da seguinte maneira:

 ``` javascript
 for(var i = 0; i < array.length; i++) {
     console.log(array[i]);
   }
``` 

Porém o grande erro do código anterior é que a cada iteração do loop o `array.length` é contabilizado, em arrays gigantes isso pode causar uma lentidão e a solução é simples, basta armazenar o `array.length` em uma variável para usá-la no loop:

 ``` javascript
 var length = array.length;
   for(var i = 0; i < length; i++) {
     console.log(array[i]);
   }
``` 

Ou caso queria deixar esse loop mais enxuto, faça isso:

 ``` javascript
 for(var i = 0, length = array.length; i < length; i++) {
     console.log(array[i]);
   }
``` 

### 8) Detectando propriedades em um objeto

Sabe quando você precisa executar um método de um objeto, pelo qual você não sabe se o objeto existe? Um exemplo clássico são as distintas APIs do HTML que cada browser possui ou não possui, por exemplo, o **Internet Explorer 7** não possui as funções `document.querySelector` e `document.querySelectorAll`. Se você pretende criar uma biblioteca JavaScript cross-browser você terá que **previnir null pointers** checando se tal objeto possui um determinado método ou atributo. Neste caso você pode usar o operador `in` comparando se uma string (referente ao nome do atributo ou método) existe em um objeto. Para detectar se o browser possui a função `document.querySelector` você pode fazer o seguinte código:

 ``` javascript
 if ('querySelector' in document) {
     document.querySelector("#id");
   } else {
     document.getElementById("id");
   }
``` 

### 9) Pegando o último elemento do array

A função `Array.prototype.slice(begin, end)` tem o poder de cortar um array ou string com base nos parâmetros `begin` e `end`. Se você não informar o parâmetro `end` automaticamente será considerado o valor máximo do array, outro detalhe legal é que essa função também pode ser usada em strings, pelo qual tem o mesmo comportamento das funções `String.prototype.substr()` e `String.prototype.substring()`.
O que pouca gente sabe é que ao usar um valor negativo na função slice, você consegue pegar exatamente o último elemento ou os últimos elementos de um array, por exemplo:

 ``` javascript
 var arr = [1,2,3,4,5,6];
   console.log(arr.slice(-1)); // [6]
   console.log(arr.slice(-2)); // [5,6]
   console.log(arr.slice(-3)); // [4,5,6]
``` 

### 10) Array trucation

Array trucation é a técnica de travar o tamanho de um array, forçando que o mesmo tenha um número restrito de elementos e caso o array tenha mais elementos do que o valor que pretende truncar, os elementos que sobrarem são excluídos. Na prática basta você definir um valor para o atributo `array.length` e pronto!

 ``` javascript
 var arr = [1,2,3,4,5,6];
   console.log(arr.length); // 6
   arr.length = 3;
   console.log(arr.length); // 3
``` 

### 11) Replace all

A função `string.replace()` é muito útil quando se precisa substituir determinados trechos de uma string, o que torna ela muito foda é que ela permite utilizar **expressão regular** para fazer um **match** de caracteres. E graças a isso, é possível fazer com que essa função substitua numa única execução várias ocorrências repetidas, para isso basta utilizar o `/g` no final do match que pretende buscar:

 ``` javascript
 var string = "joão joão";
   console.log(string.replace(/ão/, "ana")); // "joana joão"
   console.log(string.replace(/ão/g, "ana")); // "joana joana"
``` 

### 12) Combinando arrays

A técnica de combinar arrays pode ser feita utilizando a função:

 ``` javascript
 var array1 = [1,2,3];
   var array2 = [4,5,6];
   console.log(array1.concat(array2)); // [1,2,3,4,5,6];
``` 

O único problema dessa função, é que ela é recomendada apenas quando se pretende combinar pequenos arrays, afinal essa função aumenta o uso de memória dos arrays até que o array final seja gerado e isso pode causar lentidão quando se pretende combinar dois ou **mais arrays de 50000 elementos cada**.
Se esse for o seu caso, utilize a função: `array.push.apply()` que é otimizada para trabalhar com arrays gigantes:

 ``` javascript
 var array1 = [1,2,3];
   var array2 = [4,5,6];
   console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6];
``` 

### 13) Transformando NodeList em arrays

Se você executar `document.querySelectorAll("p")` com certeza será retornado um array de elementos do HTML, mais conhecidos como `NodeList`.
Porém um `NodeList` não possui todas funções de um array e caso você precise usar funções do tipo: `sort(), reduce(), map(), filter()`, você terá que converter um `NodeList` em um array. Para fazer essa conversão basta executar a função `[].slice.call(arguments)`, por exemplo:

 ``` javascript
 var elements = document.querySelectorAll("p"); // NodeList
   var arrayElements = [].slice.call(elements); // Array de Nodes
``` 

### 14) Embaralhando elementos do array

Se você precisa embaralhar a ordem dos elementos de um array, faça a seguinte magia:

 ``` javascript
 var list = [1,2,3];
   console.log(list.sort(function() Math.random() - 0.5)); // [2,1,3]
``` 

### 15) Calculando idade

Se você um dia precisar criar uma função que calcule a idade com base em uma data de nascimento, recomendo que utilize essa função que faz uma magia extremamente performática:

 ``` javascript
 function calcAge(dateString) {
     var birthday = +new Date(dateString);
     return ~~((Date.now() - birthday) / (31557600000));
   }
``` 

Essa função eu achei no link: [http://jsperf.com/birthday-calculation](http://jsperf.com/birthday-calculation) e desde então passei a usá-la como referência, pois obteve uma alta performance em um código minimalista.

**Referências:**

*   [https://code.google.com/p/jslibs/wiki/JavascriptTips](https://code.google.com/p/jslibs/wiki/JavascriptTips)
*   [http://davidwalsh.name/combining-js-arrays](http://davidwalsh.name/combining-js-arrays)
*   [https://github.com/jed/140bytes/wiki/Byte-saving-techniques](https://github.com/jed/140bytes/wiki/Byte-saving-techniques)
*   [http://blog.mdnbar.com/javascript-common-tricks](http://blog.mdnbar.com/javascript-common-tricks)
*   [http://jsperf.com/birthday-calculation](http://jsperf.com/birthday-calculation)