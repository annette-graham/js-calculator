document.addEventListener('DOMContentLoaded', start)

function start() {
  addEventListeners()
};

function addEventListeners() {
  var buttons =  document.getElementsByClassName('buttons');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {buttonPressed(e.target.value)}, false);
  }
};

//global variables
var numButtons = '.0123456789';
var oppButtons = '+-/*';
var precent = '%';
var total = '';

function buttonPressed(input) {
  if (input === 'AC') {
    document.getElementById('result').innerText = total = '';
  };
  if (numButtons.includes(input)) {
    total += input
    document.getElementById('result').innerText = total;
  };
  if (oppButtons.includes(input)) {
    total += input
    document.getElementById('result').innerText = total;
  };
  if (input === '=') {
    document.getElementById('result').innerText = eval(total);
  };
  if (input === '%'){
    document.getElementById('result').innerText = eval(total/100);
  };
};
