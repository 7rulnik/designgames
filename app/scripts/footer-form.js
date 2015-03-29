'use strict';

$(document).ready(function() {

  $('#footer__email').on('keyup', function() {
      $('.footer__submit').prop('disabled', false);
  });

  // process the form
  $('.footer__form').submit(function(event) {
    $('.footer__submit-message').remove();
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      'email': $('#footer__email').val()
    };
    // process the form
    if ($('#footer__email').val()) {
      $.ajax({
          type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
          url: '/scripts/footer-process.php', // the url where we want to POST
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
            $('.footer__submit').prop('disabled', true);
            $('.footer__input').addClass('footer__input--success');
            $('.footer__form').append('<p class="footer__submit-message">Спасибо за доверие. Вы успешно<br>подписаны.</p>');
            $('.footer__submit-message').hide().fadeIn();
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
