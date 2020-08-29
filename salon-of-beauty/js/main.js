$(".popup-btn").click(function () {
    $(".hidden-popup").css({
        "top": $(window).scrollTop() + 100
    }).addClass("active");
    $(".hidden-popup__bg").fadeIn();

    $(".hidden-popup__bg").click(function () {
        $(".hidden-popup").removeClass("active");
        $(".hidden-popup__bg").fadeOut();
    });
});