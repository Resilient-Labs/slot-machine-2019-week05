document.querySelector('#play').addEventListener('click', playGame)
let bankBalance = 1000

function playGame() {

let myArray = ['<img src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg?quality=75&auto=webp" alt="">', '<img src="https://imageio.forbes.com/specials-images/imageserve/62aa51710c3e65f16ed3b373/Manchester-United-v-Atalanta--Group-F---UEFA-Champions-League/0x0.jpg?format=jpg&crop=1928,1315,x214,y48,safe&width=960" alt="">', '<img src="https://qph.cf2.quoracdn.net/main-qimg-20c935639fcd9792f35712debf86726f.webp" alt="">', '<img src="https://cdn.britannica.com/72/139472-050-E733BAAF/Xavi-FC-Barcelona-football-match-2009.jpg" alt="">', '<img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte9d1a15b99db144b/60db23cb22d24e38a388af70/a4db7e31ab71857fa99b25a6d39744fa273e17fa.png" alt="">']

let result1 = document.querySelector('#result1')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let betAmount = document.querySelector('#bet-select').value
let amount = document.querySelector('#amount')

let slot1 = myArray[Math.floor(Math.random() *5)]

let slot2 = myArray[Math.floor(Math.random() *5)]

let slot3 = myArray[Math.floor(Math.random() *5)]

if ( slot1===slot2 && slot2===slot3){
    img1.innerHTML = slot1
    img2.innerHTML = slot2
    img3.innerHTML = slot3
    result1.innerHTML = 'Winner Winner Chicken Dinner'
    bankBalance = (parseInt(betAmount) *10) + bankBalance
    amount.innerHTML = bankBalance
    
}else{
    img1.innerHTML = slot1
    img2.innerHTML = slot2
    img3.innerHTML = slot3
    result1.innerHTML = 'You Lost'
    bankBalance = bankBalance - parseInt(betAmount) 
    amount.innerHTML = bankBalance
} 

if ( bankBalance <= 0 ) {
    alert('You lost all your money the house will reset your bank balance')
    bankBalance = 1000
    amount.innerHTML = bankBalance
} 

}