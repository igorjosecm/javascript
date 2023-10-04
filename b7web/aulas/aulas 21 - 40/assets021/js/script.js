//---- Requisições com JSON ----

/****MÉTODOS****

GET => pegar infos 
POST => inserir infos novas
PUT => alterar uma info preexistente 
DELETE => deletar info

****Quando não informado o tipo é automaticamente selecionado como GET****

*/

async function clicou() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts") //requisita o conteudo do json
    let json = await response.json();
    alert(`Título do post: ${json[0].title}`);
    document.querySelector("#post").innerHTML = `${json[0].body}`;
    alert("Clicou")

    /* Método menos utilizado>>>>
            .then((response) => { //callback, executa o código a partir de uma ação
                console.log(`Status: ${response.status}`)
                return response.json();
            })
            .then((json) => {
                alert(`Título do post: ${json[0].title}`);
                document.querySelector("#post").innerHTML = `${json[0].body}`;
            })
            .catch((error) => { //callback para avisar quando algo da errado na requisição
                alert("Deu problema na requisição");
                console.log(error);
            })
            .finally(() => { //callback executado ao fim da requisição, independente se der certo ou não
                alert("Acabou tudo");
            })
    */
}

async function inserir() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Titulo de teste",
                body: "Corpo de teste",
                userId: 2
            })
        })
    let json = await response.json();
    console.log(json);
/*
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        })
*/
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", inserir);

