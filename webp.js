// Call the program by running 'node webp.js'

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["nikon-dslr/*.jpg"], "nikon-dslr-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(() => {
  console.log("Images converted!");
});
