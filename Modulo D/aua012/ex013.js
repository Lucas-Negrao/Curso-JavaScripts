var dia  = new Date().getDay()
//dia = 7

/*
    0 = Domimngo 
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta 
    6 = Sábado
*/

switch(dia){
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default: // caso der erro
        console.log('Dia invalido!')
        break

}