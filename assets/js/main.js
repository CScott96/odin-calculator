const title = document.querySelector("#Title");
const titleText = document.createElement("h1");
const calcDigits = document.querySelectorAll(".digit");
const calcOperator = document.querySelectorAll(".operator");
console.log(calcOperator);
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const screen = document.querySelector("#Screen");
const screenDig1 = screen.querySelector("#Dig1");
const screenDig2 = screen.querySelector("#Dig2");
const screenOp = screen.querySelector("#Op");

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
      const operatorValue = operatorBtn.innerText;
      // console.log(operatorValue);
      updateOperator(operatorValue);
    });
  });
  equalsBtn.addEventListener("click", () => {
    operate(num1, num2, calcSign);
  });
  clearBtn.addEventListener("click", () => {
    clearCalc();
  });
}

let num1 = false;
let num2 = false;
let calcSign = false;

function updateNumbers(number) {
  console.log(number);
  if (num1 == false) {
    num1 = parseInt(number);
    console.log("num1 " + num1);
    screenDig1.innerText = num1;
  } else if (num2 == false) {
    num2 = parseInt(number);
    console.log("num2 " + num2);
    screenDig2.innerText = num2;
  } else {
    num1 = parseInt(number);
    num2 = false;
    console.log("num1 " + num1);
  }
}

function updateOperator(operatorBtn) {
  calcSign = operatorBtn;
  screenOp.innerText = calcSign;
  console.log(calcSign);
}

function clearCalc() {
  ((num1 = false), (num2 = false), (calcSign = false));
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

function operate(op1, op2, calcOperator) {
  console.log(calcOperator);
  switch (String(calcOperator)) {
    case "+":
      addition(op1, op2);
      break;
    case "-":
      subtraction(op1, op2);
      break;
    case "*":
      multiplication(op1, op2);
      break;
    case "/":
      division(op1, op2);
      break;
    default:
      console.log("no operator passed");
  }
}

initialise();
