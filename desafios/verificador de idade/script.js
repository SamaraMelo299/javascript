function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os daos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'img/jovemh.png')
            } else if (idade < 30) {
                // Homem
                img.setAttribute('src', 'img/homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 30) {
                // Mulher
                img.setAttribute('src', 'img/mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'img/adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}