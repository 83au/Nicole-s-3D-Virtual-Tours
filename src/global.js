const global = () => {
  // Set copyright date
  $("footer span").append(new Date().getFullYear());

  // Toggle header background visibility when mobile menu is clicked
  $(".navButton").on("click", () => $(".header").toggleClass("hide"));
};

export default global;
