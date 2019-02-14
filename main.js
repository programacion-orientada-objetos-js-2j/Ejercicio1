import Auto from "./Auto.js";

let auto1= new Auto("Ford", 2000, "rojo", 100)
let auto2= new Auto("Nissan", 2018, "Plata", 50)
let auto3 = new Auto("BMW", 2000)

console.log(`Color ${auto1.color}`);//Lectura
console.log(`Color ${auto2.color}`);//Lectura

auto1.color = "Amarillo";//Escritura
auto2.color = "Azul";//Escritura
auto1.modelo=1990;

auto2.encender();
auto3.encender();

auto1.encender();
auto1.avanazar(50, 2);
auto1.apagar();
auto1.avanazar(20, 1);