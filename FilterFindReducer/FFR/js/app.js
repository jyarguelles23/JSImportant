//Metodos disponibles en arreglos
const personas = [
    {nombre: "Jesus", edad: 32, aprendiendo: "JS"},
    {nombre: "Odalys", edad: 52, aprendiendo: "Java"},
    {nombre: "Marino", edad: 60, aprendiendo: "React"},
    {nombre: "Herson", edad: 26, aprendiendo: "Angular"},
];

//Filtrar quienes son mayores de 28 anos
//Método con funcionamiento similar al de find(), retornara un nuevo arreglo con todos los elementos que encuentre cumpliendo los requerimientos que proponga nuestro callback.

const mayores = personas.filter((p) => {
    return p.edad > 28;
});
console.log(mayores);

//Encontrar quien se llama herson  Metodo Find
//Este método nos retornara el primer elemento que encuentre cumpliendo los requerimientos que proponga nuestro callback.
const herson = personas.find((p) => {
    return p.nombre === "Herson";
});
console.log(herson);

//Reduce
//Este método nos permite, dada una función, “reducirlo” o “transformar” los elementos de un arreglo en un nuevo y único valor.

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total);
