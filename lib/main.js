'use strict';

$(document).ready(function () {

  // Toggle header background visibility when mobile menu is shown
  $(function () {
    $('.navButton').click(function () {
      return $('.header').toggleClass('hide');
    });
  });

  /* Highlight current page in jQuery
  $(function() {
    $('a').each(function() {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });
  */

  // Highlight current page in vanilla JavaScript
  var hyperlink = void 0;
  var currentPage = void 0;
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    hyperlink = link.href;
    currentPage = window.location.href;
    if (currentPage.includes(hyperlink)) {
      link.classList.add('current');
    }
  });

  // Smooth Scroll
  $('.gallery-main__nav--link').smoothScroll();

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  // TODO: Implement lazy loading without cdn
});