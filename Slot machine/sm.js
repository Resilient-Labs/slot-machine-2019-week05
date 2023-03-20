document.querySelector('#btn5').addEventListener('click', betMin)
document.querySelector('#btn25').addEventListener('click', betMax)
let imagesArray = [
  'theworld.png',
  'wheeloffortune.png',
  'magician.png',
  'strength.png',
  'thesun.png',
]

let bank = 5000
document.querySelectorAll('.reels').forEach((jawn) => {
  const rando = Math.ceil(Math.random() * imagesArray.length -1)
  let pics = imagesArray[rando]
  console.log(pics)
  jawn.src = pics
});

function betMin(){
  document.querySelectorAll('.reels').forEach((jawn) => {
    const rando = Math.ceil(Math.random() * imagesArray.length -1)
    let pics = imagesArray[rando]
    console.log(pics)
    jawn.src = pics
  });  
  console.log('running')
  bank = bank - 5
  document.querySelector('#rentMoney').innerText = bank
  console.log(bank)
  let randomNum1 = Math.ceil(Math.random() * 2)
  console.log(randomNum1)
  let randomNum2 = Math.ceil(Math.random() * 2)
  console.log(randomNum2)
  let randomNum3 = Math.ceil(Math.random() * 2)
  console.log(randomNum3)
  // document.querySelector('#reel1').innerText = randomNum1
  // document.querySelector('#reel2').innerText = randomNum2
  // document.querySelector('#reel3').innerText = randomNum3
  let first = randomNum1
  console.log(first)
  let second = randomNum2
  console.log(second)
  let third = randomNum3
  console.log(third)
    if(first == second && second == third){
      console.log('winner')
      document.querySelector('#decision').innerHTML = 'winner'
      // alert('winner')
      return bank += 10
    }
    else{document.querySelector('#decision').innerHTML = ''
}
}

function betMax(){
  document.querySelectorAll('.reels').forEach((jawn) => {
    const rando = Math.ceil(Math.random() * imagesArray.length -1)
    let pics = imagesArray[rando]
    console.log(pics)
    jawn.src = pics
  });  
  bank = bank - 25
  console.log('running')
  document.querySelector('#rentMoney').innerText = bank
  console.log(bank)
  let randomNum1 = Math.ceil(Math.random() * 4)
  console.log(randomNum1)
  let randomNum2 = Math.ceil(Math.random() * 4)
  console.log(randomNum2)
  let randomNum3 = Math.ceil(Math.random() * 4)
  console.log(randomNum3)
  // document.querySelector('#reel1').innerText = randomNum1
  // document.querySelector('#reel2').innerText = randomNum2
  // document.querySelector('#reel3').innerText = randomNum3
  let first = randomNum1
  console.log(first)
  let second = randomNum2
  console.log(second)
  let third = randomNum3
  console.log(third)
    if(first == second && second == third){
      console.log('winner')
      document.querySelector('#decision').innerHTML = 'winner'
      // alert('winner')
      return bank += 25
    }
    else{document.querySelector('#decision').innerHTML = ''
}
}



