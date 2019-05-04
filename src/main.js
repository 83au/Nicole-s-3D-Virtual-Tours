$(document).ready(() => {

  // Toggle header background visibility when mobile menu is shown
  const navButton = document.querySelector('.navButton');
  navButton.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('hide');
  });

  // Highlight current page with jquery
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
});
