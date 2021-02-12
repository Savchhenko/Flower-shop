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

const btnCountMinus = document.getElementById('buttonCountMinus');
const btnCountPlus = document.getElementById('buttonCountPlus');
let counter = document.getElementById('buttonCountNumber').innerText;

counter = Number.parseInt(counter, 10);

btnCountMinus.onclick = function (event) {
    if (counter != 0) {
        counter -= 1;
        document.getElementById('buttonCountNumber').innerHTML = counter;
    }
};

btnCountPlus.onclick = function (event) {
    counter += 1;
    document.getElementById('buttonCountNumber').innerHTML = counter;
};

