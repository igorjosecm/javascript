function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    let newli = document.createElement("li");
    newli.innerText = "Item adicionado";

    //ul.appendChild(newli); // adiciona no final
    ul.prepend(newli) //adiciona no começo
}

/*
= substitui o elemento.
+= adiciona um elemento.
*/

//let botao = document.querySelector(".botao")
//botao.addEventListener("click", clicou)