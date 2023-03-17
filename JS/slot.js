//start off deposit
//call variables for buttons
//call for reels 

let total = 5000
const reelOne = document.querySelector('#reelOne')
const reelTwo = document.querySelector('#reelTwo')
const reelThree = document.querySelector('#reelThree')
const betTen = document.querySelector('#bet10')
const betFifty = document.querySelector('#bet50')
const betHundo = document.querySelector('#bet100')
const wallet = document.querySelector('#win')



function getRandomTen() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)

    reelOne.innerText = numOne
    reelTwo.innerText = numTwo
    reelThree.innerText = numThree
    checkMatchesTen(reelOne, reelTwo, reelThree)
}
betTen.addEventListener('click', getRandomTen)



function getRandomFifty() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)

    reelOne.innerText = numOne
    reelTwo.innerText = numTwo
    reelThree.innerText = numThree

    checkMatchesFifty(reelOne, reelTwo, reelThree)
}
betFifty.addEventListener('click', getRandomFifty)


function getRandomHundo() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)

    reelOne.innerText = numOne
    reelTwo.innerText = numTwo
    reelThree.innerText = numThree

    checkMatchesHundo(reelOne, reelTwo, reelThree)
}
betHundo.addEventListener('click', getRandomHundo)

//_____________________________________________________________________//

function addBetTen() {
    total = total + 20
    wallet.innerText = total
}

function subtractBetTen() {
    total = total - 10
    wallet.innerText = total
    if (total <= 0) {
        return alert('Deposit More Money!')
    }
}

function addBetFifty() {
    total = total + 500
    wallet.innerText = total

}

function subtractBetFifty() {
    total = total - 50
    wallet.innerText = total
    if (total <= 0) {
        return alert('Deposit More Money!')
    }
}

function addBetHundo() {
    total = total + 1200
    wallet.innerText = total
}

function subtractBetHundo() {
    total = total - 100
    wallet.innerText = total
    if (total <= 0) {
        return alert('Deposit More Money!')
    }

}

//______________________________________________________//


function checkMatchesTen(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        addBetTen()
    } else {
        subtractBetTen()
    }
}

function checkMatchesFifty(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        addBetFifty()
    } else {
        subtractBetFifty()
    }
}

function checkMatchesHundo(num1, num2, num3) {
    if (num1 === num2 && num1 === num3) {
        addBetHundo()
    } else {
        subtractBetHundo()
    }
}

function walletTotal() {
    if (total <= 0) {
        return alert('Deposit More Money!')
    }
}






