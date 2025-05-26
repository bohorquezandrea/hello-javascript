// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Andrea"

if (nombre === "Andrea") {
    console.log(`Hola, ${nombre}!`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let usuario = "bohorqueza"
let password = "aerdna"

if (usuario === "bohorqueza" && password === "aerdna") {
    console.log("Acceso concedido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -7

if (number === 0) {
    console.log("El número es cero")
} else if (number > 0) {
    console.log(`El número ${number} es positivo`)
} else {
    console.log(`El número ${number} es negativo`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17

if (age >= 18) {
    console.log(`Puede votar`)
} else {
    let yearsToVote = 18 - age;
    console.log(`No puede votar, le hace(n) falta ${yearsToVote} año(s).`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let adultOrMinor = 33

let status = adultOrMinor >= 18 ? console.log(`Es adulto y tiene ${adultOrMinor} años`) : console.log(`Es menor de edad y tiene ${adultOrMinor} años`)

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 4 
let seasonName 

switch (month) {
    case 1:
        seasonName = "Invierno"
        break
    case 2:
        seasonName = "Invierno"
        break
    case 3: 
        seasonName = "Primavera"
        break
    case 4:
        seasonName = "Primavera"
        break
    case 5:
        seasonName = "Primavera"
        break
    case 6:
        seasonName = "Verano"
        break
    case 7:
        seasonName = "Verano"
        break
    case 8:
        seasonName = "Verano"
        break
    case 9:
        seasonName = "Otoño"
        break
    case 10:
        seasonName = "Otoño"
        break
    case 11:
        seasonName = "Otoño"
        break
    case 12:
        seasonName = "Invierno"
        break
    default:
        seasonName = "No es un mes válido"
        break 
}

console.log(`En el mes ${month} estamos en ${seasonName}.`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior 

let short = 30
let long = 31
let february = 28 

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log(`El mes ${month} tiene ${long} dîas.`)
} else if (month === 2) {
    console.log(`El mes ${month} tiene ${february} días.`) 
} else {
    console.log(`El mes ${month} tiene ${short} días.`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma 

let language = "aleman"

switch (language) {
    case "espanol":
        console.log("Hola, ¿cómo estás?")
        break
    case "ingles":
        console.log("Hello, how are you?")
        break
    case "frances":
        console.log("Bonjour, comment ça va?")
        break
    case "aleman":
        console.log("Hallo, wie geht es dir?")
        break
    case "italiano":
        console.log("Ciao, come stai?")
        break
    default:
        console.log("Idioma no reconocido")
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

if (month === 1 || month === 2 || month === 12) {
    seasonName = "Invierno"
} else if (month >= 3 && month <= 5) {
    seasonName = "Primavera"
} else if (month >= 6 && month <= 8) {
    seasonName = "Verano"
} else if (month >= 9 && month <= 11) {
    seasonName = "Otoño"
} else {
    seasonName = "No es un mes válido"
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7 

switch (month) {
    case 1:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 2:
        console.log(`El mes ${month} tiene ${february} días.`)
        break
    case 3:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 4:
        console.log(`El mes ${month} tiene ${short} días.`)
        break
    case 5:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 6:
        console.log(`El mes ${month} tiene ${short} días.`)
        break
    case 7:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 8:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 9:
        console.log(`El mes ${month} tiene ${short} días.`)
        break
    case 10:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
    case 11:
        console.log(`El mes ${month} tiene ${short} días.`)
        break
    case 12:
        console.log(`El mes ${month} tiene ${long} días.`)
        break
}