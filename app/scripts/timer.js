  'use strict';

  var time = new Date('4/12/2015 00:00:00 UTC');
  $('.header__timer, .registration__timer, .soon__timer--registration').countdown(time, function(event) {
    $(this).html(event.strftime('%-D дней, %H:%M:%S'));
  });
  $('.soon__timer--account').countdown('3/24/2015 21:00:00 UTC', function(event) {
    $(this).html(event.strftime('%H:%M:%S'));
  });
  var timeFestival = new Date('4/12/2015 00:00:00 UTC');
  $('.festival__timer').countdown(timeFestival, function(event) {
    $(this).html(event.strftime('%-D дней, %H:%M:%S'));
  });


  var timeFinal = new Date('4/9/2015 15:30:00');
  $('.timer').countdown(timeFinal, function(event) {
    $(this).html(event.strftime('%H:%M:%S'));
  });
