let total = 500000
const firstSlot = document.querySelector('#firstSlot')
const secondSlot = document.querySelector('#secondSlot')
const thirdSlot = document.querySelector('#thirdSlot')
const betThousand = document.querySelector('#bet1000')
const bet5Thousand = document.querySelector('#bet5000')
const bet10Thousand = document.querySelector('#bet10000')
const totalCash = document.querySelector('#cashAmount')

function getRandomThousand() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)
    
    firstSlot.innerText = numOne
    secondSlot.innerText = numTwo
    thirdSlot.innerText = numThree
    checkMatchesThousand(firstSlot, secondSlot, thirdSlot)
}
betThousand.addEventListener('click', getRandomThousand)

function getRandom5Thousand() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)

    firstSlot.innerText = numOne
    secondSlot.innerText = numTwo
    thirdSlot.innerText = numThree
    checkMatches5Thousand(firstSlot, secondSlot, thirdSlot)
}
bet5Thousand.addEventListener('click', getRandom5Thousand)

function getRandom10Thousand() {
    const numOne = Math.floor(Math.random() * 5)
    const numTwo = Math.floor(Math.random() * 5)
    const numThree = Math.floor(Math.random() * 5)
    
    firstSlot.innerText = numOne
    secondSlot.innerText = numTwo
    thirdSlot.innerText = numThree
    checkMatches10Thousand(firstSlot, secondSlot, thirdSlot)
}
bet10Thousand.addEventListener('click', getRandom10Thousand)

function checkMatchesThousand(num1, num2, num3) {
    if(num1.innerText === num2.innerText && num1.innerText === num3.innerText) {
        addBetThousand()
        alert('Winner!')
    }else {
        subtractBetThousand()
    } 
}

function checkMatches5Thousand(num1, num2, num3) {
    if(num1.innerText === num2.innerText && num1.innerText === num3.innerText) {
        addBet5Thousand()
        alert('Winner!')
    }else {
        subtractBet5Thousand()
    } 
}

function checkMatches10Thousand(num1, num2, num3) {
    if(num1.innerText === num2.innerText && num1.innerText === num3.innerText) {
        addBet10Thousand()
        alert('Winner!')
    }else {
        subtractBet10Thousand()
    } 
}

function addBetThousand() {
    total = total + 2500
    totalCash.innerText = '$' + total
}

function subtractBetThousand() {
    total = total - 1000
    totalCash.innerText = '$' + total
    if(total <= 0) {
        return alert('Warning: Continuing May Lead to Defaulting!')
    }
}

function addBet5Thousand() {
    total = total + 12500
    totalCash.innerText = '$' + total
}

function subtractBet5Thousand() {
    total = total - 5000
    totalCash.innerText = '$' + total
    if(total <= 0) {
        return alert('Warning: Continuing May Lead to Defaulting!')
    }
}

function addBet10Thousand() {
    total = total + 25000
    totalCash.innerText = '$' + total
}

function subtractBet10Thousand() {
    total = total - 10000
    totalCash.innerText = '$' + total
    if(total <= 0) {
        return alert('Warning: Continuing May Lead to Defaulting!')
    }
}