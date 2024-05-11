// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector(".offers-slider")) {
		const offersSlider = new Swiper(".offers-slider", {
			slidesPerView: 1.3,
			spaceBetween: 8,
			loop: true,
			// centeredSlides: true,
			breakpoints: {
				500: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 2.3,
				},
				1200: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			},
			navigation: {
				nextEl: ".special-offers__next",
				prevEl: ".special-offers__prew",
			},
		});
	}

	if (document.querySelector(".rooms-slider")) {
		const roomsSlider = new Swiper(".rooms-slider", {
			slidesPerView: 1.3,
			// slidesPerView: "auto",
			spaceBetween: 8,
			loop: true,
			// autoHeight: false,
			// centeredSlides: true,
			breakpoints: {
				500: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 2.3,
				},
				1400: {
					slidesPerView: 3.2,
					// slidesPerView: "auto",
					spaceBetween: 24,
				},
			},
			navigation: {
				nextEl: ".our-rooms__next",
				prevEl: ".our-rooms__prew",
			},
		});
	};

	if (document.querySelector(".other-rooms__swiper")) {
		const roomsSlider = new Swiper(".other-rooms__swiper", {
			slidesPerView: 1.3,
			// slidesPerView: "auto",
			spaceBetween: 8,
			loop: true,
			// autoHeight: false,
			// centeredSlides: true,
			breakpoints: {
				500: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 2.3,
				},
				1400: {
					slidesPerView: 3.2,
					// slidesPerView: "auto",
					spaceBetween: 24,
				},
			},
			navigation: {
				nextEl: ".other-rooms__next",
				prevEl: ".other-rooms__prew",
			},
		});
	};

	if (document.querySelector(".slider-gallery__slider")) {
		const sliderGallery = new Swiper(".slider-gallery__slider", {
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 16,
			loop: true,
			navigation: {
				prevEl: ".slider-gallery__prew",
				nextEl: ".slider-gallery__next",
			},
		});
	};

	if (document.querySelector(".reviews-slider__swiper")) {
		const offersSlider = new Swiper(".reviews-slider__swiper", {
			slidesPerView: 1.1,
			spaceBetween: 8,
			loop: true,
			// centeredSlides: true,
			breakpoints: {
				500: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 2.3,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
			navigation: {
				nextEl: ".reviews-slider__next",
				prevEl: ".reviews-slider__prew",
			},
		});
	}

	if (document.querySelector(".articles-slider__swiper")) {
		const offersSlider = new Swiper(".articles-slider__swiper", {
			slidesPerView: 1.3,
			spaceBetween: 8,
			loop: true,
			// centeredSlides: true,
			breakpoints: {
				500: {
					slidesPerView: 1.7,
				},
				768: {
					slidesPerView: 2.3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 2.3,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
			navigation: {
				nextEl: ".articles-slider__next",
				prevEl: ".articles-slider__prew",
			},
		});
	}

}

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();
