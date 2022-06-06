/*******************************/
/* Ejercicios con operadores: */
/******************************/
// ¿Cual es el resultado de las siguiten expresiones?

console.log(1 + 2 + '3') //
console.log(1 + 2 + '3' + 4) //
console.log(10 + 4 - 2 * 5) //
console.log(11 % 4) //
console.log(10 ** 2) //

// ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

let a = 1
let b = 1

const c = ++a
const d = b++

console.log(a) //
console.log(b) //
console.log(c) //
console.log(d) //

// ¿Cuáles son los valores de ‘e’ y ‘f’ después del código a continuación?

let e = 2
const f = 1 + (e *= 2)
console.log(e) //
console.log(f) //

// ¿Cuál es el valor de ‘g’ después del código a continuación?
let g = 3
g += 5
console.log(g) //

// ¿Cuál es el valor de cada comparación después del código a continuación?

console.log(5 > 4) //
console.log('banco' < 'barco') //
console.log(80 >= 15) //
console.log(500 <= 100) //
console.log(undefined == null) //
console.log('2' > '12') //
console.log(0 === 1) //
console.log(1 !== 0) //
console.log(undefined === null) //
console.log(null == '\n0\n') //
console.log(+'\n0\n' === null) //

// ¿Cuál es el resultado de cada valor después del código a continuación?

console.log(null || 2 || undefined) //
console.log(1 || 2 || 3) //
console.log(1 && null && 2) //
console.log(1 && 2) //
console.log(null || 2 && 3 || 4) //

const count = 0

console.log(null || count || 35) //
console.log(null && count && 35) //
console.log(null ?? count ?? 35) //
