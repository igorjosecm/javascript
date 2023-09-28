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

console.log(ingredientes)
console.log(`Total de ingredientes: ${ingredientes.length}`);