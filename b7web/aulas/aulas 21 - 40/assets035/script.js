
let pessoa = JSON.parse('{"nome": "Igor", "idade": 90}');

console.log(pessoa.nome);


let pessoaJson = JSON.stringify(pessoa); //=> Transforma o JSON em string
let objpessoa = JSON.parse(pessoaJson); //=> Transforma o JSON em objeto

console.log(objpessoa);

