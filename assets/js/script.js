//Config de Scroll suave
let actionButton = document.querySelector('#buttonAncora');
actionButton.addEventListener('click', () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
});
function decidirBotao() {
    if(window.scrollY == 0) {
        document.getElementById('botao-ancora').style.display = 'none';
    }
    else {    
        document.getElementById('botao-ancora').style.opacity = 1;
        document.getElementById('botao-ancora').style.display = 'inline-block';
    }
}

window.addEventListener('scroll', decidirBotao);


//Config de botão toggle
function menuAcao() {
    let menuArea = document.getElementById('menu');
    if (menuArea.classList.contains('menuOpen') == true) {
        menuArea.classList.remove('menuOpen');
    }
    else {
        menuArea.classList.add('menuOpen');
    }
}