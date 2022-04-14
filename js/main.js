$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Slider's optional parameters
        loop: true, //бесконечная прокрутка
        slidesPerView: 6,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Настройки адаптива для слайдера
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 6,
        }
    }
    });
    
    const reviewsSlider = new Swiper('.reviews-slider', {
        // Slider's optional parameters
        loop: true, 
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $("#review-1").on('click', function() {

        $.fancybox.open([
            {
                // the first image
                src  : '../img/flowers/bunch-1.jpg',
                opts : {
                    caption : 'First caption',
                    thumb   : '../img/flowers/bunch-1.jpg'
                }
            },
            {
                // the second image
                src  : '../img/flowers/bunch-2.jpg',
                opts : {
                    caption : 'Second caption',
                    thumb   : '../img/flowers/bunch-2.jpg'
                    }
            },
            {
                // the third image
                src  : '../img/flowers/bunch-3.jpg',
                opts : {
                    caption : 'Second caption',
                    thumb   : '../img/flowers/bunch-3.jpg'
                    }
            }
        ], {
            loop : true,
            thumbs : {
                autoStart : true
                }
        });

    });

});
                
const btnsCounterArray = [...document.querySelectorAll('.counter-button')];

btnsCounterArray.forEach((el) => {
    el.addEventListener('click', (el) => {        
        switch (el.target.textContent) {
            case '+': 
                el.target.previousElementSibling.innerHTML = Number(el.target.previousElementSibling.innerHTML) + 1;
                break;
            case '-': 
                if (Number(el.target.nextElementSibling.innerHTML) > 0) {
                    el.target.nextElementSibling.innerHTML = Number(el.target.nextElementSibling.innerHTML) - 1;
                }
                break;
        }
    });
})