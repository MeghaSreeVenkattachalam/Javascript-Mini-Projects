let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById('button');
let bgElement = document.getElementById('bgContainer');

function changeColor() {
    let randomColor = bgColorsArray[Math.floor(Math.random() * bgColorsArray.length)];
    bgElement.style.backgroundColor = randomColor;
}
