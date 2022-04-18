// help from Vonds' Early Bird Special


const amount = document.getElementById('amount')
const reel1 = document.getElementById('reel1')
const reel2 = document.getElementById('reel2')
const reel3 = document.getElementById('reel3')
const btn5 = document.getElementById('min')
const btn50 = document.getElementById('max')
const message = document.getElementById('message')


//randomly generates a number from 1-5 (ceil to round UP to 1)
function getRandomNum() {
    return Math.ceil(Math.random() * 5)
}

function bet5Dollars() {
    if(amount.innerText <= '0'){
        message.innerText = 'You have no more money. Go home!'
        return
    }
    reel1.innerText = getRandomNum()
    reel2.innerText = getRandomNum()
    reel3.innerText = getRandomNum()

    if(reel1.innerText === reel2.innerText && reel2.innerText === reel3.innerText){
        const currentMoney = parseInt(amount.innerText) + 50
        amount.innerText = currentMoney
        message.innerText = 'Winner Winner!'
    } else {
        const currentMoney = parseInt(amount.innerText) - 5
        amount.innerText = currentMoney
        message.innerText = 'Loser!'
    }
}

function bet50Dollars() {
    if(amount.innerText <= '0'){
        message.innerText = 'You have no more money. Go home!'
        return
    }
    reel1.innerText = getRandomNum()
    reel2.innerText = getRandomNum()
    reel3.innerText = getRandomNum()

    if(reel1.innerText === reel2.innerText && reel2.innerText === reel3.innerText){
        const currentMoney = parseInt(amount.innerText) + 100
        amount.innerText = currentMoney
        message.innerText = 'Winner Winner!'
    } else {
        const currentMoney = parseInt(amount.innerText) - 50
        amount.innerText = currentMoney
        message.innerText = 'Loser!'
    }
}

btn50.addEventListener('click', bet50Dollars)
btn5.addEventListener('click', bet5Dollars)




// add "you win" message
//create function for max bet $50




