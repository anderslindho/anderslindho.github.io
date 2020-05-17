$(function() {
  new WOW().init();

  $('#menu-btn').click(function() {
    openNav();
  });

  $('#close-menu-btn').click(function() {
    closeNav();
  });

  $('.menu-link').click(function() {
    closeNav();
  });

  function openNav() {
    $('#menu').css('height', '100%');
  }

  function closeNav() {
    $('#menu').css('height', '0%');
  }
});

