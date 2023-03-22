const minBet = document.querySelector('#min')
const maxBet = document.querySelector('#max')
const leftSlot = document.querySelector('#slotOne')
const middleSlot = document.querySelector('#slotTwo')
const rightSlot = document.querySelector('#slotThree')
let playerScore = document.querySelector('#result')
let playerBet = document.querySelector('#amount')
let total = 10000



function wheelSpin(){
    let a = Math.floor( (Math.random() * 5) + 1)
    if (a === 5){
        leftSlot.innerText = '🐯'
        console.log(a)
    } else if(a === 4){
        leftSlot.innerText = '🐰'
        console.log(a)
    } else if(a === 3){
        leftSlot.innerText = '🐼'
        console.log(a)
    } else if(a === 2){
        leftSlot.innerText = '🐷'
        console.log(a)
    } else if(a === 1){
        leftSlot.innerText = '🦊'
        console.log(a)
    } else {
        alert('FAILED')
    }

    let b = Math.floor( (Math.random() * 5) + 1)
    if (b === 5){
        middleSlot.innerText = '🐯'
        console.log(b)
    } else if(b === 4){
        middleSlot.innerText = '🐰'
        console.log(b)
    } else if(b === 3){
        middleSlot.innerText = '🐼'
        console.log(b)
    } else if(b === 2){
        middleSlot.innerText = '🐷'
        console.log(b)
    } else if(b === 1){
        middleSlot.innerText = '🦊'
        console.log(b)
    } else {
        alert('FAILED')
    }
    
    let c = Math.floor( (Math.random() * 5) + 1)
    if (c === 5){
        rightSlot.innerText = '🐯'
        console.log(c)
    } else if(c === 4){
        rightSlot.innerText = '🐰'
        console.log(c)
    } else if(c === 3){
        rightSlot.innerText = '🐼'
        console.log(c)
    } else if(c === 2){
        rightSlot.innerText = '🐷'
        console.log(c)
    } else if(c === 1){
        rightSlot.innerText = '🦊'
        console.log(c)
    } else {
        alert('FAILED')
    }
    
}

function minBtn(){
    let bet = 50
    
    if(bet >= total){
        playerBet.innerText = 'YOU ARE OUT OF MONEY'
    } else {
        wheelSpin()
        if
        (leftSlot.innerText === middleSlot.innerText && middleSlot.innerText === rightSlot.innerText){
        total += bet 
        playerScore.innerText = total
        playerBet.innerText = 'YOU ARE A WINNER!!!'
    } else {
        total -= bet 
        playerScore.innerText = total
        playerBet.innerText = 'YOU LOST!!!'
    } 
    }
}
minBet.addEventListener('click', minBtn)

function maxBtn(){
    let bet = 100
    if(bet >= total){
        playerBet.innerText = 'YOU ARE OUT OF MONEY'
    } else {
        wheelSpin()
        if
        (leftSlot.innerText === middleSlot.innerText && middleSlot.innerText === rightSlot.innerText){
        total += (bet * 10)
        playerScore.innerText = total
        playerBet.innerText = 'YOU ARE A WINNER!!!'
    } else {
        total -= bet 
        playerScore.innerText = total
        playerBet.innerText = 'YOU LOST!!!'
    } 
    } 
}
maxBet.addEventListener('click', maxBtn)

//first attempts 

// function minBtn(){
    // let a = Math.floor( (Math.random() * 5) + 1)
    // if (a === 5){
    //     leftSlot.innerText = '🐶'
    //     console.log(a)
    // } else if(a === 4){
    //     leftSlot.innerText = '🦄'
    //     console.log(a)
    // } else if(a === 3){
    //     leftSlot.innerText = '🐼'
    //     console.log(a)
    // } else if(a === 2){
    //     leftSlot.innerText = '🐷'
    //     console.log(a)
    // } else if(a === 1){
    //     leftSlot.innerText = '🦊'
    //     console.log(a)
    // } else {
    //    alert('FAILED')
    // }
    // let b = Math.floor( (Math.random() * 5) + 1)
    // if (b === 5){
    //     middleSlot.innerText = '🐶'
    //     console.log(b)
    // } else if(b === 4){
    //     middleSlot.innerText = '🦄'
    //     console.log(b)
    // } else if(b === 3){
    //     middleSlot.innerText = '🐼'
    //     console.log(b)
    // } else if(b === 2){
    //     middleSlot.innerText = '🐷'
    //     console.log(b)
    // } else if(b === 1){
    //     middleSlot.innerText = '🦊'
    //     console.log(b)
    // } else {
    //     alert('FAILED')
    // }
    // let c = Math.floor( (Math.random() * 5) + 1)
    // if (c === 5){
    //     rightSlot.innerText = '🐶'
    //     console.log(c)
    // } else if(c === 4){
    //     rightSlot.innerText = '🦄'
    //     console.log(c)
    // } else if(c === 3){
    //     rightSlot.innerText = '🐼'
    //     console.log(c)
    // } else if(c === 2){
    //     rightSlot.innerText = '🐷'
    //     console.log(c)
    // } else if(c === 1){
    //     rightSlot.innerText = '🦊'
    //     console.log(c)
    // } else {
    //     alert('FAILED')
    // }
//     let bet = 50
    
//     if(bet >= total){
//         playerBet.innerText = 'YOU ARE OUT OF MONEY'
//     } else {
//         wheelSpin()
//         if
//         (leftSlot.innerText === middleSlot.innerText && middleSlot.innerText === rightSlot.innerText){
//         total += bet 
//         playerScore.innerText = total
//         playerBet.innerText = 'YOU ARE A WINNER!!!'
//     } else {
//         total -= bet 
//         playerScore.innerText = total
//         playerBet.innerText = 'YOU LOST!!!'
//     } 
//     }
// }
// function maxBtn(){
    // let a = Math.floor( (Math.random() * 5) + 1)
    // if (a === 5){
    //     leftSlot.innerText = '🐶'
    //     console.log(a)
    // } else if(a === 4){
    //     leftSlot.innerText = '🦄'
    //     console.log(a)
    // } else if(a === 3){
    //     leftSlot.innerText = '🐼'
    //     console.log(a)
    // } else if(a === 2){
    //     leftSlot.innerText = '🐷'
    //     console.log(a)
    // } else if(a === 1){
    //     leftSlot.innerText = '🦊'
    //     console.log(a)
    // }
    // let b = Math.floor( (Math.random() * 5) + 1)
    // if (b === 5){
    //     middleSlot.innerText = '🐶'
    //     console.log(b)
    // } else if(b === 4){
    //     middleSlot.innerText = '🦄'
    //     console.log(b)
    // } else if(b === 3){
    //     middleSlot.innerText = '🐼'
    //     console.log(b)
    // } else if(b === 2){
    //     middleSlot.innerText = '🐷'
    //     console.log(b)
    // } else if(b === 1){
    //     middleSlot.innerText = '🦊'
    //     console.log(b)
    // }
    // let c = Math.floor( (Math.random() * 5) + 1)
    // if (c === 5){
    //     rightSlot.innerText = '🐶'
    //     console.log(c)
    // } else if(c === 4){
    //     rightSlot.innerText = '🦄'
    //     console.log(c)
    // } else if(c === 3){
    //     rightSlot.innerText = '🐼'
    //     console.log(c)
    // } else if(c === 2){
    //     rightSlot.innerText = '🐷'
    //     console.log(c)
    // } else if(c === 1){
    //     rightSlot.innerText = '🦊'
    //     console.log(c)
    // }
//     let bet = 100
//     if(bet >= total){
//         playerBet.innerText = 'YOU ARE OUT OF MONEY'
//     } else {
//         wheelSpin()
//         if
//         (leftSlot.innerText === middleSlot.innerText && middleSlot.innerText === rightSlot.innerText){
//         total += (bet * 10)
//         playerScore.innerText = total
//         playerBet.innerText = 'YOU ARE A WINNER!!!'
//     } else {
//         total -= bet 
//         playerScore.innerText = total
//         playerBet.innerText = 'YOU LOST!!!'
//     } 
//     }

    
// }

// function score (leftSlot, middleSlot, rightSlot){
//     let playerScore = document.querySelector('#result')
//     let playerBet = document.querySelector('#amount')
//     let playerResult = Number(playerScore.innerText)
//     if (playerResult < Number(playerBet.value)){
//         alert('YOU ARE OUT OF MONEY')
//         return
//     } else if (leftSlot === middleSlot && leftSlot === rightSlot){
//         playerResult += Number(playerBet.value)
//         alert('JACKPOT')
//         console.log('YOU ARE A WINNER!!!!')
//     } else {
//         playerResult -= Number(playerBet.value)
//         alert('TRY AGAIN!')
//         console.log('YOU ARE A LOSER!')
//     }
//     playerScore.innerText = playerResult
// }
    // if(leftSlot.innerText === middleSlot.innerText && middleSlot.innerText === rightSlot.innerText){
    //     total += bet 
    //     playerScore.innerText = total
    //     playerBet.innerText = 'YOU ARE A WINNER!!!'
    // } else if (leftSlot.innerText != middleSlot.innerText && middleSlot.innerText != rightSlot.innerText){
    //     total -= bet 
    //     playerScore.innerText = total
    //     playerBet.innerText = 'YOU LOST!!!'
    // } 