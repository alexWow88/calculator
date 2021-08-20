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

  displayList.innerHTML = listOfArr.join("");
  console.log(resultOfArr);
};

var attachDot = function attachDot(newNum) {
  var _resultOfArr2, _listOfArr2;

  (_resultOfArr2 = resultOfArr).push.apply(_resultOfArr2, _toConsumableArray(newNum));

  (_listOfArr2 = listOfArr).push.apply(_listOfArr2, _toConsumableArray(newNum));

  displayList.innerHTML = resultOfArr.join("");
  console.log(resultOfArr);
};

var attachSymb = function attachSymb(newSymb) {
  var _resultOfArr3, _listOfArr3;

  if (resultOfArr.join("").includes("-")) {
    console.log(resultOfArr);
    var splitResultArr = resultOfArr.join("").split("-");
    console.log(splitResultArr);

    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
      console.log(resultOfArr);
      resultOfArr = -1 * parseFloat(splitResultArr[1]) - parseFloat(splitResultArr[2]);
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
    }

    ;
  }

  ;

  if (resultOfArr.join("").includes("+")) {
    var _splitResultArr = resultOfArr.join("").split("+");

    resultOfArr = parseFloat(_splitResultArr[0]) + parseFloat(_splitResultArr[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    resultOfArr = resultOfArr.split("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
    var _splitResultArr2 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr2[0]) * parseFloat(_splitResultArr2[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    resultOfArr = resultOfArr.split("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    var _splitResultArr3 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr3[0]) / parseFloat(_splitResultArr3[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    resultOfArr = resultOfArr.split("");
    console.log(resultOfArr);
  }

  console.log(resultOfArr);

  (_resultOfArr3 = resultOfArr).push.apply(_resultOfArr3, _toConsumableArray(newSymb));

  console.log(resultOfArr);

  (_listOfArr3 = listOfArr).push.apply(_listOfArr3, _toConsumableArray(newSymb));

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
    var _listOfArr4;

    var splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1])) * -1;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr4 = listOfArr).push.apply(_listOfArr4, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
    var _listOfArr5;

    var _splitResultArr4 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr4[0]) * parseFloat(_splitResultArr4[1]) * -1;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr5 = listOfArr).push.apply(_listOfArr5, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    var _listOfArr6;

    var _splitResultArr5 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr5[0]) / parseFloat(_splitResultArr5[1]) * -1;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr6 = listOfArr).push.apply(_listOfArr6, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("-")) {
    console.log(resultOfArr);

    var _splitResultArr6 = resultOfArr.join("").split("-");

    console.log(_splitResultArr6);

    if (_splitResultArr6[0] == "" && _splitResultArr6.length === 2 && !resultOfArr.join("").includes("+") && !resultOfArr.join("").includes("*") && !resultOfArr.join("").includes("/")) {
      var _listOfArr7;

      resultOfArr = parseFloat(_splitResultArr6[1]);
      console.log(resultOfArr);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];

      (_listOfArr7 = listOfArr).push.apply(_listOfArr7, _toConsumableArray(resultOfArr));

      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
    } else if (_splitResultArr6[0] == "" && _splitResultArr6.length === 3) {
      var _listOfArr8;

      console.log(_splitResultArr6);
      resultOfArr = (-1 * parseFloat(_splitResultArr6[1]) - parseFloat(_splitResultArr6[2])) * -1;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];

      (_listOfArr8 = listOfArr).push.apply(_listOfArr8, _toConsumableArray(resultOfArr));

      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
    } else if (_splitResultArr6[0] !== "") {
      var _listOfArr9;

      console.log(_splitResultArr6);
      resultOfArr = (parseFloat(_splitResultArr6[0]) - parseFloat(_splitResultArr6[1])) * -1;
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];

      (_listOfArr9 = listOfArr).push.apply(_listOfArr9, _toConsumableArray(resultOfArr));

      resultOfArr = resultOfArr.split("");
      displayList.innerHTML = listOfArr.join("");
      console.log(resultOfArr);
    }
  } else {
    var _listOfArr10;

    resultOfArr = parseFloat(resultOfArr.join("")) * -1;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr10 = listOfArr).push.apply(_listOfArr10, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  }
};

var percentResult = function percentResult() {
  if (resultOfArr.join("").includes("+")) {
    var _listOfArr11;

    var splitResultArr = resultOfArr.join("").split("+");
    resultOfArr = (parseFloat(splitResultArr[0]) + parseFloat(splitResultArr[1])) * 100;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr11 = listOfArr).push.apply(_listOfArr11, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("-")) {
    var _listOfArr12;

    var _splitResultArr7 = resultOfArr.join("").split("-");

    resultOfArr = (parseFloat(_splitResultArr7[0]) - parseFloat(_splitResultArr7[1])) * 100;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr12 = listOfArr).push.apply(_listOfArr12, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
    var _listOfArr13;

    var _splitResultArr8 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr8[0]) * parseFloat(_splitResultArr8[1]) * 100;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr13 = listOfArr).push.apply(_listOfArr13, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    var _listOfArr14;

    var _splitResultArr9 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr9[0]) / parseFloat(_splitResultArr9[1]) * 100;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr14 = listOfArr).push.apply(_listOfArr14, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else {
    var _listOfArr15;

    resultOfArr = parseFloat(resultOfArr.join("")) * 100;
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr15 = listOfArr).push.apply(_listOfArr15, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  }
};

var calcResult = function calcResult() {
  if (resultOfArr.join("").includes("-")) {
    console.log(resultOfArr);
    var splitResultArr = resultOfArr.join("").split("-");
    console.log(splitResultArr);

    if (resultOfArr[0] == "-" && splitResultArr.length === 3) {
      var _listOfArr16;

      console.log(resultOfArr);
      resultOfArr = -1 * parseFloat(splitResultArr[1]) - parseFloat(splitResultArr[2]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];

      (_listOfArr16 = listOfArr).push.apply(_listOfArr16, _toConsumableArray(resultOfArr));

      console.log(listOfArr);
      displayList.innerHTML = listOfArr.join("");
      resultOfArr = resultOfArr.split("");
      console.log(resultOfArr);
    } else if (resultOfArr[0] !== "-" && splitResultArr.length == 2) {
      var _listOfArr17;

      console.log(resultOfArr);
      resultOfArr = parseFloat(splitResultArr[0]) - parseFloat(splitResultArr[1]);
      displayResult.innerHTML = resultOfArr;
      resultOfArr = String(resultOfArr);
      listOfArr = [];

      (_listOfArr17 = listOfArr).push.apply(_listOfArr17, _toConsumableArray(resultOfArr));

      console.log(listOfArr);
      displayList.innerHTML = listOfArr.join("");
      resultOfArr = resultOfArr.split("");
      console.log(resultOfArr);
    }

    ;
  }

  ;

  if (resultOfArr.join("").includes("+")) {
    var _listOfArr18;

    var _splitResultArr10 = resultOfArr.join("").split("+");

    resultOfArr = parseFloat(_splitResultArr10[0]) + parseFloat(_splitResultArr10[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr18 = listOfArr).push.apply(_listOfArr18, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("*")) {
    var _listOfArr19;

    var _splitResultArr11 = resultOfArr.join("").split("*");

    resultOfArr = parseFloat(_splitResultArr11[0]) * parseFloat(_splitResultArr11[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr19 = listOfArr).push.apply(_listOfArr19, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
  } else if (resultOfArr.join("").includes("/")) {
    var _listOfArr20;

    var _splitResultArr12 = resultOfArr.join("").split("/");

    resultOfArr = parseFloat(_splitResultArr12[0]) / parseFloat(_splitResultArr12[1]);
    displayResult.innerHTML = resultOfArr;
    resultOfArr = String(resultOfArr);
    listOfArr = [];

    (_listOfArr20 = listOfArr).push.apply(_listOfArr20, _toConsumableArray(resultOfArr));

    resultOfArr = resultOfArr.split("");
    displayList.innerHTML = listOfArr.join("");
    console.log(resultOfArr);
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