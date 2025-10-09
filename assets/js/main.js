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

let num1 = 0;
let num2 = 0;
let calcSign = false;
let enteredSign = false;

function updateNumbers(number) {
  console.log(number);
  if (enteredSign == false && num1 == 0) {
    num1 = number;
    console.log("num1 " + num1);
    screenDig1.innerText = num1;
  } else if (calcSign == false && num1 != 0) {
    num1 = num1 + number;
    console.log("num1 " + num1);
    screenDig1.innerText = num1;
  } else if (enteredSign == true && num2 == 0) {
    num2 = number;
    screenDig2.innerText = num2;
  } else if (enteredSign == true && num2 != 0) {
    num2 = num2 + number;
    screenDig2.innerText = num2;
  }
}

function updateOperator(operatorBtn) {
  enteredSign = true;
  calcSign = operatorBtn;
  screenOp.innerText = calcSign;
  console.log(calcSign);
}

function clearCalc() {
  num1 = false;
  num2 = false;
  enteredSign = false;
  calcSign = false;
  screenDig1.innerText = "";
  screenDig2.innerText = "";
  screenOp.innerText = "";
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
