$(document).ready(function() {

  var $menu = $('.navbar');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0 && (!$menu.hasClass('navbar--scroll'))) {
      $menu.addClass('navbar--scroll');

    } else if ($(this).scrollTop() <= 0 && $menu.hasClass('navbar--scroll')) {
      $menu.removeClass('navbar--scroll');

    }
  }); //scroll
});
