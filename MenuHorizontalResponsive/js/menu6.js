$(function(){
	//Inicializamos HeaderRoom
	var header = document.getElementById('header');
	var headeroom = new Headroom(header);
	headeroom.init();

	// Menú Responsive
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icon');

		if (ancho <= 700) {
			enlaces.hide();
			icono.addClass('fas fa-bars');
		}

		btnMenu.on('click', function(e){
			enlaces.slideToggle();
			icono.toggleClass('fas fa-bars');
			icono.toggleClass('fas fa-times');
		})

		$(window).on('resize', function(){
			if ($(this).width() > 700) {
				enlaces.show();
				icono.addClass('fa-times');
				icono.removeClass('fa-bars');
			}else{
				enlaces.hide();
				icono.addClass('fa-bars');
				icono.removeClass('fa-times');
			}
		})
})