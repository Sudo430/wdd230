const button = document.querySelector('#menu');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open')
})


const r = document.querySelector(':root');

function setDarkMode(){
    //darkmode colors
    var bgnd = 'rgb(31, 31, 31)';
    var border = 'dimgray';
    var font = '#c8c8c8';
    var link = 'rgb(134, 138, 185)';
    var header = 'rgb(0, 63, 105)';
    //set darkmode colors
    r.style.setProperty('--bgnd-color', bgnd);
    r.style.setProperty('--border-color', border);
    r.style.setProperty('--font-color', font);
    r.style.setProperty('--link-color', link);
    r.style.setProperty('--header-color', header);
}

function setLightMode(){
    //darkmode colors
    var bgnd = 'white';
    var border = 'darkgray';
    var font = 'black';
    var link = 'rgb(35, 55, 168)';
    var header = 'rgb(72, 228, 255)';
    //set lightmode colors
    r.style.setProperty('--bgnd-color', bgnd);
    r.style.setProperty('--border-color', border);
    r.style.setProperty('--font-color', font);
    r.style.setProperty('--link-color', link);
    r.style.setProperty('--header-color', header);
}