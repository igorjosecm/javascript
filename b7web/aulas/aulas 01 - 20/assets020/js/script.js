//---- Factory ----

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`;
        },
        start() { //como nao tem constructor tem que fazer o start direto na função
           console.log("deu start na pessoa");
        }
    }
}

let person1 = createPerson("Igor", "Costa", 21);

//person1.start();

//console.log(person1.getFullName());

//---- Herança ----

const defaultUser = {
    name: " ",
    email: " ",
    level: 1
}

let user1 = {
    ...defaultUser,
    name: "Igor",
    email: "igorjosedacosta@hotmail.com"
}

let adm1 = {
    ...defaultUser,
    name: "Admin Bolado",
    email: "adm@adminbolado.com",
    level: 2
}

console.log(adm1);