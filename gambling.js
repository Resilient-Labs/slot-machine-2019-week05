const slots = document.querySelector('#slots')
let total = document.querySelector('#total')
const outcome = document.querySelector('#outcome')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
let money = 1000


total.innerText = money
outcome.innerText = "Win Big!"

function risk(){
  return Math.ceil(Math.random() * 5)
}

function playSafe(){
  if(money <= 0 ) {
    outcome.innerText = "You no longer have any funds to play. Better luck next time"
    return
  }
  const slot1 = risk()
  const slot2 = risk()
  const slot3 = risk()
  if (slot1 === slot2 && slot2 === slot3){
    money = money + 50
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 5
    total.innerText = money
    outcome.innerText = 'Try Again!'
  }
  img1.src = `slot${slot1}.png`
  img2.src = `slot${slot2}.png`
  img3.src = `slot${slot3}.png`

}

function playReckless(){
  if(money <= 0) {
    outcome.innerText = "You no longer have any funds to play. Better luck next time"
    return
  }
  const slot1 = risk()
  const slot2 = risk()
  const slot3 = risk()
  if (slot1 === slot2 && slot2 === slot3){
    money = money + 500
    outcome.innerText = 'you win!'
    total.innerText = money
  } else {
    money -= 50
    total.innerText = money
    outcome.innerText = 'Try Again!'

  }
  img1.src = `slot${slot1}.png`
  img2.src = `slot${slot2}.png`
  img3.src = `slot${slot3}.png`
}

min.addEventListener('click', playSafe)
max.addEventListener('click', playReckless)
