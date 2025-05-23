// Strings

// Concatenación 

let myName = "Andrea"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// Longitud 
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[6])
console.log(greeting[7])
console.log(greeting[8])
console.log(greeting[9])
console.log(greeting[10])

// Metodos comunes 
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Andrea"))
console.log(greeting.indexOf("!"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Juan`"))
console.log(greeting.slice(0, 12))
console.log(greeting.slice(0, 11))
console.log(greeting.replace("Andrea", "Juan"))

// Template literals (planillas literales)

let message = `Hola,
 este es mi curso de JavaScript
 con el salto de línea`

console.log(message)

let email = `bohorquezandrea99@gmail.com`

// Interpolación de variables
console.log(`Hola, ${myName} con email: ${email}`)