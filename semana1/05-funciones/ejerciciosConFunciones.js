/******************************/
/* Ejercicios con funciones: */
/*****************************/
// Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".

function bienvenida (nombre, edad) {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años`
}

let result = bienvenida('Jesús', 34)
let result2 = bienvenida('Luis', 33)
// console.log(result)
// console.log(result2)

/*
1 - Declara una variable global llamada saludo y colocale como valor "Hola los saludo desde:"
2 - Declara una función sin parámetros, dentro crea una varaible local llamada pais y colócala como valor el país de donde vienes.
3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/

let saludo = 'Hola los saludo desde:'

function saludoDesde () {
  let pais = 'México'
  console.log(`${saludo} ${pais}`) // ` ${contenido dinamico} `
}

// saludoDesde()

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
function sumar (numero, numero2) {
  return numero + numero2
}

const resultado = sumar(5, 10) 
// console.log(resultado)

// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
function alDoble (numero) {
  return numero * 2
}

const resultadoAlDoble = alDoble(resultado)
// console.log(resultadoAlDoble)

// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".

function mensajeBienvenida (nombre = 'Anónimo') {
  return `Bienvenido ${nombre}`
}

// console.log(mensajeBienvenida())
// console.log(mensajeBienvenida('Juan'))

// Crea una función que compruebe si 2 números son iguales. Si lo son, retorna true, si no, retorna false.

function sonIguales (num, num2) {
  return num === num2
}

console.log(sonIguales(5, 5))
console.log(sonIguales(6, 2))
