// Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// NEED TO INCLUDE
//5 items per reel x 3 reel (15 items)
// bet min buttom ($5) / bet max button ($50)
// output for total that updates based on win/loss
//start with $1000
//winning combos / win = 10x bet

//VARIABLES & DOM HANDLERS
let minBet = document.querySelector('#minBet') 
let maxBet = document.querySelector('#maxBet') 
let pictureArray = ['https://images.unsplash.com/photo-1610397857552-1ce126b56724?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxjYXNpbm98ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1522617889820-47708e025180?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhc2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1509101351424-8ac5ae0b5982?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNhc2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1512767254318-423c816efbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNhc2lub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1626183462405-f1469783dff2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNhc2lub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60']

let bet = 0
let total = 1000

//FUNCTIONS

function placeMinBet(){
    bet += 10
    document.querySelector('#betAmount').innerText = bet
    // console.log(bet)
}

function placeMaxBet(){
    bet += 100
    document.querySelector('#betAmount').innerText = bet
}


let placeBetsRunSlot = document.querySelector('#tryLuck')
placeBetsRunSlot.addEventListener('click', spinButton)



function spinButton(){
    bet = document.querySelector('#betAmount').innerText
    if (total - bet < 0) {
        alert('Pack it up!')
        bet = 0 
        total = 1000
        document.querySelector('#totalBalance').innerText = total
        document.querySelector('#betAmount').innerText = bet
    }else{
        let reel1 = slotSpinning()
        let reel2 = slotSpinning()
        let reel3 = slotSpinning()

        document.querySelector('#reel1').setAttribute('src', pictureArray[reel1])
        document.querySelector('#reel2').setAttribute('src', pictureArray[reel2])
        document.querySelector('#reel3').setAttribute('src', pictureArray[reel3])

        checkWinner()

        bet = 0
        document.querySelector('#betAmount').innerText = bet
    }
}

function slotSpinning(){
    return Math.floor(Math.random() * 5)
}


function checkWinner(){
    if (reel1 === reel2 && reel1 === reel3){
        total += (bet * 10)
        document.querySelector('#totalBalance').innerText = Number(total) + totalBalance
        document.getElementById('winningMessage').innerText = 'DO IT LIKE ITS YOUR BDAY'
                
    } else{
        total -= bet
        document.querySelector('#totalBalance').innerText = Number(total)
        document.getElementById('losingMessage').innerText = 'Not This Time Pal'
    }
}

let resetTheBet = document.querySelector('#resetBetAmount')
resetTheBet.addEventListener('click', resetBetAmount)

function resetBetAmount(){
    bet = 0
    total = 1000
    document.querySelector('#totalBalance').innerText = total
    document.querySelector('#betAmount').innerText = bet
}


//EVENT LISTENERS
minBet.addEventListener('click', placeMinBet) 
maxBet.addEventListener('click', placeMaxBet)


