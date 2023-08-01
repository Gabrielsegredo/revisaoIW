function buscar(){
 const genro= document.querySelector('.inGero').value;
 const result = document.querySelector('.resultado').value;
 let resposta=""
 switch(genro) {
    case "Femonino":
    resposta = result.innerHTML = 'Seja bem vinda!'
   break;
   case "masculino":
   resposta = result.innerHTML = 'seja bem vindo!'
   break;
   default:
    resposta = result.innerHTML = 'seja bem vinde!'
} 
}


