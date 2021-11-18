// // todos os comentarios são para me lembrar do que eu 
// fiz pois esse é meu primeiro sites então são mais validos para mim 
let resultado = document.getElementById("resultado")

function maiuscula(string) {
  res = string.value.toUpperCase()
  string.value = res
}
//  para  converter a letra para maiuscula




function calculandoTmb() {
  // let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let idade = document.getElementById("idade").value;
  let select = document.querySelector("select").value;
  // variavel select com query para selecionar todos os elementos da div 


  if (peso !== '' && altura !== '' && idade !== '' && select !== '')

  {
    {
      if (select === 'masculino')

      {
        const imcM = (66 + (13.7 * peso) + (5 * altura)) - (6.8 * idade).toFixed(2)
        resultado.innerHTML = ` Sua Taxa Metabolica Basal é de  ${imcM} calorias.<br>
          <br> `

      } else {
        const imcF = (665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)).toFixed(2)
        resultado.innerHTML = ` Sua Taxa Metabolica Basal é de ${imcF} calorias,<br>
             <br>`
      }


      const prot = (peso * 2);
      const carbo = (peso * 4);
      const gordura = (peso * 1)





      resultado.innerHTML +=

        `<h3>  VOCÊ SABE O QUE É HIPERTROFIA?</h3> <hr> <br>
  A hipertrofia muscular é o aumento do tamanho e volume dos músculos em resultado à sobrecarga imposta.
  Ou seja, trata-se de uma resposta fisiológica resultante de uma adaptação celular
  frente a uma maior exigência de trabalho. 
  Muito importante para a hipertrofia é a sua alimentação que deve 
  bater um número Xg de cada macro dependendo do resultado o qual você visa.
  Segue abaixo quantas gramas de cada macro você deve consumir por dia  visando 
  hipertrofia. </h3>

  
                                    

                                          
                                          
                                          
                                          <p>Para hipertrofiar :
                                           <br>${prot}g de proteína<br>
                                                
                                               ${carbo}g de carbo <br>

                                               ${gordura}g de gordura</p>
                                               
                                               <h3> Quer saber ótimas fontes de cada macro? <br>
                                                <a href=" seg.html"> clique aqui </a></h3><br>`
                                               
                                               
                                               
                                               
    }

  } else {
    resultado.textContent = ' PREENCHA TODOS OS CAMPOS'
  }




}