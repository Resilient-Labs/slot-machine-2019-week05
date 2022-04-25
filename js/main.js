const maxBtn = document.getElementById('max') //button
const minBtn = document.getElementById('min') //button
const restartBtn = document.getElementById('restartBtn')//button
const walletAmount = document.getElementById('walletAmount') //span
const reel1 = document.getElementById('reel1') //section
const reel3 = document.getElementById('reel3') //section
const reel2 = document.getElementById('reel2') //section
const message = document.getElementById('message') //h1

function getRandomNumber(){
    return Math.ceil(Math.random() * 5)
}


function addBet5Amount(){
    if(walletAmount.innerText <= '0'){
        walletAmount.innerText = '0'
        message.innerText = 'You\'ve gambled away the wagon. The journey ends'
        restartBtn.style.backgroundColor = 'lightgreen'
        return
    }

    reel1.value = getRandomNumber()
    reel2.value = getRandomNumber()
    reel3.value = getRandomNumber()

    if(reel1.value === reel2.value && reel1.value === reel3.value){
        walletAmount.innerText = parseInt(walletAmount.innerText) + 5
        message.innerText = 'You can get a doctor for Sarah\'s dysentry'
    }else{
        walletAmount.innerText = parseInt(walletAmount.innerText) - 5
        message.innerText = 'You\'re family is thinking to abandon you on the trail.' 
    }

    reel1.style.backgroundPosition = getPictureAssignment(reel1.value)
    reel2.style.backgroundPosition = getPictureAssignment(reel2.value)
    reel3.style.backgroundPosition = getPictureAssignment(reel3.value)
}

function addBet50Amount(){

    if(walletAmount.innerText <= '0'){
        message.innerText = 'Starvation. You\'ve bet all your food.'
        walletAmount.innerText = '0'
        restartBtn.style.backgroundColor = 'lightgreen'
        return console.log('Not enough funds')
    }    
    reel1.value = getRandomNumber()
    reel2.value = getRandomNumber()
    reel3.value = getRandomNumber()
    
    if(reel1.value === reel2.value && reel1.value === reel3.value){
        walletAmount.innerText = parseInt(walletAmount.innerText) + 50
        message.innerText = 'You\'ll have the biggest farm in Oregon.'
    } else{
        walletAmount.innerText = parseInt(walletAmount.innerText) - 50
        message.innerText = 'No money for cloth. You\'ll freeze at this rate.'
    }

    reel1.style.backgroundPosition = getPictureAssignment(reel1.value)
    reel2.style.backgroundPosition = getPictureAssignment(reel2.value)
    reel3.style.backgroundPosition = getPictureAssignment(reel3.value)
}

function getPictureAssignment(n1){
    const wagon = '50% -0.5%' 
    const bag = '50% 74%'
    const cards = '50% 22%' 
    const gold = '50% 98%'
    const snakes = '50% 48%'

    if(n1 == 1){
        return wagon
    }else if(n1 == 2){
        return bag
    }else if(n1 == 3){
        return cards
    }else if(n1 == 4){
        return gold
    }else if(n1 == 5){
       return snakes 
    }
}

function refillWallletAmount(){
    restartBtn.style.backgroundColor = 'lightgray'
    if(walletAmount.innerText === '0'){
        walletAmount.innerText = '250'
        message.innerText = 'Back Again? A dang shame to your folks.'
    }
}

minBtn.addEventListener('click', addBet5Amount)
maxBtn.addEventListener('click', addBet50Amount)
restartBtn.addEventListener('click', refillWallletAmount)