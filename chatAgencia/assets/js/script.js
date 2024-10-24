document.querySelector("#gravacao").addEventListener('change', pesquisar)
document.querySelector("#fotos").addEventListener('change', pesquisar)
document.querySelector("#videos").addEventListener('change', pesquisar)
document.querySelector("#infoCoords").addEventListener('change', pesquisar)

function pesquisar() {
    document.querySelector("#divPesqGravacao").classList.add("hidden")
    document.querySelector("#divPesqCurso").classList.add("hidden")
    document.querySelector("#divPesqNome").classList.add("hidden")
    document.querySelector("#btnPesq").classList.add("hidden")

    const gravar = document.querySelector("#gravacao").checked
    const foto = document.querySelector("#fotos").checked
    const video = document.querySelector("#videos").checked
    const info = document.querySelector("#infoCoords").checked

    if (gravar) {
        document.querySelector("#divPesqGravacao").classList.remove("hidden")
    }
    if (foto) {
        document.querySelector("#divPesqCurso").classList.remove("hidden")
        document.querySelector("#divPesqNome").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
    }
    if(video){
        document.querySelector("#divPesqCurso").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
    }
    if(info){
        document.querySelector("#divPesqNome").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
    }
}