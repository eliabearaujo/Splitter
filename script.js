// Seleção

const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const customInput = document.querySelector(".tip-custom");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const errorMessage = document.querySelector(".error");
const resetbutton = document.querySelector(".reset");

// Setando o valor padrão dos inputs

billInput.value = "0.0";
peopleInput.value = 1;
tipPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
customInput.value = null;

// Variaveis manipulaveis

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0;

// Adicionando os eventos

billInput.addEventListener("input", billInputFuction);
peopleInput.addEventListener("input", peopleInputFuncion);
customInput.addEventListener("input", customInputFuncion);
resetbutton.addEventListener("click", handleReset);

tips.forEach((tip) => {
  tip.addEventListener("click", handleClick);
});
// ARRUMAR
function customInputFuncion() {
  tipValue = customInput.value / 100;
  tips.forEach((tip) => {
    tip.classList.remove("active-tip");
  });
  tipCalculate();
}

function billInputFuction() {
  billValue = parseFloat(billInput.value);
  tipCalculate();
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
  tipCalculate();
}

// ARRUMAR
function handleClick(event) {
  tips.forEach((tip) => {
    tip.classList.remove("active-tip");
    if (event.target.innerHTML == tip.innerHTML) {
      tip.classList.add("active-tip");
      tipValue = parseFloat(event.target.innerHTML) / 100;
    }
  });
  tipCalculate();
}

function tipCalculate() {
  if (peopleInput.value == 1) {
    tipPerPerson.innerHTML = "R$" + (tipValue * billValue).toFixed(2);
    totalPerPerson.innerHTML =
      "R$" + (tipValue * billValue + billValue).toFixed(2);
  } else {
    tipPerPerson.innerHTML =
      "R$" + (tipValue * billValue) / peopleValue.toFixed(2);
    totalPerPerson.innerHTML =
      "R$" + (tipValue * billValue + billValue) / peopleValue.toFixed(2);
  }
}

function handleReset() {
  billInput.value = "0.0";
  peopleInput.value = 1;
  tipPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
  totalPerPerson.innerHTML = "R$" + (0.0).toFixed(2);
  customInput.value = null;
}
