let play = document.querySelector("#play")
let randomImages = ["A", "B", "C", "D", "E"]

function displayMsg(msg) {
  document.querySelector("#msg").innerHTML = msg
}

function images() {
  let machine = Math.floor(Math.random() * randomImages.length)
  return randomImages[machine]
}

play.addEventListener("click", (e) => {

  box1 = images()
  box2 = images()
  box3 = images()
  document.querySelector("#box1").innerHTML = box1
  document.querySelector("#box2").innerHTML = box2
  document.querySelector("#box3").innerHTML = box3

  let bet = parseInt(document.querySelector("#betInput").value)
  let balance = parseInt(document.querySelector("#moneyLabel").innerHTML)

  if (balance <= 5) {
    displayMsg("Game Over!")
    document.querySelector("#box1").style.display = "none"
    document.querySelector("#box2").style.display = "none"
    document.querySelector("#box3").style.display = "none"
    return

  }
  if (box1 === box2 && box2 === box3) {
    displayMsg("You Won!")
    balance = balance + (10 * bet)
  } else {
    displayMsg("Sorry,you lost. But try again!")
    balance = balance - bet
  }
  document.querySelector('#moneyLabel').innerHTML = balance
});
