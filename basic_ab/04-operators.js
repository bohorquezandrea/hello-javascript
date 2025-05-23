// Operadores 



// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División
console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
console.log(myVariable)
myVariable *= 2 // Multiplicación con asignación
console.log(myVariable)
myVariable /= 2 // División con asignación
console.log(myVariable)
myVariable %= 2 // Módulo con asignación
console.log(myVariable)
myVariable **= 2 // Exponente con asignación
console.log(myVariable)


// Operadores de comparación 

console.log (a > b) // Mayor que
console.log (a < b) // Menor que
console.log (a >= b) // Mayor o igual que
console.log (a <= b) // Menor o igual que
console.log (a == b) // Igual que
console.log (a === b) // Igual que y del mismo tipo
console.log (a != b) // Diferente que
console.log (a !== b) // Diferente que y del mismo tipo 

// Truthy values (valores verdaderos)

// Todos los números positivos y negativos, menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadas de texto vacías

// Operadores lógicos
// AND (&&) - Y

console.log (true && true) // true
console.log (true && false) // false
console.log (false && true) // false
console.log (false && false) // false
console.log (true && 5) // 5

// OR (||) - O
console.log(5 > 10 || 10 > 5) // true
console.log(5 > 10 || 10 < 5) // false
console.log(5 > 10 || 10 > 5 || 5 < 10) // true

console.log( 5 > 10 && 15 > 20 || 30 > 40) 

// not (!)
console.log(!true) // false
console.log(!false) // true
console.log(!5) // false
console.log(!0) // true

// Operadores ternarios

let isRaining = true 
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
isRaining = !isRaining
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")
