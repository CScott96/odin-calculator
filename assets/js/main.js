const title = document.querySelector("#Title");
const titleText = document.createElement("h1");
const calcDigits = document.querySelectorAll(".digit");
const calcOperator = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const screen = document.querySelector("#Screen");

function initialise() {
  calcDigits.forEach((digit) => {
    digit.addEventListener("click", () => {
      const digitValue = digit.innerText;
      //console.log(digitValue);
      updateNumbers(digitValue);
    });
  });
  calcOperator.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
      const operatorValue = operator.innerText;
      console.log(operatorValue);
      updateOperator(operatorValue);
    });
  });
  equalsBtn.addEventListener("click", () => {
    operate();
  });
  clearBtn.addEventListener("click", () => {
    clearCalc();
  });
}

let num1 = false;
let num2 = false;
let operator = false;

function updateNumbers(number) {
  console.log(number);
  if (num1 == false) {
    num1 = parseInt(number);
    console.log("num1 " + num1);
  } else if (num2 == false) {
    num2 = number;
    console.log("num2 " + num2);
  } else {
    num1 = number;
    num2 = false;
    console.log("num1 " + num1);
  }
}

function updateOperator(operatorBtn) {
  operator = operatorBtn;
}

function clearCalc() {
  (num1, num2, (operator = ""));
}

titleText.innerText = "Odin Calculator";
title.appendChild(titleText);

function addition(num1, num2) {
  console.log(num1 + num2);
}
function subtraction(num1, num2) {
  console.log(num1 - num2);
}
function division(num1, num2) {
  console.log(num1 / num2);
}
function multiplication(num1, num2) {
  console.log(num1 * num2);
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      addition(num1, num2);
      break;
    case "-":
      subtraction(num1, num2);
      break;
    case "*":
      multiplication(num1, num2);
      break;
    case "/":
      division(num1, num2);
      break;
    default:
      console.log("no operator passed");
  }
}

initialise();
