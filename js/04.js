//String

const superHeroe = "Batman";
const superHeroe2 = String("Wonder Woman");
const superHeroe3 = new String("Superman");
const villano = 'Mojojojo';

console.log(superHeroe);
console.log(superHeroe2);
console.log(superHeroe3);
console.log(villano);

console.log(typeof superHeroe);
console.log(typeof superHeroe2);
console.log(typeof superHeroe3);
console.log(typeof villano);

//Metodos de los strings

console.log(superHeroe.length);

const tweet = "Aprendiendo Javascript con Mantiz";

//index of
console.log(tweet.indexOf("Javascript"));

//includes (retorna un boolean)

console.log(tweet.includes("Javascript"));
console.log(tweet.includes("ut"));

const email = "mantiz@gmail.com";

if(email.indexOf("@") === -1){
    console.log("No es un correo valido");
}else{
    console.log("Es un correo valido");
}