(function() {
  var toggle = document.querySelector('.navbar-toggle');
  var collapse = document.querySelector('.navbar-collapse');
  var scrollLinks = document.querySelectorAll('[data-scroll]');

  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function() {
      collapse.classList.add('hidden-xs');
    });
  });

  toggle.addEventListener('click', function() {
    var classList = collapse.classList;
    if (classList.contains('hidden-xs')) {
      classList.remove('hidden-xs');
    } else {
      classList.add('hidden-xs');
    }
  });

  smoothScroll.init();
})();
