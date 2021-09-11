let money = 1000

let first = document.querySelector('#slotOne').innerText
let second = document.querySelector('#slotTwo').innerText
let third = document.querySelector('#slotThree').innerText
console.log(first, second, third);

document.querySelector('#betMin').addEventListener('click', betFive)
document.querySelector('#betMax').addEventListener('click', betFifty)
document.querySelector('#cash').innerText = money

function betFive(){
  randomSlot()
  document.querySelector('#slotOne').innerText = first
  document.querySelector('#slotTwo').innerText = second
  document.querySelector('#slotThree').innerText = third
  console.log("this is after random slot",first, second, third)
  if(first === second && first === third){
    document.querySelector('#cash').innerText = money += 5
  }else{
    document.querySelector('#cash').innerText = money -= 5
  }
}

function betFifty(){
  randomSlot()
  document.querySelector('#slotOne').innerText = first
  document.querySelector('#slotTwo').innerText = second
  document.querySelector('#slotThree').innerText = third
  console.log("this is after random slot",first, second, third)
  if(first === second && first === third){
    document.querySelector('#cash').innerText = money += 50
  }else{
    document.querySelector('#cash').innerText = money -= 50
  }
}

function randomSlot(){
  let slot = Math.floor(Math.random()*5)
  // console.log(Math.ceil(Math.random()*slot))
  first = Math.ceil(Math.random()*slot)
  second = Math.ceil(Math.random()*slot)
  third = Math.ceil(Math.random()*slot)

    console.log("this is during random slot", first, second, third)
}
