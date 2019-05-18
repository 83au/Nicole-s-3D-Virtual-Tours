const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["senior-stills-copy/*.jpg"], "senior-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
