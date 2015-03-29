'use strict';

function validateEmail(email) {
  // http://stackoverflow.com/a/46181/11236
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateLink(link) {
  // http://stackoverflow.com/a/46181/11236
  var re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  return re.test(link);
}


function validateL() {
  // $("#result").text("");
  var link = $(".case__input--link").val();
  if (validateLink(link)) {
    $(".case__input--link").addClass("contacts__input--success");
  } else {
    $("#result").text(link + "is not valid :(");
    $(".case__input--link").addClass("contacts__input--error");
  }
  return false;
}


function validateE() {
  $("#result").text("");
  var email = $(".case__input--email").val();
  if (validateEmail(email)) {
    $(".case__input--email").addClass("contacts__input--success");
  } else {
    $("#result").text(email + "is not valid :(");
    $(".case__input--email").addClass("contacts__input--error");
  }
  return false;
}

$(document).ready(function() {
  $(".case__input--email").on("blur", validateE);
  $(".case__input--email").focusin(function() {
    $(this).removeClass("contacts__input--success contacts__input--error");
  });

  $(".case__input--link").on("blur", validateL);
  $(".case__input--link").focusin(function() {
    $(this).removeClass("contacts__input--success contacts__input--error");
  });

  $(".case__input--team").on("blur", function() {
    $(this).removeClass("contacts__input--success contacts__input--error");
    if ($(this).val()) {
      $(this).addClass("contacts__input--success");
    } else {
      $(this).addClass("contacts__input--error");
    }
  });



  $('.case__input--email, .case__input--team, .case__input--link').on('blur keyup', function() {
    if ($('.case__input--email').hasClass('contacts__input--success') && $('.case__input--team').hasClass('contacts__input--success') && $('.case__input--link').hasClass('contacts__input--success')) {
      $('.case__submit').prop('disabled', false);
    } else {
      $('.case__submit').prop('disabled', true);
    }
  });





  $('.case__form').submit(function(event) {
    var caseData = {
      'team': $('.case__input--team').val(),
      'email': $('.case__input--email').val(),
      'link': $('.case__input--link').val(),
      'title': document.title
    };
    if ($('.case__input--email').hasClass('contacts__input--success') && $('.case__input--team').hasClass('contacts__input--success') && $('.case__input--link').hasClass('contacts__input--success')) {
      $.ajax({
          type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url: '/scripts/case-process2.php', // the url where we want to POST
          data: caseData, // our data object
          dataType: 'json', // what type of data do we expect back from the server
          encode: true
        })
        // using the done promise callback
        .done(function(data) {
          // log data to the console so we can see
          console.log(data);
          // here we will handle errors and validation messages
          if (data.success) {
            // ALL GOOD! just show the success message!
            // $('form').append('<div class="alert alert-success">' + data.message + '</div>');
            // usually after form submission, you'll want to redirect
            $('.case__submit').prop('disabled', true);
            $('.contacts__submit').after('<p class="contacts__submit-message"> Спасибо, ваша работа отправлена.<br>Ожидайте результатов.</p>');
            $('.contacts__submit-message').hide().fadeIn();
            //
            // window.location = '/thank-you'; // redirect a user to another page
          }
        })
        // using the fail promise callback
        .fail(function(data) {
          // show any errors
          // best to remove for production
          console.log(data);
        });
    }
    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
  });
});
