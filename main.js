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
let listOfArr = [];
let newNum = [];
let newSymb = [];
let finalResult = [];

const attachNum = (newNum) => {
  resultOfArr.push(...newNum);
  listOfArr.push(...newNum);
  displayResult.innerHTML = resultOfArr.join("");
  displayList.innerHTML = listOfArr.join("");
};
const attachDot = (newNum) => {
  resultOfArr.push(...newNum);
  displayResult.innerHTML = resultOfArr.join("");
  displayList.innerHTML = resultOfArr.join("");
};
const attachSymb = (newSymb) => {
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    for (let index = 0; index < splitResultArr.length; index++){
      resultOfArr = parseFloat(splitResultArr) + parseFloat(splitResultArr[index]);
      displayResult.innerHTML = resultOfArr;
      console.log(resultOfArr);
    }
  };
  // } else if (resultOfArr.join("").includes("-")) {
  //   let splitResultArr = resultOfArr.join("").split("-");
  //   for (let index = 0; index < splitResultArr.length; index++){
  //     const finalResult = parseFloat(splitResultArr) - parseFloat(splitResultArr[index]);
  //     displayResult.innerHTML = finalResult;
  //     resultOfArr = finalResult;
  //   }
  // } else if (resultOfArr.join("").includes("*")) {
  //   let splitResultArr = resultOfArr.join("").split("*");
  //   for (let index = 0; index < splitResultArr.length; index++){
  //     const finalResult = parseFloat(splitResultArr) * parseFloat(splitResultArr[index]);
  //     displayResult.innerHTML = finalResult;
  //     resultOfArr = finalResult;
  //   }
  // }
  
  resultOfArr.push(...newSymb);
  listOfArr.push(...newSymb);
  displayList.innerHTML = listOfArr.join("");
};
const clearDisplay = () => {
  resultOfArr = [];
  listOfArr = [];
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
};
const negPosResult = () => {
  resultOfArr = resultOfArr * (-1);
  listOfArr = resultOfArr;
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
};
const percentResult = () => {
  console.log(resultOfArr);
  if (resultOfArr.join("").includes(".")) {
  resultOfArr = resultOfArr.join("") * 100;
  listOfArr = resultOfArr;
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
  } else {
  listOfArr = resultOfArr;
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
  }
};
const calcResult = () => {
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    for (let index = 0; index < splitResultArr.length; index++){
      resultOfArr = parseFloat(splitResultArr) + parseFloat(splitResultArr[index]);
      displayResult.innerHTML = resultOfArr;
      console.log(resultOfArr);
    }
  } else if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
    for (let index = 0; index < splitResultArr.length; index++){
      const finalResult = parseFloat(splitResultArr) - parseFloat(splitResultArr[index]);
      displayResult.innerHTML = finalResult;
    }
  } else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
    for (let index = 0; index < splitResultArr.length; index++){
      const finalResult = parseFloat(splitResultArr) * parseFloat(splitResultArr[index]);
      displayResult.innerHTML = finalResult;
    }
  }
};

buttonOne.addEventListener("click", function () {attachNum("1")});
buttonTwo.addEventListener("click", function () {attachNum("2")});
buttonThree.addEventListener("click", function () {attachNum("3")});
buttonFour.addEventListener("click", function () {attachNum("4")});
buttonFive.addEventListener("click", function () {attachNum("5")});
buttonSix.addEventListener("click", function () {attachNum("6")});
buttonSeven.addEventListener("click", function () {attachNum("7")});
buttonEight.addEventListener("click", function () {attachNum("8")});
buttonNine.addEventListener("click", function () {attachNum("9")});
buttonZero.addEventListener("click", function () {attachNum("0")});
buttonTimes.addEventListener("click", function () {attachSymb("*")});
buttonMinus.addEventListener("click", function () {attachSymb("-")});
buttonPlus.addEventListener("click", function () {attachSymb("+")});
buttonDivide.addEventListener("click", function () {attachSymb("/")});
buttonClear.addEventListener("click", clearDisplay);
buttonEquals.addEventListener("click", calcResult);
buttonDot.addEventListener("click", function () {attachDot(".")});
buttonNegPos.addEventListener("click", negPosResult);
buttonPercent.addEventListener("click", percentResult);