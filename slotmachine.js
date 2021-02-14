document.querySelector(".topCircle").addEventListener('click', topCircle)
document.querySelector(".bottomCircle").addEventListener('click', bottomCircle)
document.querySelector(".lever").addEventListener('click', spin)
document.querySelector(".win").innerText = 0

// document.
let maxBet = 50
let minBet = 5
let bankAmount = 1000

let houseWives = ["grandDame.jpg", "delores.jpg", "porsha.jpg", "marge.jpg", "kandi.jpg"]

function topCircle(){
    let bankAmount = document.querySelector(".amount").innerHTML
    bankAmount = parseInt(bankAmount - minBet)
    document.querySelector(".amount").innerHTML = bankAmount
    houseBet = minBet
    spin(houseBet)
}

 function bottomCircle(){
    let bankAmount = document.querySelector(".amount").innerHTML
    bankAmount = parseInt(bankAmount - maxBet)
    document.querySelector(".amount").innerHTML = bankAmount
    console.log(bankAmount)
 }

//  function totalBets(bets){
//     document.querySelector('.custom').innerText = bets
//  }

 function spin(){
   let house1 = houseWives[Math.floor(Math.random()* houseWives.length)]
   let house2 = houseWives[Math.floor(Math.random()* houseWives.length)]
   let house3 = houseWives[Math.floor(Math.random()* houseWives.length)]
    document.querySelector(".pic0").src= house1
    document.querySelector(".center2").src= house2
    document.querySelector(".center3").src= house3
    
    if(house1 === house2 && house2 === house3){
        youWin = parseInt(bankAmount + (bets * 10))
        document.querySelector(".amount").innerHTML = youWin
        document.querySelector('.win').innerHTML = 'You Win!!'
    }
    else if(house1 != house2 && house2 != house3){
    document.querySelector('.win').innerHTML = 'You Lose..'
    }
}