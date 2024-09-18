let arrays = []
function Adicionado(){
    let numero = (document.getElementById('inumero').value)
    let resposta = document.getElementById('resposta')
    
   
    if(numero==''){
        window.alert('Número não informado')
    }
    else{
        arrays.push(Number(numero))
    }

    resposta.innerHTML=''
        for(let num of arrays){
            let item = document.createElement('p')
            item.textContent = `Adicionou o número ${num}`
            resposta.appendChild(item)
        }      
}

function Finalizado(){

    if(arrays==''){
        window.alert('Digite algum número para continuar')
    }
    
    else{
        let menor =(Math.min(...arrays))
        let maior = (Math.max(...arrays))
        let tamanho  = (arrays.length)

        resposta.innerHTML = 
        `Sua lista tem ${tamanho} números <br>
        O menor número da lista é ${menor} <br>
        O maior número da lista é ${maior}`
    }

    
    
}