import global from './global';
import './scss/pages/setup.scss';

const setup = () => {
  $(global);

  const setupVideo = document.querySelector('.setup-main__vid-container');
  setupVideo.addEventListener('click', () => {
    setupVideo.innerHTML = `
      <div class="setup-main__resp-container">
        <iframe
          width="560"
          height="315"
          class="resp-iframe"
          src="https://www.youtube.com/embed/lNRGh5udg24?rel=0&autoplay=1"
          frameborder="0"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `;
  });
};

$(setup);
