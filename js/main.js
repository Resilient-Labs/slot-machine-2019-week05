//user clicks a bet or spins
document.getElementById('maxBet').addEventListener('click', addMaxBet)
document.getElementById('minBet').addEventListener('click', addMinBet)
document.getElementById('spin').addEventListener('click', spin)
credits = 1000

//if user makes a max bet
function addMaxBet() {
    const maxBet = 50 
    bet = maxBet
    document.getElementById('bet').innerText = `BET: \$${maxBet}`
}
//if the user makes a min bet
function addMinBet() {
    const minBet = 5
    bet = minBet
    document.getElementById('bet').innerText = `BET: \$${minBet}`
}

//spinning the slots
function spin() {
    //generating random item for each slot
    var leftItemChance = Math.random()
    var midItemChance = Math.random()
    var rightItemChance = Math.random()
    var jackpotOne = 'no'
    var jackpotTwo = 'no'
    var jackpotThree = 'no'
    //checking left slot's item
    if (leftItemChance <= 0.2) {
        document.getElementById('leftSlotItem').src='img/item two.png'
        leftItemChance = 'item two'
    }else if (leftItemChance <= 0.4) {
        document.getElementById('leftSlotItem').src='img/item three.png'
        leftItemChance = 'item three'
    }else if (leftItemChance <= 0.6) {
        document.getElementById('leftSlotItem').src='img/item four.png'
        leftItemChance = 'item four'
    }else if (leftItemChance <= 0.8) {
        document.getElementById('leftSlotItem').src='img/jackpot.png'
        leftItemChance = 'jackpot'
    }else {
        document.getElementById('leftSlotItem').src='img/item one.png'
        leftItemChance = 'item one'
    }

    //checking right slot's item
    if (rightItemChance <= 0.2) {
        document.getElementById('rightSlotItem').src='img/item two.png'
        rightItemChance = 'item two'
    }else if (rightItemChance <= 0.4) {
        document.getElementById('rightSlotItem').src='img/item three.png'
        rightItemChance = 'item three'
    }else if (rightItemChance <= 0.6) {
        document.getElementById('rightSlotItem').src='img/item four.png'
        rightItemChance = 'item four'
    }else if (rightItemChance <= 0.8) {
        document.getElementById('rightSlotItem').src='img/jackpot.png'
        rightItemChance = 'jackpot'
    }else {
        document.getElementById('rightSlotItem').src='img/item one.png'
        rightItemChance = 'item one'
    }

    //checking mid slot's item
    if (midItemChance <= 0.2) {
        document.getElementById('midSlotItem').src='img/item two.png'
        midItemChance = 'item two'
    }else if (midItemChance <= 0.4) {
        document.getElementById('midSlotItem').src='img/item three.png'
        midItemChance = 'item three'
    }else if (midItemChance <= 0.6) {
        document.getElementById('midSlotItem').src='img/item four.png'
        midItemChance = 'item four'
    }else if (midItemChance <= 0.8) {
        document.getElementById('midSlotItem').src='img/jackpot.png'
        midItemChance = 'jackpot'
    }else {
        document.getElementById('midSlotItem').src='img/item one.png'
        midItemChance = 'item one'
    }

    //check to see if user got a jackpot
    if (midItemChance === rightItemChance & rightItemChance === leftItemChance) {
        document.querySelector('h2').innerText = 'JACKPOT'
        document.querySelector('h2').style.color = 'white'
        document.querySelector('h2').style.fontSize = '2rem'
        credits = credits + bet*10
        console.log(credits)
        document.getElementById('credits').innerText = `CREDITS: \$${credits}`
    }else {
        document.querySelector('h2').innerText = 'YOU LOST'
        document.querySelector('h2').style.color = 'red'
        document.querySelector('h2').style.fontSize = '1rem'
        credits -= bet
        console.log(credits)
        document.getElementById('credits').innerText = `CREDITS: \$${credits}`
    }
}





