//funciones
sumar();

function sumar() {
  console.log(20 + 10);
}

//expresión de la funcion

const sumar2 = function () {
  console.log(5 + 5);
};
sumar2();

//IIFE, sirve para encapsular código y no contaminar el scope global
(function () {
  console.log("esto es una función que se ejecuta automáticamente");
})();
