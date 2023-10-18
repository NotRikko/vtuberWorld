let welcomePageButton = document.querySelector("#welcomeButton");
let welcomePage = document.querySelector("#welcomePage");
let choosePathPage = document.querySelector("#explore");

function removeWelcome() {
   welcomePage.style.display = "none";
   choosePathPage.style.display ="flex";
}

welcomePageButton.addEventListener("click", removeWelcome);

