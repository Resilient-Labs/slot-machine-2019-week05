
document.getElementById('spin').addEventListener('click', spinWheel)
document.getElementById('bet').addEventListener('click', bet)
document.getElementById('maxBet').addEventListener('click', maxBet)
document.getElementById('total').addEventListener('click', money)

//music 

let musicCount = 1

document.getElementById('music').addEventListener('ended', function(){
   this.currentTime = 0;
   if(musicCount <= 3){
      this.play();
   }
   musicCount++;
}, false);



// slots 
let firstSlot =  document.querySelector('#firstItem')
let secondSlot = document.querySelector('#secondItem')
let thirdSlot = document.querySelector('#thirdItem')


//amount & reward
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

let amount = document.getElementById('amount')
let balance = 1000
amount.innerText = formatter.format(balance)

function money(){
    balance += 1000
    amount.innerText = formatter.format(balance)
}

let reward = 0



//spin function
function spinWheel(){
   
    document.getElementById('music').play() //adding music when player starts

    slot1 = reelOne()
    slot2 = reelTwo()
    slot3 = reelThree()
   
    if(reward === 0){
        document.querySelector('h1').innerText = 'add bet!'
    }
    else if(balance < 0){
        document.querySelector('h1').innerText = 'add money!'
        alert('add money')
    }
    else if(slot1 === slot2 && slot1 === slot3){

        document.querySelector('#winner').play()

        document.querySelector('h1').innerText = 'Winner!'
        balance += (reward * 3)

        amount.innerText = formatter.format(balance)

        document.getElementById('rewardMoney').innerText = `You Won ${formatter.format(reward * 3)}!`
    }else {
        document.querySelector('h1').innerText = 'Try Again!'
        reward = 0
        document.getElementById('rewardMoney').innerText = ''
    }
    
    amount.innerText = formatter.format(balance)
}

//bet 
function bet(){
    let coin = document.getElementById('coin')
    if(balance <= 0){
        document.getElementById('rewardMoney').innerText = ''
        document.querySelector('h1').innerText = 'add money!'
    }
    else{
        coin.currentTime = 0
        coin.volume = 0.2
        coin.play()
        reward += 5
        balance -= 5
        document.getElementById('rewardMoney').innerText = `Reward: ${formatter.format(reward)} x 3!`
        document.querySelector('h1').innerText = ''
    }
    
    amount.innerText = formatter.format(balance)
    console.log(`reward: ${reward}`);
}

function maxBet(){
        let coin = document.getElementById('coin')
    if(balance <= 0){
        document.getElementById('rewardMoney').innerText = ''
        document.querySelector('h1').innerText = 'add money!'
    }else{
        coin.currentTime = 0
        coin.volume = 0.2
        coin.play()
        reward += 50
        balance -= 50
        document.getElementById('rewardMoney').innerText = `Reward: ${formatter.format(reward)} x 3!`
        document.querySelector('h1').innerText = ''
    }
    
    amount.innerText = formatter.format(balance)
    console.log(`reward: ${reward}`);

}

//reel
function checkSlotOne(){
    let random = Math.floor(Math.random() * 5 + 1)
    if(reward === 0){
        document.querySelector('h1').innerText = 'add bet!'
    }
    else if(random === 0){
        return 0
    }
    else if(random === 1){
        return 1
    }
    else if(random === 2){
        return 2
    }
    else if(random === 3){
        return 3
    }else if(random === 4){
        return 4
    }else if(random === 5){
        return 5
    }
    
}

function reelOne(){
    let numbers = checkSlotOne()
    console.log(numbers);

    if(numbers === 0){
        firstSlot.style.backgroundPositionY = '5px'
        firstSlot.style.backgroundPositionX = '10px'
        return 0
    }
    else if(numbers === 1){
        firstSlot.style.backgroundPositionY = '-170px'
        firstSlot.style.backgroundPositionX = '15px'
        return 1 
    }
    else if(numbers === 2){
        firstSlot.style.backgroundPositionY = '-325px'
        firstSlot.style.backgroundPositionX = '5px'
        return 2
    }
    else if(numbers === 3){
        firstSlot.style.backgroundPositionY = '-495px'
        firstSlot.style.backgroundPositionX = '10px'
        return 3
    }else if(numbers === 4){
        firstSlot.style.backgroundPositionY = '-660px'
        firstSlot.style.backgroundPositionX = '10px'
        return 4
    }else if(numbers === 5){
        firstSlot.style.backgroundPositionY = '-860px'
        firstSlot.style.backgroundPositionX = '20px'
        return 5
    }
    
}


function checkSlotTwo(){
    let random = Math.floor(Math.random() * 5 + 1)

    if(reward === 0){
        document.querySelector('h1').innerText = 'add bet!'
    }
    else if(random === 0){
        return 0
    }
    else if(random === 1){
        return 1
    }
    else if(random === 2){
        return 2
    }
    else if(random === 3){
        return 3
    }else if(random === 4){
        return 4
    }else if(random === 5){
        return 5
    }
}

function reelTwo(){
    let numbers = checkSlotTwo()
    console.log(numbers);

    if(numbers === 0){
        secondSlot.style.backgroundPositionY = '5px'
        secondSlot.style.backgroundPositionX = '10px'
        return 0
    }
    else if(numbers === 1){
        secondSlot.style.backgroundPositionY = '-170px'
        secondSlot.style.backgroundPositionX = '15px' 
        return 1 
    }
    else if(numbers === 2){
        secondSlot.style.backgroundPositionY = '-325px'
        secondSlot.style.backgroundPositionX = '5px'
        return 2
    }
    else if(numbers === 3){
        secondSlot.style.backgroundPositionY = '-495px'
        secondSlot.style.backgroundPositionX = '10px'
        return 3
    }else if(numbers === 4){
        secondSlot.style.backgroundPositionY = '-660px'
        secondSlot.style.backgroundPositionX = '10px'
        return 4
    }else if(numbers === 5){
        secondSlot.style.backgroundPositionY = '-860px'
        secondSlot.style.backgroundPositionX = '20px'
    }
}


function checkSlotThree(){
    let random = Math.floor(Math.random() * 5 + 1)
    
    if(reward === 0){
        document.querySelector('h1').innerText = 'add bet!'
    }
    else if(random === 0){
        return 0
    }
    else if(random === 1){
        return 1
    }
    else if(random === 2){
        return 2
    }
    else if(random === 3){
        return 3
    }else if(random === 4){
        return 4
    }else if(random === 5){
        return 5
    }
    
}

function reelThree(){
    let numbers = checkSlotThree()
    console.log(numbers);

     if(numbers === 0){
        thirdSlot.style.backgroundPositionY = '5px'
        thirdSlot.style.backgroundPositionX = '10px'
        return 0
    }
    else if(numbers === 1){
        thirdSlot.style.backgroundPositionY = '-170px'
        thirdSlot.style.backgroundPositionX = '15px'
        return 1 
    }
    else if(numbers === 2){
        thirdSlot.style.backgroundPositionY = '-325px'
        thirdSlot.style.backgroundPositionX = '5px'
        return 2
    }
    else if(numbers === 3){
        thirdSlot.style.backgroundPositionY = '-495px'
        thirdSlot.style.backgroundPositionX = '10px'
        return 3
    }
    else if(numbers === 4){
        thirdSlot.style.backgroundPositionY = '-660px'
        thirdSlot.style.backgroundPositionX = '10px'
        return 4
    }else if(numbers === 5){
        thirdSlot.style.backgroundPositionY = '-860px'
        thirdSlot.style.backgroundPositionX = '20px'
        return 5
    }
}