'use strict';

var main = function main() {
  // Set copyright date
  $('footer span').append(new Date().getFullYear());

  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(function () {
    return $('.header').toggleClass('hide');
  });

  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav-link').smoothScroll();

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });

  // Slick
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

  var properties = [{
    id: 'two-story-house',
    title: 'Two Story House',
    matterportLink: 'https://my.matterport.com/show/?m=y3GUmkCHCeK',
    stills: [{
      id: '2-story-foyer',
      title: 'Foyer',

      popWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
      popSrcPath: './assets/2-story-stills/foyer-1500w.jpg',
      sectionLink: '#2-story-stills',

      thumbWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
      thumbSrcPath: './assets/2-story-stills/foyer-700w.jpg'
    }]
  }];

  $('.gallery-main').html(makePropertySection(properties[0]));

  function makePropertySection(property) {
    return '\n      <section id="' + property.id + '" class="gallery-section">\n        <div class="gallery-main__container container">\n          <h3 class="gallery-section__heading">' + property.title + '</h3>\n      \n          <div class="primary-content__container">\n            <div class="primary-content two-story-content">\n              <h4 class="section-sub-heading">360 Tour Demo</h4>\n              <div class="resp-container">\n                <iframe title="' + property.title + ' Virtual Tour" class="resp-iframe"\n                  src=\'' + property.matterportLink + '\' frameborder=\'0\' allowfullscreen allow=\'vr\'></iframe>\n              </div>\n            </div>\n          </div>\n      \n          <div class="tour-link">\n            <h4 class="section-sub-heading">360 Tour Link:</h4>\n            <a href="' + property.matterportLink + '"\n              class="gallery-main__sect--link">' + property.matterportLink + '</a>\n          </div>   \n\n          ' + property.stills.forEach(function (still) {
      return createImagePopup(still);
    }) + '    \n\n          <h4 class="section-sub-heading">Still Shots</h4>\n          <div id="2-story-stills" class="stills">\n          ' + property.stills.forEach(function (still) {
      return createImageThumbnail(still);
    }) + '\n          </div>\n        </div>\n      </section>\n    ';
  }

  function createImageThumbnail(image) {
    return '\n      <div class="image-box" id="norm-' + image.id + '">\n        <a href="#pop-' + image.id + '">\n          <picture>\n            <source class="lazy" srcset="' + image.thumbWebpSrcPath + '" alt="' + image.title + '" type="image/webp">\n\n            <source class="lazy" srcset="' + image.thumbSrcPath + '" alt="' + image.title + '" type="image/jpeg">\n            <img class="lazy" src="' + image.thumbSrcPath + '" alt="' + image.title + '" type="image/jpg">\n          </picture>\n        </a>\n      </div>\n    ';
  }

  function createImagePopup(image) {
    return '\n      <div class="popup" id="pop-' + image.id + '">\n        <div class="popup-content">\n          <picture>\n            <source class="pop-img lazy" data-srcset="' + image.popWebpSrcPath + '" alt="' + image.title + '"\n              type="image/webp">\n            <img class="pop-img lazy" data-src="' + image.popSrcPath + '" alt="' + image.title + '" type="image/jpg">\n          </picture>\n          <a href="' + image.sectionLink + '" class="close">X</a>\n        </div>\n      </div>\n    ';
  }

  // Remove loading animation when page finishes loading
  $(window).on('load', function () {
    return $('.loader-container').addClass('remove');
  });
};

// Initialize
$(main);