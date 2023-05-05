//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 1
// 
// Crie um programa que peça ao usuário para inserir o seu
// nome e sua cor favorita e imprima a mensagem:
// 
// ● "A cor favorita de FULANO é COR"
// ● Faça o exercício duas vezes, utilizando template strings e
//   concatenação

const name = prompt("Diga o nome:")                             
const color = prompt("A cor favorita:")                        

console.log(`A cor favorita de ${name} é ${color}.`)           

//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 2
// Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:
// 
// ● Todas as letras maiúsculas;
// ● Na língua do i (substituindo a vogal "o" por "i");
// ● O tamanho da frase.

const txt = prompt("Texto para a lingua do I:")

console.log(txt.toUpperCase())                                  
console.log(txt.replaceAll("o","i").replaceAll("O","I"))        
console.log("Número de dígitos:",txt.length)                    

//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 3
// 
// ● Crie um array com pelo menos 5 raças de cachorro
// ● Peça para o usuário inserir um número de 0 a 4
// ● Imprima no console a raça correspondente à posição
//   escolhida pelo usuário

const dogs = ["Rottweiler","Poodle","Dachshund","Pitbull","Pug"] 
const nmr = parseInt(prompt("Escolha um número de 0 a 4"))       
console.log(`${nmr} é o número para`,dogs[nmr%5])                

//////////////////////////////////////////////////////////////////////////////////////////////
// Exercício 4
// 
// Para este exercício, comece criando um array com os
// valores: 1, 2, 3, 4, 5 e 6.
// 1. Determine o tamanho do array
// 2. Adicione o número 7
// 3. Remova os números 4 e 5
// 4. Determine o novo tamanho do array

const numbers = [1,2,3,4,5,6]
console.log(numbers)
console.log(numbers.length)                                      

numbers.push(7)                                                  
numbers.splice(3,2)                                             

console.log(numbers)
console.log(numbers.length)                                      