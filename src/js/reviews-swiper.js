const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    428: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },

  // If we need pagination
  pagination: {
    el: '.reviews__swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
