"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var displayList = document.querySelector(".display-list");
var displayResult = document.querySelector(".display-result");
var buttonOne = document.getElementById("button-1");
var buttonTwo = document.getElementById("button-2");
var buttonThree = document.getElementById("button-3");
var buttonFour = document.getElementById("button-4");
var buttonFive = document.getElementById("button-5");
var buttonSix = document.getElementById("button-6");
var buttonSeven = document.getElementById("button-7");
var buttonEight = document.getElementById("button-8");
var buttonNine = document.getElementById("button-9");
var buttonZero = document.getElementById("button-0");
var buttonDot = document.getElementById("button-dot");
var buttonEquals = document.getElementById("button-equals");
var buttonPlus = document.getElementById("button-plus");
var buttonMinus = document.getElementById("button-minus");
var buttonTimes = document.getElementById("button-times");
var buttonDivide = document.getElementById("button-divide");
var buttonNegPos = document.getElementById("button-negPos");
var buttonClear = document.getElementById("button-clear");
var buttonPercent = document.getElementById("button-percent");
var resultOfArr = [];
var listOfArr = [];
var newNum = [];
var newSymb = [];

var attachNum = function attachNum(newNum) {
  var _resultOfArr, _listOfArr;

  (_resultOfArr = resultOfArr).push.apply(_resultOfArr, _toConsumableArray(newNum));

  (_listOfArr = listOfArr).push.apply(_listOfArr, _toConsumableArray(newNum));

  displayList.innerHTML = listOfArr.join("");
};

var attachDot = function attachDot(newNum) {
  var _resultOfArr2, _listOfArr2;

  (_resultOfArr2 = resultOfArr).push.apply(_resultOfArr2, _toConsumableArray(newNum));

  (_listOfArr2 = listOfArr).push.apply(_listOfArr2, _toConsumableArray(newNum));

  displayList.innerHTML = resultOfArr.join("");
};

var displayResultAndList = function displayResultAndList() {
  var _listOfArr3;

  displayResult.innerHTML = resultOfArr;
  resultOfArr = String(resultOfArr);
  listOfArr = [];

  (_listOfArr3 = listOfArr).push.apply(_listOfArr3, _toConsumableArray(resultOfArr));

  resultOfArr = resultOfArr.split("");
  displayList.innerHTML = listOfArr.join("");
};

var displayResultAndSplitResultsArr = function displayResultAndSplitResultsArr() {
  displayResult.innerHTML = resultOfArr;
  resultOfArr = String(resultOfArr);
  resultOfArr = resultOfArr.split("");
};

var attachSymb = function attachSymb(newSymb) {
  var _resultOfArr3, _listOfArr4;

  if (resultOfArr.join("").includes("-")) {
    var splitResultArr = resultOfArr.join("").split("-");

    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
      resultOfArr = -1 * parseFloat(splitResultArr[1]) - parseFloat(splitResultArr[2]);
      displayResultAndSplitResultsArr();
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
      resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
      displayResultAndSplitResultsArr();
    }

    ;
  }

  ;

  if (resultOfArr.join("").includes("+")) {
    var _splitResultArr = resultOfArr.join("").split("+");

    resultOfArr = parseFloat(_splitResultArr[0]) + parseFloat(_splitResultArr[1]);
    displayResultAndSplitResultsArr();
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr2 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr2[0]) * parseFloat(_splitResultArr2[1]);
    displayResultAndSplitResultsArr();
  } else if (resultOfArr.join("").includes("/")) {
    var _splitResultArr3 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr3[0]) / parseFloat(_splitResultArr3[1]);
    displayResultAndSplitResultsArr();
  }

  (_resultOfArr3 = resultOfArr).push.apply(_resultOfArr3, _toConsumableArray(newSymb));

  (_listOfArr4 = listOfArr).push.apply(_listOfArr4, _toConsumableArray(newSymb));

  displayList.innerHTML = listOfArr.join("");
};

var clearDisplay = function clearDisplay() {
  resultOfArr = [];
  listOfArr = [];
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
};

var negPosResult = function negPosResult() {
  if (resultOfArr.join("").includes("+")) {
    var splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1])) * -1;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr4 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr4[0]) * parseFloat(_splitResultArr4[1]) * -1;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
    var _splitResultArr5 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr5[0]) / parseFloat(_splitResultArr5[1]) * -1;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("-")) {
    var _splitResultArr6 = resultOfArr.join("").split("-");

    if (_splitResultArr6[0] == "" && _splitResultArr6.length === 2 && !resultOfArr.join("").includes("+") && !resultOfArr.join("").includes("*") && !resultOfArr.join("").includes("/")) {
      resultOfArr = parseFloat(_splitResultArr6[1]);
      displayResultAndList();
    } else if (_splitResultArr6[0] == "" && _splitResultArr6.length === 3) {
      resultOfArr = (-1 * parseFloat(_splitResultArr6[1]) - parseFloat(_splitResultArr6[2])) * -1;
      displayResultAndList();
    } else if (_splitResultArr6[0] !== "") {
      resultOfArr = (parseFloat(_splitResultArr6[0]) - parseFloat(_splitResultArr6[1])) * -1;
      displayResultAndList();
    }
  } else {
    resultOfArr = parseFloat(resultOfArr.join("")) * -1;
    displayResultAndList();
  }
};

var percentResult = function percentResult() {
  if (resultOfArr.join("").includes("+")) {
    var splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1])) * 100;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("-")) {
    var _splitResultArr7 = resultOfArr.join("").split("-");

    resultOfArr = (parseFloat(_splitResultArr7[0]) - parseFloat(_splitResultArr7[1])) * 100;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr8 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr8[0]) * parseFloat(_splitResultArr8[1]) * 100;
    displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
    var _splitResultArr9 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr9[0]) / parseFloat(_splitResultArr9[1]) * 100;
    displayResultAndList();
  } else {
    resultOfArr = parseFloat(resultOfArr.join("")) * 100;
    displayResultAndList();
  }
};

var calcResult = function calcResult() {
  if (resultOfArr.join("").includes("-")) {
    var splitResultArr = resultOfArr.join("").split("-");

    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
      resultOfArr = -1 * parseFloat(splitResultArr[1]) - parseFloat(splitResultArr[2]);
      displayResultAndList();
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
      resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
      displayResultAndList();
    }

    ;
  }

  ;

  if (resultOfArr.join("").includes("+")) {
    var _splitResultArr10 = resultOfArr.join("").split("+");

    resultOfArr = parseFloat(_splitResultArr10[0]) + parseFloat(_splitResultArr10[1]);
    displayResultAndList();
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr11 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr11[0]) * parseFloat(_splitResultArr11[1]);
    displayResultAndList();
  } else if (resultOfArr.join("").includes("/")) {
    var _splitResultArr12 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr12[0]) / parseFloat(_splitResultArr12[1]);
    displayResultAndList();
  }
};

buttonOne.addEventListener("click", function () {
  return attachNum("1");
});
buttonTwo.addEventListener("click", function () {
  return attachNum("2");
});
buttonThree.addEventListener("click", function () {
  return attachNum("3");
});
buttonFour.addEventListener("click", function () {
  return attachNum("4");
});
buttonFive.addEventListener("click", function () {
  return attachNum("5");
});
buttonSix.addEventListener("click", function () {
  return attachNum("6");
});
buttonSeven.addEventListener("click", function () {
  return attachNum("7");
});
buttonEight.addEventListener("click", function () {
  return attachNum("8");
});
buttonNine.addEventListener("click", function () {
  return attachNum("9");
});
buttonZero.addEventListener("click", function () {
  return attachNum("0");
});
buttonTimes.addEventListener("click", function () {
  return attachSymb("*");
});
buttonMinus.addEventListener("click", function () {
  return attachSymb("-");
});
buttonPlus.addEventListener("click", function () {
  return attachSymb("+");
});
buttonDivide.addEventListener("click", function () {
  return attachSymb("/");
});
buttonClear.addEventListener("click", clearDisplay);
buttonEquals.addEventListener("click", calcResult);
buttonDot.addEventListener("click", function () {
  return attachDot(".");
});
buttonNegPos.addEventListener("click", negPosResult);
buttonPercent.addEventListener("click", percentResult);