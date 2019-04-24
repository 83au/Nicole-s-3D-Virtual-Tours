$(document).ready(() => {
  // Toggle header background visibility when mobile menu is shown
  const navButton = document.querySelector('.navButton');
  const input = document.getElementById('menuToggle');
  navButton.addEventListener('click', () => {
    if (!input.checked) {
      document.querySelector('.header').classList.add('hide');
    } else if (input.checked) {
      document.querySelector('.header').classList.remove('hide');
    }
  });

  /* TODO:
    Stop popups from loading on mobile by creating the popups with JS only if
    screen is larger than mobile
  */

  // Highlight current page with jquery
  $(function() {
    $('a').each(function() {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });
});
