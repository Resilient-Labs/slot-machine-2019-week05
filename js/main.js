document.getElementById("play").addEventListener("click", play )
// document.getElementById("1000000$").addEventListener("click", betMax )
// document.getElementById("100$"). addEventListener("click", betMin)
let reelOne=document.getElementById('sOne')
let reelTwo=document.getElementById('sTwo')
let reelThree=document.getElementById('sThree')
let mula = document.getElementById ('mula')
let playerMoney= 1000000
function bestFive(){console.log('YouBetFive')}
// let minBetBtn = document.getElementById("minBet");
// minBetBtn.addEventListener("click", betFive );
// let maxBetBtn = document.getElementById("maxBet");
// minBetBtn.addEventListener("click", betSix );
function betSix(){console.log("YouBetSix")}
function play(){
    console.log(Number(mula.innerText) , Number(document.querySelector('#money').value))
if(Number(mula.textContent) >= Number(document.querySelector('#money').value)){
let sOne = Math.ceil( Math.random()*6 )
reelOne.innerText = sOne
console.log(sOne)
let sTwo = Math.ceil( Math.random()*6 )
reelTwo.innerText = sTwo
let sThree = Math.ceil( Math.random()*6 )
reelThree.innerText= sThree
if (sOne=== sTwo && sTwo===sThree){
    console.log('win')
    winMoney ()
}
else {
    console.log('try again')
    loseMoney()
}
}
}
function winMoney(){
    playerMoney += document.getElementById
  ('money').value * 10
    mula.innerText= playerMoney
}
function loseMoney(){
    playerMoney -= document.getElementById
    ('money').value
    mula.innerText= playerMoney
}
 