let bal = 50000
let bet;
let icon = ['<img src="images/facebook.png">' , '<img src="images/instagram.png">' , '<img src="images/twitter.png">' , '<img src="images/whatsapp.png">', '<img src="images/linkedin.png">'] 
let spot1 = document.querySelector('#pic1')
let spot2 = document.querySelector('#pic2')
let spot3 = document.querySelector('#pic3')

let betting = document.querySelector('#bets')
document.querySelector('#button1').addEventListener('click', b1)
document.querySelector('#button2').addEventListener('click', b2)
document.querySelector('#button3').addEventListener('click', b3)
document.querySelector('#button4').addEventListener('click', b4)
document.querySelector('#button5').addEventListener('click', b5)
document.querySelector('#button6').addEventListener('click', b6)
document.querySelector('#spin').addEventListener('click', spin)
document.querySelector('#refill').addEventListener('click', fill)
function b1(){
    bet =  1
    console.log(bet)
   betting.innerHTML = bet
}
function b2(){
    bet = 25
    console.log(bet)
    betting.innerHTML = bet
}
function b3(){
    bet = 50
    console.log(bet)
    betting.innerHTML = bet
}
function b4(){
    bet = 100
    console.log(bet)
    betting.innerHTML = bet
}
function b5(){
    bet =  250
    console.log(bet)
    betting.innerHTML = bet
}
function b6(){
    bet = bal
    console.log(bet)
    betting.innerHTML = bet
}
function spin(){
    let reel1 = Math.floor(Math.random() * 5)
    let reel2 = Math.floor(Math.random() * 5)
    let reel3 = Math.floor(Math.random() * 5)

    spot1.innerHTML = icon [reel1]
    spot2.innerHTML = icon [reel2]
    spot3.innerHTML = icon [reel3]

    if(bet === undefined){
        alert('You Must Select A Bet.')
    }
    
    else if(reel1 === 0 && reel2 === 0 && reel3 === 0){
        bal = bal + (bet * 5)
        document.querySelector('#bal').innerHTML = bal
        document.querySelector('#result').innerHTML = 'Jackpot!'
    }
    
    else if(reel1 === reel2 && reel1 === reel3){
        bal = bal + bet
        document.querySelector('#bal').innerHTML = bal
        document.querySelector('#result').innerHTML = 'You Win!'
    }
    
    else if(reel1 === reel2 || reel1 === reel3 || reel2 === reel3){
        bal = bal + (bet * .5)
        document.querySelector('#bal').innerHTML = bal
        document.querySelector('#result').innerHTML = 'You Win Half!'
    }
    
    else{
        bal = bal - bet
        document.querySelector('#bal').innerHTML = bal
        document.querySelector('#result').innerHTML = 'You Lose!'
    }
    
    if(bal < 0){
        alert('Balance Empty!')
        bal = 0
        document.querySelector('#bal').innerHTML = bal
    }
}
function fill(){
    bal = 10000
    document.querySelector('#bal').innerHTML = bal
    document.querySelector('#result').innerHTML = 'Balance Refilled!'
}

document.querySelector('#bal').innerHTML = bal

