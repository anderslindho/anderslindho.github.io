$(function() {
  new WOW().init()

  $('#menu-btn').click(function() {
    openNav();
  });

  $('#close-menu-btn').click(function() {
    closeNav();
  });

  $('.menu-link').click(function() {
    closeNav();
  });

  // Smooth scrolling
  $("a[href*='#']").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {

      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          500
        );
        return false;
      }
    }
  });

  function openNav() {
    $('#menu').css('height', '100%');
  }

  function closeNav() {
    $('#menu').css('height', '0%');
  }
});

