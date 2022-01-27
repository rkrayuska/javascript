function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //Pega o ano inteiro. Ex: 2019, ao invés de dar 19, ele dá 2019.
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    // var res = document.querySelector('div#res')
    if(fano.value.length ==0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var radius = document.querySelectorAll("input[type='radio']")
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(radius[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 18){
                //MENINO
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if(idade >=18 && idade < 60){
                //HOMEM
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }else{
                //IDOSO
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
            
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade < 18){
                //MENINA
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if(idade >=18 && idade < 60){
                //MULHER
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }else{
                //IDOSA
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}