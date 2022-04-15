let slotOne = document.querySelector('.slotOne')
let slotTwo = document.querySelector('.slotTwo')
let slotThree = document.querySelector('.slotThree')

let btnEnterBet = document.querySelector('.enterBet')
btnEnterBet.addEventListener('click', getRandomNumber)

let moneyLeft = document.querySelector('span')


function getRandomNumber() {
    //console.log(Math.floor(Math.random() * 5))
    let num1 = (Math.floor(Math.random() * 5))
    let num2 = (Math.floor(Math.random() * 5))
    let num3 = (Math.floor(Math.random() * 5))
    console.log(num1, num2, num3)

    slotOne.innerText = num1
    slotTwo.innerText = num2
    slotThree.innerText = num3
    checkPlayerWinOrDidThePlayerLose()
}

function checkPlayerWinOrDidThePlayerLose() {
    let betAmount = document.querySelector('.money')
    let inputMoney = Number(betAmount.value)

    // if player prpduces three equal number player wins.
    // else if player produces three miss match number player loses
    if (slotOne.innerText === slotTwo.innerText && slotOne.innerText === slotThree.innerText) {
        document.querySelector('h3').innerText = 'Win'
        winMoney(inputMoney)

    } else {
        document.querySelector('h3').innerText = 'lose'
        loseMoney(inputMoney)

    }



}

function winMoney(bet) {
    let total = bet * 2
    return moneyLeft.innerText = Number(moneyLeft.innerText) + total
}


function loseMoney(bet) {
    return moneyLeft.innerText = Number(moneyLeft.innerText) - bet
}
