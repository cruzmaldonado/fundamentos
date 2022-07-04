// let users=[
//     { name: 'Georg', email: 'georg@academlo.com' },
//     { name: 'Andrea', email: 'andrea@gmail.com' }
//           ]


// let attedances=[
//     { email: 'georg@academlo.com', attendance: true },
//     { email: 'andrea@gmail.com', attendance: false }
//                ]


// function mergeData(users, attendances) {
//     let arreglo = []
//     let indice=0
//      for (i = 0; i < users.length; i++) {
//       for (j = 0; j < attendances.length; j++) {
//         if (users[i].email == attendances[j].email){
//           arreglo[indice]={name:users[i].name,email:users[i].email,attendance:attedances[j].attendance}
//             indice++
//         }
//       }
//     }
    
//     return arreglo
// }

// console.log(mergeData(users,attedances))
// // // [
//     { name: 'Georg', email: 'georg@academlo.com', attendance: true },
//     { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
// ]

// [
//     { name: 'Georg', email: 'georg@academlo.com', attendance: true },
//     { name: 'Andrea', email: 'andrea@gmail.com', attendance: false }
// ]



// let students=[
//     { name: 'Georga', email: 'georag@academlo.com', score: 99 },
//     { name: 'Andress', email: 'andress@gmail.com', score: 40 },
//     { name: 'And', email: 'and@gmail.com', score: 4 },
//     { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//     { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//     { name: 'Andrés', email: 'andres@gmail.com', score: 34 },
//     { name: 'carlos', email: 'carlos@academlo.com', score: 60 },
//     { name: 'Miguel', email: 'miguel@gmail.com', score: 71 },
//     { name: 'tomas', email: 'tomas@gmail.com', score: 91 }
//   ]

// function orderStudentsByScore(students) {
    
//     let arreglo=[]
//     let score=[]
//     let indice=0
//     for(i=0;i<students.length;i++){

//         score.push(students[i].score)
        
//     }

//     score.sort(function(a, b){return a - b})
//     console.log(score)
   
//     for(i=0;i<students.length;i++){

//         if(students[i].score==score[indice]){

//             arreglo.push(students[i])
//             indice++
//             i=-1
//         }
        
        
//     }
//      return arreglo
//   }
  

// let students=[
//     { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//     { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//     { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//     { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
//              ]

// let countries=[
//     { id: 1, name: 'Mexico', },
//     { id: 2, name: 'colombia' }
//   ]
// let countryName="Colombia"
// function contadorEstudiantes(students, countries, countryName){
//     let contador=0
//     let valorPais
//     for (i=0;i<countries.length;i++){
//         if(countryName.toUpperCase()==countries[i].name.toUpperCase())
//         valorPais=countries[i].id
//     }
//     for (i=0;i<students.length;i++){
//         if(students[i].country_id==valorPais)
//         contador++
//     }
// return contador
// }

// console.log(contadorEstudiantes(students, countries, countryName))

// let students=[
//     { name: 'Daniela', age: 25 },
//     { name: 'Andrea', age: 23 },
//     { name: 'José', age: 27 },
//     { name: 'Georg', age: 23 },
//   ];




// function findMostCommonAge(students) {
//     let arreglo=[]
//     let valores=[]
//     for(i=0;i<students.length;i++){
//         arreglo.push({edades:students[i].age,valor:0})
        
//     }
//     for(i=0;i<students.length;i++){
//         for(j=0;j<arreglo.length;j++){
//              if(students[i].age==arreglo[j].edades){
//                  arreglo[j].valor++
//                  break
//             }
//         }
//     }
//     for(i=0;i<arreglo.length;i++){
//         valores.push(arreglo[i].valor)
//     }
//     valores.sort(function(a, b){return b - a})
//     for(i=0;i<arreglo.length;i++){
//         if(arreglo[i].valor==valores[0])
//         return arreglo[i].edades
//     }
    
    
      



//     return null
//   }
// console.log(findMostCommonAge(students))



// desde aqui


// let students=[
//     { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
//     ];

// function countApplicationsByChannel(students) {
   
//     let objeto={}
//     let canales=[]   
    
//     for(i=0;i<students.length;i++){
//       canales[i]={canal:students[i].channel,contador:0}
//     }
//     console.log(canales)
//     for(i=0;i<students.length;i++){
//         for(j=0;j<canales.length;j++){
//             if(students[i].channel==canales[j].canal
//                 && students[i].application!=null){
//                     canales[j].contador++
//                     break
//                 }            
//       } 
//     }
//     console.log(canales)
//     for(i=0;i<canales.length;i++){

//         if(canales[i].contador>0)
//           objeto[canales[i].canal]=canales[i].contador 
//     }   

//      return objeto
// }

// console.log(countApplicationsByChannel(students))


// let arreglo=[{casa:"verde", valor :100},{casa:"azul", valor:120},
//              {case:"rosada", valor:112}]

//     arreglo[0].pais="venezuela"
//     console.log(arreglo)

//     let pisos="tomate"

//     arreglo[2].pisos=4




// // //primer ejercicio
// let text="hola como estas"
// function reverseText(text) {
//     // let cadena
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable reversedText
//   // return reversedText;
//   let cadena
//   cadena=text.split("").reverse().join("")
 
//  return cadena

// }

// console.log(reverseText(text))


//segundo ejercicio


// let array=[20,100]
// let array2=[30,10]

// function sumTwoArrays(array, array2) {
//     // escribe tu solución aquí
//     // Recuerda que en esta prueba debes "retornar" el resultado
//     // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
//     // return sum;
//     let sum=0
//     for(i=0;i<array.length;i++){
//       sum=sum+array[i]
//     }
//     for(i=0;i<array2.length;i++){
//       sum=sum+array2[i]
//     }
//     return sum
//   }
//   console.log(sumTwoArrays(array,array2))


// cuarto ejercicio

let text='Hola, me gusta la programación'
function findMostCommonLetter(text) {
    console.log("hola")
let arreglo=[]
let contador=[]
    for(i=0;i<text.length;i++){
        arreglo[i]={letra:text[i],contador:0}
    }
  
    for(i=0;i<text.length;i++){
        for(j=0;j<arreglo.length;j++){
    
            if(text[i]==arreglo[j].letra){
                arreglo[j].contador++
                break

            }
            
        }
    }
    console.log(arreglo)
    for(i=0;i<arreglo.length;i++){
        if(arreglo[i].contador>0)
        contador.push(arreglo[i].contador)
    }
    contador=contador.sort(function(a, b){return b - a})
    for(i=0;i<arreglo.length;i++){
        if(arreglo[i].contador===contador[0])
        return arreglo[i].letra
    }
    return null
}


console.log(findMostCommonLetter(text))