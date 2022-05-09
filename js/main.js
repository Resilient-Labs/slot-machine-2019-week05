const amount = document.getElementById('amount')
const reel1 = document.getElementById('reel1')
const reel2 = document.getElementById('reel2')
const reel3 = document.getElementById('reel3')
const btn5 = document.getElementById('min')
const btn50 = document.getElementById('max')
const message = document.getElementById('message')

// going to randomly generate any number from one to five
function getRandomNum() {
    return Math.ceil(Math.random() * 5)
}

function bet5Dollars() {
    if (amount.innerText <= '0') {
        message.innerText = 'You\'re broke, go home!'
        document.querySelector('#secondMessage').innerText = 'Please stop betting. Refresh or quit it!!'
        amount.style.color = '#Ee2c15'
        message.style.color = '#Ee2c15'
        return
        //return will stop the function so you can't keep betting or running the function.
    }
    reel1.innerText = getRandomNum()
    reel2.innerText = getRandomNum()
    reel3.innerText = getRandomNum()
    message.innerText = 'Welcome to the Casino!'

    if (reel1.innerText === reel2.innerText && reel1 .innerText === reel3.innerText) {
        const currentMoney = parseInt(amount.innerText) + 50
        amount.innerText = currentMoney
    } else {
        const currentMoney = parseInt(amount.innerText) - 5
        amount.innerText = currentMoney
    }
}

function bet50Dollars() {
    if (amount.innerText <= '0') {
        message.innerText = 'You\'re broke, go home!'
        document.querySelector('#secondMessage').innerText = 'Please stop betting. Refresh or quit it!!'
        amount.style.color = '#Ee2c15'
        message.style.color = '#Ee2c15'
        return
        //return will stop the function so you can't keep betting or running the function.
    } else if (amount.innerText <= 49) {
        message.innerText = 'You don\'t have enough money to bet that much!'
        return
    }

    reel1.innerText = getRandomNum()
    reel2.innerText = getRandomNum()
    reel3.innerText = getRandomNum()

    if (reel1.innerText === reel2.innerText && reel1 .innerText === reel3.innerText) {
        const currentMoney = parseInt(amount.innerText) + 500
        amount.innerText = currentMoney
    } else {
        const currentMoney = parseInt(amount.innerText) - 50
        amount.innerText = currentMoney
    }
}

btn5.addEventListener('click', bet5Dollars)
btn50.addEventListener('click', bet50Dollars)