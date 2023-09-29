// takes in the users bet and shows the user the number
//three wheels random math if all  three have the same math wwinner
// requires two buttons for mid bet and max bet 
// deduct bet amount from users full bet amount
// run function to generate random numbers 
// if bet is equal to random numbers add amount to users bet 
// if less than randum number  deduct from user number
let userTotal = Number(document.querySelector('#userInput').value)

document.querySelector('#lockIn').addEventListener('click',displayInput)
document.querySelector('#bet1').addEventListener('click',runBet1)
document.querySelector('#bet2').addEventListener('click',runBet2)
document.querySelector('#spin').addEventListener('click',spin)


    
// for displaying 
function displayInput(){
    userTotal = Number(document.querySelector('#userInput').value)
    document.querySelector('#amount').innerText =`$${userTotal} ` 
}
function runBet1(){
    userTotal =  userTotal - 10
    document.querySelector('#amount').innerText = `$${userTotal} `
}

function runBet2(){
    userTotal = userTotal -100
    document.querySelector('#amount').innerText = `$${userTotal} `
}

function spin(){   
    let slot1 = Math.floor(Math.random()*2 +1)
    let slot2 = Math.floor(Math.random()*2 +1)
    if( slot1 < 2 || slot2 < 2 ){
        document.querySelector('#status').innerText = 'loser'
       playerLose()

    } 
    else if(slot1 === 2 && slot2 === 2){
        document.querySelector('#status').innerText = 'winner'
    playerWin()
        
 }
}
// if player wins  increase score by 50 points

function playerWin(){
	userTotal += 500 ;
	document.getElementById('amount').innerText = `$${userTotal} `
	
}
function playerLose(){
	userTotal -= 50;
	document.getElementById('amount').innerText = `$${userTotal} `
}
