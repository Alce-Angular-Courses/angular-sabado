// ES5

function suma(a, b) {
    return a + b
}

// const obj = {}

const resta = function (a, b) {
   return a - b 
}

console.log(suma(3,4))
console.log(resta(3,4))

// ES6 - arrow functions - lambdas

/* const prod  =  (a, b) => {
    return a * b 
 } */

 const prod  =  (a, b) => a * b 

 const cubo = a => a * a * a

 cubo.def = 'Calcula el cubo de un número'

 console.log(prod(3,5))
 console.log(cubo(3))
 console.log(cubo.def)

 // Parámetros en ES6

const sumaES6 = function (a = 0, b = 0, ...rest) {
    if(!rest.length) {
        return a + b
    } else {
        return a + b + rest.reduce( (n1, n2)=> n1 + n2 )
    }


}

console.log(sumaES6())
console.log(sumaES6(4))
console.log(sumaES6(5,7,5,4,8,3))


// PRogramación funcional con arrays en ES5 + ES6

const aNums = [5,7,5,4,8,3]

/* const cuad = []
for (let i = 0; i < aNums.length; i++) {
    const item = aNums[i];
    cuad.push(item*item)
} */

/* const cuad = []
aNums.forEach( item => cuad.push(item*item)) */

const cuad = aNums.map( item => item * item )

console.log(cuad)