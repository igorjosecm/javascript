/* Sincronia
//Síncrono

let nome = "igor";
let sobrenome = "costa";
let completo = `${nome} ${sobrenome}`;

//Ássincrono

let name = "igor";
let lastName = "costa";
let temperatura = Maquininha.pegarTemperatura(); // Assincrionia
let fullName = `${nome} ${sobrenome}`;

*/

/*Callback

function alertar() {
    console.log("opa, eae vei beleza?");
}

let nome = "Igor";
setTimeout(alertar, 2000);
let sobrenome = "Costa";
console.log(`Nome completo: ${nome} ${sobrenome}`);
*/

//Promise

function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve("40 na sombra");
        }, 2000);
    });
}

let temp = pegarTemperatura();
temp.then(function(resultado) {
    console.log(`Temperatura: ${resultado}`);
});
temp.catch(function(error) {
    console.log("Eita, algo deu errado");
});