/*
create a button in to click a random number
make a function to get 5 numbers 
return those numbers 
create a function with three numbers
make 5 bindings in a document queryselector and targeting the ids for three doors 
get a random number everytime you spin 
make a function to get a random number
make create a variable for the span amount of money
make a boolean to to get possible values between numbers
if number match you get money
else you lose money 

*/
let images = [
  '<img src="img/cuteShark.webp" ">',
  '<img src="img/hammerShark.png" >',
  '<img src="img/shark.png">',
  '<img src="img/whaleShark.png">'
];

const inputOne = document.querySelector('#doorone');
const inputTwo = document.querySelector('#doortwo');
const inputThree = document.querySelector('#doorthree');
const result = document.querySelector('#status');
const moneyAmount = document.querySelector('#moneyAmount');

document.querySelector("#spinner").addEventListener("click", spin50);
document.querySelector("#spinnerTwo").addEventListener("click", spin100);

function getRandom() {
  return Math.floor(Math.random() * images.length);
}

function spin50() {
  let n1 = getRandom();
  let n2 = getRandom();
  let n3 = getRandom();

  inputOne.innerHTML = images[n1];
  inputTwo.innerHTML = images[n2];
  inputThree.innerHTML = images[n3];

  if (n1 === n2 && n1 === n3) {
    result.innerText = "OMG, YOU WON +15";
    moneyAmount.innerText = Number(moneyAmount.innerText) + 15;
  } else {
    result.innerText = "OH NO, YOU LOST -15";
    moneyAmount.innerText = Number(moneyAmount.innerText) - 15;
  }
}

function spin100() {
  let n1 = getRandom();
  let n2 = getRandom();
  let n3 = getRandom();

  inputOne.innerHTML = images[n1];
  inputTwo.innerHTML = images[n2];
  inputThree.innerHTML = images[n3];

  if (n1 === n2 && n1 === n3) {
    result.innerText = "OMG, YOU WON +30";
    moneyAmount.innerText = Number(moneyAmount.innerText) + 30;
  } else {
    result.innerText = "OH NO, YOU LOST -30";
    moneyAmount.innerText = Number(moneyAmount.innerText) - 30;
  }
}



