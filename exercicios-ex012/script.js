function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('imagem')
    //var hora = 18
    var hora = (new Date().getHours())
    var minutos = new Date().getMinutes()
    mensagem.innerHTML = (`Agora são ${hora}:${minutos}`)
    if (hora<6){
        //Boa madrugada
        foto.src = 'imagens/madrugada-circulo.png'
        foto.style.width = '250px'
        document.body.style.background='  #151922'
    }
    else if (hora>=6 && hora<12){
        //Bom dia
        foto.src = 'imagens/manha-circulo.png'
        foto.style.width = '250px'
        document.body.style.background='#FFE0A2'
    }
    else if (hora>=12 && hora<18){
        //Boa tarde
        foto.src = 'imagens/tarde-circulo.png'
        document.body.style.background='#F3A14B'
        
    }

    else if (hora>=18 || hora<0){
        //Boa noite 
        foto.src = 'imagens/noite-circulo.png'
        foto.style.width = '250px'
        document.body.style.background='#6A4C72'
    }
}