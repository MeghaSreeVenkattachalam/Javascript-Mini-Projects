let first = Math.ceil(Math.random() * 100)
let second = Math.ceil(Math.random() * 100)

let firstNumberElement = document.getElementById("firstNumber");
firstNumberElement.textContent = first;

let secondNumberElement = document.getElementById("secondNumber");
secondNumberElement.textContent = second;

let gameResult = document.getElementById("gameResult");
//Congratulations you got it

function check() {
    let userInput = parseInt(document.getElementById("userInput").value);
    if (userInput === (first + second)) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    first = Math.ceil(Math.random() * 100)
    second = Math.ceil(Math.random() * 100)
    firstNumberElement.textContent = first;
    secondNumberElement.textContent = second;

    gameResult.textContent = "";
    gameResult.style.backgroundColor = "";
}
