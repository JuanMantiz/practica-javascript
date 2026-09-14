//Objects Methods

const animal = {
    nombre: "Caramelo",
    especie: "Perro",
    color: "Café",
    peso: 15.5
};

Object.seal(animal); //Evita que se agreguen o eliminen propiedades, pero permite modificar las existentes
Object.freeze(animal); //Evita que se agreguen, eliminen o modifiquen propiedades

animal.edad = 8;

console.log(Object.isSealed(animal));
console.log(animal);