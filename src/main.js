$(document).ready(() => {

  // Toggle header background visibility when mobile menu is shown
  $(function() {
    $('.navButton').click(() => $('.header').toggleClass('hide'));
  });

  // Highlight current page
  $(function() {
    $('a').each(function() {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
      elements_selector: ".lazy",
  });

  // Smooth Scroll
  $('.gallery-main__nav--link').smoothScroll();


  // TODO: Implement lazy loading without cdn

});
