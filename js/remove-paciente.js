let tabela = document.getElementById("tabela-pacientes")
tabela.addEventListener("dblclick", function (event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 700)
});
