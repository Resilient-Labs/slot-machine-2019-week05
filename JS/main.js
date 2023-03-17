const fiveButton = document.querySelector ("#five")
const twentyButton= document.querySelector("#twenty")
const fiftyButton = document.querySelector("#fifty")
const hundredButton = document.querySelector("#hundred")
const amount= document.querySelector("#amount")
const pic1= document.querySelector("#pic1")
const pic2 = document.querySelector("#pic2")
const pic3 = document.querySelector("#pic3")
let total = 1000

const images=['images/bar.jpeg' , 'images/cherries.jpeg', 'images/diamonds.jpeg', 'images/what.jpeg', 'images/melon.jpeg']



function playFive(){
  const magic1 = Math.floor(Math.random() * images.length)
  const magic2 = Math.floor(Math.random() * images.length)
  const magic3 = Math.floor(Math.random() * images.length)

pic1.src= images[magic1]
pic2.src = images[magic2]
pic3.src= images[magic3]

checkFive(magic1,magic2,magic3)

}

function checkFive(slot1, slot2, slot3){
  if (slot1=== slot2 && slot1=== slot3){
   addFive()
  }
  else{
    subtractFive()
  }
} 

function addFive(){
 total= total + 5
 amount.innerText= total 
 document.querySelector('#placeToShow').innerText="You are a Winner!!"
}

function subtractFive(){
  total= total - 5
  amount.innerText= total
  document.querySelector('#placeToShow').innerText='Sorry You Lost!'
  checkTotal()
}
fiveButton.addEventListener('click', playFive)

function playTwenty(){
  const magic1 = Math.floor(Math.random() * images.length)
  const magic2 = Math.floor(Math.random() * images.length)
  const magic3= Math.floor(Math.random() * images.length)

  pic1.src= images[magic1]
  pic2.src = images[magic2]
  pic3.src= images[magic3]

checkTwenty(magic1, magic2, magic3)
}

function checkTwenty(slot1, slot2, slot3){
    if (slot1 === slot2 && slot1 === slot3){
    addTwenty()
    }
    else {
      subTwenty()
    }
}

function addTwenty(){
  total= total + 20
  amount.innerText= total
  document.querySelector('#placeToShow').innerText="You are a Winner!!"
}

function subTwenty(){
  total= total - 20
  amount.innerText= total
  document.querySelector('#placeToShow').innerText='Sorry You Lost!'
  checkTotal()
}

twentyButton.addEventListener('click', playTwenty )
  
function playFifty(){
  const magic1 = Math.floor(Math.random() * images.length)
  const magic2 = Math.floor(Math.random() * images.length)
  const magic3 = Math.floor(Math.random() * images.length)

  pic1.src= images[magic1]
  pic2.src = images[magic2]
  pic3.src= images[magic3]

  checkFifty(magic1, magic2,magic3)
}

function checkFifty(slot1,slot2,slot3){
  if (slot1 === slot2 && slot1 === slot3){
  addFifty()
  }
  else {
  subFifty()
  }
}

function addFifty(){
total = total + 50
amount.innerText=total 
document.querySelector('#placeToShow').innerText="You are a Winner!!"
}

function subFifty (){
  total= total - 50
  amount.innerText=total
  document.querySelector('#placeToShow').innerText='Sorry You Lost!'
  checkTotal()
}

fiftyButton.addEventListener('click', playFifty)

function playHundred(){
  const magic1 = Math.floor(Math.random() * images.length)
  const magic2 = Math.floor(Math.random() * images.length)
  const magic3 = Math.floor (Math.random() * images.length)

  pic1.src = images[magic1]
  pic2.src= images[magic2]
  pic3.src=images[magic3]

  checkHundred(magic1, magic2, magic3)
}

function checkHundred(slot1, slot2, slot3){
  if(slot1 === slot2 && slot1 === slot3){
   addHundred()
  }
  else{
    subHundred()
  }
}

function addHundred (){
total= total + 100
amount.innerText= total
document.querySelector('#placeToShow').innerText="You are a Winner!!"
}

function subHundred(){
  total= total - 100
  amount.innerText= total
  document.querySelector('#placeToShow').innerText='Sorry You Lost!'
  checkTotal()
}

hundredButton.addEventListener('click', playHundred)

function checkTotal(){
 if (total <=0){
  return alert('Press Ok to reset your balance')
 }
}