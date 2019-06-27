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
  const highlightCurrentPage = () => {
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
  }

  highlightCurrentPage();

  // Smooth Scroll
  $('.gallery-main__nav--link').smoothScroll();

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });

  // slick
  $('.stills').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
