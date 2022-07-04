/******************************************/
/* FUNCIONES ==> DECLARACIÓN DE FUNCIÓN */
/****************************************/
// Las funciones son un conjunto de instrucciones que realizan una tarea o calculan un valor y pueden ser reutilizadas.

/*
Sintaxis:

 function nombreDeLaFuncion(parametros, ...) {
    instrucciones
 }

  - function palabra reservada
  - nombreDeLaFuncion es el nombre de la función
  - parametros son los parámetros que recibe la función (opcional)
  - {} son los bloques de código que se ejecutarán cuando se llame a la función
*/

// Declaración de una función
function saludar () {
   console.log('Hola')
}

// llamar o invocar a la función
// saludar() // Las funciones que no retornan un valor, siempre devuelven undefined

/*******************************************/
/* FUNCIONES ==> ALCANCE DE LAS VARIABLES */
/******************************************/
// Scope de las funciones (alcance de las variables)
// Las funciones pueden acceder a las variables del alcance global y a las variables del alcance local.

function alcanceLocal () {
   const variableLocal = 'Hola'
   console.log(variableLocal)
}

// alcanceLocal()
// console.log(variableLocal)

let variableGlobal = 'Hola'

function alcanceGlobal () {
   variableGlobal = 'Adios'
   console.log(variableGlobal)
}

// console.log(variableGlobal)
// alcanceGlobal()
// console.log(variableGlobal)

function globalVsLocal() {
   let variableGlobal = 'Bye'
   console.log(variableGlobal)
}

// globalVsLocal()

/*****************************/
/* FUNCIONES ==> PARÁMETROS */
/****************************/
// Parámetro es uno o varios valores listados separados por comas que se pasan a una función entre los paréntesis. Las Funciones pueden tener o no parámetros, son totalmente opcionales.
function sumar (numero1, numero2) { // <-- parámetros
   console.log(numero1 + numero2)
}

function findLastLetter (text) { // <-- parámentro
   // console.log(text[text.length - 1])
   return text[text.length - 1]
}

// findLastLetter('Hola como estas') // s test1 <-- Argumento
// findLastLetter ('Aprendiendo JavaScript') // t test2
// findLastLetter('Quiero aprender node') // e test3

// llamada ala función
// sumar(5, 2) // <-- argumentos - test
// sumar(10, 2) // <-- argumentos - test2
// sumar(15, 2) // <-- argumentos - test3

/******************************************/
/* FUNCIONES ==> VALORES PREDETERMINADOS */
/*****************************************/
// En una función, si no se pasa un valor para el parámetro, recibe el valor de undefined (indefinido).

function multiplicarConUnValor (numero1, numero2 = 1) {
   console.log(numero1 * numero2)
}

// multiplicarConUnValor(2) // NaN
// multiplicarConUnValor(2, 5) // 10

/**************************************/
/* FUNCIONES ==> RETRONANDO UN VALOR */
/*************************************/
// Una función puede devolver un valor al código de llamada como resultado. Con la directiva return.
function suma (num, num2) {
   // directiva return
   const operacion = num + num2
   return operacion
}

const result = suma(5, 5)
// console.log(result)

// Más Info: https://academlo.notion.site/Funciones-3cda1e8f48d046cea91b515aa87a858f
