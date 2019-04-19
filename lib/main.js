'use strict';

$(document).ready(function () {
  // Toggle header background visibility when mobile menu is shown
  var navButton = document.querySelector('.navButton');
  var input = document.getElementById('menuToggle');
  navButton.addEventListener('click', function () {
    if (!input.checked) {
      document.querySelector('.header').classList.add('hide');
    } else if (input.checked) {
      document.querySelector('.header').classList.remove('hide');
    }
  });

  // Highlight current page with jquery
  $(function () {
    $('a').each(function () {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });

  // Lazy Load
  document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.srcset = img.dataset.srcset;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
});

/*

$('.navButton').on('click', () => {
  if ($('input').is(':checked')) {
    $('.header').addClass('hide');
  } else if ($('input').is(':not(:checked)')) {
    $('.header').removeClass('hide');
  }
});
*/