const firstInput = document.querySelector('#firstBox')
const secondInput = document.querySelector('#secondBox')
const thirdInput = document.querySelector('#thirdBox')
const submitBtn10 = document.querySelector('#submit10')
const submitBtn25 = document.querySelector('#submit25')
const result = document.querySelector('#message')
const spanAmount = document.querySelector('span')

submitBtn10.addEventListener('click', spin10)
submitBtn25.addEventListener('click', spin25)

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1
}

function spin10() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let num3 = getRandomNumber();

  firstInput.innerText = num1 
  secondInput.innerText = num2
  thirdInput.innerText = num3

  if(num1 === num2 && num1 === num3) {
    winningMessage();
    spanAmount.innerText = Number(spanAmount.innerText) + 10

  }else {
    losingMessage()
    spanAmount.innerText = Number(spanAmount.innerText) - 10
  }
}
function spin25() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let num3 = getRandomNumber();

  firstInput.innerText = num1 
  secondInput.innerText = num2
  thirdInput.innerText = num3

  if(num1 === num2 && num1 === num3) {
    winningMessage();
    spanAmount.innerText = Number(spanAmount.innerText)+ 25

  }else {
    losingMessage()
    spanAmount.innerText = Number(spanAmount.innerText)- 25
  }
}

function winningMessage() {
  result.innerText = "Hot Doggy! YOU WON!!"
}

function losingMessage() {
  result.innerText = "You lose"
}






