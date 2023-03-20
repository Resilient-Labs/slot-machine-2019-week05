
const slotOne = document.querySelector('#reel1')
const slotTwo = document.querySelector('#reel2')
const slotThree = document.querySelector('#reel3')
let amount =  document.querySelector('#amount')

// Money bank
let moneyBankYo = 5000
// Prize 
let prize = 50000
// minBet
let minBet = 20
//maxBet
let maxBet = 100
// lost
let lost = -60

const slots = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.jpg', 'img/5.png']



document.querySelector('#minButton').addEventListener('click', pullTheLever)
document.querySelector('#maxButton').addEventListener('click', pullTheLever)



amount.innerText = moneyBankYo

function pullTheLever(event) {
    let negativeMoney = Number(event.target.value)
    if (moneyBankYo < negativeMoney) {
        alert ('MEH')
        document.querySelector('#display').innerText = ""
    } else { moneyBankYo -= negativeMoney 
        amount.innerText = moneyBankYo
        returnPicture()
    }

}

function getRandomPicture() {
    let picture = Math.floor(Math.random()*5) 
    return picture
}

function returnPicture () {
    let firstNumber = getRandomPicture()
    let secondNumber = getRandomPicture()
    let thirdNumber = getRandomPicture ()

    slotOne.src = slots[firstNumber]
    slotTwo.src = slots[secondNumber]
    slotThree.src = slots[thirdNumber]
 
    win (firstNumber, secondNumber, thirdNumber)
}


function win (firstNumber, secondNumber, thirdNumber) {
    if (firstNumber == secondNumber && secondNumber == thirdNumber) {
    document.querySelector('#display').innerText = 'Won'
    youWinMoney()
    } else { document.querySelector('#display').innerText = 'Loser'}
}
   

function youWinMoney() {
    moneyBankYo += prize
   amount.innerText = moneyBankYo


}






