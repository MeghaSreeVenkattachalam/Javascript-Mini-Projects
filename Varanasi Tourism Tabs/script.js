const aboutButton = document.getElementById('aboutButton');
const timeToVisitButton = document.getElementById('timeToVisitButton');
const attractionsButton = document.getElementById('attractionsButton');

const aboutTab = document.getElementById('aboutTab');
const timeToVisitTab = document.getElementById('timeToVisitTab');
const attractionsTab = document.getElementById('attractionsTab');

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");
aboutTab.classList.add("d-none");

function onClickAboutButton() {
    aboutTab.classList.remove("d-none");
    aboutTab.classList.add("d-block");

    timeToVisitTab.classList.remove("d-block");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-block");
    attractionsTab.classList.add("d-none");

    aboutButton.classList.add("selected-button");

    timeToVisitTab.classList.remove("selected-button");
    attractionsTab.classList.remove("selected-button");

}

function onClickTimeToVisitButton() {
    timeToVisitTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-block");

    aboutTab.classList.remove("d-block");
    aboutTab.classList.add("d-none");
    attractionsTab.classList.remove("d-block");
    attractionsTab.classList.add("d-none");

    timeToVisitButton.classList.add("selected-button");

    aboutTab.classList.remove("selected-button");
    attractionsTab.classList.remove("selected-button");

}

function onClickAttractionsButton() {
    attractionsTab.classList.remove("d-none");
    attractionsTab.classList.add("d-block");

    timeToVisitTab.classList.remove("d-block");
    timeToVisitTab.classList.add("d-none");
    aboutTab.classList.remove("d-block");
    aboutTab.classList.add("d-none");

    attractionsButton.classList.add("selected-button");

    timeToVisitTab.classList.remove("selected-button");
    aboutTab.classList.remove("selected-button");

}
