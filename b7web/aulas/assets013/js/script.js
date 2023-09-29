/*********ARRAY**********/

let colors = ["red", "green", "blue"];

let idades = ["12", "2", "5"];

let lista = ["Igor", 21, true];

let lista2 = [
    "blabla", 
    colors
];

//console.log(lista2);

let lista3 = ["blaba", ["xx", "yy"]];

//console.log(lista3[1][0]);

let segundo = lista3[1]

//console.log(segundo[1])

let ingredientes = [
    "agua",
    "farinha",
    "ovo",
    "sal",
    "açúcar"
];

//ingredientes[5] = "leite"; ******não usar*******

//ingredientes.push("leite"); ---insere itens no array

//ingredientes.pop(); ---remove o último item do array

//ingredientes.shift(); ---remove o primeiro item do array

//console.log(ingredientes)
//console.log(`Total de ingredientes: ${ingredientes.length}`);

//Exercícios

let carros = ["BMW", "Ferrari", "Mercedes"];
let x = [1];
console.log("1." + carros[x]);

carros[1] = "Audi";
console.log("\n2. Lista com Audi:");
console.log(carros);

carros.push("Volvo");
console.log("\n3. Lista com Volvo:");
console.log(carros);

console.log("\n4. itens no array:");
console.log(carros.length);