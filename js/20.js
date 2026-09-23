//Arrow functions

// const calcularTriple = function (num) {
//   console.log(num * 3);
// };

// calcularTriple(3);

const calcularTriple = (num) => console.log(num * 4);
calcularTriple(8);

const aprenderTecnología = (tecnología) =>
  console.log(`Aprendiendo ${tecnología}`);
aprenderTecnología("CSS");

const personajesDBZ = ["Goku", "Vegeta", "Gohan", "Piccolo", "Trunks"];

personajesDBZ.forEach((personaje) => {
  if (personaje == "Gohan") {
    console.log("sí existe");
  }
});

const pokedex = [
  { nombre: "Pikachu", salud: 500 },
  { nombre: "Charmander", salud: 300 },
  { nombre: "Bulbasaur", salud: 400 },
  { nombre: "MewTwo", salud: 350 },
  { nombre: "Squirtle", salud: 250 },
  { nombre: "Jigglypuff", salud: 200 },
];

pokedex.forEach((pokemon) => {
  if (pokemon.nombre == "Bulbasaur") {
    console.log("sí existe");
  }
});

let resultado = personajesDBZ.includes("Goku");

//some: ideal para arreglos de objetos;
resultado = pokedex.some((pokemon) => pokemon.nombre === "MewTwo");

console.log(resultado);

//reduce
resultado = pokedex.reduce((total, pokemon) => total + pokemon.salud, 0);

console.log(resultado);

resultado = pokedex.filter((pokemon) => pokemon.salud <= 300);

console.log(resultado);
