let valores = [8, 7, 4, 2, 9]

/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)    
}
*/

valores.push(1)

console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)

let pos = valores.indexOf(2)
if(pos == -1){
    console.log(`Valor não encontrado!`)
} else{
    console.log(`O valor está no índice ${pos}`)
}


