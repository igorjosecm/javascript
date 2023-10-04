let numeros = [1,2,3,4];
let outros = [...numeros,5,6,7,8];

//console.log(outros);


let info = {
    nome: "Bonieky",
    sobrenome: "Lacerda",
    idade: 32
};

let novaInfo = {
    ...info,
    cidade: "Campina Grande",
    estado: "Paraíba",
    pais: "Brasil"
}

//console.log(novaInfo);

function adicionarInfo(info) {
    let newInfo = {
        ...info,
        status: 0,
        token: "jkhdakjhd",
        data_cadastro:"..."
    }
    return newInfo;
}

console.log(adicionarInfo({nome:"Igor", sobrenome:"Costa"}));