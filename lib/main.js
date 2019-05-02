'use strict';

$(document).ready(function () {

  // Toggle header background visibility when mobile menu is shown
  var navButton = document.querySelector('.navButton');
  var input = document.getElementById('menuToggle');

  navButton.addEventListener('click', function () {
    if (!input.checked) {
      document.querySelector('.header').classList.add('hide');
    } else if (input.checked) {
      document.querySelector('.header').classList.remove('hide');
    }
  });

  // Highlight current page with jquery
  $(function () {
    $('a').each(function () {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });
});

var lazyLoad = new LazyLoad({
  elements_selector: ".lazy"
  // More options here
});

/*
  TODO:
  Implement lazy loading for gallery images
*/