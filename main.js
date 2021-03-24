let leftSlot = document.getElementById('leftSlot')
let middleSlot = document.getElementById('middleSlot')
let rightSlot = document.getElementById('rightSlot')
const buttonFive = document.getElementById('buttonFive')
const buttonFifty = document.getElementById('buttonFifty')
const lever = document.getElementById('lever')
const spinButton = document.getElementById('spinButton')
const mjOne = document.getElementById('mjOne')
const kobeOne = document.getElementById('kobeOne')
const paulOne = document.getElementById('paulOne')
const lebronOne = document.getElementById('lebronOne')
const trophyOne = document.getElementById('trophyOne')
const mjTwo = document.getElementById('mjOne')
const kobeTwo = document.getElementById('kobeOne')
const paulTwo = document.getElementById('paulOne')
const lebronTwo = document.getElementById('lebronOne')
const trophyTwo = document.getElementById('trophyOne')
const mjThree = document.getElementById('mjOne')
const kobeThree = document.getElementById('kobeOne')
const paulThree = document.getElementById('paulOne')
const lebronThree = document.getElementById('lebronOne')
const trophyThree = document.getElementById('trophyOne')
let pocket = document.getElementById('pocket')
let currentBet = document.getElementById('currentBet')
let money = 1000
let betDollars = 0
// mjOne = 1
// kobeOne = 2
// paulOne = 3
// lebronOne = 4
// trophyOne = 5
// mjTwo = 1
// kobeTwo = 2
// paulTwo = 3
// lebronTwo = 4
// trophyTwo = 5
// mjThree = 1
// kobeThree = 2
// paulThree = 3
// lebronThree = 4
// trophyThree = 5
let spinPic = document.getElementsByClassName('reel')
function betFive (){
  betDollars = 5
  currentBet.innerHTML = 'Your bet is ' + betDollars + ' dollars'

}
function betFifty (){
  betDollars = 50
  currentBet.innerHTML = 'Your bet is ' + betDollars + ' dollars'

}

buttonFive.onclick = betFive
pocket.innerHTML = 'You have ' + money + ' dollars'

buttonFifty.onclick = betFifty
pocket.innerHTML = 'You have ' + money + ' dollars'


// this is for when you pull the lever
function spin(){
money = money - betDollars
let stopOne = Math.floor(Math.random() * 5 + 1)
let stopTwo = Math.floor(Math.random() * 5 + 1)
let stopThree = Math.floor(Math.random() * 5 + 1)
console.log (stopOne + '|' + stopTwo + '|' + stopThree)
leftSlot.style.animationIterationCount = stopOne
middleSlot.style.animationIterationCount = stopTwo
rightSlot.style.animationIterationCount = stopThree

let iwin = (stopOne === stopTwo) && (stopTwo === stopThree)
// The spinning of the wheel
if (iwin){
  money = money + betDollars * 10
  pocket.innerHTML = 'You have ' + money + ' dollars'
  alert ('You Won ' + betDollars * 10)
}
else{
  alert ('You Lost ' + '$' + betDollars)
  pocket.innerHTML = 'You have ' + money + ' dollars'
}

document.getElementById('earnings').innerText = `Your Earnings: \n ${money}`

var a = new slot(leftSlot, 30, 1)
var b = new slot(middleSlot, 45, 2)
var c = new slot(rightSlot, 70, 3)
  a.start()
  b.start()
  c.start()

}
lever.onclick = spin

console.log (Math.floor(Math.random() * 5 + 1))
console.log (Math.floor(Math.random() * 5 + 1))
console.log (Math.floor(Math.random() * 5 + 1))

console.log()

function slot(el, max, step){
  this.speed = 0; //speed of the slot at any point of time
this.step = step; //speed will increase at this rate
this.si = null; //holds setInterval object for the given slot
this.el = el; //dom element of the slot
this.maxSpeed = max; //max speed this slot can have
}

slot.prototype.start = function() {
    var _this = this
    let testA = this.el
    testA.style.left += 1000
}
