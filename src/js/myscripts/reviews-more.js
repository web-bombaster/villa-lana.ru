// Показать / скрыть скрытый текст отзыва
if (document.querySelector(".rs-item__toggle")) {
	const textMore = document.getElementsByClassName("rs-item__toggle");
	for (let element of textMore) {
		// console.log(element);

		element.addEventListener("click", function () {
			element.closest(".rs-item").classList.toggle("active");
			if (element.textContent == "Скрыть") {
				element.textContent = "Показать ещё";
			} else {
				element.textContent = "Скрыть";
			}
		});
	};
};
