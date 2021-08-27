var textual = document.querySelector("#textual");
var lastPress = null;

alert("Press the any key for know its code");

document.addEventListener("keydown", function (e) {
    textual.innerHTML = e.keyCode;
})

document.addEventListener("click", function (e) {
    textual.innerHTML = "CLICK";
})