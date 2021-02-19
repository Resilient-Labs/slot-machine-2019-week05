// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

// Start with $1000
// User pulls lever,
      //if loser minus bet
// User can bet $5 min or max bet $50
// Win they win 10x bet


//start with Total = $1000
// min bet $5
//max bet $50

// //Pull the lever
//         // if  Match ()=3 {
//           total += (bet*10)
//         } else if Match ()=2{
//           total += (bet*2)
//         }else Match()=0
//           total-=(bet)

// math random :
//
//New pseudo-code
//make html
///////start with $1000
///////bet $5 or bet $50
//leftReel,middle, Right (A B C D E)

//identify buttons (Spin, bet $5, bet $50)
///// output = balance
//
//3 reels, 5 images each

// let gamble = document.querySelector(".spin").addEventListener('click',rotate)
// let bet5 = document.querySelector(".five").addEventListener('click',rotate)
// let bet50 = document.querySelector(".fifty").addEventListener('click',rotate)
// let output = document.querySelector(".balance").value
// //
// // function getElement(class){
//   return document.getElementbyClass(class);
// }
//
// let array = ['A','B','C','D','E']

//from combo of youtube and help//
//Generates random number between 1-5//

//got help from Kian


let balance = 1000
let bet = 0

//Getting images to change//
let images= document.querySelectorAll('.pics')
let arrayPics= ['img/gudetama.png','img/badtzmaru.png','img/hellokitty.png','img/keroppi.png','img/tuxedosam.png']
let left = document.querySelector('.left')
let middle = document.querySelector('.middle')
let right = document.querySelector('.right')

document.querySelector('.button').addEventListener('click', wheelOutcome)
document.querySelector('.five').addEventListener('click', bet5)
document.querySelector('.fifty').addEventListener('click', bet50)




function wheelOutcome(){
  let leftReel = arrayPics [Math.floor(Math.random() * (5))]
  let middleReel = arrayPics [Math.floor(Math.random() * (5))]
  let rightReel = arrayPics [Math.floor(Math.random() * (5))]

  images[0].src = leftReel  //allow random array pic to show up in reel//
  images[5].src = middleReel
  images[10].src = rightReel


  if (leftReel === middleReel && leftReel=== rightReel){
    document.querySelector(".resultMessage").innerText = "Congrats.You Won!"
    balance = balance + (bet*10)
  } else{
    balance = balance - bet
    document.querySelector(".resultMessage").innerText = "Congrats.You Lost!"
  }
    document.querySelector(".balance").innerText = balance
}

//animation attempt from juan//

left.style.animation = 'spin .5s linear infinite'
middle.style.animation = 'spin .5s linear infinite'
right.style.animation = 'spin .5s linear infinite'
    setTimeout(function(){left.style.animation = 'spin ease-out'},2000)
    setTimeout(function(){middle.style.animation = 'spin ease-out'},3000)
    setTimeout(function(){right.style.animation = 'spin ease-out'})

////////////

function bet5(){
  bet = 5 //reassigning bet//
  document.querySelector('.currentBet').innerText ="5"
}

function bet50(){
  bet = 50
  document.querySelector('.currentBet').innerText ="50"
}
