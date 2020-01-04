const main = () => {
  // Set copyright date
  $('footer span').append(new Date().getFullYear());

  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(() => $('.header').toggleClass('hide'));

  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav-link').smoothScroll();

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });

  // Slick
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

  // Remove loading animation when page finishes loading
  $(window).on('load', () => $('.loader-container').addClass('remove'));
};

// Initialize
$(main);
