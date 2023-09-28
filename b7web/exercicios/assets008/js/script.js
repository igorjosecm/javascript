let isMember = true;

let shipping = isMember ? 2 : 10;

console.log(isMember ? "Você é membro" : "Você não é membro")
console.log("Frete: " + shipping)

let age = 35;

let isAdult = ((age >= 18 && age < 60) ? "sim" : "Nâo");
console.log(isAdult)