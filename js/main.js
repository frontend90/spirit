/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/************    burger      *************/
$('.burger').click(function () {
  $('.burger').toggleClass('active');
  $('.menu').toggleClass('show');
  $('body').toggleClass('no-scroll');
});

$('.menu a').click(function () {
  $('.menu').removeClass('show');
  $('.burger').removeClass('active');
  $('body').removeClass('no-scroll');
});

/****************      scroll top     ***************/
$(window).scroll(function () {

  var wScroll = $(this).scrollTop();

  if (wScroll > 20) {
    $('.top-menu').addClass('active');
  } else {
    $('.top-menu').removeClass('active');
  };
});

/*****   плавный скролл с активными блоками   ******/
$('.navigation').singlePageNav({
  currentClass: 'active',
  changeHash: true,
  scrollSpeed: 10000,
  offset: 0,
  filter: ':not(.external)',
  easing: 'swing',
});