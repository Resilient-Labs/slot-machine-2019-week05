const firstReel = document.querySelector("#reelOne")
const secondReel =document.querySelector("#reelTwo")
const thirdReel= document.querySelector("#reelThree")
const btn = document.querySelector("#go")
let maxBtn = document.querySelector("#max")
let minBtn = document.querySelector("#min")

function spin(){
  document.querySelector("h2").innerText = ""
  reelTurn(firstReel)
  reelTurn(secondReel)
  reelTurn(thirdReel)
  // compareResults(firstReel.innerText, secondReel.innerText, thirdReel.innerText) not necessary because it gets called below
  let result = compareResults(firstReel.innerText, secondReel.innerText, thirdReel.innerText)
  let bet = getBet()
  if (result){
    document.querySelector("h2").innerText = "You Win!"
    // setCash changes innerText of #cash, getCash gets innerText of #cash, getBet gets innerText of #bet
    setCash(getCash() + getBet())
  }else{
    document.querySelector("h2").innerText = "You Lose!"
    setCash(getCash() - getBet())
  }
}

function getCash(){
  return Number(document.querySelector("#cash").innerText)
}
function setCash(cash){
  document.querySelector("#cash").innerText = cash
}
function getBet(){
  return Number(document.querySelector("#bet").innerText)
}
function setBet(bet){
  document.querySelector("#bet").innerText = bet
}

function reelTurn(reel){
  const randomVal = Math.random()
  if(randomVal <= 0.2){
    reel.innerText = "500"
  }else if(randomVal >= 0.8){
    reel.innerText = "100"
  }else if(randomVal <= 0.4){
    reel.innerText = "200"
  }else if(randomVal <= 0.6){
    reel.innerText = "300"
  }else{
    reel.innerText="400"
  }
}

function compareResults(resultOne, resultTwo, resultThree){
  return (resultOne === resultTwo && resultTwo === resultThree) 
}

function betting(event){
  // console.log('calling setBet with', event.target.id);
  let bet = 0
  if(event.target.id === "max"){
    bet = 800
  }else if(event.target.id === "min"){
    bet = 300
  }
  setBet(bet)
}

btn.addEventListener("click", spin )
maxBtn.addEventListener("click", betting)
minBtn.addEventListener("click", betting)

// A Collaboration by: Dennis Trujillo & Mark Saltzman

