// Swiper 1

const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Breakpoints

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Swiper 2

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Slides

  slidesPerView: 1.5,
  spaceBetween: 30,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Swiper 3

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Slides

  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// Swiper 4

const swiper4 = new Swiper(".swiper4", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Slides

  // Breakpoints

  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  slidesPerView: 1.5,
  spaceBetween: 5,
  centeredSlides: true,
  loopFillGroupWithBlank: false,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
