function conte(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var pulando = Number(document.getElementById('pulando').value)
    var resposta = document.getElementById('resposta')

    if(isNaN(inicio) || inicio==''){
        window.alert('Deculpa o primeiro número não foi indicado')}
        else if(isNaN(fim) || fim==''){
            window.alert('Desculpa o segundo número não foi indicado')
        }
        else if (pulando==0 || pulando==''){
            window.alert('Ops! não podemos pular de 0 em 0, mudando para 1')
            pulando=1
            resposta.innerHTML=(`Contando de ${inicio} a ${fim} pulando de ${pulando}<br>`)
        for (var contador = inicio; contador<=fim; contador+=pulando ){
            resposta.innerHTML+=(`${contador} 👉🏻 `)
        }
        resposta.style.textAlign='center'
        resposta.innerHTML+='<p><br>Fim!</p>'

        }
    else{
        resposta.innerHTML=(`Contando de ${inicio} a ${fim} pulando de ${pulando}<br>`)
        for (var contador = inicio; contador<=fim; contador+=pulando ){
            resposta.innerHTML+=(`${contador} 👉🏻 `)
        }
        resposta.style.textAlign='center'
        resposta.innerHTML+='<p><br>Fim!</p>'
    }
   


    
    

    
}
