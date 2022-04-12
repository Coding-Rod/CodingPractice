import UIKit

//----- Boleanos y Valores logicos -----


var estudios = "Grado Universitario"
var salario = 0
//Verdadero o falso
var cedulaProfesional = true

var cedulaMaestria = false

if salario > 1000{
   salario = 9000
}else{
   salario = 0
}
salario

//Los booleanos nos ayudan con la logica de programacion



//----- Colecciones desde cero -----

//Almacenar una recopilacion 'Arrays'

// Array <Tipo de dato> =

//Set = No se pueden repetir los datos

// Diccionarios = Almacenar una clave valor

// Dictionary <tipo de Valor>


//----- Arreglos -----

//Colecciond de datos
//En programacion se comienza contando desde 0 para adelante
var arregloNumeros = [1,2,3]

let arregloNumeroInmutable = [3,2,1]

//Print es una funcion para imprimir en consola
print(arregloNumeros)

//El "Apend" nos sirve para poder agregar elementos al final del arreglo
arregloNumeros.append(5)
print(arregloNumeros)

//el "Insert" nos sirve para agregar numeros en una poscion especifica
arregloNumeros.insert(4, at: 3)
print(arregloNumeros)


//el "RemoveLast" nos sirve para remover el ultimo valor asi como el "First" que elimina el primer valor
arregloNumeros.removeLast()
print(arregloNumeros)

//Si solo usamos el "Remove" podremos ser especificos con la poscion del valor
arregloNumeros.remove(at: 3)
print(arregloNumeros)

// Y si queremos remover todo el arreglo usamos "RemoveAll"
arregloNumeros.removeAll()
print(arregloNumeros)

//Arreglos vacios

var arregloVacio:[Int] = []
print(arregloVacio)

//Ejemplo extra

var arregloEmojis = ["🥲","😚","☺️"]
print(arregloEmojis)

arregloEmojis.append("🥳")
print(arregloEmojis)


// ----Diccionarios----

//sintaxis Diccionario

let myClasicDiccionary = Dictionary<Int, String>()

var myModernDiccionary = [Int:String]()

// Anadir datos con clave y valor
myModernDiccionary = [001:"Ivan", 002:"Juan"]
//Si volvemos a escribir toda la linea de arriba creamos una nueva
myModernDiccionary = [004:"Doris", 005:"Limberth"]
                                
//Para poder añadir un solo dato al diccionario
myModernDiccionary[003] = "Pedro"
myModernDiccionary[006] = "Oscar"
myModernDiccionary[007] = "Mariana"

//Para acceder a un dato solo escribimos la clave
myModernDiccionary[003]

//La clave del diccionario es unica y podemos cambiar su valor asi:
myModernDiccionary[003] = "Ivan Sangueza"

//Otra forma para poder actualizar todo usamos el "UpdateValue"
myModernDiccionary.updateValue("Ivan Alarcon", forKey: 003)

//Para borrar datos
myModernDiccionary[002] = nil

//de la forma clasica ser con el "removeValue"



//-----Tuplas-----

//Para las tuplas usamos los parentesis
var persona = ("Ivan", "Sangueza", 23)

//Para poder acceder al contenido de la tupla solo agregamos la poscion que se encuentra la misma

persona.0

//Para poder trabajar por serparado podemos iniciar una variable con la tupla
var (Nombre, apellido,  edad) = persona

Nombre

// Se trabaja casi igual a los objetos en javascript
var personaNamedTuples = (name: "Ivan", lastname:"Sangueza", age:23)

//Y para acceder podemos solo nombrar la variable asi para no perdernos
personaNamedTuples.name


//----Enumeraciones----

// Una estructura que nos permite agrupar elementos que tienen caracterizticas en comun

//Sintaxis

enum personalData {
    //Tambien podemos escribirlos en una sola linea
    case named
    case surname
    case adress
    case phone
}


var currentData:personalData = .named
var input = "Ivan"

currentData = .phone
input = "65547510"


// Enumeraciones con valores asociados

enum complexPersonalData{
    case name(String)
    case surname(String, String)
    case address(String, Int)
    case phone(Int)
}

var complexCurrentData: complexPersonalData = .name("Ivan")

complexCurrentData = .address("Miraflores", 123)

enum RawPersonalData:String{
    case name = "Nombre"
    case surname = "Apellidos"
    case address = "Direccion"
    case phone = "Celular"
}

RawPersonalData.name.rawValue

//Basicamente las enumeraciones nos sirven para poder hacer un parametro de datos para que el usuario no pueda pasarse del mismo








