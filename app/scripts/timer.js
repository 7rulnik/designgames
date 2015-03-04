  'use strict';
$('.header__timer, .registration__timer, .soon__timer--registration').countdown('2015/03/16', function(event) {
  $(this).html(event.strftime('%D дней, %H:%M:%S'));
});
$('.soon__timer--account').countdown('2015/03/09', function(event) {
  $(this).html(event.strftime('%D дней, %H:%M:%S'));
});
