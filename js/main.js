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