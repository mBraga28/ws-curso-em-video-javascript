function verificar() {
    var data = new Date()
    var ano = data.getFullYear() /// o ano atual
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-h.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-h.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-h.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-h.jpg')
            }
        } 
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}