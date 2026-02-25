const BgColorInput = document.getElementById("bgColorInput");
const FontColorInput = document.getElementById("fontColorInput");
const FontSizeInput = document.getElementById("fontSizeInput");
const FontWeightInput = document.getElementById("fontWeightInput");
const PaddingInput = document.getElementById("paddingInput");
const BorderRadiusInput = document.getElementById("borderRadiusInput");
const ApplyButton = document.getElementById("applyButton");
const CustomButton = document.getElementById("customButton");

function apply() {
    CustomButton.style.backgroundColor = BgColorInput.value;
    CustomButton.style.color = FontColorInput.value;
    CustomButton.style.fontSize = FontSizeInput.value;
    CustomButton.style.fontWeight = FontWeightInput.value;
    CustomButton.style.padding = PaddingInput.value;
    CustomButton.style.borderRadius = BorderRadiusInput.value;
}
