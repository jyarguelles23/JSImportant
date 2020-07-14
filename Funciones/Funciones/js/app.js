//Funciones

//Function Declaration
saludar();
function saludar() {
  console.log("Bienvenido");
}

//Function Expression
const cliente = function (nombre) {
  console.log(`Mostrando nombre del cliente : ${nombre}`);
};

cliente("yasser");

//La diferencia entre function expression y function declaration es que la function expression tienes que declararla y llamarla mas abajo en el bloque de codigo. En cambio la function declaration puedes llamarla y despues declararla en otra parte del codigo y funcionara.

//Parametros por default en funciones

const actividad = function (
  nombre = "Jesus",
  actividad = "Mostrar lo aprendido"
) {
  console.log(
    `La persona de nombre ${nombre}, esta realizando la actividad de ${actividad}`
  );
};

actividad("Herson", "Estudia mineria");
actividad("Odalys", "Cuida a sus nietos");
actividad();
