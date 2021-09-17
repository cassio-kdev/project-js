let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", (event) => {
  event.preventDefault();
  capturaDadosForm();
});

function capturaDadosForm() {
  let form = document.querySelector("#form-adiciona");

  paciente = otemDadosPacienteForm(form);
  let pacienteTr = createTr(paciente);
  let tbody = document.querySelector("#tabela-pacientes");
  let erros = validaPaciente(paciente);
  if (erros.length > 0) {
    let ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach((erro) => {
      let li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
    return;
  }
  tbody.appendChild(pacienteTr);
  form.reset();
}

function createTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  let tdNome = createElementTd("info-nome", paciente.nome);
  let tdPeso = createElementTd("info-peso", paciente.peso);
  let tdAltura = createElementTd("info-altura", paciente.altura);
  let tdGordura = createElementTd("info-gordura", paciente.gordura);
  let tdImc = createElementTd("info-imc", paciente.imc);

  pacienteTr.appendChild(tdNome);
  pacienteTr.appendChild(tdPeso);
  pacienteTr.appendChild(tdAltura);
  pacienteTr.appendChild(tdGordura);
  pacienteTr.appendChild(tdImc);

  return pacienteTr;
}

function createElementTd(classe, valor) {
  let td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = valor;

  return td;
}

function otemDadosPacienteForm(form) {
  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}
