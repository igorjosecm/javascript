let lista = [
    {id: 1, nome: "Bonieky", sobrenome: "Lacerda"},
    {id: 2, nome: "Paulo", sobrenome: "XYZ"},
    {id: 3, nome: "Fulano", sobrenome: "de Tal"}
];

let res = lista.toString(); //converte para string
let res1 = lista.join("-"); //converte para string com a separação que você escolher

let res2 = lista.indexOf("pao"); //indica o indice do array, do item selecionado, caso nao houver o item retorna -1

//lista.pop(); //remove o último item do array
//lista.shift(); //remove o primeiro item do array

//lista.push("óleo"); //adiciona um item no final do array

//lista[4] = "chocolate"; //adiciona ou substitui itens no array

//lista[lista.length] = "liquidificador" //adiciona um item no final do array

//lista.splice(1, 1); //remove o/os item/ns do array, parametros => (indice, quantidade de itens)

let res3 = lista.concat(lista2); //reúne dois arrays

/*---- sort e reverse ----
lista.sort(); //ordena o array alfanumericamente
lista.reverse(); //reverte a ordem do array
*/

/* ---- map ----
lista2 = lista.map(function(item){ //roda a função dentro dos itens do array
    return item * 2;
})
*/

/* ---- filter ----
lista2 = lista.filter(function(item){ //filtra os valores do array
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});
*/

/* ---- every ----
lista2 = lista.every(function(item){ //verifica se todos os valores do array respeitam a condição proposta
    if(item > 20){
        return true;
    } else {
        return false;
    }
})
*/

/* ---- some ----
lista2 = lista.some(function(item){ //verifica se algum dos valores do array respeitam a condição proposta
    if(item > 20){
        return true;
    } else {
        return false;
    }
})

*********        forma resumida VVVVV         ************

lista2 = lista.some(function(item){ //verifica se algum dos valores do array respeitam a condição proposta
    return (item > 3 )? true : false;
})
*/

/* ---- find e finIndex ----

lista2 = lista.find(function(item){ //verifica se o item selecionado está presente no array e retorna seu valor
    return (item == 16) ? true : false; 
});

lista2 = lista.findIndex(function(item){ //verifica se o item selecionado está presente no array e retorna seu indice
    return (item == 16) ? true : false; 
});


let lista = [
    {id: 1, nome: "Bonieky", sobrenome: "Lacerda"},
    {id: 2, nome: "Paulo", sobrenome: "XYZ"},
    {id: 3, nome: "Fulano", sobrenome: "de Tal"}
];

let pessoa = lista.find(function(item){
    return (item.id == 3) ? true : false;
});

*/


let res4 = pessoa;

console.log(res4);