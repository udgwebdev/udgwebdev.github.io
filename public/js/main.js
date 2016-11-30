(function() {
  window.sr = new scrollReveal();
  var circleMenu = document.querySelector('.circle-menu');
  circleMenu.addEventListener('click', function(e) {
    var classList = e.currentTarget.querySelector('ul').classList;
    console.log(classList);
    if (classList.contains('show-menu')) {
      classList.remove('show-menu');
    } else {
      classList.add('show-menu');
    }
  });
})();
