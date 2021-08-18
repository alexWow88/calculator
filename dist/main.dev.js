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
var finalResult = [];

var attachNum = function attachNum(newNum) {
  var _resultOfArr, _listOfArr;

  (_resultOfArr = resultOfArr).push.apply(_resultOfArr, _toConsumableArray(newNum));

  (_listOfArr = listOfArr).push.apply(_listOfArr, _toConsumableArray(newNum));

  displayResult.innerHTML = resultOfArr.join("");
  displayList.innerHTML = listOfArr.join("");
  console.log(resultOfArr);
};

var attachDot = function attachDot(newNum) {
  var _resultOfArr2;

  (_resultOfArr2 = resultOfArr).push.apply(_resultOfArr2, _toConsumableArray(newNum));

  displayResult.innerHTML = resultOfArr.join("");
  displayList.innerHTML = resultOfArr.join("");
};

var attachSymb = function attachSymb(newSymb) {
  var _resultOfArr3, _listOfArr2;

  if (resultOfArr.join("").includes("+")) {
    var splitResultArr = resultOfArr.join("").split("+"); //for (let index = 0; index < splitResultArr.length; index++){

    resultOfArr = parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1]);
    displayResult.innerHTML = resultOfArr; //resultOfArr = String(resultOfArr);
    //console.log(resultOfArr);

    return resultOfArr; //}
  }

  ; // } else if (resultOfArr.join("").includes("-")) {
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
  // resultOfArr = resultOfArr.toString();

  console.log(resultOfArr);

  (_resultOfArr3 = resultOfArr).push.apply(_resultOfArr3, _toConsumableArray(newSymb));

  console.log(resultOfArr);

  (_listOfArr2 = listOfArr).push.apply(_listOfArr2, _toConsumableArray(newSymb));

  displayList.innerHTML = listOfArr.join("");
};

var clearDisplay = function clearDisplay() {
  resultOfArr = [];
  listOfArr = [];
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
};

var negPosResult = function negPosResult() {
  resultOfArr = resultOfArr * -1;
  listOfArr = resultOfArr;
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = listOfArr;
};

var percentResult = function percentResult() {
  console.log(resultOfArr);

  if (resultOfArr.join("").includes(".")) {
    resultOfArr = resultOfArr.join("") * 100;
    listOfArr = resultOfArr;
    displayResult.innerHTML = resultOfArr;
    displayList.innerHTML = listOfArr;
  } else {
    resultOfArr = resultOfArr * 100;
    listOfArr = resultOfArr;
    displayResult.innerHTML = resultOfArr;
    displayList.innerHTML = listOfArr;
  }
};

var calcResult = function calcResult() {
  if (resultOfArr.join("").includes("+")) {
    var splitResultArr = resultOfArr.join("").split("+");

    for (var index = 0; index < splitResultArr.length; index++) {
      resultOfArr = parseFloat(splitResultArr) + parseFloat(splitResultArr[index]);
      displayResult.innerHTML = resultOfArr;
      console.log(resultOfArr);
    }
  } else if (resultOfArr.join("").includes("-")) {
    var _splitResultArr = resultOfArr.join("").split("-");

    for (var _index = 0; _index < _splitResultArr.length; _index++) {
      var _finalResult = parseFloat(_splitResultArr) - parseFloat(_splitResultArr[_index]);

      displayResult.innerHTML = _finalResult;
    }
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr2 = resultOfArr.join("").split("*");

    for (var _index2 = 0; _index2 < _splitResultArr2.length; _index2++) {
      var _finalResult2 = parseFloat(_splitResultArr2) * parseFloat(_splitResultArr2[_index2]);

      displayResult.innerHTML = _finalResult2;
    }
  }
};

buttonOne.addEventListener("click", function () {
  attachNum("1");
});
buttonTwo.addEventListener("click", function () {
  attachNum("2");
});
buttonThree.addEventListener("click", function () {
  attachNum("3");
});
buttonFour.addEventListener("click", function () {
  attachNum("4");
});
buttonFive.addEventListener("click", function () {
  attachNum("5");
});
buttonSix.addEventListener("click", function () {
  attachNum("6");
});
buttonSeven.addEventListener("click", function () {
  attachNum("7");
});
buttonEight.addEventListener("click", function () {
  attachNum("8");
});
buttonNine.addEventListener("click", function () {
  attachNum("9");
});
buttonZero.addEventListener("click", function () {
  attachNum("0");
});
buttonTimes.addEventListener("click", function () {
  attachSymb("*");
});
buttonMinus.addEventListener("click", function () {
  attachSymb("-");
});
buttonPlus.addEventListener("click", function () {
  attachSymb("+");
});
buttonDivide.addEventListener("click", function () {
  attachSymb("/");
});
buttonClear.addEventListener("click", clearDisplay);
buttonEquals.addEventListener("click", calcResult);
buttonDot.addEventListener("click", function () {
  attachDot(".");
});
buttonNegPos.addEventListener("click", negPosResult);
buttonPercent.addEventListener("click", percentResult);