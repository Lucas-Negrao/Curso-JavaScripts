let numero = [8,5,4,8,2,6,4]

let valores = numero.sort()

console.log('Lista de números')

/*for (let pos = 0; pos < valores.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores){
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}