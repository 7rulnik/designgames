'use strict';

$(document).ready(function() {

  $('#contacts__name, #contacts__email, #contacts__message').on('blur keyup', function() {
    if ($('#contacts__name').val() && $('#contacts__email').val() && $('#contacts__message').val()) {
      $('.contacts__submit').prop('disabled', false);
    }
  });

  // process the form
  $('.contacts__form').submit(function(event) {
    $('.contacts__submit-message').remove();
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'name': $('input[name=name]').val(),
      'email': $('input[name=email]').val(),
      'message': $('textarea[name=message]').val()
    };
    // process the form
    if ($('#contacts__name').val() && $('#contacts__email').val() && $('#contacts__message').val()) {
      $.ajax({
          type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url: '/scripts/contacts-process.php', // the url where we want to POST
          data: formData, // our data object
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
            $('.contacts__submit').prop('disabled', true);
            $('.contacts__submit').after('<p class="contacts__submit-message"> Спасибо, письмо отправлено.<br>В течение 1-2 дней с вами свяжутся.</p>');
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
