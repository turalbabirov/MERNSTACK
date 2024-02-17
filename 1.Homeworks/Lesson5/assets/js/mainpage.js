var swiper = new Swiper(".mainPageSlider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});