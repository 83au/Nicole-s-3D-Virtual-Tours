const main = () => {
  // Set copyright date
  $('footer span').append(new Date().getFullYear());

  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(() => $('.header').toggleClass('hide'));

  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav-link').smoothScroll();


  // Add properties to DOM
  const properties = [
    {
      id: 'two-story-house',
      title: 'Two Story House',
      matterportLink: 'https://my.matterport.com/show/?m=y3GUmkCHCeK',
      stills: [
        {
          id: '2-story-foyer',
          title: 'Foyer',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
          popSrcPath: './assets/2-story-stills/foyer-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/foyer-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/foyer-700w.jpg',
        },
        {
          id: '2-story-foyer-2',
          title: 'Foyer',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/foyer-2-1500w.webp',
          popSrcPath: './assets/2-story-stills/foyer-2-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/foyer-2-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/foyer-2-700w.jpg',
        },
        {
          id: '2-story-foyer-3',
          title: 'Foyer',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/foyer-3-1500w.webp',
          popSrcPath: './assets/2-story-stills/foyer-3-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/foyer-3-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/foyer-3-700w.jpg',
        },
        {
          id: '2-story-living-room',
          title: 'Living room',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/living-room-1500w.webp',
          popSrcPath: './assets/2-story-stills/living-room-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/living-room-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/living-room-700w.jpg',
        },
        {
          id: '2-story-bedroom',
          title: 'Bedroom',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/bedroom-1500w.webp',
          popSrcPath: './assets/2-story-stills/bedroom-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/bedroom-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/bedroom-700w.jpg',
        },
        {
          id: '2-story-bedroom-2',
          title: 'Bedroom',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/bedroom-2-1500w.webp',
          popSrcPath: './assets/2-story-stills/bedroom-2-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/bedroom-2-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/bedroom-2-700w.jpg',
        },
        {
          id: '2-story-bedroom-3',
          title: 'Bedroom',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/bedroom-3-1500w.webp',
          popSrcPath: './assets/2-story-stills/bedroom-3-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/bedroom-3-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/bedroom-3-700w.jpg',
        },
        {
          id: '2-story-kitchen',
          title: 'Kitchen',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/kitchen-1500w.webp',
          popSrcPath: './assets/2-story-stills/kitchen-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/kitchen-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/kitchen-700w.jpg',
        },
        {
          id: '2-story-front-yard',
          title: 'Front yard',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/front-yard-1500w.webp',
          popSrcPath: './assets/2-story-stills/front-yard-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/front-yard-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/front-yard-700w.jpg',
        },
        {
          id: '2-story-pool',
          title: 'Pool',
          stillsId: '2-story-stills',
          popWebpSrcPath: './assets/2-story-stills-webp/pool-1500w.webp',
          popSrcPath: './assets/2-story-stills/pool-1500w.jpg',
          sectionLink: '#2-story-stills',

          thumbWebpSrcPath: './assets/2-story-stills-webp/pool-1500w.webp',
          thumbSrcPath: './assets/2-story-stills/pool-700w.jpg',
        },       
      ]
    },
    {
      id: 'nightingale',
      title: 'Nightingale Care Assisted Living',
      matterportLink: 'https://my.matterport.com/show/?m=8UjH9SufExS',
      stills: [
        {
          id: 'night-liv',
          title: 'Living room',
          stillsId: 'nightingale-stills',
          popWebpSrcPath: './assets/nightingale-stills-webp/living-room-1500w.webp',
          popSrcPath: './assets/nightingale-stills/living-room-1500w.jpg',
          sectionLink: '#nightingale-stills',

          thumbWebpSrcPath: './assets/nightingale-stills-webp/living-room-700w.webp',
          thumbSrcPath: './assets/nightingale-stills/living-room-700w.jpg',
        },
      ]
    }
  ];

  // Insert first property into DOM
  const $galleryMain = $('.gallery-main');
  $galleryMain.html(makePropertySection(properties[0]));

  // Add link event listeners
  $('.gallery-main__nav').click(e => {
    if (e.target.tagName === 'A') {
      const property = properties.find(prop => e.target.href.includes(prop.id));
      $galleryMain.html(makePropertySection(property));

      // Reapply image plugins
      $('.stills').slick(slickOptions);
      
      var lazyLoad = new LazyLoad({
        elements_selector: ".lazy",
      });
    }
  });

  // Lazy load images using remote cdn
  var lazyLoad = new LazyLoad({
    elements_selector: ".lazy",
  });

  // Slick
  const slickOptions = {
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
  };
  $('.stills').slick(slickOptions);

  function makePropertySection(property) {
    const html = `
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

      <h4 class="section-sub-heading">Still Shots</h4>
    `;

    const popupImages = property.stills.map(still => createImagePopup(still));
    const thumbnailImages = property.stills.map(still => createImageThumbnail(still));

    // Create sestion element
    const section = document.createElement('section');
    section.id = property.id;
    section.className = 'gallery-section';
    
    // Create container
    const container = document.createElement('div');
    container.className = 'gallery-main__container container';
    container.insertAdjacentHTML('afterbegin', html);

    // Create images container
    const imagesContainer = document.createElement('div');
    imagesContainer.id = property.stillsId;
    imagesContainer.className = 'stills';

    // Put images in thumbnail container
    thumbnailImages.forEach(image => imagesContainer.insertAdjacentHTML('beforeend', image));

    // Put images container in container
    container.append(imagesContainer);

    // Put popup images in container
    popupImages.forEach(popup => container.insertAdjacentHTML('beforeend', popup));

    section.append(container);

    return section;
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
