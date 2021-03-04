import global from "./global";

const main = () => {
  global();

  // Home page slick
  const VidsSlickConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  $(".video-slider").slick(VidsSlickConfig);

  // Home page iframes lazy-load
  const vidSlides = document.querySelectorAll(".promo-vid-slide");
  vidSlides.forEach((vidSlide) => {
    vidSlide.addEventListener("click", (event) => {
      const source = vidSlide.dataset.source;
      vidSlide.innerHTML = `
        <div class="home__resp-container">
          <iframe
            width="360"
            height="515"
            title="Promotional video"
            class="resp-iframe"
            src="${source}"
            frameborder="0"
            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
    });
  });
};

// Initialize
$(main);
