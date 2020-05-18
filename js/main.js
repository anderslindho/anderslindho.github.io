$(function() {
  start();

  $('#menu-btn').click(function() {
    openNav();
  });

  $('#close-menu-btn').click(function() {
    closeNav();
  });

  $('.menu-link').click(function() {
    closeNav();
  });

  function start() {
    new WOW().init()
  }

  function openNav() {
    $('#menu').css('height', '100%');
  }

  function closeNav() {
    $('#menu').css('height', '0%');
  }
});

