const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    428: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.6,
      spaceBetween: 18
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
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