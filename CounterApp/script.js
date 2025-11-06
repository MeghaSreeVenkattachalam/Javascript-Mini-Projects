let counterElement = document.getElementById("counterValue");

function onDecrease() {
    let previousCounter = parseInt(counterElement.textContent);
    let updateCounter = previousCounter - 1;
    counterElement.textContent = updateCounter;
    counterElement.style.color = "red";
}

function onIncrease() {
    let previousCounter = parseInt(counterElement.textContent);
    let updateCounter = previousCounter + 1;
    counterElement.textContent = updateCounter;
    counterElement.style.color = "green";
}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
}
