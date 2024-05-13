// При закрытии акции прячем ее на 1 день
let hotInfoClose = function () {
	const hotInfo = document.querySelector(".hot-info");
	const hotInfoBtn = document.querySelector(".hot-info__btn");

	if (hotInfo && hotInfoBtn) {
		// document.addEventListener("DOMContentLoaded", function () {
			function setCookie(name, value, days) {
				let expires = "";
				if (days) {
					let date = new Date();
					date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
					expires = "; expires=" + date.toUTCString();
				}
				document.cookie = name + "=" + (value || "") + expires + "; path=/";
			}
		
			function getCookie(name) {
				let matches = document.cookie.match(
					new RegExp(
						"(?:^|; )" +
							name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
							"=([^;]*)"
					)
				);
				return matches ? decodeURIComponent(matches[1]) : undefined;
			}
		
			function checkCookies() {

				// Если куки cookies_policy нет или она просрочена, то показываем уведомление
				if (!getCookie("cookies_policy")) {
					hotInfo.classList.add("show");
				}
		
				// При клике на кнопку устанавливаем куку cookies_policy на один день
				hotInfoBtn.addEventListener("click", function(e) {
					setCookie("cookies_policy", "true", 1);
					hotInfo.classList.remove("show");
				});
			}

			checkCookies();
		// });

	}
};

hotInfoClose();