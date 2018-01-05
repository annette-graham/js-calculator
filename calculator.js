
//
//

document.addEventListener('DOMContentLoaded', start)

function start() {
  addEventListeners()
}


addEventListeners = () => {
  var buttons = document.getElementsByClassName('buttons');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButtons)
  }
};

clickButtons = (event) => {
  let buttonValue = event.target.value;
  console.log('button value ' + buttonValue);
  document.getElementById("display").innerText = buttonValue;

  // declare NUMS which are valid 0-9
  // declare valid operators that are valid

  // check if buttonValue is included in the NUMS string
  // if so - call the numberPressed function
  // if not, continue
  // check if buttonValue is included in the OPS string
  // if so, call the operatorPressed function
  // check if buttonValue is AC or whatever, if so, reset all variables and clear the displayField

  // case - switch

}

// create numberPressed function (numberval)
// this will update the operand1 value
// update displayfield
// document.getElementById("display").innerText = numberval;
// 4 - 0 
// displayField = input += num


// create operator function (operatorval)
// this will check what operator it is, and react accordingly -
// if plus symbol - set var operator to be '+' and clear the displayField 
// if equals symbol - check the operator - add operand1 and operand 2 together if it is a plus symbol etc
// when dividing (operatorval == '/') - check that operand1 AND/OR operand2 are not 0, (you can not divide by zero otherwise the program will throw an exception) - so display '/zero error'
// will have switch statement here since the logic changes for each case
// document.getElementById("display").innerText = operatorval;


var operand1 = '3';
var operand2 = '9';
var operator = '+';
var result = '';
var input = '';

// var numbers = '0123456789'
// var operators = '+-*/'
// var total = 0;

// const NUMS = "0123456789"
// const OPS = "+-/*"
// // var eq = []
// var total = ''


// addEventListeners = () => {
//   var button =  document.getElementsByClassName('buttons')
//   for (var i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', function(e) {values(e.target.value)}, false)
//   }
// }

//  values = (input) => {
//   if (input === "AC") {
//     document.getElementById("display").innerText = total = '0';
//   }
//   if (NUMS.includes(input)) {
//     total += input
//     document.getElementById("display").innerText = total
//   }
//   if (OPS.includes(input)) {
//     total += input
//     document.getElementById("display").innerText = total

//   }
//   if (input === "=") {
//     document.getElementById("display").innerText = eval(total)
//   }
// }
