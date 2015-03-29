$(document).ready(function() {

  var $menu = $('.navbar');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0 && (!$menu.hasClass('navbar--scroll'))) {
      $menu.addClass('navbar--scroll');

    } else if ($(this).scrollTop() <= 0 && $menu.hasClass('navbar--scroll')) {
      $menu.removeClass('navbar--scroll');

    }
  }); //scroll

  var $container = $('.viewers .lections').isotope({
    itemSelector: '.viewers__item',
    layoutMode: 'vertical'
      // layout mode options
      // masonry: {
      // columnWidth: 200
      // }
  });
  var filterFns = {};
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });

  $('#filters').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.viewers__filter--active').removeClass('viewers__filter--active');
      $(this).addClass('viewers__filter--active');
    });
  });
});
