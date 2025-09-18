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
      updateNumbers(digitValue);
    });
  });
  calcOperator.addEventListener("click", () => {
    const operatorValue = operator.innerText;
    updateOperator(operatorValue);
  });
  equalsBtn.addEventListener("click", () => {
    operate();
  });
  clearBtn.addEventListener("click", () => {
    clearCalc();
  });
}

let num1, num2, operator;

function updateNumbers(number) {
  if (num1 == null) {
    num1 = number;
  } else if (num2 == null) {
    num2 = number;
  } else {
    num1 = number;
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
