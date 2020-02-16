let wallet = document.getElementById("wallet");
let leftSlot = document.getElementById("leftSlot");
let middleSlot = document.getElementById("middleSlot");
let rightSlot = document.getElementById("rightSlot");
let startButton = document.getElementById("startButton");
let betDropDown = document.getElementById("placeBets")
wallet.textContent = `$ ${1000}`


const slotVariables = [1,2,3,4,5];
// const assets = ["./assets/img1.jpeg", ]
// image.src = assets[0]
let win = false
// let bet

function genNum(){
  return Math.floor(Math.random() * 5 )
}

// betDropDown.addEventListener("change", (e)=>{
//   bet = betDropDown.value;
//
// })

startButton.addEventListener("click", (e)=>{
  const previousValue = Number(wallet.textContent.split(" ")[1])
  const bet = betDropDown.value;
  if(previousValue >= bet){

    leftSlot.textContent = slotVariables[genNum()]
    middleSlot.textContent = slotVariables[genNum()]
    rightSlot.textContent = slotVariables[genNum()]
    if(leftSlot.textContent === middleSlot.textContent && leftSlot.textContent === rightSlot.textContent){
      wallet.textContent = `$ ${previousValue + ( Number(bet) * 10 )}`
      // return "You Win!".innerHTML
    }else{
      wallet.textContent = `$ ${previousValue - Number(bet)}`
    }
  }
})
