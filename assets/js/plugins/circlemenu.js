(function(window) {
  'use strict';

  window.cssCircleMenu = function(el) {
    var menu = document.querySelector(el);
    var menuToggle = menu.querySelector('.js-menu-toggle');
    var menuMask = menu.querySelector('.js-menu-mask');

    if (!menu || !menuToggle || !menuMask) {
      throw new Error('Invalid elements, check the structure.');
    } else {
      init();
    }

    return {
      openMenu: openMenu,
      closeMenu: closeMenu
    };

    function init() {
      menuMask.addEventListener('click', function(e) {
        e.preventDefault();
        closeMenu();
      });
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
      });
    }

    function toggleMenu() {
      menuToggle.classList.contains('is-active') ? closeMenu() : openMenu();
    }

    function openMenu() {
      menu.classList.add('is-active');
      menuToggle.classList.add('is-active');
      menuMask.classList.add('is-active');
    }

    function closeMenu() {
      menu.classList.remove('is-active');
      menuToggle.classList.remove('is-active');
      menuMask.classList.remove('is-active');
    }
  };
})(window);
