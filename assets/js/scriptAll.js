let menuArea = document.getElementById('menu-toggle');
let line1config = document.querySelector('.line1');
let line2config = document.querySelector('.line2');
let line3config = document.querySelector('.line3');
menuArea.addEventListener('click', () => {
    let menu = document.getElementById('menu-list');
    if (menu.classList.contains('show') == true) {
        menu.classList.remove('show');
        line1config.style.opacity = '1';
        line2config.style.transform = 'rotateZ(0deg)';
        line3config.style.transform = 'rotateZ(0deg)';
        line2config.style.top = '';
    }
    else {
        menu.classList.add('show');
        line1config.style.opacity = '0';
        line2config.style.transform = 'rotate(135deg)';
        line3config.style.transform = 'rotate(-135deg)';
        line2config.style.top = '7px';
    }
});