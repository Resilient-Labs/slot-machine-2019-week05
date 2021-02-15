let funds = 2000
let cost1 = 5
let cost2 = 50
let cost3 = 100

document.getElementById('results').innerText = funds
document.querySelector("#five").addEventListener("click", betFive)
document.querySelector("#fifty").addEventListener("click", betFifty)
document.querySelector("#hundred").addEventListener("click", betHun)

function betFive(){
  funds = funds - cost1
  document.querySelector("#results").innerText = funds
  spin1()
  

}
function betFifty(){
  funds = funds - cost2
  document.getElementById('results').innerText = funds
  spin2()
  
}
function betHun(){
  funds = funds - cost3
  document.getElementById('results').innerText = funds
  spin3()
}
// jerry helped me with this
function spin1(e){
  const slot1 = Math.floor(Math.random()*5) 
  const slot2 = Math.floor(Math.random()*5) 
  const slot3 = Math.floor(Math.random()*5) 
  const imageArray = [
    'clover.jpeg.png',
    'crown.jpeg.png',
    'daimond.jpeg.png',
    'heart.jpeg.png',
    'spade.jpeg.png'
  ]
  // using an array like the background img using a url, but plugging in an array
  document.querySelector('#slot1').style.backgroundImage = "url(" + imageArray[slot1] + ")"
  document.querySelector('#slot1').style.backgroundSize = "100%"
  document.querySelector('#slot2').style.backgroundImage = "url(" + imageArray[slot2] + ")"
  document.querySelector('#slot2').style.backgroundSize = "100%"
  document.querySelector('#slot3').style.backgroundImage = "url(" + imageArray[slot3] + ")"
  document.querySelector('#slot3').style.backgroundSize = "100%"
  if (funds<=0){
    alert("youre broke stop")
    return
  }
  else if((slot1 == slot2) && (slot2 == slot3)){
    funds = funds + cost1 * 20
  }
}


function spin2(e){
  const slot1 = Math.floor(Math.random()*5) 
  const slot2 = Math.floor(Math.random()*5) 
  const slot3 = Math.floor(Math.random()*5) 
  const imageArray = [
    'clover.jpeg.png',
    'crown.jpeg.jpg',
    'daimond.jpeg.png',
    'heart.jpeg.png',
    'spade.jpeg.png'
  ]
  // using an array like the background img using a url, but plugging in an array
  document.querySelector('#slot1').style.backgroundImage = "url(" + imageArray[slot1] + ")"
  document.querySelector('#slot1').style.backgroundSize = "100%"
  document.querySelector('#slot2').style.backgroundImage = "url(" + imageArray[slot2] + ")"
  document.querySelector('#slot2').style.backgroundSize = "100%"
  document.querySelector('#slot3').style.backgroundImage = "url(" + imageArray[slot3] + ")"
  document.querySelector('#slot3').style.backgroundSize = "100%"
  if (funds<=0){
    alert("youre broke stop")
    return
  }else if((slot1 == slot2) && (slot2 == slot3)){
    funds = funds + cost2 * 20
  }
}

function spin3(e){
  const slot1 = Math.floor(Math.random()*5) 
  const slot2 = Math.floor(Math.random()*5) 
  const slot3 = Math.floor(Math.random()*5) 
  const imageArray = [
    'clover.jpeg.png',
    'crown.jpeg.png',
    'daimond.jpeg.png',
    'heart.jpeg.png',
    'spade.jpeg.png'
  ]
  // using an array like the background img using a url, but plugging in an array
  document.querySelector('#slot1').style.backgroundImage = "url(" + imageArray[slot1] + ")"
  document.querySelector('#slot1').style.backgroundSize = "100%"
  document.querySelector('#slot2').style.backgroundImage = "url(" + imageArray[slot2] + ")"
  document.querySelector('#slot2').style.backgroundSize = "100%"
  document.querySelector('#slot3').style.backgroundImage = "url(" + imageArray[slot3] + ")"
  document.querySelector('#slot3').style.backgroundSize = "100%"
  if (funds<=0){
    alert("You're BROKE, Stop")
    return
  }
  else if((slot1 == slot2) && (slot2 == slot3)){
    funds = funds + cost3 * 20
  }
}


