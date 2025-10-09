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
let answer = 0;
let calcSign = false;
let enteredSign = false;

function updateNumbers(number) {
  console.log(number);
  if (enteredSign == false && num1 == 0) {
    num1 = number;
    updateScreen("number1");
  } else if (enteredSign == false && num1 != 0) {
    num1 = num1 + number;
    updateScreen("number1");
  } else if (enteredSign == true && num2 == 0) {
    num2 = number;
    updateScreen("number2");
  } else if (enteredSign == true && num2 != 0) {
    num2 = num2 + number;
    updateScreen("number2");
  }
}

function updateOperator(operatorBtn) {
  enteredSign = true;
  calcSign = operatorBtn;
  updateScreen("operator");
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
  answer = num1 + num2;
  console.log(answer);
  updateScreen("calculate");
}
function subtraction(num1, num2) {
  answer = num1 - num2;
  updateScreen("calculate");
}
function division(num1, num2) {
  answer = num1 / num2;
  updateScreen("calculate");
}
function multiplication(num1, num2) {
  answer = num1 * num2;
  updateScreen("calculate");
}

function operate(op1, op2, calcOperator) {
  digit1 = parseInt(op1);
  digit2 = parseInt(op2);
  console.log(calcOperator);
  switch (String(calcOperator)) {
    case "+":
      addition(digit1, digit2);
      break;
    case "-":
      subtraction(digit1, digit2);
      break;
    case "*":
      multiplication(digit1, digit2);
      break;
    case "/":
      division(digit1, digit2);
      break;
    default:
      console.log("no operator passed");
  }
}

function updateScreen(refreshType) {
  console.log(refreshType);
  switch (refreshType) {
    case "number1":
      screenDig1.innerText = num1;
      break;
    case "number2":
      screenDig2.innerText = num2;
      break;
    case "operator":
      screenOp.innerText = calcSign;
      break;
    case "calculate":
      screenDig1.innerText = answer;
      screenDig2.innerText = "";
      num1 = answer;
      num2 = 0;
      break;
    case "clear":
    default:
      screenDig1.innerText = "";
      screenDig2.innerText = "";
      screenOp.innerText = "";
      break;
  }
}

initialise();
