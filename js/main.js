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