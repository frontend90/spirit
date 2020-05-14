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

/*******    team slick    **************/
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*******    clients slick    **************/
$('.clients-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*********************  portfolio filter   ***************/
$(function () {
  $('.portfolio-nav .block a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.card.' + get_id);
    $('.card').hide();
    get_current.show();
  });
  $('#all').click(function () {
    $('.card').show();
  });
});

$('.portfolio-nav a').click(function () {
  $('.portfolio-nav a').removeClass('active');
  $(this).addClass('active');
});