let nombre = "Jose Gael";
let apellido = 'Hernandez Velazquez';
let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

document.getElementById("nombreCompleto").textContent = `Nombre completo: ${nombreCompleto}`;

let numero = 250;
let numero2 = 300;
var numero3 = 100;
numero4 = 50; // declaración antigua

console.log(numero, numero3);

let suma = numero + numero2 + numero3 + numero4;
console.log(suma);
document.getElementById("suma").textContent = `Suma: ${suma}`;

let resta = numero2 - numero3;
console.log('El resultado es: ', resta);
document.getElementById("resta").textContent = `Resta: ${resta}`;

let multiplica = (numero * numero2);
console.log('El resultado es: ', multiplica);
document.getElementById("multiplica").textContent = `Multiplicación: ${multiplica}`;

let divide = (numero3 / numero4);
console.log('El resultado es: ', divide);
document.getElementById("divide").textContent = `División: ${divide}`;
