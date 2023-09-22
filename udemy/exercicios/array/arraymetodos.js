const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento no final do vetor
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento no inicio do vetor
console.log(pilotos)

//adicionando

pilotos.splice(2, 0, 'Bottas', 'Massa') //adiciona e remove elementos (start, numero de elementos removidos, elementos adicionados)
console.log(pilotos)

//removendo

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // pega uma parte do vetor, a partir do indice que você indicar
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pega uma parte do vetor, de x até y, não inclui y
console.log(algunsPilotos2)
