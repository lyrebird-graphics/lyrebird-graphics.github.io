var swiper = new Swiper(".slider-wrapper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'false',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        effect: FormDataEvent,
      },
      
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });