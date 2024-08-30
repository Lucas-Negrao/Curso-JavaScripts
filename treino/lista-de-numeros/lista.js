let lista =[]

function enviado(){
    let seletor = document.getElementById('iseletor')
    

    let numero = Number(document.getElementById('inumero').value)
    lista.push(numero)

    seletor.innerHTML=''

    for (let pos in lista ){
        let item = document.createElement('option')
        item.text = `${parseInt(pos)+1}º - ${lista[pos]}`
        seletor.appendChild(item)

    }

}

function limpar(){
    seletor = document.getElementById('iseletor')
    seletor.innerHTML=''
    lista = []
}
