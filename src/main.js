const main = () => {

  // TODO: Add loading animation

  $(window).on('load', () => {
    console.log("PAGE FULLY LOADED");
    // TODO: Remove loading animation
  });

  // toggle header background visibility when mobile menu is shown
  $('.navButton').click(() => $('.header').toggleClass('hide'));

  // highlight current page
  $('a').each(function() {
    if ($(this).prop('href') === window.location.href) {
      $(this).addClass('current');
    }
  });

  // smooth scroll for safari and ios browsers
  $('.gallery-main__nav--link').smoothScroll();

  // Lazy load dollhouse images using remote cdn
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
};

$(document).ready(main);
