let num = [5,8,2,9,3]
num.push(1)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O comprimento é de ${num.length} posições`)
let pos = num.indexOf(4)
if(pos==-1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
// Dá para adicionar o elemento: 
//num.sort() - Dessa forma ele deixa em ordem crescente e sempre colocar ele onde quer que ele funcione.