const bet5 = document.querySelector('#bet5')
const bet50 = document.querySelector('#bet50')
let spinResult = document.querySelector('#result') //win/lose
let cashAmount = document.querySelector('#cash') //bank after deductions
let bank = 5000
const imgArray = ["7.avif", "bar.png", "cherry.jpeg", "diamond.png", "horseshoe.avif",]
let slotResult1 = document.querySelector('#slot1')
let slotResult2 = document.querySelector('#slot2')
let slotResult3 = document.querySelector('#slot3')

function spinMin() {
  document.querySelectorAll('.slot').forEach((images) => {
    const randomNum = Math.ceil(Math.random() * imgArray.length - 1)
    const finalImage = imgArray[randomNum]
    console.log(finalImage)
    images.src = 'img/' + finalImage //concatenate because theyre both strings and changes the empty source in the html 
  });
  checkWin(5)
}

function spinMax() {
  document.querySelectorAll('.slot').forEach((images) => {
    const randomNum = Math.ceil(Math.random() * imgArray.length - 1)
    const finalImage = imgArray[randomNum]
    console.log(finalImage)
    images.src = 'img/' + finalImage
  })
  checkWin(50)
}

function checkWin(bet){
  if (slotResult1.src === slotResult2.src && slotResult2.src === slotResult3.src) {
    cashAmount.innerText = bet * 10 + parseInt(cashAmount.innerText)
    alert('Winner!')
  } else {
    cashAmount.innerText -= bet
  }
} //have 100, bet 5 and win, have 150 cashAmount += bet * 10
//any win *10 
bet5.addEventListener('click', spinMin)
bet50.addEventListener('click', spinMax)

