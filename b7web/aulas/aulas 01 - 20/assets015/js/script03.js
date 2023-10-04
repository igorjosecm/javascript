let fruits = ["apple","orange", "grape", "banana"];

//console.log(fruits.join(", ")); //transforma o array em string com a separção que você escolher;
//console.log(fruits);

//fruits[fruits.length - 1] = "Pêra" //para substituir o ultimo item do array

//console.log(fruits);

//fruits.pop();
//fruits.push("kiwi"); //para substituir o ultimo item do array

//console.log(fruits);

//fruits.sort(); //ordena o array
//fruits.reverse(); //inverte a ordem do array

//console.log(fruits);


/*
for (let i in fruits) {
    console.log(fruits[i]);
};
*/

/*
console.log("\n");

let num = 1
while (num <= 100) {
    console.log(num);
    num++;
};
*/


let cars = [
    {brand: "Fiat", year: 2022},
    {brand: "Bmw", year: 2018},
    {brand: "Ferrari", year: 2020}
];

cars.sort((a, b)=> {
    return a.year - b.year;
});

//console.log(cars);

//let fruits = ["apple","orange", "grape", "banana"];

//let bigFruits = fruits.filter((item) => {return item.length > 5;}) //filtra o tamanho dos itens do array

let ok = fruits.every((value) => {  //verifica se todos os itens se aplicam a tal condição
    return value.length > 3;
})

if (ok){
    console.log("Todos os itens são maiores que 3")
}else{
    console.log("Não são todos os itens maiores que 3")
}


let okay = fruits.some((value) => { //verifica se algum dos itens se aplicam a tal condição
    return value.length > 3;
})

if (okay){
    console.log("Alguns itens são maiores que 3")
}else{
    console.log("Nenhum item é maior que 3")
}

if(fruits.includes("grape")){ //informa se o item existe dentro do array
    console.log("Tem uva");
}else{
    console.log("Não tem uva");
}


