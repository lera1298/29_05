const swiper = new Swiper('.swiper-container', {
  // Optional parameters
   slidesPerView: 3.2,
   spaceBetween: 24,
loop:true,
  // If we need pagination
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
     '@0.35': {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    '@0.75': {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }

  // And if we need scrollbar

});