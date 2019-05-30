var app = {
	inicio: function(){
		this.iniciarFastClick();
		this.iniciaBoton();
	},

	iniciarFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaBoton: function(){
		var buttonAction = document.querySelector('#button-action');
		buttonAction.addEventListener('click', this.tomarFoto);
	}, 

	tomarFoto: function(){
		var opciones = {
			quality: 60,
			destinationType: Camera.DestinationType.FILE_URI,
			targetWidth: 500,
			targetHeight: 500,
			correctOrientation: true
		};
		navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
	},

	fotoTomada: function(imageURI){
		var image = document.querySelector('#foto');
		image.src = imageURI;
	}, 

	errorAlTomarFoto: function(message){
		console.log('Fallo al tomar foto o foto cancelada' + message);
	}
};

if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
}