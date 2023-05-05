//////////////////////////////////////////////////////////////////////////////////////////////////////


// let exc_1 = 3 + 4
// console.log("1) A soma de 3 com 4 é igual a", exc_1)

// let exc_2 = (3*5)/2
// console.log("2) A multiplicação de 3 por 5 dividida por 2 é igual a", exc_2)

// let exc_3 = (4-5)*(-1)
// console.log("3) A subtração de 4 por 5 multiplicada por -1 é igual a", exc_3)

// let exc_4 = 234%5
// console.log("4) O resto da divisão de 234 por 5 é igual a",  exc_4)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const nmr = prompt() 
// if (nmr == 3) {
//     console.log("é igual a 3")
// } else {
//     console.log("não é igual a 3")
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const UM = 11
// const DOIS = 22
// console.log("1)", UM === DOIS)
// console.log("2)",UM !== DOIS)
// console.log("3)",UM > DOIS)
// console.log("4)",UM < DOIS)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const name = prompt("Insira o nome")
// const age = prompt("Insira a idade")
// if (age >= 18) {
//     console.log(name,"é maior de idade")
// } else {
//     console.log(name,"não é maior de idade")
// }
// console.log(name,"nasceu em", (2023-age),"e, portanto, em 2050, terá", (2050-(2023 - age)), "anos de idade.")

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // false 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // true

// console.log("d. ", typeof resultado) //boolean

//////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = Number(prompt("Digite um numero!"))
// let b = Number(prompt("Digite outro numero!"))

// const soma = (a + b)

// console.log(soma)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// let nmr = -1
// for (let step = 0; step < 30; step++) {
//     nmr = nmr + 1
//     console.log(nmr, "=", nmr&3);
//   }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// const years = Number(prompt())

// const months = years*12
// const days = years*365
// const hours = days*24
// const minutes = hours*60

// console.log(years, months, days, hours, minutes)

//////////////////////////////////////////////////////////////////////////////////////////////////////

// let nmr = 1
// for (let step = 0; step < 241; step++) {
//     console.log(nmr, "=", nmr%7);
//     nmr = nmr + 1
//   }