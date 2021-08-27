var altura = parseInt(prompt("Determina la Atura"));
var anchura = parseInt(prompt("Determina la Anchura"));
var posicionA = parseInt(prompt("Determina la posicion Horizontal"));
var posicionB = parseInt(prompt("Determina la posicion Vertical"));
var colorado;
var colorcito = prompt(
  "Escribe uno de los siguientes colores (en minusculas): azul, rojo, blanco, negro, amarillo o verde"
);

if (colorcito == "azul") {
  colorado = "blue";
}

if (colorcito == "rojo"){
  colorado = "#f00";
}

if (colorcito == "blanco"){
  colorado = "white";
}

if (colorcito == "negro"){
  colorado = "black";
}

if (colorcito == "amarillo"){
  colorado = "yellow";
}


if (colorcito == "verde"){
  colorado = "green";
}

var ourCanvas = document.getElementById("myCanvas");
var ctx = ourCanvas.getContext("2d");

ctx.beginPath();
ctx.rect(posicionA,posicionB,anchura,altura);
ctx.fillStyle = colorado;
ctx.fill();
ctx.closePath();
