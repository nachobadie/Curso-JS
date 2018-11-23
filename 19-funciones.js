"use strict"

//Funciones

//es una agrupacion reutilizable de un conjunto de instrucciones

//defino la funcion
function calculadora(numero1, numero2){

	//conjunto de instrucciones a ejecutar
	console.log("suma: "+(numero1+numero2));
	console.log("resta: "+(numero1-numero2));
	console.log("multip: "+(numero1*numero2));
	console.log("divis: "+(numero1/numero2));
	console.log("**********************");

	return "inicia calculadora";
}

calculadora(12,8);
calculadora(98,2);

console.log(calculadora());

for (var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}

//Otra forma de hacerlo



function acelerador(){
	console.log("pisa el acelerador");
}
acelerador();