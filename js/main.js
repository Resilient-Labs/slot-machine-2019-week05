//User has a starting total of $1000
//User makes one bet per spin
//Min bet is $5, Max bet is $50
//Checks if the user has enough in their total to bet their chosen amount
//User spins or clicks to active the machine 
//Machine spins
//Machine stops
//If they all match, the user wins and they win their bet x10 (add to total)
//If not the user loses (subtract their bet from total)

let total = 1000
let bet
document.querySelector('.h4Total').innerText = total

// document.querySelector('#inpBet').value = bet

let arrImg = ['./pic/blue2.png', 
                './pic/gal2.png', 
                './pic/moon2.png', 
                './pic/planet2.png', 
                './pic/stars2.png']




document.querySelector('#buttClick').addEventListener('click', playSlot)


function playSlot(){
    
    bet = document.querySelector('#inpBet').value 

     if (total - bet < 0){
        alert('Not enough points')
    } else if (bet < 5 || bet > 50){
        alert('Invalid Bet')
    } else {

        randomizeSpin()

        console.log(bet)

        let slot0 = randomizeSpin()
        let slot1 = randomizeSpin()
        let slot2 = randomizeSpin()
    
        console.log(` ${slot0}, ${slot1}, ${slot2}`)
    
        document.querySelector('#imgSlot1').setAttribute('src', arrImg[slot0])
    
        document.querySelector('#imgSlot2').setAttribute('src', arrImg[slot1])
    
        document.querySelector('#imgSlot3').setAttribute('src', arrImg[slot2])
    
        if(slot0 === slot1 && slot0 === slot2){
            document.querySelector('h3').innerText = "You win"
            document.querySelector('h3').style.backgroundColor = "pink"

            console.log("You win!")
    
            total = total + (bet*10)
    
            document.querySelector('.h4Total').innerText = total
    
        } else {
            document.querySelector('h3').innerText = "Oh no! Try again."
            document.querySelector('h3').style.backgroundColor = "rgb(58, 180, 174)"
            console.log("Oh no! Try again")
    
            total = total - bet
    
            document.querySelector('.h4Total').innerText = total
        }

    }

}

function randomizeSpin(){
    return Math.floor(Math.random() * 5)
    
}

document.querySelector('#button5').addEventListener('click', bet5)

function bet5(){
    document.querySelector('#inpBet').value = '5'

    playSlot()
}

document.querySelector('#button50').addEventListener('click', bet50)

function bet50(){
    document.querySelector('#inpBet').value = '50'

    playSlot()
}

document.querySelector('.imgSlot').style.backgroundColor = "transparent"

function noRefresh(e){
    if(e.keyCode === 13){
        e.preventDefault()
        playSlot()
    }
    
}

document.querySelector('.inputBet').addEventListener('keypress', noRefresh)

document.querySelector('.buttRe').addEventListener('click', resetGame)

function resetGame(){
    total = 1000
    
    document.querySelector('.h4Total').innerText = total
}














    
