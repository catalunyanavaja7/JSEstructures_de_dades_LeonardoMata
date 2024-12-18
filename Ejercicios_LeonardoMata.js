// Ejercicio 1
console.log("=====Ejercicio 1=====")

let numeros = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

numeros.sort((a, b) => a - b);

let valorprimero = numeros[0];
let valorultimo = numeros[numeros.length - 1];

console.log("Array ordenao:", numeros);
console.log("Primer Valor:", valorprimero);
console.log("Ultimo Valor:", valorultimo);

// Ejercicio 2
console.log("=====Ejercicio 2=====")

let otroarray = [...numeros];
console.log("Nuevo Array usando operador de propagación", otroarray);

// Ejercicio 3
console.log("=====Ejercicio 3=====")

let listanum = [10,20,30, ...numeros];
let fusion = [];

listanum.forEach(num => {
    if (!fusion.includes(num)) fusion.push(num);
});
console.log("Array fusionado sin duplicados", fusion);

// Ejercicio 4
console.log("=====Ejercicio 4=====");

let noduplica = new Map();
listanum.forEach(num => noduplica.set(num, true));
let resultadoDuplicados = Array.from(noduplica.keys());

console.log("Lista sin duplicados:", resultadoDuplicados);

// Ejercicio 5
console.log("=====Ejercicio 5=====");

function cubos(array) {
    return array.map(num => num ** 3);
}
let arrayCubos = cubos([1, 3, 6]);
console.log("Cubos array: ", arrayCubos);

// Ejercicio 6
console.log("=====Ejercicio 6=====");

let nombresConA = ["ahiram", "andres", "amargo", "erica", "vallcanera"];
let stringConMuchaA = nombresConA.filter(str => {
    let contadorA = str.split('').filter(char => char === 'a').length;
    return contadorA > 1;
});
console.log("Strings con mas de una A: ", stringConMuchaA);

// Ejercicio 7
console.log("=====Ejercicio 9=====");

let listaPeliculas = [
    { titulo: "Scooby doo", fecha: 2002, director: "Raja Gosnell"},
    { titulo: "bob esponja: un heroe fuera del agua", fecha: 2015, director: "Paul Tibbitt"},
    { titulo: "bob esponja: atrapados en el congelador", fecha: 2009, director: "Andrew Overtoom"},
    { titulo: "devilman crybaby", fecha: 2018, director: "Go Nagai"},
    { titulo: "Dexter's Laboratory: Ego trip", fecha: 1999, director: "Chris Savino"}
];

let peliMasAntigua = listaPeliculas[0];

// Iteración:
for (let pelicula of listaPeliculas) {
    if (pelicula.fecha < peliMasAntigua.fecha) {
        peliMasAntigua = pelicula;
    }
}

console.log("La pelicula mas antigua es:", peliMasAntigua.titulo);