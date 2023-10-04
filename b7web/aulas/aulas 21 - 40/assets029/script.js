//-----destructuring-----

let pessoa = {
    nome: "Bonieky",
//  sobrenome: "Lacerda",
    idade: 45,
    social: {
        facebook: "b7web",
        instagram:{
            url: "@bonieky",
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

//let { nome, idade, social:{instagram:{url:instagram, seguidores}}} = pessoa;

//console.log(nome, idade, instagram, seguidores);

function pegarNomeCompleto({nome, sobrenome = "Silva", social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome}, siga em: ${instagram}`
}

console.log(pegarNomeCompleto(pessoa));
