// establish bank
let playerBank = 1000
let betAmount = 0

const six = './css/img/six.jpg'
const cherries = './css/img/cherries.jpg'
const bat = './css/img/bat.jpg'
const ghost = './css/img/ghost.jpg'
const tomb = './css/img/tomb.jpg'


// player makes low or high bet
document.getElementById("bet10").addEventListener('click', take25)
document.getElementById("bet50").addEventListener('click', take100)
// money leaves bank

// generate a random symbol 
function genSymbol(){
    let randomNumber = Math.random()*100
    let symbolShown = "start"
    if(randomNumber < 100 && randomNumber > 95 ){ // rare
        symbolShown = bat
    } if (randomNumber < 96 && randomNumber > 80 ){
        symbolShown = six
    } if (randomNumber < 81 && randomNumber > 64 ){ 
        symbolShown = tomb
    } if (randomNumber < 65 && randomNumber > 32 ){ 
        symbolShown = ghost
    } if (randomNumber >= 0 && randomNumber < 33 ){
        symbolShown = cherries
    }
    return symbolShown 
}
// display symbols on dom
function displaySymbols(){
    let slot1Display = genSymbol()
    let slot2Display = genSymbol()
    let slot3Display = genSymbol()
    document.getElementById("slot1").src = slot1Display
    document.getElementById("slot2").src = slot2Display
    document.getElementById("slot3").src = slot3Display
    checkMatch()
}

// do symbols match?
function checkMatch(){
    let slot1Display = document.getElementById("slot1").src
    let slot2Display = document.getElementById("slot2").src
    let slot3Display = document.getElementById("slot3").src 
    document.getElementById("playerBank").innerText = playerBank
    let betAmount = Number(document.getElementById("betAmount").innerText)
    if(slot1Display === slot2Display && slot2Display === slot3Display && betAmount === 25){
    playerBank = playerBank + (betAmount * 3)
    winner() 
    } else if (slot1Display === slot2Display && slot2Display === slot3Display && betAmount === 100){
        playerBank = playerBank + (betAmount * 10)
        winner()
        }
}
// if player wins add money to bank

function take25(){
    document.getElementById("outcome").innerHTML = ''
    if (playerBank >= 25){
        betAmount = 25
        document.getElementById("betAmount").innerText = betAmount
        playerBank -= 25
        document.getElementById("playerBank").innerText = playerBank
        displaySymbols()
    } else {
        alert('WITH WHAT MONEY?!')
    }
}
// player makes high bet
function winner(){
    document.getElementById("outcome").innerHTML = ' WE HAVE A WINNAH!!!'
}
function take100(){
    document.getElementById("outcome").innerHTML = ''
    if (playerBank >= 100){
        betAmount = 100
        document.getElementById("betAmount").innerText = betAmount
        playerBank -= 100
        document.getElementById("playerBank").innerText = playerBank
        displaySymbols()
    } else {
        alert('WITH WHAT MONEY?!')
    }
}
