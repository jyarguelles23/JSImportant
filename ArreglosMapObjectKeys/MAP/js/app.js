//Arreglos Map

const carrito = ["Producto1", "Producto2", "Producto3"];
console.log(carrito);

const appContenedor = document.querySelector("#app");

let html = "";

carrito.map((producto) => {
  html += `<li>${producto}</li>`;
});

carrito.forEach((producto) => {
  html += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html;

//Object Keys.
//Retorna las keys de un objeto

const persona = {
  nombre: "Jesus",
  profesion: "Team Leader",
  edad: 50,
};

console.log(Object.keys(persona));
