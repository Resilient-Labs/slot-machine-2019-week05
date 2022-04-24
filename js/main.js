/* assign each slot random number using math random and math ceil *5
conditionals that return lot images depending on what number =
if slot 1 is = slot 2 and slot 2 is = slot 3 and the user won we have to add to total amount
else (user lost input bet should be deducted from total amount
*/
const totalAmount = 1000
const spin = document.getElementById('spin')

spin.addEventListener('click', submitSpin)

console.log('total amount', totalAmount)
function getRandomNumber(){
    let randomNumber = Math.ceil(( Math.random() * 5))
    if (randomNumber <= 1){
      return 'slotimage1.png'
    }
    else if (randomNumber <= 2){
      return 'slotimage2.png'
    }
    else if (randomNumber <= 3){
      return 'slotimage3.png'
    }
    else if (randomNumber <= 4){
      return 'slotimage4.png'
    }
    else if (randomNumber <= 5){
      return 'slotimage5.png'
    }
}
function submitSpin(e){
  e.preventDefault()
  let betAmount = document.querySelector('.bet') 
  let betNumber = Number(betAmount.value)
  console.log('bet amount', betNumber)
   let slot1 = getRandomNumber()
   let slot2 = getRandomNumber()
   let slot3 = getRandomNumber()
   document.querySelector('.slotOne').src = slot1
   document.querySelector('.slotTwo').src = slot2
   document.querySelector('.slotThree').src = slot3
   if (slot1 === slot2 && slot1 === slot3){
     let total = (betNumber * 2) + totalAmount
     console.log('total if they won', total)
     document.querySelector('#displayCredits').innerText=total + ' ' + 'totalCredits'
   document.querySelector('.results').innerText='YOU WON!!!'
   }
   else {
    let total = totalAmount - betNumber
    console.log('total if they lost', total)
    document.querySelector('#displayCredits').innerText=total + ' ' + 'total credits'
     document.querySelector('.results').innerText='Sorry,You lost.'
   }
   betAmount.value=''
}