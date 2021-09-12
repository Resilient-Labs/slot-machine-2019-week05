//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

//
document.getElementById('spin').addEventListener('click',spinBtn)
document.getElementById('betFifty').addEventListener('click',fiftyBtn)
document.getElementById('betFive').addEventListener('click',fiveBtn)


 let currentMoney = 1000
 let lastBet = 0

 const images = ['slotpic6.png','slotpic7.png','slotpic3.png','slotpic8.png','slotpic10.png']

 console.log(images)


function spinBtn(){
    let leftValue= Math.floor(Math.random() * 5)
    document.querySelector('.left').src = images[leftValue]
    console.log(images[leftValue])

    let middleValue= Math.floor(Math.random() * 5)
    document.querySelector('.middle').src = images[middleValue]

    let rightValue= Math.floor(Math.random() * 5)
    document.querySelector('.right').src = images[rightValue]

    document.getElementById("placeToSee").innerText = currentMoney
    currentMoney = currentMoney - lastBet
    if(leftValue=== middleValue && middleValue===rightValue){
        currentMoney = currentMoney + lastBet * 10
    }
    document.getElementById("placeToSee").innerText = currentMoney


}

function fiftyBtn(){
    lastBet = 50
    
    


}

function fiveBtn(){
    lastBet = 5

}