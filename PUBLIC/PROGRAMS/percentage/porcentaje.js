var porcentaje = document.querySelector("#porcentaje");
var total = document.querySelector("#total");
var textoRespuesta = document.querySelector("#textoResultado");
var mayor100 = document.querySelector("#mayor100");
var resultado;

function resolver() {
	resultado = parseFloat(porcentaje.value) * parseFloat(total.value) / 100;
	textoRespuesta.innerHTML = `EL <font color='white'>${porcentaje.value}%</font> de <font color='white'>${total.value}</font> es <br><center><font style='color:#5ab5f6; font-size:80pt'>${resultado}</font>`;


	if(porcentaje.value == "" || total.value == ""){
		textoRespuesta.innerHTML = "Tienes que Ingresar ambos valores";
	}

	if (parseInt(porcentaje.value) > 100){
		mayor100.style.fontSize = "30pt";
		mayor100.innerHTML = "Ese porcentaje excede de la cantidad total";
	}

	else if (parseInt(porcentaje.value) < 0) {		
		mayor100.style.fontSize = "30pt";
		mayor100.innerHTML = "Ese porcentaje esta por debajo de 0";
	}

	else{
		mayor100.innerHTML = "";
	}


}


	document.addEventListener("keydown", function (e) {
		if (e.keyCode == 13){resolver();}
	});