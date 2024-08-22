function tabuada(){
    let numero = (document.getElementById('numero').value)
    let resultado = (document.getElementById('selt'))

    if(numero==''){
        window.alert('[ERRO] Digite um número!')
    }
    else{
        let c = 1
        resultado.innerHTML=''
        for(c; c<=10; c++){
            let item = document.createElement('option')
            item.text=`${numero} x ${c} = ${numero*c}`
            resultado.appendChild(item)
        }
    }

}