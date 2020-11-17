/* 
==========================================
      *** HELPER FUNCTIONS  ***
==========================================
*/

export function activateAccordion() {
  $(this).toggleClass('active');
  const $panel = $(this).next();

  if (parseInt($panel.css('max-height'))) {
    $panel.css('max-height', '0px');
  } else {
    $panel.css('max-height', $panel.get(0).scrollHeight + 'px');
  }
}


export function makeVirtualTourSection(property) {
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
  

  export function makeStillsSection(obj) {
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
 

  /* ==================================
                PRIVATE
  ==================================  */

  function createImageThumbnail(image) {
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
    `;
  }