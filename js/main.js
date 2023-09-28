//Create the starting pot amount for player and show that amount in the DOM

let moneyPot = 2000;
document.querySelector('#heartchamber').innerText = moneyPot

//Create event listeners for when player clicks the betting amount it runs one of the functions

document.getElementById('fivehearts').addEventListener('click', fiveHearts)
document.getElementById('fiftyhearts').addEventListener('click', fiftyHearts)
document.getElementById('allhearts').addEventListener('click', allHearts)

function fiveHearts(){
    //Update the amount of money in the pot after player makes bet
    moneyPot = moneyPot - 5;
    document.querySelector('#heartchamber').innerText = moneyPot
    //
}


function getRandomAngel(){
    let randomAngelNum = Math.floor(Math.random() * 5)
    console.log(randomAngelNum)
    let slotOne = ""
    if(randomAngelNum < 1){

    }
}

getRandomAngel()