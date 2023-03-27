const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    428: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2.7,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
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