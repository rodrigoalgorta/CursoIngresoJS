/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//Declaramos las variables
	let IngreseNombre;
	let IngreseEdad;

	//Asignamos los valores a las variables
	IngreseNombre=txtIdNombre.value;
	IngreseEdad=txtIdEdad.value;

	//Acá les mostramos
	alert("Usted se llama " + IngreseNombre + " y tiene " + IngreseEdad + " años");
}

