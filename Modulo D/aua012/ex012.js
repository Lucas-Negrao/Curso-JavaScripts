//pegando hora do sistema
var horas = new Date().getHours()

//var hora = 18 hora definada 
console.log(`Agora são extamente ${horas} horas`)
if (horas<6){
    console.log('Boa madrugada!')
}else if (horas>=6 && horas<12){
    console.log('Bom dia!')
}else if (horas>=12 && horas<18){
    console.log('Boa Tarde!')
} else if (horas>=18 && horas<24){
    console.log('Boa noite!')
}
