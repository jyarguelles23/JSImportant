//Destructuring objects
//Extraer valores de un objeto

const aprendiendoJS = {
  version: {
    nueva: "ESC6",
    anterior: "ESC5",
  },
  frameworks: ["React", "VueJS", "Angular"],
};

console.log(aprendiendoJS);

//New one

let { version, frameworks } = aprendiendoJS;
console.log(version);
console.log(frameworks);

let { nueva } = aprendiendoJS.version;
console.log(`La version nueva es ${nueva}`);
