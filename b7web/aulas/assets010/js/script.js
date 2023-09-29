/*
function gravidade(){
    console.log(`a gravidade da terra é: `);
    console.log(9.8);
}

gravidade();
*/

function sum(n1, n2){
    let result = n1 + n2;
    console.log(`resultado: ${result}`);
}

sum(1, 2);

//função incompleta

function nomeCompleto(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Igor", "José")

//função com retorno e armazenamento de variaveis

function nomeCompleto2(name, surname){
    return `${name} ${surname}`;
}

let completo = nomeCompleto2("Bonieky", "Lacerda");
console.log(`${completo}`)

function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

let idade = 50;
let verificacao = maiorDeIdade(idade);

if (verificacao){
    console.log("é maior de idade");
}else{
    console.log("é menor de idade");
}


//exercicio//
//1//

function calcPct(x, y){
    let pct = (y / x)* 100;
    return pct;
}

let x = 50;
let y = 10;
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`)

//2//

function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch (quartos){
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}

let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`a casa custa R$ ${preco}`);

//3//

function validar(usuario, senha){
    let validacao = 0;
    if(usuario === "pedro" && senha === "123"){
        return true;
    }else{
        return false;
    }
}

let usuario = "pedro";
let senha = "123";
let validacao = validar(usuario, senha);
if(validacao){
    console.log("Acesso concedido.");
}else{
    console.log("Acesso NEGADO!");
}
