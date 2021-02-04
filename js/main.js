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