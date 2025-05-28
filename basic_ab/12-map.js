// Map 

// Declaración 

let myMap = new Map();

console.log(myMap)

// Inicialización 

myMap = new Map ([
    ["name", "Andrea"],
    ["age", 26],
    ["country", "Colombia"]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias", "andreita")
myMap.set("isDeveloper", true)
myMap.set("name", "Andrea Bohorquez")

console.log(myMap)

// get

console.log(myMap.get("name")) // Andrea Bohorquez

// has 

console.log(myMap.has("surname")) // false 

// delete

myMap.delete("alias")
console.log(myMap) 

// keys

console.log(myMap.keys()) // MapIterator {}

// values

console.log(myMap.values()) // MapIterator {}

// entries

console.log(myMap.entries()) // MapIterator {}

// size

console.log(myMap.size) // 5

// clear 

myMap.clear()
console.log(myMap) // Map(0) {}
