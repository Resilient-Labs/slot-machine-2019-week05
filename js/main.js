let bankAmount = 25000
const total = document.querySelector('#total')
total.innerText = bankAmount
document.querySelector('#betNow').addEventListener('click', makeMoney)
let myLogos = ['<img src="img/fendi.png">' , '<img src="img/gucci.png">' , '<img src="img/hermes.png">' , '<img src="img/louis.png">' , '<img src="img/versace.png">' ]
let rowOne = document.querySelector('#picOne')
let rowTwo = document.querySelector('#picTwo')
let rowThree = document.querySelector('#picThree')
let message = document.querySelector('#result')

function makeMoney(){
     if(bankAmount <= 0){
        return alert('Contact 1800-Gambling')
     }
    let betAmount = Number(document.querySelector('#betPicker').value)
          

    let reelOne = Math.floor(Math.random() * 5)
    let reelTwo = Math.floor(Math.random() * 5)
    let reelThree = Math.floor(Math.random() * 5)


    rowOne.innerHTML = myLogos[reelOne]
    rowTwo.innerHTML = myLogos[reelTwo]
    rowThree.innerHTML = myLogos[reelThree]

    
    if(reelOne===reelTwo && reelOne===reelThree) {
        bankAmount = bankAmount + betAmount
        total.innerText = bankAmount
        message.innerText = 'winner!'

    } 
    else{
        bankAmount = bankAmount - betAmount
        total.innerText = bankAmount
        message.innerText = 'you lose!'
    }


}



