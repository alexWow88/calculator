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
var joinOfArr = [];
var calcNum = [];

var attachNum = function attachNum(calcNum) {
  resultOfArr.push.apply(resultOfArr, _toConsumableArray(calcNum));
  displayResult.innerHTML = resultOfArr;
  displayList.innerHTML = resultOfArr.join("");
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