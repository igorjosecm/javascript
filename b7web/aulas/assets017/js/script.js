function clicou(){
    const button = document.querySelector("button");

    if(button.classList.contains("azul")){
        button.classList.replace("azul", "verde");
    }else{
        button.classList.replace("verde", "azul");
    }
    
}



/*
function clicou(){
    const li = document.querySelector("li");

    li.style.backgroundColor = "#00F";
    li.style.fontSize = "20px";
}
*/