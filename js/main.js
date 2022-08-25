// user starts with 500 dollars stored in a variable
const imgArray = ['meeseeks.png','morty.png','picklerick.png','rick.png','pops.jpeg']
const imgLeft = document.querySelector('#imgLeft')
const imgMid = document.querySelector('#imgMid')
const imgRight = document.querySelector('#imgRight')

let playerMoney = 500 
let bet = 0


document.querySelector('#bet5').addEventListener('click', getBet)
document.querySelector('#bet100').addEventListener('click', getBet)
document.querySelector('#bet10').addEventListener('click', getBet)
document.querySelector('#bet20').addEventListener('click', getBet)
document.querySelector('#bet50').addEventListener('click', getBet)


document.getElementById('placeToSeeMoney').innerText = playerMoney

// user clicks on min bet and gets three random images 

function getRandomIndex(){
    let randomIndex = Math.floor(Math.random() * 5);
    return randomIndex
}

function getBet(event){
    bet = Number(event.target.value)

    if(playerMoney < bet){
        document.querySelector('#wonOrLost').innerText = 'Get Your Money Up and Come Back'
    }
    else{
        imgChange()
    }
}

function imgChange(){
    let num1 = getRandomIndex()
    let num2 = getRandomIndex()
    let num3 = getRandomIndex()
    
    imgLeft.src = './css/' + imgArray[num1]
    imgMid.src = './css/' + imgArray[num2]
    imgRight.src = './css/' + imgArray[num3]

    console.log(imgLeft.src)
    console.log(imgLeft)
    console.log(event.target.value)
    console.log(event.target.id)

    winConfirm(num1,num2,num3)
}

function winConfirm(num1,num2,num3){
    if(num1 === num2 && num2 === num3){
        document.querySelector('#wonOrLost').innerText = 'YOU WON'
        payOut()
    }
    else {
        document.querySelector('#wonOrLost').innerText = 'YOU LOST' 
        subtractMoney()
    }
}

function payOut(){
    playerMoney += bet
    document.querySelector('#placeToSeeMoney').innerText = playerMoney
}
function subtractMoney(){
    playerMoney -= bet
    document.querySelector('#placeToSeeMoney').innerText = playerMoney
}
