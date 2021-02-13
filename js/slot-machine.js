array = ['cake', 'cupcake', 'icecream', 'cheesecake', 'pie']

// state. what does the computer need to keep track of
// VARIABLES
// let money = 1000

let money = 1000



// user input. what does the computer need to listen for?
// EVENT LISTENERS
$(`#play`).on(`click`, play)

function play() {
  payMoney()
  writeMoney()
  randomizePictures()
  checkIfMatching()
}

// actions. what does the computer need to be able to do?
// FUNCTIONS
function randomizePictures() {
  // this randomizes the array as numbers and gets a random element
  randomItem1 = array[Math.floor(Math.random() * array.length)]
  $('#slot1').html(`<img src="img/${randomItem1}.png" alt="${randomItem1}">`)
  randomItem2 = array[Math.floor(Math.random() * array.length)]
  $('#slot2').html(`<img src="img/${randomItem2}.png" alt="${randomItem1}">`)
  randomItem3 = array[Math.floor(Math.random() * array.length)]
  $('#slot3').html(`<img src="img/${randomItem3}.png" alt="${randomItem1}">`)
}

function checkIfMatching() {
  if(randomItem1===randomItem2 && randomItem2===randomItem3){
    winMoneyX10()
  }
}

function payMoney() {
  payment = $('#bet-money')[0].value;
  if(payment > money){
    setTimeout(() => alert('Your wallet has been emptied. Come back later!'), 10)
  } else {
    money = money - payment
  }
}

function writeMoney() {
  $('#credits')[0].innerText = money
}

function winMoneyX10() {
  money = money + (payment*10)
  writeMoney()
  setTimeout(() => alert('You\'re rich!!'), 10)
}
