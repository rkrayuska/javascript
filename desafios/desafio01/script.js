function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        foto.src="imagens/fotomanha.jpg"
        document.body.style.background='lightgreen'
        msg.innerHTML += ': BOM DIA!' //+= Deixa concatenado.
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE!
        foto.src="imagens/fototarde.jpg"
        document.body.style.background='orange'
        msg.innerHTML+= ': BOA TARDE!'
    }else {
        //BOA NOITE!
       foto.src="imagens/fotonoite.jpg"
       document.body.style.background='darkblue'
       msg.innerHTML+= ': BOA NOITE!'
    }
}
