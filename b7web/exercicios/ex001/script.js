function add(e){
    if(e.key === "Enter"){ //Pode usar (e.keyCode === 13) também.
        const ul = document.querySelector("ul");
        let newLi = document.createElement("li");
        input = document.querySelector("input");
        
        let item = input.value;
        newLi.innerText = item;
        ul.appendChild(newLi);

        input.value= " ";
    }
}

function limparLista(){
    const lista = document.querySelector("#lista");
    lista.innerHTML = " ";
}

const botaoLimparLista = document.querySelector("#limparLista");
botaoLimparLista.addEventListener("click", limparLista)

let input = document.querySelector("input");
input.addEventListener("keypress", add);
