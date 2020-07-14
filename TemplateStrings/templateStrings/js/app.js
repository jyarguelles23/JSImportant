//Template Strings

const nombre = "Jesus Yasser";

const work = "Team Leader";

//Concat JS old form
console.log("Nombre " + nombre + ", Work :" + work);

//Concat JS new form
console.log(` Nombre: ${nombre} , Work : ${work}`);

//The correct way to do it
const contenedorApp = document.querySelector("#app");

let html = `<ul> 
            <li> Nombre : ${nombre} </li>
            <li> Trabajo : ${work} </li>
            </ul> `;

contenedorApp.innerHTML = html;
