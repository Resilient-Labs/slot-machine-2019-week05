const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const bet5Button = document.getElementById('minBet')
const bet50Button = document.getElementById('maxBet')
const betAllButton = document.getElementById('allIn')
let bankTotal = 1000
let bigBank = document.getElementById('bigBank')
const message = document.getElementById('msg')
const bet5 = 5
const bet50 = 50


function randomNum () {
  return Math.floor(Math.random() * 4)
}

function minBet() {
  if(bankTotal - bet5 < 0) {
    message.innerText = 'You do not have enough for this bet. Go all in!'
    return
  } else if(bankTotal - bet5 === 0) {
    message.innerText = 'We do not accept hopes and dreams. Go home.'
    return
  }

  num1.innerText = randomNum()
  num2.innerText = randomNum()
  num3.innerText = randomNum()

  if(num1.innerText === num2.innerText && num2.innerText==num3.innerText){
    bankTotal= parseInt(bankTotal) + bet5
    bigBank.innerText = bankTotal
    message.innerText = 'Small Wins Lead to Big Wins! Keep Playing!'
  } else {
    bankTotal= parseInt(bankTotal) - bet5
    bigBank.innerText = bankTotal
    message.innerText = 'A Small Dent! Keep Playing!'

  }

}

function maxBet() {
  if(bankTotal - bet50 < 0) {
    message.innerText = 'You do not have enough for this bet. Go all in!'
    return
  } else if(bankTotal - bet50 === 0) {
    message.innerText = 'We do not accept hopes and dreams. Go home.'
    return
  }

  num1.innerText = randomNum()
  num2.innerText = randomNum()
  num3.innerText = randomNum()

  if(num1.innerText === num2.innerText && num2.innerText==num3.innerText){
    bankTotal= parseInt(bankTotal) + bet50
    bigBank.innerText = bankTotal
    message.innerText = 'Let Me Borrow A Dollar!'
  } else {
    bankTotal= parseInt(bankTotal) - bet50
    bigBank.innerText = bankTotal
    message.innerText = 'No Guts, No Glory! Keep Playing Playa!'

  }

}

function allInBet() {
  if(bankTotal  === 0) {
    message.innerText = 'Go Home. You are drunk.'
    return
  }

  num1.innerText = randomNum()
  num2.innerText = randomNum()
  num3.innerText = randomNum()

  if(num1.innerText === num2.innerText && num2.innerText==num3.innerText){
    bankTotal = parseInt(bankTotal) + (5 * bankTotal)
    bigBank.innerText = bankTotal
    message.innerText = 'SHEEEEEEEEEEEEEEEESH'
  } else {
    bankTotal = bankTotal - bankTotal
    bigBank.innerText = bankTotal
    message.innerText = 'Love the heart you showed. Bye bye.'

  }

}

bet5Button.addEventListener('click', minBet)
bet50Button.addEventListener('click', maxBet)
betAllButton.addEventListener('click', allInBet)
