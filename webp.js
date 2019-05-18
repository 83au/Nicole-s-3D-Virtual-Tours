const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["matt-logo-copy/*.png"], "matt-logo-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
