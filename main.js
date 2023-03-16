// establish bank
let playerBank = 1000
let betAmount = 0
// player makes low or high bet
document.getElementById("bet10").addEventListener('click', take10)
document.getElementById("bet50").addEventListener('click', take50)
// money leaves bank

// generate a random symbol 
function genSymbol(){
    let randomNumber = Math.random()*100
    let symbolShown = "start"
    if(randomNumber < 100 && randomNumber > 95 ){ // rare
        symbolShown = "wild"
    } if (randomNumber < 96 && randomNumber > 80 ){
        symbolShown = "sevens"
    } if (randomNumber < 81 && randomNumber > 64 ){ 
        symbolShown = "bar"
    } if (randomNumber < 65 && randomNumber > 32 ){ 
        symbolShown = "bell"
    } if (randomNumber >= 0 && randomNumber < 33 ){
        symbolShown = "cherries"
    }
    return symbolShown 
}
// if u can make a couple options show before the image settles that'd be cool

// display symbols on dom
function displaySymbols(){
    let slot1Display = genSymbol()
    let slot2Display = genSymbol()
    let slot3Display = genSymbol()
    document.getElementById("slot1").innerText = slot1Display
    document.getElementById("slot2").innerText = slot2Display
    document.getElementById("slot3").innerText = slot3Display
    checkMatch()
}

// do symbols match?
function checkMatch(){
    let slot1Display = document.getElementById("slot1").innerText
    let slot2Display = document.getElementById("slot2").innerText
    let slot3Display = document.getElementById("slot3").innerText 
    document.getElementById("playerBank").innerText = playerBank
    let betAmount = Number(document.getElementById("betAmount").innerText)
    if(slot1Display === slot2Display && slot2Display === slot3Display){
    playerBank = playerBank + (betAmount * 100)
    alert('YOU\'RE A WINNER HONEY!')
    }
}
// if player wins add money to bank

function take10(){
    document.getElementById("betAmount").innerText = betAmount
    document.getElementById("playerBank").innerText = playerBank
    if (playerBank >= 10){
        betAmount = 10
        playerBank -= 10
        displaySymbols()
    } else {
        alert('WITH WHAT MONEY?!')
    }
}
// player makes high bet

function take50(){
    document.getElementById("betAmount").innerText = betAmount
    document.getElementById("playerBank").innerText = playerBank
    if (playerBank >= 50){
        betAmount = 50
        playerBank -= 50
        displaySymbols()
    } else {
        alert('WITH WHAT MONEY?!')
    }
}
