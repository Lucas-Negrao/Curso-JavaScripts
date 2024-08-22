function tabuada(){
    var numero = (document.getElementById('numero1').value)
    var multiplicador = (document.getElementById('numero2').value)
    var seletor = (document.getElementById('seltab'))

    if(numero=='' || multiplicador == ''){
        window.alert('[ERRO] Algum número não foi informado')
        seletor.innerHTML=''
    }
    else{
        var c =1
        seletor.innerHTML = ''
        for(c; c<= multiplicador; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            seletor.appendChild(item)
        }
    }
}