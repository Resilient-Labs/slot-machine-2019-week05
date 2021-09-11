

let minBet = document.querySelector('#minBet').addEventListener('click', theMinBet)

let maxBet = document.querySelector('#maxBet').addEventListener('click', theMaxBet)

let score = document.querySelector('#spin').addEventListener('click', winOrLose)

let reset = document.querySelector('#reset').addEventListener('click', resetScore)

let pictureArray = ['./img/mercury-transparent.png', './img/neptune.png', './img/space.png', './img/sun.png', './img/jupiter.png']
// document.querySelector('#spin').addEventListener('click', )
// document.querySelector('#reset').addEventListener('click', )


let bet =  0 
let total = 1000

function theMinBet(){
    bet +=10
    document.querySelector('.bet').innerText = bet
}

function theMaxBet(){
    bet += 100
    document.querySelector('.bet').innerText = bet
}

function winOrLose(){
    if (total - bet <= 0){
        alert('Not enough points to play!')
    } else {
        let slot1 = doTheMath()// 1
        let slot2 = doTheMath() //3
        let slot3 = doTheMath() //4
        
        // document.querySelector('#slot1').innerText = slot1 
        // document.querySelector('#slot2').innerText = slot2
        // document.querySelector('#slot3').innerText = slot3
        // when you want to call functions

        document.querySelector('#slot1').setAttribute('src', pictureArray[slot1]  )
        document.querySelector('#slot2').setAttribute('src', pictureArray[slot2] )
        document.querySelector('#slot3').setAttribute('src', pictureArray[slot3] )
        // 1 3 4

    if (slot1 === slot2 && slot2 === slot3){
        total += bet
        document.querySelector('#placeForResult').innerText = total
        
    } else{
        total -= bet
        document.querySelector('#placeForResult').innerText = total
    }
    
    } 

    
 


}

function doTheMath(){
    
    return Math.floor(Math.random() * 5)
    // getting a value from 0-1 from math.random and multipying it by 5, and then rounding down so that we get whole numbers from 0-4 using Math.floor
}

function resetScore(){
    bet =  0 
    total = 1000
    document.querySelector('#placeForResult').innerText = total
    document.querySelector('.bet').innerText = bet

}





// const slotOne = () =>{
//     let slot = Math.floor(Math.random() * 5);
//     return slot;
// }


// const slotTwo = () =>{
//     let slot = Math.floor(Math.random() * 5);
//     return slot;
// }


// const slotThree = () =>{
//     let slot = Math.floor(Math.random() * 5);
//     return slot;
// }

// const compareSlots = () =>{
//     if (slotOne() === slotTwo() === slotThree()){
//         return true
//     } else{
//         return false
//     }
// }

// const totalBet = (bet) =>{
//     let totalWinnings = 0
//     if(compareSlots() === true){
//         totalWinnings = total += bet
//     } else{
//         totalWinnings = total -= bet
//     }
//     return totalWinnings;
// }