let x = "";
let y = "";
// x will hold the diplay value and y will hold the stored value
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");
const button7 = document.querySelector(".button-7");
const button8 = document.querySelector(".button-8");
const button9 = document.querySelector(".button-9");
const button0 = document.querySelector(".button-0");
const buttonDivide = document.querySelector(".button-division");
const buttonMultiply = document.querySelector(".button-multiply");
const buttonSubtract = document.querySelector(".button-subtract");
const buttonAdd = document.querySelector(".button-add");
const buttonClear = document.querySelector(".button-CE");
console.log(buttonClear);
loadEventListners();
function loadEventListners() {
  // adds number button listners
  button0.addEventListener("click", apend0);
  button1.addEventListener("click", apend1);
  button2.addEventListener("click", apend2);
  button3.addEventListener("click", apend3);
  button4.addEventListener("click", apend4);
  button5.addEventListener("click", apend5);
  button6.addEventListener("click", apend6);
  button7.addEventListener("click", apend7);
  button8.addEventListener("click", apend8);
  button9.addEventListener("click", apend9);
  buttonClear.addEventListener("click", clearEntries);
}

function apend0(e) {
  x = x + "0";

  updateScreen();
  e.preventDefault();
}

function apend1(e) {
  x = x + "1";

  updateScreen();
  e.preventDefault();
}

function apend2(e) {
  x = x + "2";

  updateScreen();
  e.preventDefault();
}

function apend3(e) {
  x = x + "3";

  updateScreen();
  e.preventDefault();
}

function apend4(e) {
  x = x + "4";

  updateScreen();
  e.preventDefault();
}

function apend5(e) {
  x = x + "4";

  updateScreen();
  e.preventDefault();
}

function apend5(e) {
  x = x + "5";

  updateScreen();
  e.preventDefault();
}

function apend6(e) {
  x = x + "6";

  updateScreen();
  e.preventDefault();
}

function apend7(e) {
  x = x + "7";

  updateScreen();
  e.preventDefault();
}

function apend8(e) {
  x = x + "8";

  updateScreen();
  e.preventDefault();
}

function apend9(e) {
  x = x + "9";

  updateScreen();
  e.preventDefault();
}

function clearEntries(e) {
  x = "";
  restScreen();
  e.preventDefault();
}

function restScreen() {
  document.querySelector("#screen").innerHTML = "0";
}

function updateScreen() {
  document.querySelector("#screen").innerHTML = x;
}
