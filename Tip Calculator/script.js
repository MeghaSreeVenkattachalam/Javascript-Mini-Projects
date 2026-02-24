function calculate() {
    let percentage = document.getElementById("percentageTip").value;
    let billAmount = document.getElementById("billAmount").value;
    let errorMessage = document.getElementById("errorMessage");
    let tipAmount = document.getElementById("tipAmount");
    let totalAmount = document.getElementById("totalAmount");

    errorMessage.textContent = "";
    tipAmount.value = "";
    totalAmount.value = "";

    if (billAmount === "" && percentage === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
        return;
    } else if (billAmount === "") {
        errorMessage.textContent = "Please Enter Bill Amount.";
        return;
    } else if (percentage === "") {
        errorMessage.textContent = "Please Enter Tip Percentage.";
        return;
    }

    let bill = parseFloat(billAmount);
    let tipPercent = parseFloat(percentage);

    let calculateTip = (tipPercent / 100) * bill;
    let total = bill + calculateTip;

    tipAmount.value = calculateTip.toFixed(2);
    totalAmount.value = total.toFixed(2);
}
