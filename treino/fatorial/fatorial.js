function Calculo(){
    let fat = 1
    let c = parseInt(document.getElementById('inumero').value)
    let resposta = document.getElementById('resposta')
    for (let i=c; i>1; i--){
        fat*=i
    }
    resposta.innerHTML = (`O fatorial de ${c} é ${fat}`)
}