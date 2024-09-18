let numero = (document.querySelector('input#inumero'))
let seletor = document.querySelector('select#iseletor')
let resposta = document.querySelector('div#resposta')
let valores = []


function isnumero(n){
    return n >=1 && n <= 100
}


function inlista(n, l){
    if (l.indexOf(Number(n)) !=-1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    let num = Number(numero.value)
    if (isnumero(num) && !inlista(num, valores)){
        window.alert('ok')
    }
    else{
        window.alert('invalido')
    }
    
}