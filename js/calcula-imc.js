let pacientes = document.querySelectorAll(".paciente");

window.onload = () =>{
  removeMsgErro();
};


pacientes.forEach((paciente) => {
  let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");
  let tdImc = paciente.querySelector(".info-imc");
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;

  let pacienteValidacao ={
    peso: peso,
    altura: altura
  }

  let erros = validaPaciente(pacienteValidacao);
  if(erros.length > 0){
    return;
  }

  tdImc.textContent = calculaImc(peso, altura);
});
function calculaImc(peso, altura) {
  let vlrImc = peso / (altura * altura);
  return vlrImc.toFixed(2);
}

function isAlturaValida(altura) {
  return altura <= 0 || altura >= 3.0;
}

function isPesoValido(peso) {
  return peso <= 0 || peso >= 1000;
}
function removeMsgErro() {
  let error = document.querySelector("#mensagem-erro");
  error.textContent = "";
}

function validaPaciente(paciente){
  let arrayErros = [];
    if (isPesoValido(paciente.peso)) {
        arrayErros.push("Peso invalido");
      }
      if (isAlturaValida(paciente.altura)) {
        arrayErros.push("Altura inválida");
      }
  return arrayErros;
}