const images = document.querySelector('#slot-img')
let icons = ['diamond', 'horseshoe', 'bar', 'seven', 'lemon']
let bread = 1000
let bet = 0
document.querySelector('#spin').addEventListener('click',insertSlot)
document.querySelector('#bet10').addEventListener('click', ()=>accumulateBet(10))
document.querySelector('#bet100').addEventListener('click', ()=>accumulateBet(100))

function insertSlot(){
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
    return bet = 0
}

function placeBet(bet){
    console.log(bet)
    console.log(bread)
    return bread -= bet
}

function accumulateBet(betAmount){
    return bet += betAmount
}

 function winCondiiton(slotOne,slotTwo,slotThree){
    if(slotOne === slotTwo && slotOne === slotThree){
        console.log('jackpot')
        return bread += ( bet * 3 )
    }else if(slotOne === slotTwo || slotTwo === slotThree){
        
        return bread += ( bet * 1.5 )
    }else{
        console.log('You Lose')
    }
 }