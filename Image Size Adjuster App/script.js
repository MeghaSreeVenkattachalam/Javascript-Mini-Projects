let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imageWidthText = document.getElementById("imageWidth");


let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";
imageWidthText.textContent = defaultImageWidth + "px";

function increment() {
    if (defaultImageWidth >= 300) {
        warningMessage.textContent = "Too big. Decrease the size of the image.";
    } else {
        defaultImageWidth += 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthText.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    }
}

function decrement() {
    if (defaultImageWidth <= 100) {
        warningMessage.textContent = "Can't decrease less than 100px";
    } else {
        defaultImageWidth -= 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthText.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    }
}
