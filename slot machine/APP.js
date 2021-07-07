const reelOne =document.getElementById('imgReelOne')
const reelTwo= document.getElementById('imgReelTwo')
const reelThree=document.getElementById('imgReelThree')
const min=document.getElementById('betMin')
const max=document.getElementById('betMax')
const money=document.getElementById('displayMoney')
const start=document.getElementById('startGame')
const disBet=document.getElementById('displayBet')
let startMoney= 1000;
let bet=0;
let winnings=0;
let audio=document.getElementById('audio');
let maxAudio=document.getElementById('maxAudio');
let startAudio=document.getElementById('startAudio');
let images = ['cherries.jpeg', 'apples.jpeg', 'oranges.jpeg', 'lemon.jpg', 'mango.jpg','emoji.jpg']

function displayReel(){
  //  images are displayed and are cycled through after game is started
  let random1=Math.floor(Math.random()*images.length)
  let random2=Math.floor(Math.random()*images.length)
  let random3=Math.floor(Math.random()*images.length)
  // let random2=0
  // let random3=0
  reelOne.src="images/"+ images[random1]
  reelTwo.src="images/"+images[random2]
  reelThree.src="images/"+images[random3]
if(random1===random2 && random2===random3){
  displayWin()
}else{
  displayLose()
}

}
function displayWin(){
startMoney+=bet*10
  document.getElementById('displayMoney').innerHTML= startMoney;
  document.getElementById('Win').innerHTML= 'WINNER!!';
}
function displayLose(){
  bet=0;
  document.getElementById('displayBet').innerHTML=
  bet;
  document.getElementById('Win').innerHTML='';
}
function betMin(){
  // when i click on bet min it increases bet but decreases 5 from start money
  if(startMoney>=5){
    bet+=5
    startMoney=startMoney-5
    displayBet()
    displayMoney()
    audio.play();
  }


}

function betMax(){
  // when max bet is clicked the bet increases by 50 and the start money decreases by 50
  if(startMoney>50){
    bet+=50
    startMoney=startMoney-50
    displayBet()
    displayMoney()
    maxAudio.play()
  }

}

function displayBet(){
  // i want this to display the bet whatever bet for display is display interval
  document.getElementById('displayBet').innerHTML= `$${bet}, Your Bet`;

}

function displayMoney(){
  // i need this to display so get it in an innerHTML and call on it
  document.getElementById('displayMoney').innerHTML= `$${startMoney}, Your Earnings!`;

}


function startGame(){
  displayReel()
  startAudio.play()

}


min.onclick = () =>{
  betMin()

}
max.onclick=()=>{
  betMax()
}
start.onclick=()=>{
  startGame()
}
