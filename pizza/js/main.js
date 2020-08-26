$(function () {
    $('.photo__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="prev"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="next"></button>'
    });

    var toggleButton = document.querySelector('.menu__btn');
    var navBar = document.querySelector('.menu');
    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('active-menu');
    });

    new WOW().init();

});