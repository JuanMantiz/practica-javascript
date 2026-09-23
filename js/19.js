//Funciones que retornan valores

function triple(num) {
  return num * 3;
}

const resultado = triple(8);
console.log(resultado);

let total = 0;

function agregarCarrito(precio) {
  return (total += precio);
}

total = agregarCarrito(200);
console.log(total);

agregarCarrito(300);
console.log(total);

function calcularTotalConIva() {
  return total * 1.16;
}

let totalConIva = `El total con Iva es: ${calcularTotalConIva()}`;

console.log(totalConIva);
