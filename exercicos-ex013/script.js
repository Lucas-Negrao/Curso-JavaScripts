function enviado(){
    var ano = new Date().getFullYear()
    var txtano = Number(document.getElementById('txtano').value)
  
    var resposta = document.querySelector('div#resposta')
    if (txtano<=0 || txtano>ano){
        window.alert('[ERRO] Verifique os dados digitados')

    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano-txtano
        var genero=''
        var imagem = document.createElement('img')
        if (sexo[0].checked){
            
            if (idade<=2){
                //bebe
                genero='um Bebe'
                imagem.setAttribute('src','imagens/bebe-h.jpg')
            }
            else if(idade<15){
                //criança
                genero =' um Garoto'
                imagem.setAttribute('src','imagens/criança.jpg')
            }
            else if(idade<18){
                //adolecente
                genero = ' um Adolecente'
                imagem.setAttribute('src','imagens/ado-circulo.png')

            }
            else if(idade<60){
                //adulto
                genero=' um Adulto'
                imagem.setAttribute('src','imagens/homem.jpg')
            }
            else if(idade>60){
                //idoso
                genero='um Idoso'
                imagem.setAttribute('src','imagens/idoso.jpg')
            }
        }
        else if (sexo[1].checked){
            
            if (idade<=2){
                //bebe
                genero=' uma Bebe'
                imagem.setAttribute('src','imagens/bebe-m.jpg')
            }
            else if (idade<15){
                //criança
                genero=' uma Menina'
                imagem.setAttribute('src','imagens/menina.jpg')
            }
            else if (idade<18){
                //adolecente
                genero=' uma Adolecente'
                imagem.setAttribute('src', 'imagens/ado-mulher.jpg')
            }
            else if (idade<60){
                //adulto
                genero=' uma Adulta'
                imagem.setAttribute('src','imagens/mulher.jpg')
            }
            else{
                //idosa
                genero=' uma Idosa'
                imagem.setAttribute('src','imagens/idosa.jpg')
            }
                
            
        }
        if (idade<=0){
            window.alert('[ERRO] Verifique os dados digitados')
        }
        
        else{
            resposta.style.textAlign ='center'
            resposta.innerHTML = (`Detectamos${genero} com ${idade} anos`)
            resposta.appendChild(imagem)
           
        }
        
        if (idade==1){
            resposta.innerHTML = (`Detectamos ${genero} com ${idade} ano`)
            resposta.appendChild(imagem)
        }
        
        
    }
      
    
}
