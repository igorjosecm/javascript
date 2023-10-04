let nome = "1,2,3,4,5,6,7,8,9,10";

let resultado = nome.indexOf("Lacerda"); //diz qual o índice que você solicitar

let resultado1 = nome.length; //diz o tamanho da string

let resultado2 = nome.slice(10) //Pega uma parte específica da string ( se colocar num negativo começa a contagem ao contratrio)

let resultado3 = nome.substring(0, 10) //Pega uma parte específica da string, começa e termina do parâmetro escolhido

let resultado4 = nome.replace("carros", "motos"); //substitui um obejto na string

let resultado5 = nome.toUpperCase(); //muda tudo para maiúsculo
let resultado6 = nome.toLowerCase(); //muda tudo para minúsculo

let resultado7 = nome.trim(); //remove os espaços em branco

let resultado8 = nome.charAt(3); //mostra o charactere no indice selecionado, mas também pode ser feito da seguinte forma
//VVVVV
let resultado9 = nome[3];

let resultado10 = nome.split(","); //divide a string em um array, conforme o separador escolhido

console.log(resultado10);