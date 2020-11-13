// Call the program by running 'node webp.js'

const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["2.7k-drone/*.jpg"], "2.7k-drone-webp", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(() => {
  console.log("Images converted!");
});
