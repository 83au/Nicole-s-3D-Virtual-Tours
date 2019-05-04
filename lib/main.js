'use strict';

$(document).ready(function () {

  // Toggle header background visibility when mobile menu is shown
  var navButton = document.querySelector('.navButton');

  navButton.addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('hide');
  });

  // Highlight current page with jquery
  $(function () {
    $('a').each(function () {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  // Lazy load images
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });
});