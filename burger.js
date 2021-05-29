$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header-line__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});