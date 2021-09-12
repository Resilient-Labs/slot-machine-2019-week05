let balance = $1000
let rembal =document.querySelector(".balance");
balance.innerHTML =balance

let valueOfBet=document.querySelector('.betOptions')
let spinWheel=document.querySelector('.spinButton')


let reel1=document.querySelector(".secOne")
let reel2=document.querySelector(".secTwo")
let reel3=document.querySelector(".secThree")

let balance=document.querySelector('#balance')


let reels=document.getElementsByClassName('reel')

function balance(){
    spin()
}


function reelspin(){
  let colors=['images/raspberry.png', 'images/num7.png', 'images/dice.png', 'images/cloverleaf.png', 'images/cherry.jpg', 'images/bigwin.png']
  let secOne=
  let secTwo=
  let secThree=

  for (let i=0; i<reels.length; i++){
      const wheel = reels[i]
      let index=Math.floor(Math.random()*colors.length)
      reel.style.backgroundImage = `url(\'${images[index]}\')`
      if (i===0){
          reel1=index
      }else if (i===1){
          reel2=index
      }else if(i===2){
          reel3=index
      }
  }


document.querySelector('button').addEventListener('click', spinrheel)

document.querySelector('section').addEventListener('click', rotate)
let degrees = 0
function rotate(box){
  box.target.style.transform = 'rotate(75deg)'
}
