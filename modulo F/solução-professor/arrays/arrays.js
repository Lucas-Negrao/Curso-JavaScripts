let numero = (document.querySelector('input#inumero'))
let seletor = document.querySelector('select#iseletor')
let resposta = document.querySelector('div#resposta')
let valores = []


function isnumero(n){
    return n >=1 && n <= 100
}


function inlista(n, l){
    return l.indexOf(Number(n)) !=-1
}
    
  

function adicionar(){
    let num = Number(numero.value)
    if (isnumero(num) && !inlista(num, valores)){
        valores.push(Number(num))
        let item = document.createElement('option')
        item.textContent = `Adicionou o numero ${num}`
        seletor.appendChild(item)
        
    }
    else{
        window.alert('invalido')
    }
}

function finalizar(){
    if (valores==''){
        window.alert('Lista vazia')
    }
    else{
        let total= valores.length
        let soma = valores.reduce((acumulador, valoratual) => acumulador + valoratual)
        let media = soma/total

        resposta.innerHTML =''
        resposta.innerHTML+=`Sua lista tem ${valores.length} números <br>`
        resposta.innerHTML+= `O maior número é ${Math.max(...valores)} <br>` 
        resposta.innerHTML+= `O menor número é ${Math.min(...valores)} <br>`
        resposta.innerHTML+= `Somando todos os números o resultado é ${soma} <br>`
        resposta.innerHTML+= ` media é ${media}`
    }
}