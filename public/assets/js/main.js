(function() {
  cssCircleMenu('.js-menu');
  new Tooltip().init({ opacity: '.90', hideOnMouseOut: true });
  var toggle = document.querySelector('.navbar-toggle');
  var collapse = document.querySelector('.navbar-collapse');
  var sidemenu = document.querySelector('[data-sticky-sidemenu]');
  toggle.addEventListener('click', function() {
    collapse.classList.toggle('in');
  });
  if (sidemenu) {
    window.addEventListener('scroll', function(e) {
      const isSticky = sidemenu.classList.contains('sticky');
      if (window.scrollY >= 1000 && !isSticky) {
        sidemenu.classList.add('sticky');
        sidemenu.classList.add('fadeInDown');
      }
      if (window.scrollY < 1000 && isSticky) {
        sidemenu.classList.remove('sticky');
        sidemenu.classList.remove('fadeInDown');
      }
    });
  }
  var msg = '  _   _  ___    ___ __      __ ___  ___  ___   ___ __   __\n';
      msg += ' | | | ||   \\  / __|\\ \\    / /| __|| _ )|   \\ | __|\\ \\ / /\n';
      msg += ' | |_| || |) || (_ | \\ \\/\\/ / | _| | _ \\| |) || _|  \\ \V / \n';
      msg += '  \\___/ |___/  \\___|  \\_/\\_/  |___||___/|___/ |___|  \\_/    \n';
      msg += ' Powered by @crp_underground\n';
  console.log(msg);
})();
