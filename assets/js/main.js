const title = document.querySelector("#Title");
const titleText = document.createElement("h1");

let num1, num2, operator;

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
