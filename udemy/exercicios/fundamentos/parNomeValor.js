//par nome/valor
const saudacao = 'Opa'

function exec(){
    const saudacao = 'Fala'
    return saudacao;
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradour: 'Rua sem nome',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)