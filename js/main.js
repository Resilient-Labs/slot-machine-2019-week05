let balance = 1000

const buttonFive = document.getElementById('betFive')
const buttonFifty = document.getElementById('betFifty')
const spinMePlz = document.getElementById('spinMe')
const message = document.getElementById('message')

let slot1 = document.getElementById('slot1')
let slot2 = document.getElementById('slot2')
let slot3 = document.getElementById('slot3')

let fruits = ['media/fruit1.png', 'media/fruit2.png', 'media/fruit3.png', 'media/fruit4.png', 'media/fruit5.png', 'media/fruit6.png']

document.getElementById('balance').innerHTML = balance


// functions here // randomly generating a number from 0-5 

function getRandomNum(){
    return Math.floor(Math.random() * (5 + 1));
}

function spin(){
    slot1.src = fruits[getRandomNum()]
    slot2.src = fruits[getRandomNum()]
    slot3.src = fruits[getRandomNum()]
    checkBet()
}

function checkBet(){
    let betAmount = document.getElementById('bets').value
        // document.getElementById('betMoney').innerHTML = betAmount
    if (betAmount === '5'){
        betFive()
    } else {
        betFifty()
    }
}

function betFive(){
    let betValue = 5
     if(balance <= 4){
        document.querySelector('#message').innerText = 'YOU HAVE NO MONEY. GO HOME!'
         return
     }else {
        // document.getElementById('previousBalance').innerHTML = balance
        balance -= 5
        document.getElementById('balance').innerHTML = balance
        checkWin(betValue)
     }
}

function betFifty(){
    let betValue = 50
     if(balance <= 49){
        document.querySelector('#message').innerText = 'YOU HAVE NO MONEY. GO HOME!'
         return
     }else {
        // document.getElementById('previousBalance').innerHTML = balance
        balance -= 50
        document.getElementById('balance').innerHTML = balance
        checkWin(betValue)
     }
}

function checkWin(betValue){
    if (slot1.src === slot2.src && slot1.src === slot3.src){
        if (betValue === 50){
            document.querySelector('#message').innerText = 'YOU WON $100!'
            balance += 100
            document.getElementById('balance').innerHTML = balance
        } else {
            document.querySelector('#message').innerText = 'YOU WON $10!'
            balance += 10
            document.getElementById('balance').innerHTML = balance
        }
    } else {
        document.querySelector('#message').innerText = 'SORRY, YOU LOSE!'
    }    
}

// function for bet 5
// function for bet 50
// check if you won
// function spin
// randomizer



// event listeners

// buttonFive.addEventListener('click', betFive)
// buttonFifty.addEventListener('click', betFifty)
spinMePlz.addEventListener('click', spin)