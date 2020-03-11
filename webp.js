// Call the program by running 'node webp.js'

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["trailer-stills-copy/*.png"], "trailer-stills-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
