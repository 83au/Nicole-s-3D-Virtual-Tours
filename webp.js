const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["two-story-stills-copy/*.jpg"], "two-story-stills-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
