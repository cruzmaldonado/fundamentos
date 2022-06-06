/***********************************/
/* Ejercicios con tipos de datos: */
/**********************************/

// Declaración de una variable de tipo number de tipo entero

// Declaración de una variable de tipo number de tipo flotante

/* Colocar el resultado después de cada // */
const nombre = 'JS'
let apellido

console.log(parseFloat('10.5.56')) //10.5
console.log(parseInt('10.5 usd')) //10

console.log(`Hola ${1}`) //Hola 1
console.log(`Hola ${'nombre'}`) // Hola 'nombre'
console.log(`Hola ${nombre}`) //   Hola JS

console.log('Una cadena de texto'[4]) // aca imprime c porque estamos accediendo a la posicion 4 de la cadena Una cadena de texto
console.log('Una cadena de texto'[0]) //U

console.log('LasQuinceLetras'.length) //15

console.log(1 / 0) // infinity
console.log(1 / 'dos') //NAN

console.log(apellido) // error creo

// Convierta la cadena a un número entero
const cadenaEntero = '250px'

let entero= parseInt(cadenaEntero)

// Convierta la cadena a un número flotante
const cadenaFlotante = '250.5px'
let entero= parseFloat(cadenaEntero)

// Responda las siguientes preguntas:
// 1. ¿Qué tipo de dato es el número negativo? entero
// 2. ¿Qué tipo de dato es el número NaN? un numero especial "nuevo" que quierre decir not a number 
// 3. ¿Qué tipo de dato es el valor boleano true? un valor booleano que quiere decir verdadero 
// 4. Si una varibale fue declarada con let, pero no se le asignó un valor, ¿qué valor tiene? undeFined
// 5. ¿Cual es el tipo de dato que se le conoce como valor vacio o desconocido? null
