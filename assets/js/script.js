document.querySelector("#gravacao").addEventListener('change', pesquisar)
document.querySelector("#fotos").addEventListener('change', pesquisar)
document.querySelector("#videos").addEventListener('change', pesquisar)
document.querySelector("#infoCoords").addEventListener('change', pesquisar)
document.querySelector("#midia").addEventListener('change', pesquisar)
document.querySelector("#aula").addEventListener('change', pesquisar)
document.querySelector("#divPesqBU").addEventListener('change', pesquisar)


function pesquisar() {
    document.querySelector("#divPesqGravacao").classList.add("hidden")
    document.querySelector("#divPesqCurso").classList.add("hidden")
    document.querySelector("#divPesqNome").classList.add("hidden")
    document.querySelector("#btnPesq").classList.add("hidden")  
    document.querySelector("#divPesqBU").classList.add("hidden") 
    document.querySelector("#textApoio").classList.add("hidden") 

    const gravar = document.querySelector("#gravacao").checked
    const foto = document.querySelector("#fotos").checked
    const video = document.querySelector("#videos").checked
    const info = document.querySelector("#infoCoords").checked
    const midias = document.querySelector("#midia").checked
    const aulas = document.querySelector("#aula").checked

    if (gravar) {
        document.querySelector("#divPesqGravacao").classList.remove("hidden")
        if (midias){
            document.querySelector("#divPesqCurso").classList.remove("hidden")
            document.querySelector("#btnPesq").classList.remove("hidden")
        }
        if (aulas){
            document.querySelector("#textApoio").classList.remove("hidden")
            document.querySelector("#divPesqCurso").classList.remove("hidden")
            document.querySelector("#divPesqBU").classList.remove("hidden")
            document.querySelector("#btnPesq").classList.remove("hidden")
        }
    }
    if (foto) {
        document.querySelector("#textApoio").classList.remove("hidden")
        document.querySelector("#divPesqCurso").classList.remove("hidden")
        document.querySelector("#divPesqNome").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
        document.querySelector("#midia").checked = false
        document.querySelector("#aula").checked = false
    }
    if(video){
        document.querySelector("#textApoio").classList.remove("hidden")
        document.querySelector("#divPesqCurso").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
        document.querySelector("#midia").checked = false
        document.querySelector("#aula").checked = false
    }
    if(info){
        document.querySelector("#textApoio").classList.remove("hidden")
        document.querySelector("#divPesqNome").classList.remove("hidden")
        document.querySelector("#btnPesq").classList.remove("hidden")
        document.querySelector("#midia").checked = false
        document.querySelector("#aula").checked = false
    }
}