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

  // Remove popup images so browser doesn't render them on mobile

  if (window.screen.width < 670) {
    document.querySelector('.popup').img.src = "#";
  }


  // Highlight current page with jquery
  $(function(){
    $('a').each(function() {
      if ($(this).prop('href') === window.location.href) {
        $(this).addClass('current');
      }
    });
  });
});

/*

$('.navButton').on('click', () => {
  if ($('input').is(':checked')) {
    $('.header').addClass('hide');
  } else if ($('input').is(':not(:checked)')) {
    $('.header').removeClass('hide');
  }
});
*/
