//Clase con funcion

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

//crear objeto de tarea
let tarea = new Tarea("mia", "alta");
tarea.mostrar();

//Herencia de Clases

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        console.log(
            `${this.nombre} tiene una prioridad de ${this.prioridad} y la cantidad es de ${this.cantidad}`
        );
    }
}

let compra1 = new ComprasPendientes("Jabon", "Urgente", 50);

compra1.mostrar();
