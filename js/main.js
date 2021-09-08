// 1. User bets money
// 2. User presses button
// 3. Money bet is deducted from total
// ----
// 4. Computer chooses an item for reel 1
// 5. Computer chooses an item for reel 2
// 6. Computer chooses an item for reel 3
// 7. Send all to check win function
// ----
// 8. If all match, they win and 10x their total


// show $1000 total on page
    // innerHTML strong total = $1000
let totalMoney = 1000
let win
const reel = ['stone', 'diamond', 'beet', 'slime', 'copper']

document.querySelector('#go').addEventListener('click', randomSlot)

// take input
    // set variable equal to value of the input area
function betMoney(){
    let bet = document.querySelector('#bet').value
    if (win == true){
        increaseMoney(bet)
        win = false
    } else {
        decreaseMoney(bet)
    }
}
// math.random reel 1
//  - reel 1 choice = a0
//  - or .4 - a2
//  - or .6 - a3
//  - or .8 - a4
//  - computer chooses an item
// ADDED CHALLENGE: make a for loop iterating each slot into a slot array?
function randomSlot(){
    betMoney()
    let value=Math.random() * 5
    let slot1=reel[0] 
    if (value < 1){
        slot1=reel[1] //diamond
    } else if (value < 2){
        slot1=reel[2] //beet
    } else if (value < 3){
        slot1=reel[3] //slime
    } else if (value < 4){
        slot1=reel[4] //copper
    }
        
    value=Math.random() * 5
    // math.random reel 2
    let slot2=reel[0] 
    if (value < 1){
        slot2=reel[1] //diamond
    } else if (value < 2){
        slot2=reel[2] //beet
    } else if (value < 3){
        slot2=reel[3] //slime
    } else if (value < 4){
        slot2=reel[4] //copper
    }

    value=Math.random() * 5
    // math.random reel 3
    let slot3=reel[0]
    if (value < 1){
        slot3=reel[1] //diamond
    } else if (value < 2){
        slot3=reel[2] //beet
    } else if (value < 3){
        slot3=reel[3] //slime
    } else if (value < 4){
        slot3=reel[4] //copper
    }
    document.querySelector('#reel').innerHTML=`${slot1} &nbsp; ${slot2} &nbsp; ${slot3} &nbsp;`
    checkifWin(slot1, slot2, slot3)
}
function checkifWin(slot1, slot2, slot3){
    // if reel 1 === reel 2 and reel 2 === reel 3
    // then win
    // 10x their total
    // update total in DOM
    if (slot1 === slot2 && slot2 === slot3){
        document.querySelector('#winLose').innerHTML='You won!'
        win = true
        betMoney()
    } else {
        document.querySelector('#winLose').innerHTML='You lost.'
    }
    // else
    // they lose a lot of money*
    // *: they don't gain or lose anything
}
function decreaseMoney(bet){
    totalMoney -= bet
    updateTotal(totalMoney)
}
function increaseMoney(bet){
    totalMoney += Number(bet) * 10
    updateTotal(totalMoney)
}
function updateTotal(totalMoney){
    document.querySelector('#totalMoney').innerHTML=`<strong>${totalMoney}</strong>`
}