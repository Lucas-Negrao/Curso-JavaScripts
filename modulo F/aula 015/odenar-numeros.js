function odenarNumero(a,b){
    if (a==b){
        return 0
    }
    else if (a<b){
        return -1
    }
    else{
        return 1
    }
}

let lista = [9,58,1,8,3,4,53,541,5]

lista.sort(odenarNumero)

for (let pos in lista){
    console.log(`Na posição ${pos} encontrei o número ${lista[pos]}`)
}