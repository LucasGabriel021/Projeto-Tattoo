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
let menuArea = document.getElementById('menu-toggle');
let line1config = document.querySelector('.line1');
let line2config = document.querySelector('.line2');
let line3config = document.querySelector('.line3');
menuArea.addEventListener('click', () => {
    let menu = document.getElementById('menu-list');
    if (menu.classList.contains('show') == true) {
        menu.classList.remove('show');
        line1config.style.transform = 'rotateZ(0deg)';
        line2config.style.opacity = '1';
        line3config.style.transform = 'rotateZ(0deg)';
        line3config.style.top = '';
    }
    else {
        menu.classList.add('show');
        line1config.style.transform = 'rotate(135deg)';
        line2config.style.opacity = '0';
        line3config.style.transform = 'rotate(-135deg)';
        line3config.style.top = '-15px';
    }
});