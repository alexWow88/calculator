const displayList = document.querySelector(".display-list");
const displayResult = document.querySelector(".display-result");
const buttonOne = document.getElementById("button-1");
const buttonTwo = document.getElementById("button-2");
const buttonThree = document.getElementById("button-3");
const buttonFour = document.getElementById("button-4");
const buttonFive = document.getElementById("button-5");
const buttonSix = document.getElementById("button-6");
const buttonSeven = document.getElementById("button-7");
const buttonEight = document.getElementById("button-8");
const buttonNine = document.getElementById("button-9");
const buttonZero = document.getElementById("button-0");
const buttonDot = document.getElementById("button-dot");
const buttonEquals = document.getElementById("button-equals");
const buttonPlus = document.getElementById("button-plus");
const buttonMinus = document.getElementById("button-minus");
const buttonTimes = document.getElementById("button-times");
const buttonDivide = document.getElementById("button-divide");
const buttonNegPos = document.getElementById("button-negPos");
const buttonClear = document.getElementById("button-clear");
const buttonPercent = document.getElementById("button-percent");

let resultOfArr = [];
let listOfArr = [];
let newNum = [];
let newSymb = [];

const attachNum = (newNum) => {
  resultOfArr.push(...newNum);
  listOfArr.push(...newNum);
  displayList.innerHTML = listOfArr.join("");
};
const attachDot = (newNum) => {
  resultOfArr.push(...newNum);
  listOfArr.push(...newNum);
  displayList.innerHTML = resultOfArr.join("");
};

const displayResultAndList = () => {
  resultOfArr = String(resultOfArr);

  if (resultOfArr.length > 14) {
    displayResult.innerHTML = resultOfArr.substring(0,13);
  } else {displayResult.innerHTML = resultOfArr};

  listOfArr = [];
  listOfArr.push(...resultOfArr);
  resultOfArr = resultOfArr.split("");
  displayList.innerHTML = listOfArr.join("");
}

const displayResultAndSplitResultsArr = () => {
  resultOfArr = String(resultOfArr);

  if (resultOfArr.length > 15) {
    displayResult.innerHTML = resultOfArr.substring(0,14);
  } else {displayResult.innerHTML = resultOfArr};

  resultOfArr = resultOfArr.split("");
}

const attachSymb = (newSymb) => {
  if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
        resultOfArr = ((-1)*parseFloat(splitResultArr[1])) - parseFloat(splitResultArr[2]);
        displayResultAndSplitResultsArr();
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
        resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
        displayResultAndSplitResultsArr();
      };
  };
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]);
    displayResultAndSplitResultsArr();
  } else if (resultOfArr.join("").includes("*")) {
      let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]);
      displayResultAndSplitResultsArr();
    } else if (resultOfArr.join("").includes("/")) {
      let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]);
      displayResultAndSplitResultsArr();
    }
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
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]))*(-1);
    displayResultAndList();
  } 
    else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
    resultOfArr = (parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]))*(-1);
    displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
      let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = (parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]))*(-1);
      displayResultAndList();
  } 
  else if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
    if ((splitResultArr[0] == "" && splitResultArr.length === 2) && (!resultOfArr.join("").includes("+") && !resultOfArr.join("").includes("*") && !resultOfArr.join("").includes("/"))) {
      resultOfArr = parseFloat(splitResultArr[1]); 
      displayResultAndList();
    } 
    else if (splitResultArr[0] == "" && splitResultArr.length === 3) {
      resultOfArr = (((-1)*parseFloat(splitResultArr[1])) - parseFloat(splitResultArr[2]))*(-1);
      displayResultAndList();
  } else if (splitResultArr[0] !== "") {
    resultOfArr = (parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]))*(-1);
    displayResultAndList();
    }
  }
  else {
      resultOfArr = parseFloat(resultOfArr.join("")) * (-1);
      displayResultAndList();
  }
};
const percentResult = () => {
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
      resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]))*100;
      displayResultAndList();
  } else if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
      resultOfArr = (parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]))*100;
      displayResultAndList();
  } else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = (parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]))*100;
      displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
    let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = (parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]))*100;
      displayResultAndList();
  } else {
      resultOfArr = parseFloat(resultOfArr.join("")) * 100;
      displayResultAndList();
  }
};
const calcResult = () => {
  if (resultOfArr.join("").includes("-")) {
    let splitResultArr = resultOfArr.join("").split("-");
    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
        resultOfArr = ((-1)*parseFloat(splitResultArr[1])) - parseFloat(splitResultArr[2]);
        displayResultAndList();
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
        resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
        displayResultAndList();
      };
  };
  if (resultOfArr.join("").includes("+")) {
    let splitResultArr = resultOfArr.join("").split("+");
      resultOfArr = parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]);
      displayResultAndList();
  } 
  else if (resultOfArr.join("").includes("*")) {
    let splitResultArr = resultOfArr.join("").split("*");
      resultOfArr = parseFloat(splitResultArr[0]) * parseFloat(splitResultArr[1]);
      displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
    let splitResultArr = resultOfArr.join("").split("/");
      resultOfArr = parseFloat(splitResultArr[0]) / parseFloat(splitResultArr[1]);
      displayResultAndList();
  }
};

buttonOne.addEventListener("click", () => attachNum("1"));
buttonTwo.addEventListener("click", () => attachNum("2"));
buttonThree.addEventListener("click", () => attachNum("3"));
buttonFour.addEventListener("click", () => attachNum("4"));
buttonFive.addEventListener("click", () => attachNum("5"));
buttonSix.addEventListener("click", () => attachNum("6"));
buttonSeven.addEventListener("click", () => attachNum("7"));
buttonEight.addEventListener("click", () => attachNum("8"));
buttonNine.addEventListener("click", () => attachNum("9"));
buttonZero.addEventListener("click", () => attachNum("0"));
buttonTimes.addEventListener("click", () => attachSymb("*"));
buttonMinus.addEventListener("click", () => attachSymb("-"));
buttonPlus.addEventListener("click", () => attachSymb("+"));
buttonDivide.addEventListener("click", () => attachSymb("/"));
buttonClear.addEventListener("click", clearDisplay);
buttonEquals.addEventListener("click", calcResult);
buttonDot.addEventListener("click", () => attachDot("."));
buttonNegPos.addEventListener("click", negPosResult);
buttonPercent.addEventListener("click", percentResult);