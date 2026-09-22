// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

const tortugasNinja = new Array(
  "Leonardo",
  "Donatello",
  "Raphael",
  "Michelangelo",
);

const caballerosDelZodiaco = ["Shiryu", "Hyoga", "Shun", "Ikki", "Seiya"];

const paises = ["México", "Colombia", "Perú", "Chile", "Argentina"];

const arrVariado = [
  "mesa",
  10,
  true,
  null,
  { id: 1, nombre: "Juan" },
  [1, 2, 3],
];

console.table(numeros);
console.table(tortugasNinja);
console.table(caballerosDelZodiaco);
console.table(paises);
console.table(arrVariado);

//Acceder a los valores de un arreglo

console.log(arrVariado[4]);
console.log(arrVariado[5][1]);

//Extensión

console.log(arrVariado.length);
console.log(arrVariado[arrVariado.length - 1]);

//Imprimir elementos con un for each

tortugasNinja.forEach(function (nombre) {
  console.log(nombre);
});

//agrega elementos al final
caballerosDelZodiaco.push("Aioros", "Saga");

//Metodo unshift agrega elementos al inicio del arreglo
caballerosDelZodiaco.unshift("Mu", "Shaka");

//pop:elimina el último elemento del arreglo
caballerosDelZodiaco.pop();

//shift:elimina el primer elemento del arreglo
caballerosDelZodiaco.shift();

console.table(caballerosDelZodiaco);

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//splice: devuelve los elementos eliminados de un arreglo y elimina los elementos del en el rango indicado
meses.splice(1, 2);

console.table(meses);

const nuevoArreglo = ["febrero", ...meses];

console.table(nuevoArreglo);
