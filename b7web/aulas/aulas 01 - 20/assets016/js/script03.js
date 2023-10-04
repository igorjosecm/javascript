function clicou(){
    const input = document.querySelector("input");
    const botao = document.querySelector(".botao");

    if (input.getAttribute("type") == "text"){
        input.setAttribute("type", "password");
        botao.innerText = "Esconder senha";
    }else{
        input.setAttribute("type", "text");
        botao.innerText = "Mostrar senha";
    }    
}