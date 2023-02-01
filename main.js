
const form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const inputPeso = event.target.querySelector('#peso');
  const inputaltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputaltura.value);

  if(!peso){
    setResult('Peso invalido.!', false)
    return;
  }

  if(!altura){
    setResult('Altura invalido.!', false)
    return;
  }

  const imc = getImc (peso, altura)
  const levelImc = getLevelImc(imc)
  
  const msg = `Seu IMC e ${imc} (${levelImc}).`;

  setResult(msg, true);
});

// function para verificar e validar  o imc 

function getLevelImc (imc) {
  const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade',
    'Obesidade grau 2', 'obeseidade grau 3'];

    if(imc >= 39.9)return level[5];
    if(imc >= 34.9)return level[4];
    if(imc >= 29.9)return level[3];
    if(imc >= 24.9)return level[2];
    if(imc >= 18.5)return level[1];
    if(imc < 18.5)return level[0];
   
}
  // funcao para calcular o imc
function getImc(peso, altura){
  const imc = peso / altura ** 2;
    return imc.toFixed(2);

  }
// funcao para criar paragrafo no html
function createP () {
  const p = document.createElement('p');
  return p;

}
// funcao para retorna o resultado no paragrafo html
function setResult (msg, isValid) {
  const result = document.querySelector('#result');
   result.innerHTML = '';

   const p = createP();

   if(isValid) {
    p.classList.add('answer');
  }else {
    p.classList.add('bgr');
  }

   p.innerHTML = msg;

   result.appendChild(p);
   
}