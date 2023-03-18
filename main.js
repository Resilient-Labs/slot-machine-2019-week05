const images = document.querySelector('#slot-img')
let bread = 1000
let bet = 0
let winMessage = document.querySelector('#message')
let currentBalance = document.querySelector('#balance').innerText = bread
let betTotal = document.querySelector('#betTotal')
let balanceTotal = document.querySelector('#balance')
let icons = ['diamond', 'horseshoe', 'bar', 'seven', 'lemon']
document.querySelector('#spin').addEventListener('click',insertSlot)
document.querySelector('#bet10').addEventListener('click', ()=>accumulateBet(10))
document.querySelector('#bet100').addEventListener('click', ()=>accumulateBet(100))

function insertSlot(){

    if(bread > bet){
    let slotOne = Math.round(Math.random()*(4-0)+0)
    let slotTwo = Math.round(Math.random()*(4-0)+0)
    let slotThree = Math.round(Math.random()*(4-0)+0)
    document.querySelector('#slotL').innerHTML = `
        <img src="assets/${icons[slotOne]}.png">  
    `
    document.querySelector('#slotM').innerHTML = `
        <img src="assets/${icons[slotTwo]}.png">  
    `
    document.querySelector('#slotR').innerHTML = `
        <img src="assets/${icons[slotThree]}.png">  
    `
    placeBet(bet)
    winCondiiton(slotOne, slotTwo, slotThree)
    return bet = 0, betTotal.innerText = 0 
    }else{
        winMessage.innerText = 'seek help'
    }
}

function placeBet(bet){
    bread -= bet
    updatedBread()
}
function updatedBread(){
    balanceTotal.innerText = bread
}
function accumulateBet(betAmount){
    if(bread > bet){
    bet += betAmount
    updatedBet()
    }else{
        console.log('cap reached')
    }
}
function updatedBet(){
    betTotal.innerText = bet
    balanceTotal.innerText = bread - bet
}
 function winCondiiton(slotOne,slotTwo,slotThree){
    if(slotOne === slotTwo && slotOne === slotThree){
        winMessage.innerText = 'jackpot'
        return balanceTotal.innerText = bread += ( bet * 3 )
    }else if(slotOne === slotTwo || slotTwo === slotThree){
        winMessage.innerText = 'minor win'
        return balanceTotal.innerText = bread += ( bet * 1.5 )
    }else{
        winMessage.innerText = 'You Lose'
    }
 }