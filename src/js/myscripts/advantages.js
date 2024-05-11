let advantagesHover = function () {
	if (
		!(
			document.querySelector(".advantages-item") &&
			document.querySelector(".advantages-img__box")
		)
	) {
		return;
	} else {
		let advantagesItems = document.querySelectorAll(".advantages-item");
		let advantagesImgBox = document.querySelector(".advantages-img__box");

		// Инициализация - выводим первую картинку в блок
		let dataImg = document.querySelector(".advantages-item").getAttribute("data-img");
		advantagesImgBox.setAttribute('style', `background-image: url(${dataImg});`);

		// Изменяем картинку по наведению на нужный блок
		advantagesItems.forEach(function (elem) {
			elem.addEventListener("mouseenter", function (e) {
				dataImg = this.getAttribute("data-img");
				advantagesImgBox.setAttribute('style', `background-image: url(${dataImg});`);
			});
		});
	}
};

advantagesHover();


let advantagesToSlider = function () {

	if (
		!(
			document.querySelector(".advantages-list") &&
			document.querySelector(".advantages-list__wrapper") &&
			document.querySelector(".advantages-list__item")
		)
	) {
		return; // Если всех элементов нет, завершаем
	} else {
		let advantagesList = document.querySelector(".advantages-list");
		let advantagesListWrapper = document.querySelector(".advantages-list__wrapper");
		let advantagesListItems = document.querySelectorAll(".advantages-list__item");

		const windowWidth = window.innerWidth; // ширина экрана

		if (windowWidth <= 992) {
			advantagesList.classList.add('swiper');
			advantagesListWrapper.classList.add('swiper-wrapper');

			advantagesListItems.forEach(function(elem) {
				elem.classList.add('swiper-slide');
			});

			const advantagesListSlider = new Swiper(".advantages-list", {
				slidesPerView: 1.3,
				spaceBetween: 8,
				loop: true,

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
				},

			});

		} else {
			// advantagesListSlider.destroy();

			advantagesList.classList.remove('swiper');

			advantagesListWrapper.classList.remove('swiper-wrapper');
			advantagesListWrapper.setAttribute('style', '');

			advantagesListItems.forEach(function(elem) {
				elem.classList.remove('swiper-slide');
				elem.setAttribute('style', '');
			});

		};

	};


};

advantagesToSlider();
window.addEventListener("resize", advantagesToSlider);

