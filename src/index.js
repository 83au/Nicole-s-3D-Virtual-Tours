import virtualTours from './gallery-data/virtual-tours/virtual-tours';
import photosData from './gallery-data/photos-data/photos-data';
import './scss/main.scss';

const main = () => {
  $('.loader-container').addClass('remove');
  
  // Set copyright date
  $('footer span').append(new Date().getFullYear());


  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(() => $('.header').toggleClass('hide'));


  // Services page accordion menu
  function activateAccordion() {
    $(this).toggleClass('active');
    const $panel = $(this).next();

    if (parseInt($panel.css('max-height'))) {
      $panel.css('max-height', '0px');
    } else {
      $panel.css('max-height', $panel.get(0).scrollHeight + 'px');
    }
  }
  $('.accordion').click(activateAccordion);


  // Home page slick 
  const VidsSlickConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  $('.video-slider').slick(VidsSlickConfig);


  // Smooth scroll for safari and ios browsers
  $('.gallery-main__nav-link').smoothScroll();


  // Insert first property into DOM
  const $galleryMain = $('.gallery-main');
  $galleryMain.html(makeVirtualTourSection(virtualTours[0]));


  const ImagesSlickConfig = {
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

  function imagesInit() {
    // Lazy load images using remote cdn
    var lazyLoad = new LazyLoad({
      elements_selector: ".lazy",
    });

    // Slick
    $('#stills').slick(ImagesSlickConfig);
  }
  imagesInit();


  // Add link event listener
  $('.gallery-main__nav').click(e => {
    if (e.target.tagName !== 'A') return;
    if (e.target.href.includes('#drone')) {
      $galleryMain.html(makeDroneSection());
      imagesInit();
      return;
    }
    if (e.target.href.includes('#stills')) {
      const stillsObj = photosData.find(obj => e.target.href.includes(obj.id));
      $galleryMain.html(makeStillsSection(stillsObj));
      imagesInit();
      return;
    }
    const property = virtualTours.find(prop => e.target.href.includes(prop.id));
    $galleryMain.html(makeVirtualTourSection(property));
    imagesInit();
  });


  function makeDroneSection() {
    return `
      <section id="drone" class="gallery-section">
        <div class="gallery-main__container container">
          <h3 class="gallery-section__heading">Drone Footage</h3>

          <div class="primary-content__container">
            <div class="primary-content">
              <h4 class="section-sub-heading">Drone Footage Video</h4>
              <div class="resp-container">
                <iframe class="resp-iframe" width="560" height="315" src="https://www.youtube.com/embed/D2NwSjDd4LQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          ${virtualTours[virtualTours.length - 1].map(still => createImagePopup(still)).join('')}    

          <h4 class="section-sub-heading">Still Shots</h4>
          <div id="drone-stills" class="stills">
          ${virtualTours[virtualTours.length - 1].map(still => createImageThumbnail(still)).join('')}
          </div>
        </div>
      </section>
    `
  }


  function makeVirtualTourSection(property) {
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
        </div>
      </section>
    `;
  }

  function makeStillsSection(obj) {
    return `
      <section id="${obj.id}" class="gallery-section">
        <div class="gallery-main__container container">
          <h3 class="gallery-section__heading">${obj.title}</h3>
          ${obj.stills.map(still => createImagePopup(still)).join('')}    
          <div id="stills">
          ${obj.stills.map(still => createImageThumbnail(still)).join('')}
          </div>
        </div>
      </section>
    `
  }
 

  function createImageThumbnail(image) {
    console.log(image.id);
    return `
      <div class="image-box" id="norm-${image.id}">
        <a href="#pop-${image.id}">
          <picture>
            <source class="lazy" srcset="${image.thumbWebpSrc}" alt="${image.title}" type="image/webp">
            <source class="lazy" srcset="${image.thumbSrc}" alt="${image.title}" type="image/jpeg">
            <img class="lazy" src="${image.thumbSrc}" alt="${image.title}" type="image/jpg">
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
            <source class="pop-img lazy" data-srcset="${image.popWebpSrc}" alt="${image.title}"
              type="image/webp">
            <img class="pop-img lazy" data-src="${image.popSrc}" alt="${image.title}" type="image/jpg">
          </picture>
          <a href="#stills" class="close">X</a>
        </div>
      </div>
    `
  }
};

// Initialize
$(main);
