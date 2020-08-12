//Arreglos Map

const carrito = ["Producto1", "Producto2", "Producto3"];
//console.log(carrito);

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

//console.log(Object.keys(persona));

var myArray = [13,2,4,35,1];
myArray=myArray.sort((i, j) => i - j );


var myArray = [1,2,1,3,3,1,2,1,5,1];
myArray=myArray.sort((i, j) => i - j );
var arr=[];
var obj={1:": ",2 :": ", 3 : ": ", 4 : ": ", 5 :": " };
myArray.forEach((numero) => {
    const el = (number) => number === numero;
    if(!arr.some(el)){
        arr.push(numero);
        const result = myArray.filter(num => num == numero);
        
        var b="";
        for(var i=0 ; i < result.length ; i++){
            b=`${b}*`;
        }
        
        var r=result[0];
                
        obj[r]+=`${b}`;
         
    }

});
console.log(`1${obj[1]}`);
console.log(`2${obj[2]}`);
console.log(`3${obj[3]}`);
console.log(`4${obj[4]}`);
console.log(`5${obj[5]}`);


var myArray = [1,2,2,4,5,6,7,8,8,8];
myArray=myArray.sort((i, j) => i - j );
var arr=[];

let longest=0;
let numberResult=0;
myArray.forEach((numero) => {
 
    const el = (number) => number === numero;
    if(!arr.some(el)){
        arr.push(numero);
        const result = myArray.filter(num => num == numero);
        if(result.length > longest){
            longest = result.length;
            numberResult=result[0];
        }
    }
    
});

console.log(`Longest: ${longest}`);
console.log(`Number: ${numberResult}`);


