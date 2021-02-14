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

const btnCountMinus1 = document.getElementById('buttonCountMinus1'),
    btnCountMinus2 = document.getElementById('buttonCountMinus2'),
    btnCountMinus3 = document.getElementById('buttonCountMinus3'),
    btnCountMinus4 = document.getElementById('buttonCountMinus4'),
    btnCountMinus5 = document.getElementById('buttonCountMinus5'),
    btnCountMinus6 = document.getElementById('buttonCountMinus6'),
    btnCountMinus7 = document.getElementById('buttonCountMinus7'),
    btnCountMinus8 = document.getElementById('buttonCountMinus8');
const btnCountPlus1 = document.getElementById('buttonCountPlus1'),
    btnCountPlus2 = document.getElementById('buttonCountPlus2'),
    btnCountPlus3 = document.getElementById('buttonCountPlus3'),
    btnCountPlus4 = document.getElementById('buttonCountPlus4'),
    btnCountPlus5 = document.getElementById('buttonCountPlus5'),
    btnCountPlus6 = document.getElementById('buttonCountPlus6'),
    btnCountPlus7 = document.getElementById('buttonCountPlus7'),
    btnCountPlus8 = document.getElementById('buttonCountPlus8');

const minus = 'minus', 
    plus = 'plus';
    
var strf = id => `${id}`;

btnCountMinus1.addEventListener('click', function() {counter('buttonCountNumber1', strf, minus);});
btnCountMinus2.addEventListener('click', function() {counter('buttonCountNumber2', strf, minus);});
btnCountMinus3.addEventListener('click', function() {counter('buttonCountNumber3', strf, minus);});
btnCountMinus4.addEventListener('click', function() {counter('buttonCountNumber4', strf, minus);});
btnCountMinus5.addEventListener('click', function() {counter('buttonCountNumber5', strf, minus);});
btnCountMinus6.addEventListener('click', function() {counter('buttonCountNumber6', strf, minus);});
btnCountMinus7.addEventListener('click', function() {counter('buttonCountNumber7', strf, minus);});
btnCountMinus8.addEventListener('click', function() {counter('buttonCountNumber8', strf, minus);});
btnCountPlus1.addEventListener('click', function() {counter('buttonCountNumber1', strf, plus); });
btnCountPlus2.addEventListener('click', function() {counter('buttonCountNumber2', strf, plus); });
btnCountPlus3.addEventListener('click', function() {counter('buttonCountNumber3', strf, plus); });
btnCountPlus4.addEventListener('click', function() {counter('buttonCountNumber4', strf, plus); });
btnCountPlus5.addEventListener('click', function() {counter('buttonCountNumber5', strf, plus); });
btnCountPlus6.addEventListener('click', function() {counter('buttonCountNumber6', strf, plus); });
btnCountPlus7.addEventListener('click', function() {counter('buttonCountNumber7', strf, plus); });
btnCountPlus8.addEventListener('click', function() {counter('buttonCountNumber8', strf, plus); });


function counter(id, strf, e) {
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




