!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=17)}({0:function(e,t,o){"use strict";o.r(t);t.default=function(){$("footer span").append((new Date).getFullYear()),$(".navButton").on("click",(function(){return $(".header").toggleClass("hide")}))}},1:function(e,t,o){"use strict";function r(){$(this).toggleClass("active");var e=$(this).next();parseInt(e.css("max-height"))?e.css("max-height","0px"):e.css("max-height",e.get(0).scrollHeight+"px")}function s(e){return'\n      <section id="'.concat(e.id,'" class="gallery-section">\n        <div class="gallery-main__container container">\n          <h3 class="gallery-section__heading">').concat(e.title,'</h3>\n      \n          <div class="primary-content__container">\n            <div class="primary-content two-story-content">\n              <h4 class="section-sub-heading">360 Tour Demo</h4>\n              <div class="resp-container" data-title="').concat(e.title,'" data-src="').concat(e.matterportLink,'">\n              </div>\n            </div>\n          </div>\n      \n          <div class="tour-link">\n            <h4 class="section-sub-heading">360 Tour Link:</h4>\n            <a href="').concat(e.matterportLink,'"\n              class="gallery-main__sect--link">').concat(e.matterportLink,"</a>\n          </div>   \n        </div>\n      </section>\n    ")}function p(){var e=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var o=e.target.dataset.title,r=e.target.dataset.src;e.target.innerHTML='\n        <iframe title="'.concat(o,' Virtual Tour" class="resp-iframe"\n        src=\'').concat(r,"' frameborder='0' allowfullscreen allow='vr'></iframe>\n      "),t.unobserve(e.target)}}))})),t=document.querySelector(".resp-container");e.observe(t)}function a(e){return'\n      <section id="'.concat(e.id,'" class="gallery-section">\n        <div class="gallery-main__container container">\n          <h3 class="gallery-section__heading">').concat(e.title,"</h3>\n          ").concat(e.stills.map((function(e){return'\n      <div class="popup" id="pop-'.concat((t=e).id,'">\n        <div class="popup-content">\n          <picture>\n            <source class="pop-img lazy" data-srcset="').concat(t.popWebpSrc,'" alt="').concat(t.title,'"\n              type="image/webp">\n            <img class="pop-img lazy" data-src="').concat(t.popSrc,'" alt="').concat(t.title,'" type="image/jpg">\n          </picture>\n          <a href="#stills" class="close">X</a>\n        </div>\n      </div>\n    ');var t})).join(""),'    \n          <div id="stills">\n          ').concat(e.stills.map((function(e){return'\n      <div class="image-box" id="norm-'.concat((t=e).id,'">\n        <a href="#pop-').concat(t.id,'">\n          <picture>\n            <source class="lazy" srcset="').concat(t.thumbWebpSrc,'" alt="').concat(t.title,'" type="image/webp">\n            <source class="lazy" srcset="').concat(t.thumbSrc,'" alt="').concat(t.title,'" type="image/jpeg">\n            <img class="lazy" src="').concat(t.thumbSrc,'" alt="').concat(t.title,'" type="image/jpg">\n          </picture>\n        </a>\n      </div>\n    ');var t})).join(""),"\n          </div>\n        </div>\n      </section>\n    ")}o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return p})),o.d(t,"b",(function(){return a}))},17:function(e,t,o){"use strict";o.r(t);var r=[{id:"palisades",title:"Pacific Palisades Mansion",matterportLink:"https://my.matterport.com/show/?m=woH8sLvK4gp"},{id:"budgetWarehouse",title:"Budget Warehouse",matterportLink:"https://my.matterport.com/show/?m=undQxgYvmA7"},{id:"twoStoryHouse",title:"2 Story House",matterportLink:"https://my.matterport.com/show/?m=TrcK1ZYb8m6"},{id:"hollywoodEstate",title:"Hollywood Hills Estate",matterportLink:"https://my.matterport.com/show/?m=2Dxkj6c6Wf1"},{id:"kellerWilliams",title:"Keller Williams Signature Realty",matterportLink:"https://my.matterport.com/show/?m=v5BKc8t9guG"},{id:"seniorLiving",title:"Senior Assisted Living Home",matterportLink:"https://my.matterport.com/show/?m=6AGcit2xL4h"},{id:"happyPaws",title:"Happy Paws Grooming",matterportLink:"https://my.matterport.com/show/?m=wtKwoxzn2H8"},{id:"sanGabMiniMans",title:"San Gabriel Valley Mini Mansion",matterportLink:"https://my.matterport.com/show/?m=jpo1xxZWoGi"},{id:"hollywoodHomeGuest",title:"Hollywood Hills Home with Guest House",matterportLink:"https://my.matterport.com/show/?m=3GYdw4MnKf7"},{id:"fourPlex",title:"4-Plex",matterportLink:"https://my.matterport.com/show/?m=afxgJA4ALGq"}],s=[{id:"stills-matterportPro2",title:"Matterport Pro 2 Photos",stills:[{id:"hazleton-1",thumbSrc:"./assets/gallery-photos/matterport-pro-2/82-Hazleton-1-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-1-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/82-Hazleton-1-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-1-1500w.webp"},{id:"hazleton-2",thumbSrc:"./assets/gallery-photos/matterport-pro-2/82-Hazleton-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-2-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/82-Hazleton-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/82-Hazleton-2-1500w.webp"},{id:"990-presidio-dr",thumbSrc:"./assets/gallery-photos/matterport-pro-2/990-Presidio-Dr-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/990-Presidio-Dr-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/990-Presidio-Dr-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/990-Presidio-Dr-1500w.webp"},{id:"1711-Morning-Dove-Ln",thumbSrc:"./assets/gallery-photos/matterport-pro-2/1711-Morning-Dove-Ln-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/1711-Morning-Dove-Ln-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/1711-Morning-Dove-Ln-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/1711-Morning-Dove-Ln-1500w.webp"},{id:"4105-Edgehill-Dr",thumbSrc:"./assets/gallery-photos/matterport-pro-2/4105-Edgehill-Dr-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4105-Edgehill-Dr-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/4105-Edgehill-Dr-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4105-Edgehill-Dr-1500w.webp"},{id:"4520-Gloria-Ave-1",thumbSrc:"./assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-1-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-1-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-1-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-1-1500w.webp"},{id:"4520-Gloria-Ave-2",thumbSrc:"./assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-2-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/4520-Gloria-Ave-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/4520-Gloria-Ave-2-1500w.webp"},{id:"13068-Edgemont-St",thumbSrc:"./assets/gallery-photos/matterport-pro-2/13068-Edgemont-St-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/13068-Edgemont-St-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/13068-Edgemont-St-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/13068-Edgemont-St-1500w.webp"},{id:"15151-Friar-St",thumbSrc:"./assets/gallery-photos/matterport-pro-2/15151-Friar-St-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/15151-Friar-St-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/15151-Friar-St-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/15151-Friar-St-1500w.webp"},{id:"16940-Chatsworth-St",thumbSrc:"./assets/gallery-photos/matterport-pro-2/16940-Chatsworth-St-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/16940-Chatsworth-St-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/16940-Chatsworth-St-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/16940-Chatsworth-St-1500w.webp"},{id:"24708-Bombay-Ave",thumbSrc:"./assets/gallery-photos/matterport-pro-2/24708-Bombay-Ave-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/24708-Bombay-Ave-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/24708-Bombay-Ave-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/24708-Bombay-Ave-1500w.webp"},{id:"9956-Shiloh-Ave",thumbSrc:"./assets/gallery-photos/matterport-pro-2/9956-Shiloh-Ave-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/9956-Shiloh-Ave-500w.webp",popSrc:"./assets/gallery-photos/matterport-pro-2/9956-Shiloh-Ave-1500w.jpg",popWebpSrc:"./assets/gallery-photos/matterport-pro-2-webp/9956-Shiloh-Ave-1500w.webp"}]},{id:"stills-drone",title:"2.7k Drone Photos",stills:[{id:"drone-valley",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-valley-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-valley-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-valley-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-valley-1500w.webp"},{id:"drone-pool",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-pool-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pool-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-pool-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pool-1500w.webp"},{id:"drone-pool-2",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-pool-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pool-2-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-pool-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pool-2-1500w.webp"},{id:"drone-house",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-house-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-house-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-house-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-house-1500w.webp"},{id:"drone-mall",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-mall-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-mall-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-mall-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-mall-1500w.webp"},{id:"drone-mall-2",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-mall-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-mall-2-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-mall-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-mall-2-1500w.webp"},{id:"drone-houses",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-houses-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-houses-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-houses-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-houses-1500w.webp"},{id:"drone-houses-2",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-houses-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-houses-2-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-houses-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-houses-2-1500w.webp"},{id:"drone-office-building",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-office-building-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-office-building-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-office-building-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-office-building-1500w.webp"},{id:"drone-pier",thumbSrc:"./assets/gallery-photos/2.7k-drone/drone-pier-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pier-500w.webp",popSrc:"./assets/gallery-photos/2.7k-drone/drone-pier-1500w.jpg",popWebpSrc:"./assets/gallery-photos/2.7k-drone-webp/drone-pier-1500w.webp"}]},{id:"stills-nikon",title:"Nikon DSLR Photos",stills:[{id:"drone-2nd-&-pch",thumbSrc:"./assets/gallery-photos/nikon-dslr/2nd-&-pch-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/2nd-&-pch-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/2nd-&-pch-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/2nd-&-pch-1500w.webp"},{id:"drone-bedroom",thumbSrc:"./assets/gallery-photos/nikon-dslr/bedroom-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/bedroom-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/bedroom-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/bedroom-1500w.webp"},{id:"drone-bedroom-2",thumbSrc:"./assets/gallery-photos/nikon-dslr/bedroom-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/bedroom-2-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/bedroom-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/bedroom-2-1500w.webp"},{id:"drone-game-room",thumbSrc:"./assets/gallery-photos/nikon-dslr/game-room-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/game-room-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/game-room-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/game-room-1500w.webp"},{id:"drone-backyard",thumbSrc:"./assets/gallery-photos/nikon-dslr/backyard-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/backyard-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/backyard-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/backyard-1500w.webp"},{id:"drone-backyard-2",thumbSrc:"./assets/gallery-photos/nikon-dslr/backyard-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/backyard-2-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/backyard-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/backyard-2-1500w.webp"},{id:"drone-frontyard",thumbSrc:"./assets/gallery-photos/nikon-dslr/frontyard-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/frontyard-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/frontyard-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/frontyard-1500w.webp"},{id:"drone-frontyard-2",thumbSrc:"./assets/gallery-photos/nikon-dslr/frontyard-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/frontyard-2-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/frontyard-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/frontyard-2-1500w.webp"},{id:"drone-dining-room",thumbSrc:"./assets/gallery-photos/nikon-dslr/dining-room-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/dining-room-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/dining-room-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/dining-room-1500w.webp"},{id:"drone-dining-room-2",thumbSrc:"./assets/gallery-photos/nikon-dslr/dining-room-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/dining-room-2-500w.webp",popSrc:"./assets/gallery-photos/nikon-dslr/dining-room-2-1500w.jpg",popWebpSrc:"./assets/gallery-photos/nikon-dslr-webp/dining-room-2-1500w.webp"}]},{id:"stills-virtual-staging",title:"Virtual Staging",stills:[{id:"virtual-elm-dr-before",thumbSrc:"./assets/gallery-photos/virtual-staging/elm-dr-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/elm-dr-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-before-1500w.webp"},{id:"virtual-elm-dr-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/elm-dr-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/elm-dr-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-virtual-1500w.webp"},{id:"virtual-elm-dr-2-before",thumbSrc:"./assets/gallery-photos/virtual-staging/elm-dr-2-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-2-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/elm-dr-2-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-2-before-1500w.webp"},{id:"virtual-elm-dr-2-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/elm-dr-2-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-2-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/elm-dr-2-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/elm-dr-2-virtual-1500w.webp"},{id:"virtual-monterey-ave-before",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-before-1500w.webp"},{id:"virtual-monterey-ave-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-virtual-1500w.webp"},{id:"virtual-monterey-ave-2-before",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-2-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-2-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-2-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-2-before-1500w.webp"},{id:"virtual-monterey-ave-2-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-2-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-2-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-2-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-2-virtual-1500w.webp"},{id:"virtual-monterey-ave-3-before",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-3-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-3-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-3-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-3-before-1500w.webp"},{id:"virtual-monterey-ave-3-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-3-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-3-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/monterey-ave-3-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/monterey-ave-3-virtual-1500w.webp"},{id:"virtual-lincoln-st-before",thumbSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-before-1500w.webp"},{id:"virtual-lincoln-st-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-virtual-1500w.webp"},{id:"virtual-lincoln-st-2-before",thumbSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-2-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-2-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-2-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-2-before-1500w.webp"},{id:"virtual-lincoln-st-2-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-2-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-2-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/lincoln-st-2-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/lincoln-st-2-virtual-1500w.webp"},{id:"virtual-bedroom-before",thumbSrc:"./assets/gallery-photos/virtual-staging/bedroom-before-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/bedroom-before-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/bedroom-before-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/bedroom-before-1500w.webp"},{id:"virtual-bedroom-virtual",thumbSrc:"./assets/gallery-photos/virtual-staging/bedroom-virtual-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/virtual-staging-webp/bedroom-virtual-500w.webp",popSrc:"./assets/gallery-photos/virtual-staging/bedroom-virtual-1500w.jpg",popWebpSrc:"./assets/gallery-photos/virtual-staging-webp/bedroom-virtual-1500w.webp"}]},{id:"stills-floor-plans",title:"Floor Plans",stills:[{id:"plans-hazleton-irvine",thumbSrc:"./assets/gallery-photos/floor-plans/hazleton-irvine-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/floor-plans-webp/hazleton-irvine-500w.webp",popSrc:"./assets/gallery-photos/floor-plans/hazleton-irvine-1200w.jpg",popWebpSrc:"./assets/gallery-photos/floor-plans-webp/hazleton-irvine-1200w.webp"},{id:"plans-hazleton-irvine-2",thumbSrc:"./assets/gallery-photos/floor-plans/hazleton-irvine-2-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/floor-plans-webp/hazleton-irvine-2-500w.webp",popSrc:"./assets/gallery-photos/floor-plans/hazleton-irvine-2-1200w.jpg",popWebpSrc:"./assets/gallery-photos/floor-plans-webp/hazleton-irvine-2-1200w.webp"},{id:"plans-roca-way-monterey-park",thumbSrc:"./assets/gallery-photos/floor-plans/roca-way-monterey-park-500w.jpg",thumbWebpSrc:"./assets/gallery-photos/floor-plans-webp/roca-way-monterey-park-500w.webp",popSrc:"./assets/gallery-photos/floor-plans/roca-way-monterey-park-1200w.jpg",popWebpSrc:"./assets/gallery-photos/floor-plans-webp/roca-way-monterey-park-1200w.webp"}]}],p=o(0),a=o(1);o(6);$((function(){Object(p.default)(),$(".loader-container").addClass("remove"),$(".accordion").on("click",a.a),$(".gallery-main__nav-link").smoothScroll();var e=$(".gallery-main");e.html(Object(a.c)(r[0])),Object(a.d)();var t={dots:!0,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:670,settings:{slidesToShow:1,slidesToScroll:1}}]};$(".gallery-main__nav").on("click",(function(o){if("A"===o.target.tagName){if(o.target.href.includes("#stills")){var p=s.find((function(e){return o.target.href.includes(e.id)}));return e.html(Object(a.b)(p)),new LazyLoad({elements_selector:".lazy"}),void $("#stills").slick(t)}var l=r.find((function(e){return o.target.href.includes(e.id)}));e.html(Object(a.c)(l)),Object(a.d)()}}))}))},6:function(e,t,o){}});