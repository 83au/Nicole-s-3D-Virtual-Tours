// Call the program by running 'node webp.js'

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["2-story-house-stills/*.jpg"], "2-story-house-stills-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(() => {
  console.log("Images converted!");
});
