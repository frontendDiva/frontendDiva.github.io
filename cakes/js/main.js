$(function(){
$(".header__slider").slick({
infinite: true,
fade:true,
prevArrow :'<img class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt=""></img>',
nextArrow :'<img class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt=""></img>',
asNavFor: '.slider-dotshead',
});
$('.slider-dotshead').slick({
slidesToShow:4,
slidesToScroll:4,
asNavFor: '.header__slider',
  responsive: [
    {
      breakpoint: 961,
        settings: "unslick",
    },
  ]

});
   
   $('.serf-slider').slick({
     dots:false,
     slidesToShow: 4,
     slidesToScroll: 1,
     speed: 300,
     prevArrow: '<img class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt=""></img>',
     nextArrow: '<img class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt=""></img>',
     responsive: [{
         breakpoint: 1210,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 900,
         settings: {
           slidesToShow: 2,
           centerMode: true,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 700,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 4,
           centerMode: true,
         }
       },
     ]
   });

  $('.holder__slider').slick({
    infinite: true,
    fade:true,
    prevArrow :'<img class="slider-arrows slider-arrows_left" src="images/arrows-left.svg" alt=""></img>',
    nextArrow :'<img class="slider-arrows slider-arrows_right" src="images/arrows-right.svg" alt=""></img>',
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });
  $('.quantity-button').on('click' , function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
  });
  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);

  $('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
  });

  $('.slider-dots__circle').on('click', function () {
    $(this).toggleClass('active')
  });

  $('.menu__btn').on('click' , function(){
    $('.menu').toggleClass('active');
  });

  new WOW().init();
});