/*******************************************/
/* MÉTODOS ==> CADENAS DE TEXTO (STRINGS) */
/******************************************/

const cadenaDeTexto = 'Hola soy una cadena de texto'
//                     012345
// longitud - length
// console.log(cadenaDeTexto.length)

// console.log(cadenaDeTexto[0]) // H
// console.log(cadenaDeTexto[5]) // s
// console.log(cadenaDeTexto[28]) // undefined

// charAt(indíce) - retornanr el carácter en la posición especifica, si no existe retorna una cadena vacia. 
// console.log(cadenaDeTexto.charAt(0)) // H
// console.log(cadenaDeTexto.charAt(5)) // s
// console.log(cadenaDeTexto.charAt(28))// ''

// indexOf(valor, indíce) - Devuelve la posición del primer carácter de la cadena especificada, si no existe devuelve -1.
// console.log(cadenaDeTexto.indexOf('de'))
// console.log(cadenaDeTexto[15])
// console.log(cadenaDeTexto.indexOf('de', 21))
// console.log(cadenaDeTexto.indexOf('xz'))
// console.log(cadenaDeTexto.indexOf(' '))

// lastIndexOf(valor, indíce) - Devuelve la posición del último carácter de la cadena especificada, si no existe devuelve -1.
// console.log(cadenaDeTexto.lastIndexOf('de'))
// console.log(cadenaDeTexto.lastIndexOf('de', 19))
// console.log(cadenaDeTexto.lastIndexOf('zx'))

// includes(valor, indíce) - Devuelve true si la cadena especificada está contenida en la cadena, o false si no está.
// console.log(cadenaDeTexto.includes('de'))
// console.log(cadenaDeTexto.includes('de', 16))
// console.log(cadenaDeTexto.includes('de', 21))
// console.log(cadenaDeTexto.includes('de', 30))

// console.log(cadenaDeTexto.lastIndexOf('Hola') != -1)

// startsWith(valor, indíce) - Devuelve true si la cadena especificada está al inicio de la cadena, o false si no está.
// console.log(cadenaDeTexto.startsWith('Hola'))
// console.log(cadenaDeTexto.startsWith('soy', 5))
// console.log(cadenaDeTexto.startsWith('lol'))

// endsWith(valor, indíce) - Devuelve true si la cadena especificada está al final de la cadena, o false si no está.
let email = 'desconcido@academlo.com'
// console.log(email.endsWith('@academlo.com'))

// Buscar el último carácter de una cadena
// console.log(cadenaDeTexto[cadenaDeTexto.length -1])

// at(indíce) - Devuelve el carácter en la posición especificada, si no existe devuelve undefined. Este método permite enteros positivos y negativos. Los enteros negativos cuentan de nuevo desde el último carácter de cadena.
// console.log(cadenaDeTexto.at(0))
// console.log(cadenaDeTexto.at(-1))
// console.log(cadenaDeTexto.at(50))

/* Mayúsculas y minúsculas */
// toUpperCase() - Devuelve la cadena en mayúsculas.
// console.log(cadenaDeTexto.toUpperCase())

// toLowerCase() - Devuelve la cadena en minúsculas.
// console.log(cadenaDeTexto.toLowerCase())

/* Extraer un trozo de una cadena */
// substring(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
// console.log(cadenaDeTexto.substring(0))
// console.log(cadenaDeTexto.substring(0,4))

// console.log(cadenaDeTexto.substring(4,0)) // invierte los parametros
// console.log(cadenaDeTexto.substring(-1)) // no usa negativos

// slice(indíceInicial, indíceFinal) - Devuelve una subcadena de la cadena.
// console.log(cadenaDeTexto.slice(0))
// console.log(cadenaDeTexto.slice(0,4))

// console.log(cadenaDeTexto.slice(4,0))
// console.log(cadenaDeTexto.slice(-5)) // podemos usar numeros negativos

// División de cadenas
// split(separador, limite) - Devuelve un array con las partes de la cadena que se separan por el separador especificado.
const newArr = cadenaDeTexto.split(' ')
// console.log(newArr[5])

let date = '27/06/2022'
// ['27', '06', '2022']
//   0      1      2
let separador = date.split('/')
let day = separador[0]
let month = separador[1]
let year = separador[2]

// console.log(`${month} ${day}, ${year}`)

// Recorte de espacios en blanco
// trim() - Devuelve una cadena con los espacios en blanco eliminados de la izquierda y derecha.
let text = '   hola    '

// console.log('/*',text,'*/')
// console.log('/*',text.trim(),'*/')
// console.log(cadenaDeTexto.trim())

// Búsqueda y sustitución de valores de cadenas
// replace(valor, nuevoValor) - Devuelve una nueva cadena con una o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por el nuevo valor.
// console.log(cadenaDeTexto.replace('Hola', 'Adios'))
// console.log(cadenaDeTexto.replace('Hola', 'Adios').replace('soy', 'no soy'))

// console.log('El perro grande, ladro al Perro pequeño junto a otro perro'.replace(/perro/gi, 'gato'))

// g - reemplaza todas las apariciones del valor
// i - ignora may y min

// Repetición
// repeat(n) - Devuelve una cadena repetida n veces.
// console.log('Hola '.repeat(3))


// Más Info: https://academlo.notion.site/Tipos-de-Datos-primitivos-ed3f754ef79f4ec1bad36290ce46442e
