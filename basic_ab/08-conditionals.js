// if, else if, else



//  if (si)

let age = 26

if (age == 26) {
    console.log(`La edad es ${age}`)
}

age = 17

// else (si no)

if (age == 26) {
    console.log(`La edad es ${age}`)
} else {
    console.log(`La edad no es ${age}`)
}

// else if (si no, si)

if (age == 26) {
    console.log(`La edad es ${age}`)
} else if (age < 18) {
    console.log(`Es menor de edad`)
} else {
    console.log(`La edad no es ${age} ni es menor de edad`)
}


// Operador ternario 

const message = age == 26 ? console.log(`La edad es 26`) : console.log(`La edad es ${age}`)

// switch

let day = 1
let dayName 

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1: 
        dayName = "Martes"
        break
    case 2: 
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "No es un día válido"
        break
}

console.log(dayName)