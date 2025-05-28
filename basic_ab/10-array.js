// array 

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2) 

myArray = ["Andrea", "Carolina", "Negrita"]
myArray2 = new Array("Andrea", "Carolina", "Negrita")

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Andrea"
myArray2[1] = "Carolina"
myArray2[2] = "Negrita"

console.log(myArray2)

// Métodos comunes

myArray = []

// push y pop 

myArray.push("Andrea")
myArray.push("Carolina")
myArray.push("Negrita")

console.log(myArray)

myArray.pop() // Elimina el último y lo devuelve
console.log(myArray)
myArray.pop()
console.log(myArray)


// shift y unshift

myArray.shift()
console.log(myArray) // Elimina el primero y lo devuelve

myArray.unshift("Andrea", "Carolina", "Negrita")
console.log(myArray) // Añade al principio

// length

console.log(myArray.length) // Devuelve la longitud del array


// clear 

// my Array = []
myArray.length = 0  // alternativa (mejor no usar)
console.log(myArray) // Limpia el array

// slice 

myArray = [1, 2, 3, 4, 5, 6]

myNewArray = myArray.slice(1, 2)

console.log(myArray)
console.log(myNewArray) // Devuelve un nuevo array con los elementos del índice 1 al 2 (sin incluir el 2)

// splice

myArray = [1, 2, 3, 4, 5, 6]
myArray.splice(2, 2) // Elimina 2 elementos a partir del índice 2
console.log(myArray) // Devuelve el array modificado