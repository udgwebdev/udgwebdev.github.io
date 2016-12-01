(function() {
  window.sr = new scrollReveal();
  cssCircleMenu('.js-menu');
  var toggle = document.querySelector('.navbar-toggle');
  var collapse = document.querySelector('.navbar-collapse');
  toggle.addEventListener('click', function() {
    collapse.classList.toggle('in');
  });
  var msg = '  _   _  ___    ___ __      __ ___  ___  ___   ___ __   __\n';
      msg += ' | | | ||   \\  / __|\\ \\    / /| __|| _ )|   \\ | __|\\ \\ / /\n';
      msg += ' | |_| || |) || (_ | \\ \\/\\/ / | _| | _ \\| |) || _|  \\ \V / \n';
      msg += '  \\___/ |___/  \\___|  \\_/\\_/  |___||___/|___/ |___|  \\_/    \n';
      msg += ' Powered by @crp_underground\n';
  console.log(msg);
})();
