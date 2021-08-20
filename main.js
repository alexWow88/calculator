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
  displayList.innerHTML = listOfArr.join("");
  console.log(resultOfArr);
};
const attachDot = (newNum) => {
  resultOfArr.push(...newNum);
  listOfArr.push(...newNum);
  displayList.innerHTML = resultOfArr.join("");
  console.log(resultOfArr);
};
const attachSymb = (newSymb) => {
  if (resultOfArr.join("").includes("-")) {
    console.log(resultOfArr);
    let splitResultArr = resultOfArr.join("").split("-");
    console.log(splitResultArr);
    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
      //resultOfArr.push(...newSymb);
        console.log(resultOfArr);
        resultOfArr = ((-1)*parseFloat(splitResultArr[1])) - parseFloat(splitResultArr[2]);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        resultOfArr = resultOfArr.split("");
        console.log(resultOfArr);
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
        console.log(resultOfArr);
        resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        resultOfArr = resultOfArr.split("");
        console.log(resultOfArr);
      };
  };
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    resultOfArr = resultOfArr.split("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
      let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      resultOfArr = resultOfArr.split("");
      console.log(resultOfArr);
    } else if (resultOfArr.join("").includes("/")) {
      let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      resultOfArr = resultOfArr.split("");
      console.log(resultOfArr);
    }
  console.log(resultOfArr);
  resultOfArr.push(...newSymb);
  console.log(resultOfArr);
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
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]))*(-1);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];
    listOfArr.push(...resultOfArr);
    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("-")) {
      console.log(resultOfArr);
      let splitResultArr = resultOfArr.join("").split("-");
      console.log(splitResultArr);
      if (splitResultArr[0] == "" && splitResultArr.length === 2) {
        resultOfArr = parseFloat(splitResultArr[1]); 
        console.log(resultOfArr);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        listOfArr = [];
        listOfArr.push(...resultOfArr);
        resultOfArr = resultOfArr.split("");
        displayList.innerHTML = listOfArr.join("");
        console.log(resultOfArr);
      } else {
        console.log(splitResultArr);
        resultOfArr = (parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]))*(-1);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        listOfArr = [];
        listOfArr.push(...resultOfArr);
        resultOfArr = resultOfArr.split("");
        displayList.innerHTML = listOfArr.join("");
        console.log(resultOfArr);
    }
  } else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
    resultOfArr = (parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]))*(-1);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];
    listOfArr.push(...resultOfArr);
    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
      let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = (parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]))*(-1);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else {
      resultOfArr = parseFloat(resultOfArr.join("")) * (-1);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  }
};
const percentResult = () => {
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
      resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]))*100;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
      resultOfArr = (parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]))*100;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = (parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]))*100;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = (parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]))*100;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else {
      resultOfArr = parseFloat(resultOfArr.join("")) * 100;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  }
};
const calcResult = () => {
  if (resultOfArr.join("").includes("-")) {
    console.log(resultOfArr);
    let splitResultArr = resultOfArr.join("").split("-");
    console.log(splitResultArr);
    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
        console.log(resultOfArr);
        resultOfArr = ((-1)*parseFloat(splitResultArr[1])) - parseFloat(splitResultArr[2]);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        listOfArr = [];
        listOfArr.push(...resultOfArr);
        console.log(listOfArr);
        displayList.innerHTML = listOfArr.join("");
        resultOfArr = resultOfArr.split("");
        console.log(resultOfArr);
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
        console.log(resultOfArr);
        resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
        displayResult.innerHTML = resultOfArr;
        resultOfArr = String(resultOfArr);
        listOfArr = [];
        listOfArr.push(...resultOfArr);
        console.log(listOfArr);
        displayList.innerHTML = listOfArr.join("");
        resultOfArr = resultOfArr.split("");
        console.log(resultOfArr);
      };
  };
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
      resultOfArr = parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } 
  else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];
      listOfArr.push(...resultOfArr);
      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
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