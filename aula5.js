// Cria duas arrays
let array_a = [0, 1, 3, 6, 10, 15, 21]
let array_b = []

// Faz a array_b ser composta pela diferença entre os valores de índices próximos de array_a,
for (let step = 0; step < array_a.length - 1; step++) {
    array_b.push(array_a[step + 1] - array_a[step])
}

// portanto, array_b será igual a [1,2,3,4,5,6]
console.log(array_b)


//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 1
// 
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.
// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// let array

let array
console.log('a. ', array)            // undefined

array = null
console.log('b. ', array)            //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)     // 11

let i = 0
console.log('d. ', array[i])         // 3

array[i+1] = 19
console.log('e. ', array)            // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)            // [9]

//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 2
// 
// Leia o código abaixo com atenção e responda qual será o valor impresso no console se
// a entrada do usuário for: "Subi num ônibus em Marrocos"?

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27


//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 3
//
// Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:
// 
// a) Imprima no console o array completo
// 
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas:
// ", seguida por cada uma das comidas, uma embaixo da outra.
// 
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

let comidinhas = ["Panquecas","Pizza","Jaca","Sabão","Areia"]

console.log(comidinhas)
console.log("Essas são as minhas comidas preferidas:")

console.log(comidinhas[0])
console.log(comidinhas[1])
console.log(comidinhas[2])
console.log(comidinhas[3])
console.log(comidinhas[4])

let comida_user = prompt("Qual sua comida preferida?")
comidinhas[1] = comida_user

console.log(comidinhas)

//////////////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
//
// Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no console

let tarefas_user = []

let tarefa1 = prompt("Primeira tarefa:")
tarefas_user.push(tarefa1)

let tarefa2 = prompt("Segunda tarefa:")
tarefas_user.push(tarefa2)

let tarefa3 = prompt("Terceira tarefa:")
tarefas_user.push(tarefa3)

console.log(`Tarefa 1: ${tarefas_user[0]} \nTarefa 2: ${tarefas_user[1]} \nTarefa 3: ${tarefas_user[2]}`)

tarefa_feita = Number(prompt("Digite o número de uma tarefa já feita:"))
tarefas_user.splice(tarefa_feita - 1, 1)
console.log(tarefas_user)