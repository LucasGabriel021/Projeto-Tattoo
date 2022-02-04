function botaoAncora() {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

function decidirBotao() {
    if(window.scrollY == 0) {
        document.getElementById('botao-ancora').style.display = 'none';
    }
    else {
        document.getElementById('botao-ancora').style.display = 'inline-block';
    }
}

window.addEventListener('scroll', decidirBotao);