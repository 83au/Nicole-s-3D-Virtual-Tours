const main = () => {
  // TODO: Add loading animation
  $(window).on('load', () => {
    console.clear();
    console.log("PAGE FULLY LOADED");
    // TODO: Remove loading animation
  });


  // Set copyright date
  const date = new Date();
  const currentYear = date.getFullYear();
  $('footer span').append(currentYear);

  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(() => $('.header').toggleClass('hide'));


  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav--link').smoothScroll();


  // Lazy load dollhouse images using remote cdn
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
};


$(document).ready(main);
