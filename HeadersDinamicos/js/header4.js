(function(d){
	let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab_items')); //<-- Al no obtener un array debemos convertirlo
	let panels = Array.prototype.slice.apply(d.querySelectorAll('.panels_items'));

	d.getElementById('tabs').addEventListener('click', function(e){
		if (e.target.classList.contains('tab_items')) {
			let i = tabs.indexOf(e.target);

			tabs.map(function(tab){
				tab.classList.remove('active');
			});
			tabs[i].classList.add('active');

			panels.map(function(panel){
				panel.classList.remove('active');
			});
			panels[i].classList.add('active');
		}
	})
})(document);


// Delegación de eventos
// Al usar querySelector no obtenemos un array