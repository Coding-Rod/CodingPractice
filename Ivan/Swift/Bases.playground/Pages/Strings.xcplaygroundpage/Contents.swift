import Foundation
//----- Tipo de dato String-----


//este es un tipo de dato String
let myString = "Bienvenidos a Swift"

//Swift ya sabe con las comillas que es tipo de dato string

//Para hacer el salto de linea con tres comillas

let myMultipleString = """
Bienvenidos\
Espero que les guste este documento
"""

//Estos son strings vacios
let myEmptyString = ""
let myEmptyString2 = String()


//----- Tipos de Character y emojis-----

//Caracter

let myCaracter = "\u{E9}"
let myCaracter2 = "\u{E24}"

// Caracteres especiales \n \r \t \0

let myString2 = "Bienvenidos al\n curso de Swift"

//Emojis
let myEmoji = "🙂"

//Swift ya comprende los emojis

// ----- Concatenacion o interpolacion -----

// Concatenación

var myString3 = "Hola" + " " + "Mundo"

myString3 += "\nTe gusta este curso"


//Interpolacion

let name = "Ivan"
let country = "Bolvia"

let myPersonalInfo = "Mi nombre es \(name) y vivo en \(country)"


// ----- comparacion y otras operaciones -----

//Comparacion

let name1 = "Ivan"
let name2 = "Juan"
let name3 = "Ivan"

//No son iguales
name1 == name2

//Son iguales
name1 == name3


//Contenido
let myContent2 = "Mi nombre es Ivan"

//Podemos ver si existe el contendio dentro de la cadena
myContent2.contains(name1)

let myEmptyString3 = ""

myEmptyString3 == ""
myEmptyString3.isEmpty


//Recorrido
for valor in myContent2{
    print(valor)
}





































