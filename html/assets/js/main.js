'use strict';
var promoSlider = {
	slider: $('.js-promo-carousel'),
	sliderSettings: function sliderSettings() {
		return {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			focusOnSelect: false,
			arrows: true,
			dots: true,
			speed: 500
		};
	},
	init: function init() {
		var slider = void 0;
		if (promoSlider.slider.length) {
			promoSlider.slider.parent().width(promoSlider.slider.closest('.wrapper').width());
			slider = promoSlider.slider.slick(promoSlider.sliderSettings());
		}
		$(window).on('resize', function() {
			if (promoSlider.slider.length) {
				promoSlider.slider.parent().width(promoSlider.slider.closest('.wrapper').width());
			}
		});
	}
};
$(function() {
	promoSlider.init();
});
