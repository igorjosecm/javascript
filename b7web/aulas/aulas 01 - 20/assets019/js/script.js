// ---- Factory ----

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
}

function createPerson(name, age){ // Factory => uma função de criar classes
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson("Bonieky", 32);

console.log(`${p1.name} tem ${p1.age} anos.`);

/* ---- Método Estático ----
class Person {
    
    static hands = 2; //é uma definição geral para qualquer Person, pode ser alterada com .Person, mas não faz sentido
    age = 0;
    
    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log(`Oi`);
    }
}

let p1 = new Person("Bonieky");

console.log(`${p1.name} tem ${Person.hands} mãos.`)

Person.sayHi()
*/

/* ---- Herança ----
class Person{
    
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} diz Oi!`);
    }
}

class Student extends Person{ // extends => herança
    
    constructor(name, id){
        super(name); // super => se refere ao objeto pai, e nâo ao extends, nesse caso a class Person
        this.id = id;
    }

    sayHello(){
        super.sayHi();
    }

    sayHi(){
        console.log(`Olá ${this.name}.`); // A prioridade é a classe atual, portanto ela sobrescreve a extendida (Person)
    }
}

let p1 = new Student("Bonieky", 2020231);
p1.age = 20;

console.log(`${p1.name} tem ${p1.age} anos e matrícula #${p1.id}.`);

p1.sayHi();

p1.sayHello();
*/

/* ---- Getter/Setter ----
class Person{
    _age = 10; // underline para usar o metodo get
    steps = 0;
    
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep(){
        this.steps++;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    get age(){
        return this._age;
    }

    set age(x){
        if(typeof x == "number"){
            this._age = x;
        }
    }
}


let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Eduarda");
let p3 = new Person("Pedro", "Duarte");

p1.age = "abc";
console.log(`p1 = ${p1.fullName} tem ${p1.age} anos`);
*/

/* ---- Constructor, This, Instância, Action 
class Person{ //metodo classe
    age = 0;
    steps = 0;
    
    constructor(name, age){ // Constructor => Cria a variavel dentro do objeto
        this.name = name; // this. => se refere ao proprio objeto, nesse caso a class Person
    }

    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == "number"){
        this.age = newAge;   
        } else{
            console.log("Idade não aceita, somente números");
        }
    }
}


let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.setAge(22);
p2.setAge("abc");
p3.setAge(25);

console.log(`p1 = ${p1.name} tem ${p1.age} anos`);
console.log(`p2 = ${p2.name} tem ${p2.age} anos`);
console.log(`p3 = ${p1.name} tem ${p3.age} anos`);

p1.takeAStep();
p1.takeAStep();
p2.takeAStep();

console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);
*/