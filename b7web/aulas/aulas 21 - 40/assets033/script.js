let pessoa = {
    nome: "Igor",
    sobrenome: "Costa",
    idade: 21,
    dados: {
        id: 15,
        senha: 123
    }
}

console.log(Object.entries(pessoa));
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

console.log(Object.values(Object.keys(pessoa.dados)))

