document.querySelector('#minBet').addEventListener('click', minLever) // button for min bet
document.querySelector('#maxBet').addEventListener('click', maxLever) // button for max bet
document.querySelector('#smAudio').addEventListener('click', minLever)//add event for when min or max bet, smAudio plays short slot machine audio file
// when min level gets clicked resultmsg is displayed as block
const slotone = document.getElementById('slotOne') // 1st number in the slot machine
const slottwo = document.getElementById('slotTwo') // 2nd number in the slot machine
const slotthree = document.getElementById('slotThree') // 3rd number in the slot machine
const money = document.getElementById('playerMoney') // Amount of money player has left
const min = document.getElementById('minBet') // min js variable
const max = document.getElementById('maxBet') // max js variable
const result = document.getElementById('missionResult') // Message for win, lose or 0 money
const smMusic = document.getElementById('smAudio')// smAudio js variable
const smJackMusic = document.getElementById('JackAudio')// smAudio js variable
const smLoseMusic = document.getElementById('smLoseAudio')// smAudio js variable

let showmsg = document.querySelector(".resultMsg")
function showHiddenMsg(){
   showmsg.style.display = 'block'
}

//function to create random number for slots 3 times
function randomNumGen(){
    return Math.ceil(Math.random() * 5);
}
console.log(randomNumGen());

function randomNumGenTwo(){
    return Math.ceil(Math.random() * 5);
}
console.log(randomNumGenTwo());

function randomNumGenThree(){
    return Math.ceil(Math.random() * 5);
}
console.log(randomNumGenThree());

function slots(){
slotone.innerText = randomNumGen()
slottwo.innerText = randomNumGenTwo()
slotthree.innerText = randomNumGenThree()
}

document.getElementById("#audioOne")
let playsm = document.querySelector('#audioOne')
let count = 1
function playSlotMusic() {
    if(count === 1){
    playsm.play()
    playsm.currentTime = 0
}
}

function minLever() {
    slotone.innerText = randomNumGen()
    slottwo.innerText = randomNumGen()
    slotthree.innerText = randomNumGen()
    
    if (money.innerText <= 0){
    result.innerText = 'No more MI6 blood money Bond? Looks like you do have time to die. - Le chefre'
        return showHiddenMsg()
    }
    else if (slotone.innerText === slottwo.innerText && slotone.innerText === slotthree.innerText) {
        newMoney = parseInt(money.innerText) + 50
        money.innerText = newMoney
        playSlotMusic()
        showHiddenMsg()
        result.innerText = 'JACKPOT! Nice work Bond. - M'
       
    } else if (slotone.innerText !== slottwo.innerText && slotone.innerText !== slotthree.innerText) {
        lessMoney = parseInt(money.innerText) - 50
        money.innerText = lessMoney
        playSlotMusic()
        showHiddenMsg()
        result.innerText = 'Your luck is running out Bond, you have to win this! - Felix Leiter'
    }
}

function maxLever() {
    slotone.innerText = randomNumGen()
    slottwo.innerText = randomNumGen()
    slotthree.innerText = randomNumGen()

    if (money.innerText <= 0){
        result.innerText = 'No more MI6 blood money Bond? Looks like you do have time to die. - Le chefre'
        return showHiddenMsg()
    }
    else if(slotone.innerText === slottwo.innerText && slotone.innerText === slotthree.innerText){
        newMoney = parseInt(money.innerText) + 100
        money.innerText = newMoney
        playSlotMusic()
        showHiddenMsg()
        result.innerText = 'JACKPOT! Nice work Bond. - M'
    }  else if(slotone.innerText !== slottwo.innerText && slotone.innerText !== slotthree.innerText){
        lessMoney = parseInt(money.innerText) - 100
        money.innerText = lessMoney
        playSlotMusic()
        showHiddenMsg()
        result.innerText = 'Your luck is running out Bond, you have to win this! - Felix Leiter'
    } 
}

console.log(money.innerText)
console.log(result.innerText)

// Leonard Constant helped me shorten the audio file and added the fade out. it used to be 12 seconds long... felt like forever. 