//Objetos
//Object Literal old ways
const persona = {
    nombre: "Jesus",
    profesion: "Team Leader",
    edad: 500,
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);

// Object Constructor new way

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea("Yasser", "Urgente");
const tarea2 = new Tarea("Herson", "Lento");
