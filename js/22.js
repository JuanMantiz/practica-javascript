const metodoPago = "cheque";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "efectivo":
    console.log("Pagaste con efectivo");
    break;
  case "cheque":
    console.log("Pagaste con cheque");
    break;
  default:
    console.log("Aún no has pagado");
}
