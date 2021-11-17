const paines = document.querySelectorAll('.painel')

paines.forEach(paines => {
    paines.addEventListener('mouseover',() => {
        removeActiveClasses()
        paines.classList.add('ativo')
    })

})

function removeActiveClasses(){
    paines.forEach(paines => {
        paines.classList.remove('ativo')
    })
}

document.getElementById("moderno").onclick = function () {
    location.href = "mundo_moderno.html";
}

document.getElementById("antigo").onclick = function () {
    location.href = "maravilha_antigo.html";
}
