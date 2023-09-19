function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/foto-manha.png'
        document.body.style.backgroundColor = '#fde1b4'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/foto-tarde.png'
        document.body.style.backgroundColor = '#e78b6d'
    }else{
        img.src = 'imagens/foto-noite.png'
        document.body.style.backgroundColor = '#343549'
    }
}
