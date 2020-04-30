// Call the program by running 'node webp.js'

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["drone/*.jpg"], "drone-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(() => {
  console.log("Images converted!");
});
