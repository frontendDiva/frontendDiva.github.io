$(function(){
 

  $('.main__btn-light , .main__btn-dark').on('click' , function(e){
    e.preventDefault;
    $('.main-menu').toggleClass('menu-active');
  });



  
  
  $('.main__slider').slick({
    dots: true,
    arrows:false,
    infinite: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  



$('.ceiling__slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  centerMode:true,
  centerPadding:' 40px',
  variableWidth:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth:false
      }
    }
  ]
});


$('.promotions__slider, .reviews__slider').slick({
  infinite: false,
  arrows:false,
  slidesToShow: 2,
  variableWidth: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




new WOW().init({
  mobile:false
});

		

});