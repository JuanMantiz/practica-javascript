//Array Methods

const personajesDBZ = ["Goku", "Vegeta", "Gohan", "Piccolo", "Trunks"];

personajesDBZ.forEach(function (personaje) {
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

pokedex.forEach(function (pokemon) {
  if (pokemon.nombre == "Bulbasaur") {
    console.log("sí existe");
  }
});

let resultado = personajesDBZ.includes("Goku");

//some: ideal para arreglos de objetos;
resultado = pokedex.some(function (pokemon) {
  return pokemon.nombre === "MewTwo";
});

console.log(resultado);

//reduce
resultado = pokedex.reduce(function (total, pokemon) {
  return total + pokemon.salud;
}, 0);

console.log(resultado);

resultado = pokedex.filter(function (pokemon) {
  return pokemon.salud <= 300;
});

console.log(resultado);
