'use strict';

$(document).ready(function () {
  // TODO: Add loading animation
  $(window).on('load', function () {
    console.log("PAGE FULLY LOADED");
    // TODO: Remove loading animation
  });

  // toggle header background visibility when mobile menu is shown
  $(function () {
    $('.navButton').click(function () {
      return $('.header').toggleClass('hide');
    });
  });

  // highlight current page in jquery
  $(function () {
    $('a').each(function () {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  // smooth scroll for safari and ios browsers
  $('.gallery-main__nav--link').smoothScroll();

  // Lazy load dollhouse images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  // slick
  $('.stills').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});