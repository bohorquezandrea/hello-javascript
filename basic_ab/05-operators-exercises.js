// 1. Crea una variable para cada operación aritmética 

let a = 20
let b = 30

// 2. Crea una variable para cada tipo de operación, que haga uso
// de las variables utilizadas para las operaciones aritméticas

let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let modulo = a % b
let potencia = a ** b

// 3. Imprime 5 comparaciones con diferentes operadores de comparación 

// console.log(a && b)
// console.log(a = b)
// console.log(a == b)
// console.log(a || b)
// console.log(a === b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación 

console.log(a)
console.log(a > b)
console.log(a === b)
console.log((a + b) < b)
console.log((a * b) < a)
console.log (a != a)

// 5. Utiliza el operador lógico AND 

let and = (a && b)

// 6. Utiliza el operador lógico OR 

let or = (a || b)

// 7. Combina ambos operadores lógicos 

let both = (a + b && a - b || b - a)

// 8. Añade alguna negación 

let not = !(a - b)

// 9. Utiliza el operador ternario 

!a ? console.log("es truthy") : console.log("es falsy")

// 10. Combina operadores aritméticos, de comparación y lógicas

let combined = (a + b > a && a - b < b || a * b === a)