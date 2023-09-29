//Objetos*********************

let personagem = {
    nome: "Bonieky",
    idade: 90,
    pais: "Brasil",
    olhos: ["verde", "azul"],
    skills: {
        forca: 20,
        magia: 5,
        stamina: 15
    },
    carros: [
        {modelo: "Fiat", cor: "preto"},
        {modelo: "Ferrari", cor: "verde"}
    ]
}


personagem.nome = "Igor";

personagem.skills.forca += 5;

personagem.olhos.push("vermelho");

console.log(personagem.nome);
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.skills.forca);
console.log(personagem.olhos);
console.log(personagem.olhos[1]);


console.log(personagem.carros[1].modelo);

console.log("\n\n");

let pessoa = {
    nome: "Bonieky",
    sobrenome: "Lacerda",
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

//se usar a arrow function dentro de um objeto não tem como acessar o seu "this"

console.log(pessoa.nomeCompleto());