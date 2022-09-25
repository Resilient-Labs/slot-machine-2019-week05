// worked with Will, Rio and Hassan. 

const imagesArray = ['simsone.png', 'simstwo.png', 'simsthree.png', 'simsfour.png', 'simsfive.png']
firstImage = document.querySelector('#simsone')
secondImage = document.querySelector('#simstwo')
thirdImage = document.querySelector('#simsthree')

let totalSimoleon = 1000
let maxbet = 50
let minbet = 25 

document.querySelector('#minbet').addEventListener('click', currentBet)
document.querySelector('#maxbet').addEventListener('click', currentBet)

document.querySelector('#amount').innerText = totalSimoleon

// creates bet function 
function currentBet(event){
   lost = Number(event.target.value)

   if (totalSimoleon<lost) {
      alert('Insufficent Funds!')
      document.querySelector('#seeTotal').innerText = ""
   } else {
      totalSimoleon-=lost
      document.querySelector('#wallet').innerText = totalSimoleon
      cyclePhotos()
   }
}

// this creates the random number to assign to each picture 
function randomNumber(){
   let oneThroughFive = Math.floor(Math.random()*5)
   return oneThroughFive
}

function cyclePhotos(){
   let firstNumber = randomNumber()
   let secondNumber = randomNumber()
   let thirdNumber = randomNumber()

   firstImage.src = imagesArray[firstNumber]
   secondImage.src = imagesArray[secondNumber]
   thirdImage.src = imagesArray[thirdNumber]

   winner(firstNumber, secondNumber, thirdNumber)
}

function winner(firstNumber,secondNumber, thirdNumber){
   if (firstNumber === secondNumber && secondNumber === thirdNumber) {
      document.querySelector('#seeTotal').innerText = 'You won!'
      addWinnings()
   } else {
      document.querySelector('#seeTotal').innerText = 'You lost!'
   } 

}

function addWinnings(){
   totalSimoleon += maxbet
   document.querySelector('#amount').innerText = totalSimoleon
   
}




document.querySelector('.resetGame').addEventListener('click', resetPage) 

function resetPage(){
    window.location.reload()
}

// - Five things.
// - Slot machine 

// - Ends when you run out of mine. 
// - Play again? Resets the game. 
// - Assuming someone has to display, randomize the possible options available. 
// - How do ‘function called random’ 
// - Randomizes the icons - 
// - Check if it’s match, if all three images match. 
// - If it a match, you win the amount you bid, increase the total amount in your pool. 
// - If its not a match, you will lose and you will take the amount you bid away from your pool. 
// - Check again. 
// - When you run out of money, you lose fully, and you can reset the game. 
//     - End Game: Cash out 

// Add event listeners (for bets) 

// 25 or 50. 

// Personal Wallet: 250. 


// let buttons = document.getElementsByClassName("bet")
// for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', startGame)
// }

// let slots = document.getElementsByClassName('slots')
// let randomNums = [1,2,3,4,5] 
// // ^ place images inside of array 
// style.backgroundImage="url()"



// let firstNumber = randomNums
// let secondNumber = randomNums
// let thirdNumber = randomNums

// simsone.src=randomNums[firstNumber]
// simstwo.src=randomNums[secondNumber]
// simsthree.src=randomNums[thirdNumber]

// function startGame(e){
//  let money = document.querySelector('.money')
//  let update = document.querySelector('.update')
//  if(money.innerText-e.target.innerText < 0){
//     update.innerText = 'Insufficent Funds!'
//     return
//  } else {
//     for (let i = 0; i < slots.length; i++){
//         slots[i].innerText = randomNums[Math.floor(Math.random()*5)]
//     } 
//  }
//  if(slots[0].innerText === slots[1].innerText && slots[1].innerText === slots[2].innerText){
//     update.innerText = 'You won!'
//     money.innerText = e.target.innerText * 2
//  } else {
//     update.innerText = 'You lost!'
//     money.innerText = money.innerText-e.target.innerText
//  }
// }

