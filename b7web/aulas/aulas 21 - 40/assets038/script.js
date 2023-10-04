async function enviar() {
    let arquivo = document.querySelector("#arquivo").files[0];

    let body = new FormData();
    body.append("title", "bla bla bla");
    body.append("arquivo", arquivo);

    let req = await fetch("https://igorjosecm.github.io/javascript", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    
}