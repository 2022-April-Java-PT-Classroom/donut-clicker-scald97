import DonutMaker from "./DonutMaker";
import index from "./index.html";
renderpage();

function renderpage() {}

// const container = (document.querySelector(".container").innerText =
//   "mmmmmmmmm doughnuts.... ahhhhhhh!");

const createDonut = new DonutMaker(0, 0, 0);
const addDonut = document.querySelector("#clicks"); // Display
const donutCount = document.querySelector("button");

updateDisplay();

//header nav bar
// function myFunction1() {
//   var x = document.getElementsByClassName("li-tag");
//   for (index = 0; index < x.length; index++) {
//     x[index].classList.toggle("list_view");
//   }
// }

//buttons

donutCount.addEventListener("click", () => {
  createDonut.click();
  updateDisplay();
});

function buyAutoClicker() {
  document.getElementById("auto-clicker").innerHTML = click;
}

function buyDonutMultiplier() {
  document.getElementById("multiplier").innerHTML = click;
}

function updateDisplay() {
  addDonut.innerText = "Donuts:" + createDonut.numDonuts;
}
