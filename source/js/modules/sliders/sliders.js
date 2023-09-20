import Swiper from '../../vendor/swiper';

function initSliders() {
  const heroSlider = new Swiper('.hero__slider', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    allowTouchMove: false,
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
    },
  });

  heroSlider.init();

  const nextToursSlider = new Swiper('.next-tours__slider', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.next-tours__slider-next',
      prevEl: '.next-tours__slider-prev',
    },
  });

  nextToursSlider.init();

  const trainingSlider = new Swiper('.training__slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.training__slider-next',
      prevEl: '.training__slider-prev',
    },
  });

  trainingSlider.init();

  const reviewsSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    slidesPerView: 1.4,
    spaceBetween: 30,
    allowTouchMove: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 1.28,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 1.65,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.reviews__slider-next',
      prevEl: '.reviews__slider-prev',
    },
  });

  reviewsSlider.init();

  const desktopWidth = window.matchMedia('(min-width: 1200px)');
  const advantagesSlider = document.querySelector('.advantages__slider');
  let advantagesSwiper;

  function initDesktopAdvantagesSlider() {
    // Проверка наличия элемента .advantages__slider
    if (advantagesSlider) {
      if (desktopWidth.matches && advantagesSlider.dataset.desktop === 'false') {
        advantagesSwiper = new Swiper('.advantages__slider', {
          direction: 'horizontal',
          slidesPerView: 3.6,
          spaceBetween: 30,
          allowTouchMove: false,
          loop: true,
          initialSlide: 2,
          centeredSlides: true,
          navigation: {
            nextEl: '.advantages__slider-next',
            prevEl: '.advantages__slider-prev',
          },
        });

        advantagesSlider.dataset.desktop = 'true';
      }

      if (!desktopWidth.matches) {
        advantagesSlider.dataset.desktop = 'false';

        if (advantagesSlider.classList.contains('swiper-initialized')) {
          advantagesSwiper.destroy();
        }
      }
    }
  }

  initDesktopAdvantagesSlider();
  window.addEventListener('resize', initDesktopAdvantagesSlider);


  const gallerySlider = new Swiper('.gallery__slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 5,
    allowTouchMove: false,
    breakpoints: {
      0: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
    },
    navigation: {
      nextEl: '.gallery__slider-next',
      prevEl: '.gallery__slider-prev',
    },
  });

  gallerySlider.init();
}

export default initSliders;
