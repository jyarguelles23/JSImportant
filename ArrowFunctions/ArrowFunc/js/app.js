//Arrow Function

let viajando = (destino) => {
    return `Viajando a mi destino : ${destino}`;
};

console.log(viajando("Aruba"));

let viaje = (destino, duracion) => {
    return `Viajando a mi destino : ${destino}  y la duracion es de : ${duracion}`;
};

console.log(viaje("Aruba", 30));

let via = (destino) => `Viajando a mi destino : ${destino} `;

console.log(via("Aruba"));
