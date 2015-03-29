  'use strict';

// var time = moment('2015/03/22 23:59:59').utcOffset(3);
// var time = moment();
var time = new Date('3/31/2015 21:00:00 UTC');
$('.header__timer, .registration__timer, .soon__timer--registration').countdown(time, function(event) {
  $(this).html(event.strftime('%-D дня, %H:%M:%S'));
});
$('.soon__timer--account').countdown('3/24/2015 21:00:00 UTC', function(event) {
  $(this).html(event.strftime('%H:%M:%S'));
});

/*
$(function() {
  var untilDate = new Date();
  untilDate = new Date(2015, 3 - 1, 23);
  $('.header__timer, .registration__timer, .soon__timer--registration').countdown({
    until: untilDate,
    serverSync: serverTime,
    timezone: +3,
    format: 'dHMS',
    compact: true,
    // layout:'<b>{d<}{dn} {dl} and {d>}'+
    // '{hn} {hl}, {mn} {ml}, {sn} {sl}</b>'
  });

  function serverTime() {
    var time = null;
    $.ajax({
      url: '/scripts/serverTime.php',
      async: false,
      dataType: 'text',
      success: function(text) {
        time = new Date(text);
      },
      error: function(http, message, exc) {
        time = new Date();
      }
    });
    return time;
  }
});
*/
