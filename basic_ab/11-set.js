// set
// NO ADMITE DUPLICADOS
// Declaración

let mySet = new Set();

// Inicialización

mySet = new Set(["Andrea", "Carolina", "Negrita"]);
console.log(mySet);

// Métodos comunes

// add y delete 
mySet.add("Meow");
console.log(mySet);

console.log(mySet.delete("Meow")) // Elimina el elemento y devuelve true si lo encontró
console.log(mySet);


// has

console.log(mySet.has("Andrea"));
console.log(mySet.has("Meow")); // Devuelve true o false

// size

console.log(mySet.size); // Devuelve el número de elementos en el set

// Convetir un set a array

let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet);