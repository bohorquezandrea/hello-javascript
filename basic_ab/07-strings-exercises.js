// 1. Concatena dos cadenas de texto

let greeting1 = "Quiubo"
let greeting2 = "qué se dice?"

let greetingFinal = `${greeting1} Andrea, ${greeting2}`
console.log(greetingFinal)

// 2. Muestra la longitud de una cadena de texto

console.log(greetingFinal.length)

// 3. Muestra el primer y el último carácter de una cadena de un string

console.log(greetingFinal[0])
console.log(greetingFinal[26])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greetingFinal.toUpperCase())
console.log(greetingFinal.toLowerCase())

// 5. Crea una cadena de texto en varis líneas

console.log(`${greeting1} Andrea,
 ${greeting2}`)

// 6. Interpola el valor de una variable en un string 

console.log(`Hola, ${greetingFinal}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greetingFinal.replace(" ", "_"))
console.log(greetingFinal.replace(/ /g, "_"))

// 8. Comprueba si una cadena de texto contiene una palabra

console.log(greetingFinal.includes("Andrea"))

// 9. Comprueba si dos strings son iguales

console.log(greeting1 === greeting2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(greeting1.length === greeting2.length)
