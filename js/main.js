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

const btnCountMinus1 = document.getElementById('buttonCountMinus1');
const btnCountPlus1 = document.getElementById('buttonCountPlus1');

const minus = 'minus', 
    plus = 'plus';
    
var strf = id => `${id}`;

btnCountMinus1.addEventListener('click', function() {counter('buttonCountNumber1', strf, minus);});
btnCountPlus1.addEventListener('click', function() {counter('buttonCountNumber1', strf, plus); });


function counter(id, strf, e) {
    console.log('Listener was activated');
    console.log(strf(id)); // получаем id, который можно использовать в методе getElementById без ковычек

    let counter = Number.parseInt(document.getElementById(strf(id)).innerText, 10);

    if (e === 'plus') {
        counter += 1;
        document.getElementById(strf(id)).innerHTML = counter;
    }
    if(e === 'minus') {
        if(counter != 0) {
            counter -= 1;
            document.getElementById(strf(id)).innerHTML = counter;
        }
    }
}




