//*********LOOPINGS**********/

console.log(`Prepare-se para o toque de 5 segundos:`);

for(let n = 5; n >= 1; n--){
    console.log(`${n}`);
};

console.log("\n");

let cores = [
    {nome: "branco", qt: 10},
    {nome:"preto", qt: 5},
    {nome:"azul", qt: 15}
];

/*
for (let n = 0; n < cores.length; n++){
    console.log(cores[n]);
}
*/


for(let i in cores){
    console.log(cores[i].nome.toUpperCase());
}


/*
for(let cor of cores){
    console.log(`Nome: ${cor.nome}, quantidade: ${cor.qt}.`);
}
*/