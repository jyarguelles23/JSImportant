//Object Literal  enhancement

//Pone todas las variables en un mismo objeto

const banda = "Metallica";
const genero = "Heavy Metal";
const canciones = ["Unforgiven", "Unforgiven 2"];

// old way
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones,
};
console.log(metallica);
// New way
const metal = {banda, genero, canciones};
console.log(metal);
