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

const inputOne = document.querySelector('#doorone')
const inputTwo = document.querySelector('#doortwo')
const inputThree = document.querySelector('#doorthree')
const result = document.querySelector('#status')
const moneyAmount = document.querySelector('span')


document.querySelector("#spinner").addEventListener("click", spin50);
document.querySelector("#spinnerTwo").addEventListener("click", spin100);

function getRandom() {
  return Math.floor(Math.random() * 5) + 1

}

function spin50() {
  let n1 = getRandom();
  let n2 = getRandom();
  let n3 = getRandom();

  inputOne.innerText = n1
  inputTwo.innerText = n2
  inputThree.innerText = n3


  if (n1 === n2 && n1 === n3) {
    
    document.querySelector('#status').innerText = "OMG, YOU WON +15"
    moneyAmount.innerText = Number(moneyAmount.innerText) + 15

  } else {
   
    document.querySelector('#status').innerText = "OH NO, YOU LOST -15"
    moneyAmount.innerText = Number(moneyAmount.innerText) - 15


  }
}

function spin100() {
  let n1 = getRandom();
  let n2 = getRandom();
  let n3 = getRandom();

  inputOne.innerText = n1
  inputTwo.innerText = n2
  inputThree.innerText = n3

  if (n1 === n2 && n1 === n3) {
    document.querySelector('#status').innerText = "OMG, YOU WON +30"
    moneyAmount.innerText = Number(moneyAmount.innerText) + 30

  } else {
  document.querySelector('#status').innerText = 'OH NO, YOU LOST -30'
   moneyAmount.innerText = Number(moneyAmount.innerText) - 30

  }
}






