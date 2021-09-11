document.querySelector('#tryButton').addEventListener('click', checkForWin)

function add(){
    let moneyTotal = Number(document.querySelector("#moneyLeft").innerText)
    let bet = Number(document.querySelector("#customBet").value)
    console.log(moneyTotal)
    document.querySelector('#moneyLeft').innerHTML = moneyTotal + bet
}

function minus(){
    let moneyTotal = Number(document.querySelector("#moneyLeft").innerText)
    let bet = Number(document.querySelector("#customBet").value)
    console.log(moneyTotal)
    document.querySelector('#moneyLeft').innerHTML = moneyTotal - bet
}

function getRandomNumber(){
    let randomNumber = Math.ceil((Math.random() * 5))
    if (randomNumber <= 1){
        return 'slot1.png'
    }
    else if (randomNumber <= 2){
        return 'slot2.png'
    }
    else if (randomNumber <= 3){
        return 'slot3.png'
    }
    else if (randomNumber <= 4){
        return 'slot4.png'
    }
    else if (randomNumber <= 5){
        return 'slot5.png'
    }
}

function checkForWin(){
    let slot1= getRandomNumber()
    let slot2= getRandomNumber()
    let slot3= getRandomNumber()
    console.log(slot1)
    console.log(slot2)
    console.log(slot3)
    document.querySelector('.left').src = slot1
    document.querySelector('.middle').src = slot2
    document.querySelector('.right').src = slot3
    if (slot1 === slot2 && slot2 === slot3){
        console.log('You Win')
        add()
        document.querySelector('.winOrLose').innerHTML = "You Won!" 
    }
    else {
        console.log('You Lose')
        minus()
        document.querySelector('.winOrLose').innerHTML = "You Lost..." 
    }
}

//totalMoney varialbe, checkForWin function if(won)//addMoneyTotal else//removeMoneyTotal let slot1 = Math.random return
//math floor rounds down and math seal rounds up

//delete buttons and add info that its a min bet of 5 and a max bet of 50