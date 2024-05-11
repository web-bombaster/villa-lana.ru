/**
 * По клику на любой элемент с указанным классом изменяем его класс. Поддерживается множество элементов
 * @param {*} element - сам элемент, его класс
 * @param {*} tagetClass - класс, который хотим добавить, удалить, переключить
 * @param {*} tagetClassAction - действие с классом add, remove, toggle
 *
 * thisElementClassChange("submenu-link", "submenu-link", "remove"); - для класса submenu-link делаем remove класса submenu-link
 *
 * thisElementClassChange("js-burger"); - пример вызова с параметрами по-умолчанию
 */

let thisElementClassChange = function (
	element,
	tagetClass = "toggle",
	tagetClassAction = "toggle"
) {
	if (document.querySelector("." + element)) {
		const elements = document.querySelectorAll("." + element);
		elements.forEach(function (elem, index) {
			elem.addEventListener("click", function (e) {
				e.preventDefault();

				switch (tagetClassAction) {
					case "add":
						this.classList.add(tagetClass);
						break;

					case "remove":
						this.classList.remove(tagetClass);
						break;

					default:
						this.classList.toggle(tagetClass);
						break;
				}
			});
		});
	}
};

thisElementClassChange("js-burger"); // для .js-burger по-умолчанию делаем toggle класса toggle

/**
 * При клике на элемент переключаем, удаляем или добавляем класс для другого эелемента.
 * @param {*} actionElement - класс элемета для клика,
 * @param {*} targetElement - класс изменяемого элемента,
 * @param {*} tagetClass - с каким классом выполняется действие,
 * @param {*} targetAction - какое действие выполняем (toggle, remove, add).
 *
 * otherElementClassChange(".js-burger", "body"); - пример с параметрами по-умолчанию - щелкая на .js-burger для body классу .toggle делаем toggle
 *
 * otherElementClassChange(".overlay", ".mobile_menu__inner", "toggle", "remove"); - пример со всеми параметрами
 */
const otherElementClassChange = function (
	actionElement,
	targetElement,
	tagetClass = "toggle",
	targetAction = "toggle"
) {
	if (
		// Если есть оба элемента
		!(
			document.querySelector(actionElement) &&
			document.querySelector(targetElement)
		)
	) {
		return;
	} else {
		const actionElements = document.querySelectorAll(actionElement);
		const targetElements = document.querySelectorAll(targetElement);
		actionElements.forEach(function (btn, index) {
			btn.addEventListener("click", function (e) {
				e.preventDefault();
				if (targetAction === "toggle") {
					if (targetElements[index].classList.contains(tagetClass)) {
						targetElements[index].classList.remove(tagetClass);
					} else {
						targetElements[index].classList.add(tagetClass);
					}
				}
				if (targetAction === "remove") {
					targetElements[index].classList.remove(tagetClass);
				}
				if (targetAction === "add") {
					targetElements[index].classList.add(tagetClass);
				}
			});
		});
	}
};

// Открываем бургер меню по клику на .mobile_menu_btn
otherElementClassChange(".jsMobileMenuBtnToggle", ".mobile-menu");
otherElementClassChange(".jsMobileMenuBtnToggle", "body");

/**
 * При ресайзе завкрыаем .mobile-menu
 */
let mobileMenuClose = function () {
	const elBody = document.querySelector("body");
	const elBurger = document.querySelector(".js-burger");
	const elMobileMenu = document.querySelector(".mobile-menu");

	if (elBody && elBurger && elMobileMenu) {
		elBody.classList.remove("toggle");
		elBurger.classList.remove("toggle");
		elMobileMenu.classList.remove("toggle");
	}
};

window.addEventListener("resize", mobileMenuClose);

/**
 * Вычисление позиции и размера панели мобильного меню
 */
if (document.querySelector(".jsMobileMenuBtnToggle")) {
	let menuPanelInit = function () {
		const menuBtn = document.querySelector(".jsMobileMenuBtnToggle");

		// Определяем высоту мобильного меню и размещаем под шапкой
		function menuPanelPosition() {
			const heightViewport = document.documentElement.clientHeight;
			const heightHeader = document.querySelector(".header").offsetHeight;

			// const heightMenuOverlay = heightViewport - heightHeader;
			const heightMenuOverlay = heightViewport;

			const menuActive = document.querySelector(".mobile-menu.toggle");

			if (menuActive) {
				menuActive.style.height = heightMenuOverlay + "px";
				menuActive.style.paddingTop = heightHeader + "px";
				// menuActive.style.top = heightHeader + "px";
			}
		}

		menuBtn.addEventListener("click", menuPanelPosition);
	};

	menuPanelInit();
}

/**
 * Перемещение элемента в другой элемент.
 * @param {*} block - что перемещаем
 * @param {*} to - куда перемещаем
 * @param {*} metod - метод переноса prepend, append, before, after
 *
 * movingConstructor(".header-contacts", ".mobile-menu", "after"); - пример вызова
 */

let movingConstructor = function (block, to, metod) {
	if (!(document.querySelector(block) && document.querySelector(to))) {
		return;
	} else {
		switch (metod) {
			case "prepend":
				document
					.querySelector(to)
					.prepend(document.querySelector(block));
				break;

			case "before":
				document
					.querySelector(to)
					.before(document.querySelector(block));
				break;

			case "after":
				document.querySelector(to).after(document.querySelector(block));
				break;

			default:
				document
					.querySelector(to)
					.append(document.querySelector(block));
				break;
		}
	}
};

// функция будет перемещать блок в указанное место при определенной ширине экрана
let moving = function () {
	const windowWidth = window.innerWidth; // ширина экрана

	if (windowWidth <= 992) {
		movingConstructor(".header-nav", ".mobile-menu__top", "append");
		movingConstructor(
			".header-nav__phone",
			".mobile-menu__bottom",
			"prepend"
		);
		movingConstructor(".header-nav__btn", ".mobile-menu__bottom", "append");
		movingConstructor(".footer-right__top", ".footer", "prepend");
		// movingConstructor(".footer-btn", ".footer-right__top", "append");
		movingConstructor(".our-rooms__all", ".our-rooms__col--slider", "append");
	} else {
		movingConstructor(".header-nav__btn", ".header", "prepend");
		movingConstructor(".header-nav__phone", ".header", "prepend");
		movingConstructor(".header-nav", ".header", "prepend");
		movingConstructor(".footer-right__top", ".footer-right", "prepend");
		// movingConstructor(
		// 	".footer-btn",
		// 	".footer-right__bottom .footer-right__box",
		// 	"prepend"
		// );
		movingConstructor(".our-rooms__all", ".our-rooms__controls", "append");

	}

	if (windowWidth <= 480) {
		movingConstructor(".other-rooms__all", ".other-rooms__bottom", "append");
	} else {
		movingConstructor(".other-rooms__all", ".other-rooms__top", "append");
	}
};

moving();
window.addEventListener("resize", moving);
