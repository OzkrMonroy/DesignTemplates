$(function(){
	var $contador = 1;
	var $subContador = 1;
	var $menu = document.getElementById('btn-menu');
	var $submenu = document.getElementById('submenu');

	$menu.addEventListener('click', function(){
		if ($contador == 1) {
			$('nav').animate({
				left: '0'
			});
			$contador = 0;
		}else{
			$contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
});