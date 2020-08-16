
$(document).ready(function() {
   $('.base-slider').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.instructors__slider').slick({
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true,
    });
    $('.reviews__slider').slick({
        arrows:false,
        dots:true
    });
    $('.popup-button').magnificPopup({
         type: 'inline', 
         modal: true,

    })
    new WOW().init({
        offset: 150,
        mobile:false,

    });
        /*перед вставкой кода добавь инпутам data-rule и стили valid invalid*/

    let inputs = document.querySelectorAll('input[data-rule]');
    for(let input of inputs) {
        input.addEventListener('blur' , function() {
            let rule = this.dataset.rule;
            let value = this.value;
            let check;
            switch(rule) {
                case 'number':
                 check = /^\+?\d{1,3}?[-.]?\(?(?:\d{2,3})\)?[-.]?\d\d\d[- .]?\d\d\d\d$/.test(value)
                break;
                case 'email':
                    check = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(value)
                break;
                case 'text':
                
                    check = /^[^\s]*$/.test(value)
                break;
            }
            if (check) {
                   this.classList.remove('invalid');
                this.classList.add('valid');
            } else{
                  this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }


});