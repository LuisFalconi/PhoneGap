var app={

	inicio: function(){

		this.iniciaBotones();
		this.iniciaFastClick();
		this.iniciaHammer();

	},


	iniciaFastClick: function(){
		FastClick.attach(document.body);
	}, 

	iniciaBotones: function(){

		var botonAmarrillo = document.querySelector('#amarillo');
		var botonVerde = document.querySelector('#verde');
		var botonNegro = document.querySelector('#negro');
		var botonAzul = document.querySelector('#azul');
		var botonRojo = document.querySelector('#rojo');
		var botonBlanco = document.querySelector('#blanco');

		var a = botonAmarrillo.addEventListener('click', this.colorAmarrillo,false);
		botonVerde.addEventListener('click', this.colorVerde,false );
		botonNegro.addEventListener('click', this.colorNegro,false );
		botonAzul.addEventListener('click', this.colorAzul,false );
		botonRojo.addEventListener('click', this.colorRojo,false );
		botonBlanco.addEventListener('click', this.colorBlanco,false );

	},

	iniciaHammer: function(){
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);

		// Por defecto hammer.js trae desactivado el pitch y rotate
		hammertime.get('pinch').set({enable: true});
		hammertime.get('rotate').set({enable: true});

		zona.addEventListener('webkitAnimationEnd', function(e){
			zona.className= '';
		});

		hammertime.on('doubletap', function(ev){
			zona.className='doubletap';
		});

		hammertime.on('press', function(ev){
			zona.className='press';
		});

		hammertime.on('swipe', function(ev){
			var clase = undefined;
			direccion = ev.direction;

			if(direccion == 4) clase = 'swipe-derecha';
			if(direccion == 2) clase = 'swipe-izquierda';

			zona.className = clase; 
		});

		hammertime.on('rotate', function(ev){
			var umbral = 25;
			if(ev.distance > umbral) zona.className= 'rotate';
		});
		
		// existe confusion entre pan y swipe, y pinch y rotate es por ello que hay que desactivar uno de ellos
		//	si se lo hace en un mismo objeto
		hammertime.on('tab doubletap swipe press pinch rotate', function(ev){
			document.querySelector('#info').innerHTML = ev.type+ '!';
		});
	},

	colorAmarrillo: function(){
		document.body.className = 'amarillo';
	},

	colorVerde: function(){
		document.body.className = 'verde';
	},
	colorNegro: function(){
		document.body.className = 'negro';
	},
	colorAzul: function(){
		document.body.className = 'azul';
	},
	colorRojo: function(){
		document.body.className = 'rojo';
	},
	colorBlanco: function(){
		document.body.className = 'blanco';
	},
};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	},false);
}
