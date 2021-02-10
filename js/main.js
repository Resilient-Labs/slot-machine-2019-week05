/*Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet*/
const fruits = ['img/apple.png', 'img/pineapple.png', 'img/banana.png', 'img/lemon.png', 'img/mango.png']

const cash = document.querySelector('.cash-amount')
const winnings = document.querySelector('.winnings')
const bad = document.querySelector('#bad')
const reel1 = document.querySelectorAll('.reel-1 .strip .item')
const reel2 = document.querySelectorAll('.reel-2 .strip .item')
const reel3 = document.querySelectorAll('.reel-3 .strip .item')
const strip1 = document.querySelector('.reel-1 .strip')
const strip2 = document.querySelector('.reel-2 .strip')
const strip3 = document.querySelector('.reel-3 .strip')
const reels = [reel1, reel2, reel3]
const strips = [strip1, strip2, strip3]




document.querySelector('.lever').addEventListener('click', spin)


function spin() {
  console.log(reel1)
  let bet = Number(document.querySelector('.amount-to-bet').value)
  if(bet<=Number(cash.innerText) && bet >= 5 && bet <= 50){
    document.querySelector('.lever').disabled = true;
    setTimeout(function(){document.querySelector('.lever').disabled = false;},4000)
    bad.style.visibility = 'hidden'
    console.log(`spinning ${bet}`)

    //Assign a unique fruit in each item, within each reel
    let spins = []
    for (var i = 0; i < reels.length; i++) {
      let reel = Array.from(Array.from(reels)[i])
      let index = Math.floor(Math.random() * fruits.length)
      spins.push(index)
      for (var x = 0; x < reel.length; x++) {
        reel[x].style.backgroundImage = `url(${fruits[index%5]})`
        index++
      }
    }
    let win = true
    for (var i = 0; i < spins.length; i++) {
      win= spins[i]===spins[0] && win
    }

    //animate
    let timer =1000
    for (var i = 0; i < strips.length; i++) {
      //console.log(`Number of strips: ${strips.length}`);
      let currentStrip = strips[i]
      currentStrip.style.animation = 'spin .5s linear infinite'
      //console.log(`Current strip: ${i} ${strips[i]}`);
      timer += 1000
      //console.log(`Gonna set the other timer for ${strips[i]}`)
      setTimeout(function(){currentStrip.style.animation = 'spin ease-out'},timer)

    }

    setTimeout(function(){
      if(win) {
        cash.innerText = Number(cash.innerText) + bet*10
        winnings.innerText = Number(winnings.innerText) + bet*10
      }
      else {
        cash.innerText = Number(cash.innerText) - bet
        winnings.innerText = Number(winnings.innerText) - bet
      }
    }, timer)
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
