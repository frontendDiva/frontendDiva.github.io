$(function(){

$('.questions__item-title').on('click' , function(){
    $('.questions__item').removeClass('questions__item--active');
     $(this).parent().addClass('questions__item--active');
});

new WOW().init({
    mobile:false,
    live:false
});

});