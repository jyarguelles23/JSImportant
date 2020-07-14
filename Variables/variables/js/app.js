// crear variables

var aprender = true;
console.log(aprender);
aprender = false;
console.log(aprender);
aprender = 99;
console.log(aprender);

//  const -> constantes  siempre tienes q inicializarlas

const apr = "Aqui";
console.log(apr);

// variables let
let aprendiendo = "JS";
aprendiendo = true;
console.log(aprendiendo);

//Scope de las variables para ver las diferencias (en que parte del programa una vaiable esta disponible o no disponible)
//Scope con var
var musica = "Rock";

if (musica) {
  var musica = "Reggae";
  console.log("dentro del if", musica);
}
console.log("fuera del if", musica);

//Scope con let

let musick = "Rock";

if (musick) {
  let musick = "Reggae";
  console.log("dentro del if", musick);
}
console.log("fuera del if", musick);

//Scope con const

const music = "Rock";

if (music) {
  const music = "Reggae";
  console.log("dentro del if", music);
}
console.log("fuera del if", music);
