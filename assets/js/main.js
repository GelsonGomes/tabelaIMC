const form = document.querySelector('.form');  //buscando o form do html

form.addEventListener('submit', function (e) {
  e.preventDefault();    //prevenindo o evento
  const nome = e.target.querySelector('#nome').value; //value para pegar o valor digitado
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  
  const peso = Number(inputPeso.value);  //pegando valores de peso e alt
  const altura = Number(inputAltura.value);
  
  if (! peso) {
    setResult('O peso não é válido!', false); //flag 'false' caso não seja digitado nada ou algo incorreto
    return;
  }

  if (! altura) {
    setResult('A altura não é válida!', false);
    return;
  }

  const imc = getImc(peso, altura);  //criando const para que resultam no nivel do imc
  const NivelImc = indiceImc(imc);


  // msg de retorno ao usuário
  const msg = `${nome}  seu IMC é ${imc} (${NivelImc})`

  setResult(msg, true);
   
});

function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);  
}

//função p/ classificar o indice de acordo com peso e alt
function indiceImc (imc) {     
  const indice = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3 (Mórbido)'];
   
  if(imc > 40) return indice[5];
  if(imc > 35) return indice[4];
  if(imc > 30) return indice[3];
  if(imc > 25) return indice[2];
  if(imc > 18.5) return indice[1];
  if(imc < 18.5) return indice[0];
  
}

//função que esta criando um paragrafo pelo JS
function creatP(){
  const p = document.createElement('p');
  return p;
}
 

function setResult(msg, isValid) {   //dois parametros (a mensagem e a flag booleana)
  const result = document.querySelector('#result');
  result.innerHTML = '';
  
  const p = creatP();
  if(isValid){     //utilizará o boolean para dar a cor na resposta
    p.classList.add('paragrafo-result');
  }else {
    p.classList.add('paragrafo-red');
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
