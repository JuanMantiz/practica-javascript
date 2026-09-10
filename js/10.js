//Objetos

const nombrePersonaje = "Homero Simpson";
const edad = 34;
const ocupacion = "Empleado de la planta nuclear";
const trabaja = false;

const personaje = {
    nombre: "Homero Simpson",
    edad: 34,
    ocupacion: "Empleado de la planta nuclear",
    trabaja: false
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.edad);
console.log(personaje.ocupacion);
console.log(personaje.trabaja);

console.log("===========")

console.log(personaje["nombre"]);
console.log(personaje["edad"]);
console.log(personaje["ocupacion"]);
console.log(personaje["trabaja"]);

personaje.imagen = "homero-simpson.png";

console.log("============");
console.log(personaje);

delete personaje.trabaja;

console.log("============");
console.log(personaje);
