//Spread Operator ... Permite concatenar arreglos
let lenguajes = ["JS", "JAVA", "PHP"];
let frameworks = ["React", "Springboot", "Laravel"];

let newarray = [...lenguajes, ...frameworks];

console.log(newarray);

///Porq copiar un arreglo?
// Es para no perder la fuente de datos originales, por eso usamos spread operator

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);

//Ejemplo
function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3];

suma(...numeros);
