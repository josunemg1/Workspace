document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
	evento.preventDefault();
	var usuario= document.getElementById('usuario').value;
	if(usuario.length == 0) {
		alert('Rellene este campo');
		return;
	}
	var clave = document.getElementById('clave').value;
	if (clave.length == 0) {
		alert('Rellene este campo');
		return;
	}
	var clave = document.getElementById('clave').value;
	if (clave.length > 8) {
		alert('No debe tener más de 8 caracteres');
		return;
	}
	var email = document.getElementById('email').value;
	if (email.length == 0) {
		alert('Rellene este campo');
		return;
	}

	alert("La inscripcion ha sido correcta");
	document.formulario.submit();
}
  this.submit();
}