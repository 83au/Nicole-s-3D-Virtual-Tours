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

  const properties = [
    {
      id: 'two-story-house',
      title: 'Two Story House',
      matterportLink: 'https://my.matterport.com/show/?m=y3GUmkCHCeK',
      stills: [
        {
          id: '2-story-foyer',
          title: 'Foyer',

          popWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
          popSrcPath: './assets/2-story-stills/foyer-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/foyer-700w.jpg',
        }
      ]
    }
  ];

  $('.gallery-main').html(makePropertySection(properties[0]));

  function makePropertySection(property) {
    return `
      <section id="${property.id}" class="gallery-section">
        <div class="gallery-main__container container">
          <h3 class="gallery-section__heading">${property.title}</h3>
      
          <div class="primary-content__container">
            <div class="primary-content two-story-content">
              <h4 class="section-sub-heading">360 Tour Demo</h4>
              <div class="resp-container">
                <iframe title="${property.title} Virtual Tour" class="resp-iframe"
                  src='${property.matterportLink}' frameborder='0' allowfullscreen allow='vr'></iframe>
              </div>
            </div>
          </div>
      
          <div class="tour-link">
            <h4 class="section-sub-heading">360 Tour Link:</h4>
            <a href="${property.matterportLink}"
              class="gallery-main__sect--link">${property.matterportLink}</a>
          </div>   

          ${property.stills.forEach(still => createImagePopup(still))}    

          <h4 class="section-sub-heading">Still Shots</h4>
          <div id="2-story-stills" class="stills">
          ${property.stills.forEach(still => createImageThumbnail(still))}
          </div>
        </div>
      </section>
    `;
  }

  function createImageThumbnail(image) {
    return `
      <div class="image-box" id="norm-${image.id}">
        <a href="#pop-${image.id}">
          <picture>
            <source class="lazy" srcset="${image.thumbWebpSrcPath}" alt="${image.title}" type="image/webp">

            <source class="lazy" srcset="${image.thumbSrcPath}" alt="${image.title}" type="image/jpeg">
            <img class="lazy" src="${image.thumbSrcPath}" alt="${image.title}" type="image/jpg">
          </picture>
        </a>
      </div>
    `;
  }

  function createImagePopup(image) {
    return `
      <div class="popup" id="pop-${image.id}">
        <div class="popup-content">
          <picture>
            <source class="pop-img lazy" data-srcset="${image.popWebpSrcPath}" alt="${image.title}"
              type="image/webp">
            <img class="pop-img lazy" data-src="${image.popSrcPath}" alt="${image.title}" type="image/jpg">
          </picture>
          <a href="${image.sectionLink}" class="close">X</a>
        </div>
      </div>
    `
  }

  // Remove loading animation when page finishes loading
  $(window).on('load', () => $('.loader-container').addClass('remove'));
};

// Initialize
$(main);
