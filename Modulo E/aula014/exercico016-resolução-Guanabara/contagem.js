function conte(){
    var  inicio = Number(document.getElementById('inicio').value)
    var  fim = Number(document.getElementById('fim').value)
    var  pulando = Number(document.getElementById('pulando').value)
    var  resposta = document.getElementById('resposta')

    if (inicio ==0 || fim==0 ){
        window.alert('[ERRO] Faltam dados!')
        resposta.innerHTML= 'Imposivél contar!'
    }
    else{
        if (pulando <=0){
            window.alert('passo 0 mudando para 1')
            pulando=1
        }
        if(inicio<fim){
            //contagem crescente
            for(var contador=inicio; contador<=fim; contador+=pulando)
                resposta.innerHTML+=(`${contador} \u{1F449}`)}
 
        else{
            for(var contador=inicio; contador>=fim; contador-=pulando)
                resposta.innerHTML+=(`${contador} \u{1F449}`)
        }
    }
    resposta.innerHTML+= `\u{1F3c1}`
    
    

    
}
