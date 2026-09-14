//Objetos - Destructuring
const personaje = {
    nombre: "Homero Simpson",
    edad: 34,
    ocupacion: "Empleado de la planta nuclear",
    trabaja: false
};

//Forma anterior
const edadPersonaje = personaje["edad"]
const nombrePersonaje = personaje["nombre"]

console.log(edadPersonaje, nombrePersonaje)

//Destructuring
const { edad, ocupacion, trabaja, nombre } = personaje

console.log("=========")

console.log(edad)
console.log(nombre)
console.log(ocupacion)
console.log(trabaja)
