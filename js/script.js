$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
    });
    $('.slider1').slick({
        dots: true,
        slidesToShow: 4,
        appendArrows: $('.ourClient__slider'),
        appendDots: $('.ourClient__slider'),
        slidesToScroll: 2
    });
    $('.slider2').slick({
        dots: true,
        appendArrows: $('.reviews__slider'),
        appendDots: $('.reviews__slider'),
    });
    $('.header__burger').click(function(ev) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });
