//Loops

//For loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//   }
// }

const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Televisión 50 pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 100 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

//While loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

//Do while loop

let j = 1;

do {
  if (j % 2 === 0) {
    console.log(`El numero ${j} es par`);
  }
  j++;
} while (j <= 10);
