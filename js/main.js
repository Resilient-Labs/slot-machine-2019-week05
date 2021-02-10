/*Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet*/
const reelOptions = 5
const reelNumber = 3
const chanceToWin = 5/60
const chances = 60

const fruits = ['img/apple.png', 'img/pineapple.png', 'img/banana.png', 'img/lemon.png', 'img/mango.png']

const cash = document.querySelector('.cash-amount')
const winnings = document.querySelector('.winnings')
const bad = document.querySelector('#bad')
const reel1 = document.querySelector('.reel-1')
const reel2 = document.querySelector('.reel-2')
const reel3 = document.querySelector('.reel-3')



document.querySelector('.lever').addEventListener('click', spin)


function spin() {
  let bet = Number(document.querySelector('.amount-to-bet').value)
  if(bet<=Number(cash.innerText) && bet >= 5 && bet <= 50){
    bad.style.visibility = 'hidden'
    console.log(`spinning ${bet}`)
    let spin = Math.floor(Math.random() * chances + 1)
    //winning case
    if(spin<=4){
      console.log('winner')
      let fruitNumber = Math.floor(Math.random() * 5 )
      reel1.style.backgroundImage = `url(${fruits[fruitNumber]})`
      reel2.style.backgroundImage = `url(${fruits[fruitNumber]})`
      reel3.style.backgroundImage = `url(${fruits[fruitNumber]})`
      cash.innerText = Number(document.querySelector('.cash-amount').innerText) + bet*10
      winnings.innerText = Number(document.querySelector('.winnings').innerText) + bet*10
    } else {
      console.log('loser')
      let reel1num = Math.floor(Math.random() * 5 )
      let reel2num = Math.floor(Math.random() * 5 )
      console.log(`${reel1num} ${reel2num}`);
      reel1.style.backgroundImage = `url(${fruits[reel1num]})`
      reel2.style.backgroundImage = `url(${fruits[reel2num]})`
      let reel3num = Math.floor(Math.random() * 5 )
      while(reel3num === reel2num && reel3num === reel1num) {
        reel3num = Math.floor(Math.random() * 5 )
      }
      reel3.style.backgroundImage = `url(${fruits[reel3num]})`
    }
    cash.innerText = Number(cash.innerText) - bet
    winnings.innerText = Number(winnings.innerText) - bet
  } else {
    console.log('bad bet');
    bad.style.visibility = 'visible'
  }

}

document.querySelector('.min-bet').addEventListener('click', minBet)
document.querySelector('.max-bet').addEventListener('click', maxBet)

function minBet(){
  document.querySelector('#bet-display').value = 5
}

function maxBet() {
  document.querySelector('#bet-display').value = 50
}
