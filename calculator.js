
var numbers = document.querySelectorAll(".number");
var textBox = document.getElementById("textbox");
var operatorButtons = document.querySelectorAll(".operator");
var equalsButton = document.querySelector(".equals");
var clearAllButton = document.querySelector(".clearAll");
var clearOneButton = document.querySelector(".clearOne");
var werte = ["1,2,3,4,5,6,7,8,9,0,+,-,*,/,=,(,)"];

var MyCalculator = {};

MyCalculator = {
  Display:function (x) {
    document.querySelectorAll('[name="txt"]')[0].value=document.querySelectorAll('[name="txt"]')[0].value+x;
  },

  Calculate:function () {
    var r = 0;
    r = eval(document.querySelectorAll('[name="txt"]')[0].value);
    document.querySelectorAll('[name="txt"]')[0].value = r;
  },
CleaA:function () {
    document.querySelectorAll('[name="txt"]')[0].value = '';
  },
CleaO:function () {
    document.querySelectorAll('[name="txt"]')[0].value = document.querySelectorAll('[name="txt"]')[0].value.slice(0, document.querySelectorAll('[name="txt"]')[0].value.length - 1);
  }
};
