// darkmode.js

document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.getElementById("darkModeToggle");
	const themeIcon = document.getElementById("theme-icon");
	const htmlElement = document.documentElement; // Target <html> tag

	// 1. Dapatkan tema yang disimpan, default ke 'light'
	const storedTheme = localStorage.getItem("theme") || "light";

	function applyTheme(theme) {
		htmlElement.setAttribute("data-bs-theme", theme);

		if (theme === "dark") {
			themeIcon.classList.remove("bi-sun-fill");
			themeIcon.classList.add("bi-moon-stars-fill");
		} else {
			themeIcon.classList.remove("bi-moon-stars-fill");
			themeIcon.classList.add("bi-sun-fill");
		}
		localStorage.setItem("theme", theme);
	}

	// Terapkan tema yang disimpan saat halaman dimuat
	applyTheme(storedTheme);

	// 2. Tambahkan event listener untuk tombol toggle
	toggleButton.addEventListener("click", () => {
		const currentTheme = htmlElement.getAttribute("data-bs-theme");
		const newTheme = currentTheme === "light" ? "dark" : "light";
		applyTheme(newTheme);
	});
});
