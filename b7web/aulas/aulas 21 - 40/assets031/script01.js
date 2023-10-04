/*
function adicionar(...nomes) {
    console.log(nomes);
}

adicionar("igor", "joao", "maria", "yasmin")
*/

function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;
}

let nomes = ["Bonieky", "Paulo"];
let outros = adicionar(nomes, "Antonio", "Maria", "José");

console.log(outros)

