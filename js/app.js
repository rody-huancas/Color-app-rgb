const result = document.querySelector('.main__result input');
const copyBtn = document.getElementById('copy-btn');
const sliders = document.querySelectorAll(".main__wrapper input[type='range']");
const rColor = document.getElementById('red');
const gColor = document.getElementById('green');
const bColor = document.getElementById('blue');



const generatorColor = () => {
    let rColorValue = rColor.value;
    let gColorValue = gColor.value;
    let bColorValue = bColor.value;

    let finalColor = `rgb(${rColorValue}, ${gColorValue}, ${bColorValue})`;

    result.value = finalColor;
    document.body.style.backgroundColor = finalColor;
}

const copyColorCode = () => {
    result.select();
    document.execCommand("copy");
    copyBtn.innerHTML = "COPIADO!";
    setTimeout(() => {
        copyBtn.innerText = "Copiar Color";
    }, 1000);
}

sliders.forEach(inp => {
    inp.addEventListener("input", generatorColor);
});

window.addEventListener('load', generatorColor);
copyBtn.addEventListener('click', copyColorCode);