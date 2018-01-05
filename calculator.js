
//
//

document.addEventListener('DOMContentLoaded', start)

function start() {
  addEventListeners()
}

//
// addEventListeners = () => {
//   var button = document.getElementByClassName('buttons');
//   for (var i = 0, i = < button.length; i++) {
//     button[i].addEventListener('click', clickButtons)
//   }
// };

// var numbers = '0123456789'
// var operators = '+-*/'
// var total = 0;
//
// if operator

const NUMS = "0123456789"
const OPS = "+-/*"
// var eq = []
var total = ''


addEventListeners = () => {
  var button =  document.getElementsByClassName('buttons')
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(e) {values(e.target.value)}, false)
  }
}

 values = (input) => {
  if (input === "AC") {
    document.getElementById("display").innerText = total = '0';
  }
  if (NUMS.includes(input)) {
    total += input
    document.getElementById("display").innerText = total
  }
  if (OPS.includes(input)) {
    total += input
    document.getElementById("display").innerText = total

  }
  if (input === "=") {
    document.getElementById("display").innerText = eval(total)
  }
}
