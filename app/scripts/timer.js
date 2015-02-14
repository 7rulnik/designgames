$('.header__timer').countdown('2015/10/01', function(event) {
  $(this).html(event.strftime('%-d дней, %H:%M:%S'));
});
