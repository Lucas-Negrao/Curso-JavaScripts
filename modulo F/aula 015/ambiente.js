let num = [5,8,9,2,3]

num.sort()
//console.log(num.length)
//console.log(num[0])

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
}
else{
    console.log(`O valor 8 está na posição ${pos}`)
}
