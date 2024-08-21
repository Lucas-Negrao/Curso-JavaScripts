function tabuada(){
    var numero = document.getElementById('numero').value 
    var seletor = document.getElementById('seltab')


    if (numero==''){
        window.alert('[ERRO] valor invalido!')
    }

    else{
        var c=1
        seletor.innerHTML =''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value= `tab ${c}`
            seletor.appendChild(item)
            c++

        }
    }
}