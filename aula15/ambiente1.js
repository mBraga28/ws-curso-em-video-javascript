let num = [5, 8, 2, 9, 3]
/*
num[5] = 6 // coloca o novo objeto em uma posição específica

num.push(7) // coloca o novo objeto em último da fila

num.length // diz o comprimento do vetor

num.sort() // mostra o vetor em ordem crescente 
*/
num.push(1)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(-1)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
