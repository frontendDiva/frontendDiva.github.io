$(".popup-btn").click(function () {
    $(".hidden-popup").css({
        "top": $(window).scrollTop() + 100
    }).addClass("active");
    $(".hidden-popup__bg").fadeIn();

    $(".hidden-popup__bg").click(function () {
        $(".hidden-popup").removeClass("active");
        $(".hidden-popup__bg").fadeOut();
    });
    var form = document.querySelector('.validate-form')
    var validateBtn = form.querySelector('.submit-btn')
    var phone = form.querySelector('.form-input')
    var phoneMatch = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/


    form.addEventListener('submit', function () {
        event.preventDefault()
          removeValidation()
          checkFieldsPresence()
          checkPhoneMatch()
        console.log('clicked on validate')
    });

    var removeValidation = function () {
        var errors = form.querySelectorAll('.error')

        for (var i = 0; i < errors.length; i++) {
            errors[i].remove()
        }
    }

    var checkFieldsPresence = function () {
        for (var i = 0; i < phone.length; i++) {
            if (!phone[i].value) {
                var error = generateError('Пожалуйста, введите телефон')
                form[i].parentElement.insertBefore(error, fields[i])
            }
        }
    }
    var checkPhoneMatch = function () {
        if (phone.value !== phoneMatch) {
            var error = generateError('Пожалуйста, введите номер телефона')
            phone.addClass('.error-form')
            phone.parentElement.insertBefore(error, phone)
        }
    }
    var generateError = function (text) {
        var error = document.createElement('div')
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = text
        return error
    }
});