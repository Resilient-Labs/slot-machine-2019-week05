// establish bank

// player clicks button
document.getElementById("play").addEventListener('click', displaySymbols)
// money leaves bank

// generate a random symbol 
function genSymbol(slotValue){
    let randomNumber = Math.random()
    let symbolShown = "cherries"
    if(randomNumber < .15 ){ 
        symbolShown = "wild"
    } if (randomNumber < .35 ){ 
        symbolShown = "bars"
    } if (randomNumber < .55 ){ 
        symbolShown = "bell"
    } if (randomNumber < .75 ){ 
        symbolShown = "sevens"
    }
    slotValue = symbolShown
}
// three times

// if u can make a couple options show before the image settles that'd be cool

// display symbols on dom
function displaySymbols(){
    let slot1Display = document.getElementById("slot1")
    let slot2Display = document.getElementById("slot2")
    let slot3Display = document.getElementById("slot3")

    genSymbol(slot1)
    genSymbol(slot2)
    genSymbol(slot3)

    slot1Display




}
// do symbols match?

// if player wins add money to bank
