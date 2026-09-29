//Estrucutra de control condicionales

const puntaje = 1000;

//===es mas estricto que ==, ya que compara el tipo de dato y el valor
if (puntaje === 1000) {
  console.log("El puntaje es diferente a 1000");
} else {
  console.log("Es igual a 1000");
}

console.log("================================");

const efectivo = 1000;
const carrito = 800;

if (efectivo >= carrito) {
  console.log("El usuario puede pagar");
} else {
  console.log("El usuario no puede pagar");
}

console.log("================================");

const rol = "ADMIN";
if (rol === "ADMIN") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("Eres editor, puedes entrar a ciertas secciones del sistema");
} else {
  console.log("No tiene acceso al sistema");
}
