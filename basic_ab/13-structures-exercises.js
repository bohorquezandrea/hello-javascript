// 1. Crea un array que almacene cinco animales

let zoo = ["Gato", "Vaca", "Jirafa", "Pantera", "Flamenco"];
console.log(zoo);

// 2. Añade dos más. Uno al principio y otro al final

zoo.unshift("Murcielago");
console.log(zoo)

zoo.push("Gaviota")
console.log(zoo)

// 3. Elimina el que se encuentra en tercera posición

zoo.slice(2, 3)
console.log(zoo)

// 4. Crea un set que almacene cinco libros 
let books = new Set();

books = new Set(["1984", "El Principito", "Cien años de soledad", "Hábitos atómicos", "El arte de la guerra"]);
console.log(books);

// 5. Añade dos más. Uno de ellos repetido

books.add("El arte de la guerra");
books.add("El Hobbit");
console.log(books);

// 6. Elimina uno concreto a tu elección 

books.delete("El Hobbit");
console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre

let monthMap = new Map()
console.log(monthMap)

monthMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(monthMap)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor 

console.log(monthMap.has(5))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

monthMap.set("summerMonths", ["Junio", "Julio", "Agosto"]);
console.log(monthMap);

// 10. Crea un array, transfórmalo a un Set y almacénalo en un Map 

let myArray = ["Rojo", "Verde", "Azul", "Amarillo"];
let mySet = new Set(myArray);
let colorMap = new Map();
colorMap.set("colors", mySet);
console.log(colorMap);
