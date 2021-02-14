let funds = 1000
document.getElementById('results').innerText = funds
document.querySelector("#fifty").addEventListener("click", play)
document.querySelector("#five").addEventListener("click", play)
document.querySelector("#restart").addEventListener("click", restart)

let reel1 = document.querySelector('#img1')
let reel2 = document.querySelector('#img2')
let reel3 = document.querySelector('#img3')

function play(event){
  document.querySelector("#titleDisplay").style.display = "none"
  document.querySelector("#totalDisplay").style.display = "block"

  if (funds < event.target.value){
    alert('Out of Funds')
  }else{
    let reel = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg']
    spinSlot1 = reel[Math.floor(Math.random() * reel.length)]
    spinSlot2 = reel[Math.floor(Math.random() * reel.length)]
    spinSlot3 = reel[Math.floor(Math.random() * reel.length)]
    if (spinSlot1 === spinSlot2 && spinSlot2 === spinSlot3) {
      funds = funds + (event.target.value * 10)
      document.querySelector("#results").innerText = funds
      reel1.src = spinSlot1
      reel2.src = spinSlot2
      reel3.src = spinSlot3
      console.log(`${spinSlot1} - ${spinSlot2} - ${spinSlot3}`)

    }else{
      funds = funds - event.target.value
      document.querySelector("#results").innerText = funds
      reel1.src = spinSlot1
      reel2.src = spinSlot2
      reel3.src = spinSlot3
      console.log(`${spinSlot1} - ${spinSlot2} - ${spinSlot3}`)
    }
  }
}
 function restart(){
   funds = 1000
   document.getElementById('results').innerText = funds
 }
