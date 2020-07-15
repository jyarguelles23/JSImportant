// metodos o funciones en un objeto

const persona = {
  nombre: "Jesus",
  edad: 50,
  trabajo: "Team Leader",
  rockMusic: true,
  mostrarInfo() {
    console.log(`${this.nombre} es ${this.trabajo}`);
  },
};
persona.mostrarInfo();
