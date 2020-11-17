import virtualTours from './gallery-data/virtual-tours/virtual-tours';
import photosData from './gallery-data/photos-data/photos-data';
import { 
  makeVirtualTourSection,
  makeStillsSection,
  activateAccordion,
} from './helpers';
import './scss/main.scss';


const main = () => {
  // Remove loading animation
  $('.loader-container').addClass('remove');
  
  // Set copyright date
  $('footer span').append(new Date().getFullYear());

  // Toggle header background visibility when mobile menu is clicked
  $('.navButton').click(() => $('.header').toggleClass('hide'));

  // Initialize accordion functionality
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
  $('.gallery-main__nav').click(evt => {
    if (evt.target.tagName !== 'A') return;
    if (evt.target.href.includes('#stills')) {
      const stillsObj = photosData.find(obj => evt.target.href.includes(obj.id));
      $galleryMain.html(makeStillsSection(stillsObj));
      imagesInit();
      return;
    }
    const property = virtualTours.find(prop => evt.target.href.includes(prop.id));
    $galleryMain.html(makeVirtualTourSection(property));
    imagesInit();
  });
};

// Initialize
$(main);
