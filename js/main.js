//you need buttons for min and max bet

let totalMoney = 5000
const betFiveBtn = document.querySelector('#betFive')
const betTwentyFiveBtn = document.querySelector('#betTwentyFive')
const initialMoney = document.querySelector('#money')
const winState = document.querySelector('h3')

//images
// make an empty array contains img paths

// you need a place to record money gained and spent
// you need 3 sections with 5 randomly generated numbers
// arrow function const 'variable' = () => {body}
//Math.ceil? MATH.random *5
//subtract in function to remove the specified amount from total money|


function getRandomNumber() {


  const randomNumber = Math.ceil(Math.random() * 5)
  if(randomNumber === 1){
    return 1
  }else if(randomNumber === 2){
    return 2
  }else if(randomNumber === 3){
    return 3
  }else if(randomNumber === 4){
    return 4
  }else if(randomNumber === 5){
    return 5
  }

}

function outOfMoney(){
  if(totalMoney <= 0){
    alert('You have been tossed out of the Golden Saucer. Bring more money next time...')
    window.close()
  }
}

function betMin() {
 let firstReel = getRandomNumber()
 let secondReel = getRandomNumber()
 let thirdReel = getRandomNumber()
 
  if(firstReel === secondReel && firstReel === thirdReel){
    initialMoney.innertext = totalMoney += 50 
    winState.innerText = 'WE HAVE A WINNER!'
  }else{
    initialMoney.innerText = totalMoney -= 5
    winState.innerText = 'Keep on spinning...'
  }
 
  const one = document.querySelector('#reel1').innerText = firstReel
  const two = document.querySelector('#reel2').innerText = secondReel
  const three = document.querySelector('#reel3').innerText =thirdReel

  outOfMoney()

}

function betMax() {
  let firstReel = getRandomNumber()
  let secondReel = getRandomNumber()
  let thirdReel = getRandomNumber()

  if(firstReel === secondReel && firstReel === thirdReel){
    initialMoney.innertext = totalMoney += 1000 
    winState.innerText = 'WE HAVE A WINNER!'
  }else{
    initialMoney.innerText = totalMoney -= 100
     winState.innerText = 'Keep on spinning...'
  }
  const one = document.querySelector('#reel1').innerText = firstReel
  const two = document.querySelector('#reel2').innerText = secondReel
  const three = document.querySelector('#reel3').innerText =thirdReel

  outOfMoney()
}





betFiveBtn.addEventListener('click', betMin)
betTwentyFiveBtn.addEventListener('click', betMax)
