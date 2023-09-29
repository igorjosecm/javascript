function add(e){
    if(e.keyCode == 13){
        const ul = document.querySelector("ul");
        let newLi = document.createElement("li");
        
        input = document.querySelector("input");
        let item = input.value;
        
        newLi.innerText = item;
        ul.appendChild(newLi)  
        document.querySelector("input").value=" ";
    }
}

let input = document.querySelector("input")
input.addEventListener("keypress", add)
