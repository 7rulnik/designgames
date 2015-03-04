$('.gallery .container-fluid').slick({
  slide: 'img',
  dots: false,
  // arrows: false,
  slidesToShow: 3,
  // slidesToShow: 5,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  appendArrows: $('.gallery .container')
  // centerMode: true
  // fade: true
});
