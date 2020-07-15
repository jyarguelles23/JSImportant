//Prototypes permite atar ciertas funciones para un tipo de objetos

function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function () {
  return `La tarea ${this.nombre} tiene prioridad  de ${this.urgencia}`;
};
const tarea1 = new Tarea("Yasser", "Urgente");
const tarea2 = new Tarea("Herson", "Lento");

console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());
