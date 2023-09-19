function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-homem.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else{
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else if(idade < 50){
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else{
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}