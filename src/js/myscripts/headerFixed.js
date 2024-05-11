/**
 * Фиксируем шапку при прокрутке страницы
 */
const headerFixed = function () {
	let posTop = window.scrollY; // позиция прокрутки
	const header = document.querySelector(".header");
	const headerTransparent = document.querySelector(".header.transparent");
	const heightHeader = document.querySelector(".header").offsetHeight;

	if (posTop > 0) {
		header.classList.add("fixed");
	} else {
		header.classList.remove("fixed");
	}

	if (!headerTransparent) {
		if (posTop > 0) {
			document.querySelector('body').style.paddingTop = heightHeader + "px";
		} else {
			document.querySelector('body').style.paddingTop = 0 + "px";
		}
	};
};

headerFixed();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);
window.addEventListener("scroll", headerFixed);
