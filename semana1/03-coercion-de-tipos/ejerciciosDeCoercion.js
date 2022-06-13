/**************************************/
/* Ejercicios con coercion de tipos: */
/*************************************/

// Realice una coercion inplicita

// Realice una coercion explicita

console.log(2 + '2') // implicita
console.log(1 + 1 + '2') // implicita
console.log('2' + 1 + 1) //implicita
console.log(true + true)// implicita
console.log(true / null) //implicita
console.log('20' - true) //implicita
console.log(true + '20') //
console.log(25 + undefined) //
console.log(null + true) //
console.log('b' + 'a' + +'a' + 'a') //

console.log(Number([])) //
console.log(Boolean([false, false, false])) //
console.log(String(false)) //
console.log(String(Number(Boolean({})))) //

console.log(true + +'5') //
console.log(+null) //
console.log(+undefined) //
console.log(+'5' - +'2') //
