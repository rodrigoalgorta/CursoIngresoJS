/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro la variable nombre ingresado
	let nombreIngresado;

	//Obtengo el dato por ID del elemento
	nombreIngresado=txtIdNombre.value;
	//nombreIngresado = document.getElementById ("txtIdNombre").value;
	
	//Muestro por alert
	alert(nombreIngresado);

}


