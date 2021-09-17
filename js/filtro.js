let campoFiltro = document.querySelector("#filtrar-paciente");

campoFiltro.addEventListener("input", () => {
  let pacientes = document.querySelectorAll(".paciente");
  if (campoFiltro.value.length > 0) {
    pacientes.forEach((paciente) => {
      let nome = paciente.querySelector(".info-nome").textContent;

      let size = campoFiltro.value.length;
      let sub = nome.substring(0, size);

      let expressao = new RegExp(campoFiltro.value, "i");

      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    });
  } else {
    pacientes.forEach((paciente) => {
      paciente.classList.remove("invisivel");
    });
  }
});
