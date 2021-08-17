let displayList = document.querySelector(".display-list");
let displayResult = document.querySelector(".display-result");
let buttonOne = document.getElementById("button-1");
let buttonTwo = document.getElementById("button-2");
let buttonThree = document.getElementById("button-3");
let buttonFour = document.getElementById("button-4");
let buttonFive = document.getElementById("button-5");
let buttonSix = document.getElementById("button-6");
let buttonSeven = document.getElementById("button-7");
let buttonEight = document.getElementById("button-8");
let buttonNine = document.getElementById("button-9");
let buttonZero = document.getElementById("button-0");
let buttonDot = document.getElementById("button-dot");
let buttonEquals = document.getElementById("button-equals");
let buttonPlus = document.getElementById("button-plus");
let buttonMinus = document.getElementById("button-minus");
let buttonTimes = document.getElementById("button-times");
let buttonDivide = document.getElementById("button-divide");
let buttonNegPos = document.getElementById("button-negPos");
let buttonClear = document.getElementById("button-clear");
let buttonPercent = document.getElementById("button-percent");

let resultOfArr = [];
let joinOfArr = [];
let calcNum = [];

const attachNum = (calcNum) => {
  resultOfArr.push(...calcNum);
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = resultOfArr.join("");
};

buttonOne.addEventListener("click", attachNum("1"));
buttonTwo.addEventListener("click", attachNum("2"));
buttonThree.addEventListener("click", attachNum("3"));
buttonFour.addEventListener("click", attachNum("4"));
buttonFive.addEventListener("click", attachNum("5"));
buttonSix.addEventListener("click", attachNum("6"));
buttonSeven.addEventListener("click", attachNum("7"));
buttonEight.addEventListener("click", attachNum("8"));
buttonNine.addEventListener("click", attachNum("9"));
buttonZero.addEventListener("click", attachNum("0"));