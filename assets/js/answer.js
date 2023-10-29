//smurf for button
//smurf for min and max button
document.querySelector('#spin').addEventListener('click', spinTheWheel)
document.querySelector('#minValue').addEventListener('click', getUserBet)
document.querySelector('#maxValue').addEventListener('click', getUserBet)


//create function for random number
function randoNumb(){
    return Math.floor(Math.random() * 5) + 1;
}

//figure how to find what user bet
let userBet;
function getUserBet (){
    userBet = Number(this.value)
    console.log(userBet);
}

function spinTheWheel(){
    let slotMachineOne = randoNumb()
    let slotMachineTwo = randoNumb()
    let slotMachineThree = randoNumb()
    
    //create variable that targets total
    let spanTotal = document.querySelector('#total')

    //Puts text inside containers

    document.querySelector('#slotOne').innerText = slotMachineOne
    document.querySelector('#slotTwo').innerText = slotMachineTwo
    document.querySelector('#slotThree').innerText = slotMachineThree
    
    if(slotMachineOne === slotMachineTwo && slotMachineOne === slotMachineThree){
        winnerMsg();
        spanTotal.innerText = Number(spanTotal.innerText) + userBet
    } else {
        loserMsg();
        spanTotal.innerText = Number(spanTotal.innerText) - userBet
    }
}

//create functions for winning and losing message

function winnerMsg(){
    document.querySelector('#placeToSee').innerText = 'You win!'
}

function loserMsg(){
    document.querySelector('#placeToSee').innerText = 'You lose. Try again.'
}