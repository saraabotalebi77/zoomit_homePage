new Swiper('.swiper-menu', {
  slidesPerView : "auto",
});
new Swiper('.products-sections--swiper' ,{
  navigation: {
    nextEl: '.products-sections--swiper ~ .swiper-button-next',
    prevEl: '.products-sections--swiper + .swiper-button-prev',
  },
  allowTouchMove :true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints:{
    // when window width is >= 300px
    300:{
      slidesPerView: 2,
      spaceBetween: 5
    },
    // when window width is >= 420px
    420:{
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 576px
    576:{
      slidesPerView: 4,
      spaceBetween: 5
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 6,
      spaceBetween: 5
    },
  }
})
new Swiper('.buying-guide-section-slider', {
  navigation: {
      nextEl: '.buying-guide-section-slider ~ .swiper-button-next',
      prevEl: '.buying-guide-section-slider + .swiper-button-prev',
    },
  allowTouchMove :true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  }
});
const swiper_sliders = [...document.querySelectorAll(".swiper-slider")];
swiper_sliders.forEach(swiper_slider => {
   new Swiper(`.${swiper_slider.classList[swiper_slider.classList.length-1]}`, {
    navigation: {
        nextEl: `.${swiper_slider.classList[swiper_slider.classList.length-1]} ~ .swiper-button-next`,
        prevEl: `.${swiper_slider.classList[swiper_slider.classList.length-1]} + .swiper-button-prev`,
      },
    allowTouchMove :true,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })
});