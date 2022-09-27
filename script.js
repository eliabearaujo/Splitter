// Seleção

const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const customInput = document.querySelector(".tip-custom");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const errorMessage = document.querySelector(".error");

// Setando o valor padrão dos inputs

billInput.value = "0.0";
peopleInput.value = 1;
tipPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
customInput.value = null; //ARRUMAR

// Variaveis manipulaveis

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;
let customValue = 0.0; //ARRUMAR

// Adicionando os eventos

billInput.addEventListener("input", billInputFuction);
peopleInput.addEventListener("input", peopleInputFuncion);
customInput.addEventListener("input", customInputFuncion);

tips.forEach((tip) => {
  tip.addEventListener("click", handleClick);
});
// ARRUMAR
function customInputFuncion() {
  customValue = customInput.value;
}

function billInputFuction() {
  billValue = parseFloat(billInput.value);
}
function peopleInputFuncion() {
  peopleValue = parseFloat(peopleInput.value);
  if (peopleValue < 1) {
    errorMessage.style.display = "flex";
    peopleInput.style.border = "thick solid red";
  } else {
    errorMessage.style.display = "none";
    peopleInput.style.border = "none";
  }
}

// ARRUMAR
function handleClick(event) {
  tips.forEach((tip) => {
    tip.classList.remove("active-tip");
    if (customValue > 0) {
      tipValue = customValue / 100;
    } else if (event.target.innerHTML == tip.innerHTML) {
      tip.classList.add("active-tip");
      tipValue = parseFloat(event.target.innerHTML) / 100;
    }
  });
}

function tipCalculate() {
  if (peopleInput.value >= 1) {
  }
}

console.log(customInput);
