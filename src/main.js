$(document).ready(() => {

  // Toggle header background visibility when mobile menu is shown
  $(function() {
    $('.navButton').click(() => $('.header').toggleClass('hide'));
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
  let hyperlink;
  let currentPage;
  const links = document.querySelectorAll('a');

  links.forEach(link => {
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
      elements_selector: ".lazy",
  });

  // TODO: Implement lazy loading without cdn

});
