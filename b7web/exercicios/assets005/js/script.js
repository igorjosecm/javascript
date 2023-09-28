let idade = 15;

if(idade >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}

// >
// <
// ==
// >=
// <=
// != diferente

// == compara somente o valor
// === compara tipo e valor

//ex:

idade = 15;
let idadeExtenso = "15";

if(idade == idadeExtenso){
    console.log(true);
}else{
    console.log(false);
}

if(idade === idadeExtenso){
    console.log(true);
}else{
    console.log(false);
}