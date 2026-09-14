//Spread Operator

const product = {
    name: 'Xbox',
    price: 7000,
    available: false
};


const medidas = {
    weightKg: 3.1,
    height: 30.5,
    width: 20.5
}

const nuevo = { ...product, ...medidas };

console.log(nuevo);