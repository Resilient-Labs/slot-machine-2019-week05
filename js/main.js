/*Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update*/
//Variables



const btnFifty = document.querySelector('#fifty')
const btnDollar = document.querySelector('#dollar')
const bananas = document.querySelector('#bananas')
const seven = document.querySelector('#seven')
const oranges = document.querySelector('#oranges')
const result = document.querySelector('h3')
let total = 500

const imgPaths = ['img/SlotMachine1.jpg', 'img/SlotMachine2.jpg','img/SlotMachine3.jpg', 'img/SlotMachine4.jpg', 'img/SlotMachine5.jpg']

//When user clicks button 3 random reels show. Each reel has a choice of 5 items.

/*


//User has to place a bet $0.50 or $1.00. Before the user clicks the button

//If the user only receives 2 matches of reels, user receives $1 or $5

//If user receives 3 match of reels & the matches are not all BIGWINs, user receives double amount, $0.50 $1.00 or $2.00

//If the user receives all BIGWINS, jackpot, user receives $5,000

//If user receives no matches, than user receives no money
*/

btnFifty.addEventListener('click', getRandomItemfifty)
btnDollar.addEventListener('click', getRandomItemHundred)


function getRandomItemfifty(){
  const randomNum1 = Math.floor(Math.random() * imgPaths.length)
  const randomNum2 = Math.floor(Math.random() * imgPaths.length)
  const randomNum3 = Math.floor(Math.random() * imgPaths.length)

 
  bananas.src = imgPaths[randomNum1]
  oranges.src = imgPaths[randomNum2]
  seven.src = imgPaths[randomNum3]

  checkMatchesFifty(randomNum1, randomNum2, randomNum3)

}

function getRandomItemHundred(){
  const randomNum1 = Math.floor(Math.random() * imgPaths.length)
  const randomNum2 = Math.floor(Math.random() * imgPaths.length)
  const randomNum3 = Math.floor(Math.random() * imgPaths.length)

 
  bananas.src = imgPaths[randomNum1]
  oranges.src = imgPaths[randomNum2]
  seven.src = imgPaths[randomNum3]

  checkMatchesHundred(randomNum1, randomNum2, randomNum3)

}


function checkMatchesFifty(path1, path2, path3){
 
  if (path1 === path2 && path1 === path3){
    addBetFifty()
  }else{
    subtractBetFifty()
  }
  
}

function checkMatchesHundred(path1, path2, path3){
 
  if (path1 === path2 && path1 === path3){
    addBetDollar()
  }else{
    subtractBetDollar()
  }
  
}

function addBetFifty(){
  total = total + 1
  result.innerText = total
}
function subtractBetFifty(){
  total = total - 0.50
  result.innerText = total
}

function addBetDollar(){
  total = total + 5
  result.innerText = total
}
function subtractBetDollar(){
  total = total - 1
  result.innerText = total
}





