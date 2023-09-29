//Create the starting pot amount for player and show that amount in the DOM

let moneyPot = 500;
document.querySelector('#heartchamber').innerHTML = moneyPot

let slotOne = document.querySelector('#slotone')
let slotTwo = document.querySelector('#slottwo')
let slotThree = document.querySelector('#slotthree')

let angelArray =['<img src = "images/atsuko.jpg">','<img src = "images/Canary.jpg">', '<img src = "images/michiko.jpg">', '<img src = "images/miyuki.jpg"></img>', '<img src = "images/Yoruichi.jpg"></img>' ]


//Create event listeners for when player clicks the betting amount it runs one of the functions

document.getElementById('fivehearts').addEventListener('click', fiveHearts)
document.getElementById('fiftyhearts').addEventListener('click', fiftyHearts)
document.getElementById('allhearts').addEventListener('click', allHearts)

function fiveHearts(){
    //Update the amount of money in the pot after player makes bet
    if(moneyPot < 5){
        document.getElementById('winlose').innerText = 'Not Enough Funds'
    } else if(moneyPot >= 5){
        moneyPot = moneyPot - 5;
        document.querySelector('#heartchamber').innerHTML = moneyPot
        getRandomAngel()
        if(slotOne === slotTwo && slotOne === slotThree){
            moneyPot = moneyPot + 50;
            document.querySelector('#heartchamber').innerHTML = moneyPot
            document.getElementById('winlose').innerText = 'You Win'
        } else {
            document.getElementById('winlose').innerText = 'You Lose'
        }
                
    
    }
}

function fiftyHearts(){
    //Update the amount of money in the pot after player makes bet
    if(moneyPot < 50){
        document.getElementById('winlose').innerText = 'Not Enough Funds'
    } else if(moneyPot >= 50){
        moneyPot = moneyPot - 50;
        document.querySelector('#heartchamber').innerHTML = moneyPot
        getRandomAngel()
        if(slotOne === slotTwo && slotOne === slotThree){
            moneyPot = moneyPot + 100;
            document.querySelector('#heartchamber').innerHTML = moneyPot
            document.getElementById('winlose').innerText = 'You Win'
        } else {
            document.getElementById('winlose').innerText = 'You Lose'
        }
                
    
    }

}

function allHearts(){
    //Update the amount of money in the pot after player makes bet
    if(moneyPot <= 0){
        document.getElementById('winlose').innerText = 'Not Enough Funds'
    } else if(moneyPot > 0){
        let currentPot = moneyPot
        moneyPot = moneyPot - currentPot;
        document.querySelector('#heartchamber').innerHTML = moneyPot
        getRandomAngel()
        if(slotOne === slotTwo && slotOne === slotThree){
            moneyPot = currentPot * 2;
            document.querySelector('#heartchamber').innerHTML = moneyPot
            document.getElementById('winlose').innerText = 'YOU WIN THE JACKPOT'
        } else {
            document.getElementById('winlose').innerText = 'You Lose'
        }
                
    
    }
    //
}


function getRandomAngel(){
    slotOne = angelArray[Math.floor(Math.random() * angelArray.length)]
    slotTwo = angelArray[Math.floor(Math.random() * angelArray.length)]
    slotThree = angelArray[Math.floor(Math.random() * angelArray.length)]
    document.getElementById('slotone').innerHTML = slotOne
    document.getElementById('slottwo').innerHTML = slotTwo
    document.getElementById('slotthree').innerHTML = slotThree

}

getRandomAngel()