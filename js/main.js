$(function() {
  $('#menu-btn').click(function() {
    openNav();
  });

  $('#close-menu-btn').click(function() {
    closeNav();
  });

  $('.menu-link').click(function() {
    closeNav();
  });

  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  function openNav() {
    $('#menu').css('height', '100%');
  }

  function closeNav() {
    $('#menu').css('height', '0%');
  }
});

