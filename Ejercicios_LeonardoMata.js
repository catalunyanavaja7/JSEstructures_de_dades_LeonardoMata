console.log("=====Ejercicio 1=====")

let numeros = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

numeros.sort((a, b) => a - b);

let valorprimero = numeros[0];
let valorultimo = numeros[numeros.length - 1];

console.log("Array ordenao:", numeros);
console.log("Primer Valor:", valorprimero);
console.log("Ultimo Valor:", valorultimo);

console.log("=====Ejercicio 2=====")

let otroarray = [...numeros];
console.log("Nuevo Array usando operador de propagación", otroarray);

console.log("=====Ejercicio 3=====")

let listanum = [10,20,30, ...numeros];
let fusion = [];

listanum.forEach(num => {
    if (!fusion.includes(num)) fusion.push(num);
});
console.log("Array fusionado sin duplicados", fusion);

console.log("=====Ejercicio 4=====");

let noduplica = new Map();
listanum.forEach(num => noduplica.set(num, true));
let resultadoDuplicados = Array.from(noduplica.keys());

console.log("Lista sin duplicados:", resultadoDuplicados);

