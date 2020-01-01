const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["luxury-rental-stills-copy/*.jpg"], "luxury-rental-stills-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
