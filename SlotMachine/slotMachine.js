const moneyInput = document.querySelector('#money')

const minBtn = document.querySelector('#minBet')
const twentyBtn = document.querySelector('#betTwenty')
const maxBtn = document.querySelector('#maxBet')

const firstRowNum = document.querySelector('#firstRow')
const secondRowNum = document.querySelector('#secondRow')
const thirdRowNum = document.querySelector('#thirdRow')

const msg = document.querySelector('#message')
const win = document.querySelector('#winnings')


const minBet = () => {
    moneyInput.value -= 5
    msg.innerText = "Bank:" + moneyInput.value
    console.log(moneyInput.value)
     if (moneyInput.value < 0){
        alert('Insert more Money')
        moneyInput.value = ""
        firstRowNumValue = Math.ceil(Math.random() * 0)
        firstRowNum.innerText = firstRowNumValue

        secondRowNumValue = Math.ceil(Math.random() * 0)
        secondRowNum.innerText = secondRowNumValue

        thirdRowNumValue = Math.ceil(Math.random() * 0)
        thirdRowNum.innerText = thirdRowNumValue
    }
        
    const firstRowNumValue = Math.ceil(Math.random() * 7)
    console.log(firstRowNumValue)
    firstRowNum.innerText = firstRowNumValue

    const secondRowNumValue = Math.ceil(Math.random() * 7)
    console.log(secondRowNumValue)
    secondRowNum.innerText = secondRowNumValue

    const thirdRowNumValue = Math.ceil(Math.random() * 7)
    console.log(thirdRowNumValue)
    thirdRowNum.innerText = thirdRowNumValue

    if (firstRowNumValue == secondRowNumValue && firstRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 10
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "Congrats you just won $10"
    }else if(firstRowNumValue == secondRowNumValue || firstRowNumValue == thirdRowNumValue || secondRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 2
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "Nice you got 2 matches, you win $2"
    }else{
        win.innerText = "sorry no matches, try again" 
    }
}



const twentyBet = () => {
    moneyInput.value -= 20
    msg.innerText = "Bank:" + moneyInput.value
    console.log(moneyInput.value)
     if (moneyInput.value < 0){
        alert('Insert more Money')
        moneyInput.value = ""
        firstRowNumValue = Math.ceil(Math.random() * 0)
        firstRowNum.innerText = firstRowNumValue

        secondRowNumValue = Math.ceil(Math.random() * 0)
        secondRowNum.innerText = secondRowNumValue

        thirdRowNumValue = Math.ceil(Math.random() * 0)
        thirdRowNum.innerText = thirdRowNumValue
    }

    const firstRowNumValue = Math.ceil(Math.random() * 7)
    console.log(firstRowNumValue)
    firstRowNum.innerText = firstRowNumValue

    const secondRowNumValue = Math.ceil(Math.random() * 7)
    console.log(secondRowNumValue)
    secondRowNum.innerText = secondRowNumValue

    const thirdRowNumValue = Math.ceil(Math.random() * 7)
    console.log(thirdRowNumValue)
    thirdRowNum.innerText = thirdRowNumValue

    if (firstRowNumValue == secondRowNumValue && firstRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 40
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "Congrats you just won $40"
    }else if(firstRowNumValue == secondRowNumValue || firstRowNumValue == thirdRowNumValue || secondRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 10
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "Nice you got 2 matches, you win $10"
    }else{
        win.innerText = "sorry no matches, try again" 
    }
}

const maxBet = () => {
    moneyInput.value -= 100
    msg.innerText = "Bank:" + moneyInput.value
    console.log(moneyInput.value)
    if (moneyInput.value < 0){
        alert('Insert more Money')
        moneyInput.value = ""
        firstRowNumValue = Math.ceil(Math.random() * 0)
        firstRowNum.innerText = firstRowNumValue

        secondRowNumValue = Math.ceil(Math.random() * 0)
        secondRowNum.innerText = secondRowNumValue

        thirdRowNumValue = Math.ceil(Math.random() * 0)
        thirdRowNum.innerText = thirdRowNumValue
    }

    const firstRowNumValue = Math.ceil(Math.random() * 7)
    console.log(firstRowNumValue)
    firstRowNum.innerText = firstRowNumValue

    const secondRowNumValue = Math.ceil(Math.random() * 7)
    console.log(secondRowNumValue)
    secondRowNum.innerText = secondRowNumValue

    const thirdRowNumValue = Math.ceil(Math.random() * 7)
    console.log(thirdRowNumValue)
    thirdRowNum.innerText = thirdRowNumValue

    if (firstRowNumValue == secondRowNumValue && firstRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 500
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "JACKPOT!!! You won $500"
    }else if(firstRowNumValue == secondRowNumValue || firstRowNumValue == thirdRowNumValue || secondRowNumValue == thirdRowNumValue){
        moneyInput.value = Number(moneyInput.value) + 50
        msg.innerText = "Bank:" + moneyInput.value
        win.innerText = "Nice you got 2 matches, you win $50"
    }else{
        win.innerText = "sorry no matches, try again" 
    }
}

minBtn.addEventListener('click', minBet)
twentyBtn.addEventListener('click', twentyBet)
maxBtn.addEventListener('click', maxBet)



// function spinMe()
// {
//     spinCycle=setInterval(rollOut,2)
// }

// function rollOut()
// {
//     const firstRowNumValue = Math.ceil(Math.random() * 7)
//     firstRowNum.innerText = firstRowNumValue

//     const secondRowNumValue = Math.ceil(Math.random() * 7)
//     secondRowNum.innerText = secondRowNumValue

//     const thirdRowNumValue = Math.ceil(Math.random() * 7)
//     thirdRowNum.innerText = thirdRowNumValue
// }
// function stopMe(){
//     clearInterval(spinCycle);
// }
