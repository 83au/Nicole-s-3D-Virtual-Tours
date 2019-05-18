'use strict';

$(document).ready(function () {

  // Toggle header background visibility when mobile menu is shown
  var navButton = document.querySelector('.navButton');
  navButton.onclick = function () {
    document.querySelector('.header').classList.toggle('hide');
  };

  // Highlight current page
  $(function () {
    $('a').each(function () {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  // Smooth Scroll
  $('.gallery-main__nav--link').smoothScroll();

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  // TODO: Implement lazy loading without cdn
});