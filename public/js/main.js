(function() {
  window.sr = new scrollReveal();
  var circleMenu = document.querySelector('.circle-menu');
  var circleMenuLinks = circleMenu.querySelectorAll('li');
  circleMenuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.currentTarget.querySelector('a').click();
    });
  });
  circleMenu.addEventListener('click', function(e) {
    var classList = e.currentTarget.querySelector('ul').classList;
    if (classList.contains('show-menu')) {
      classList.remove('show-menu');
    } else {
      classList.add('show-menu');
    }
  });
  var msg = '  _   _  ___    ___ __      __ ___  ___  ___   ___ __   __\n';
      msg += ' | | | ||   \\  / __|\\ \\    / /| __|| _ )|   \\ | __|\\ \\ / /\n';
      msg += ' | |_| || |) || (_ | \\ \\/\\/ / | _| | _ \\| |) || _|  \\ \V / \n';
      msg += '  \\___/ |___/  \\___|  \\_/\\_/  |___||___/|___/ |___|  \\_/    \n';
      msg += ' Powered by @crp_underground\n';
  console.log(msg);
})();
