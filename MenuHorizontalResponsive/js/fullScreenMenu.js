(function(d){
	let menu = d.getElementById('container-menu');
	let icon = d.getElementById('icon-menu');
	let menu_options = d.getElementById('menu');
	var is_open = false;

	menu.addEventListener('click', function(){
		if (!is_open) {
			menu.style.padding = '16px 16px 200vw 200vw';
			icon.classList.add('fa-times');
			icon.classList.remove('fa-bars');			
			menu_options.style.top = '50%';

			is_open = true;
		}else{
			menu.style.padding = '26px 26px 52px 52px';
			icon.classList.add('fa-bars');
			icon.classList.remove('fa-times');			
			menu_options.style.top = '-50%';
			is_open = false;
		}
	});
})(document);