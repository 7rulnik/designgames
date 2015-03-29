$(document).ready(function() {
  'use strict';

  // архитектура
  $('.sections__item--case.sections__item--architecture').on('click', function(event) {
    event.preventDefault();
    var userEmail = prompt('Введите ваш e-mail, указанный при регистрации (все символы в нижнем регистре)');
    // userEmail.toLowerCase()
    $.getJSON('/json/architecture.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] == userEmail) {
          var isExist = true;
          window.location.href = "/case/fdfb9c88d0-architecture.html"
          break;
        }
      }
      if (!(isExist)) alert('Мы не нашли ваш email в базе данных секции «Архитектура и интерьер».');
    });
  });


  // Интерфейсы
  $('.sections__item--case.sections__item--interface').on('click', function(event) {
    event.preventDefault();
    var userEmail = prompt('Введите ваш e-mail, указанный при регистрации (все символы в нижнем регистре)');
    $.getJSON('/json/interface.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] == userEmail) {
          var isExist = true;
          window.location.href = "/case/328eb58dfd-interface.html"
          break;
        }
      }
      if (!(isExist)) alert('Мы не нашли ваш email в базе данных секции «Интерфейсы».');
    });
  });


  // костюм
  $('.sections__item--case.sections__item--costume').on('click', function(event) {
    event.preventDefault();
    var userEmail = prompt('Введите ваш e-mail, указанный при регистрации (все символы в нижнем регистре)');
    $.getJSON('/json/costume.json', function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] == userEmail) {
          var isExist = true;
          window.location.href = "/case/324f99e8ebe-costume.html"
          break;
        }
      }
      if (!(isExist)) alert('Мы не нашли ваш email в базе данных секции «Дизайн костюма».');
    });
  });


  // брендинг
  $('.sections__item--case.sections__item--branding').on('click', function(event) {
    event.preventDefault();
    var isMironov;
    var isZilini;
    var userEmail = prompt('Введите ваш e-mail, указанный при регистрации (все символы в нижнем регистре)');
    $.getJSON('/json/brandingIkra.json', function(dataMironov) {
      for (var i = 0; i < dataMironov.length; i++) {
        if (dataMironov[i] == userEmail) {
          isMironov = true;
          isZilini;
          window.location.href = '/case/fa6bfj84b13-branding-ikra.html';
          break;
        }
      }
      if (!(isMironov)) {
        console.log('запрос для жилиных');
        $.getJSON('/json/brandingLoft.json', function(dataZilini) {
          for (var i = 0; i < dataZilini.length; i++) {
            if (dataZilini[i] == userEmail) {
              isZilini = true;
              isMironov = true;
              window.location.href = '/case/bfa232ld23-branding-loftyourmind.html';
              break;
            }
          }
          if (!(isZilini)) alert('Мы не нашли ваш email в базе данных секции «Брендинг».');
        });

      };
    });
  });
});
