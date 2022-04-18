//create variable for amount of money
let bank = 1000
let currentBet = 0

//link buttons for functions
const betButtons = Array.from(document.querySelectorAll('.betButton'))
const slotDisplayWindows = Array.from(document.querySelectorAll('.slotMachineNum'))

function playGame(slotDisplayWindow){
    const randomNumber = Math.random();
    const slotValue = Number.parseFloat(randomNumber).toFixed(1) * 10
   
    slotDisplayWindow.innerHTML = `${slotValue}`
}

function addSlotNumbers() {
    const slotValues = []
    let slotValue = 0

    // Grab the numbers that are being displayed
    for(let i = 0; i < slotDisplayWindows.length; i++) {
        slotValues.push(slotDisplayWindows[i].innerHTML)
    };

    // Add them up
    slotValue = Number.parseInt(slotValues[0]) + 
        Number.parseInt(slotValues[1]) + 
        Number.parseInt(slotValues[2])

    return slotValue
}

function winCondition(slotValue) {
    // Pass that number into your list of win/lose conditions

    if(slotValue > 21) {
        // Add/Subtract from the bank
        bank += currentBet * 2
        // You can toggle "You Win" Window to display on a win
        
    } else if (slotValue > 15 && slotValue < 21) {
        bank += currentBet + 100
        // You can toggle "You Win" Window to display on a win

    } else if(slotValue > 10 && slotValue < 15) {
        bank += currentBet + 50
        // You can toggle "You Win" Window to display on a win

    } else if(slotValue > 5 && slotValue < 10) {
        bank += currentBet + 25
        // You can toggle "You Win" Window to display on a win

    }
}

betButtons.forEach(button => { // <- refers to every button found in the betButtons

    button.addEventListener('click', function gameCalculations() {
        //create fuctions for each option
        if(button.id=="minBet"){
            bank -= 25
            currentBet += 25
        } else {
            bank -= 100
            currentBet += 100
        }

        console.log(`bank: ${bank}`)
        console.log(`currentBet: ${currentBet}`)

        slotDisplayWindows.forEach(slotDisplayWindow => {
            playGame(slotDisplayWindow)
        })

        const slotValue = addSlotNumbers()
        winCondition(slotValue)

        // Reset the currentBet
        currentBet = 0
        
        // Target "Amount Left" and update the innerHTML with bank
        document.querySelector('#amountLeftTxt').innerHTML = `Amount left: $${bank}`
    })

})