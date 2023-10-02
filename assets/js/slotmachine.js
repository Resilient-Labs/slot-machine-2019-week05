let kimetsuPoints = 2000;
let currentWager = 0;
const minBet = 10;
const maxBet = 100;

document.querySelector('#kimetsuPoints').innerText = 'Current Kimetsu Tokens: ' + kimetsuPoints;

 

const demonSlayer= ['assets/images/tanjiro-og.gif', 'assets/images/nezuko-anime.gif', 'assets/images/muzan-demon.gif', 'assets/images/Kyōjurō.gif', 'assets/images/Akaza-demon.gif' ]

document.getElementById('min-bet').addEventListener('click', betMinTokens)
document.getElementById('max-bet').addEventListener('click', betMaxTokens)
document.getElementById('bet-all').addEventListener('click', allTokens)
document.getElementById('spin').addEventListener('click', spinSlotMachine)

//this function is used to when user selects min bet button  and wages min bet 
function  betMinTokens(){
  console.log('im here the beginning function')
  // can wage 10 tokens
  if( kimetsuPoints >= minBet){
    //display you waged 10 tokens
    document.querySelector('#userMsg').innerText = `Heyy foo you wagered the minimum bet. Minimum bet is ${minBet}`;
    //wage 10 tokens  
    currentWager = minBet;
    console.log('current Wager: ' + currentWager);//get rid of at end
    console.log('min Bet : ' + minBet);//get rid of at end
  } else{ 
    //display you dont have enough tokens to wage 
    document.querySelector('#userMsg').innerText = `Heyy foo you dont have enough tokens to wage. Minimum bet is ${minBet}`;
  }
}

//This function is used to wage the max Bet 
function  betMaxTokens(){
 // can wage 100 tokens
  if( kimetsuPoints >= maxBet){
    //display you waged 100 tokens
    document.querySelector('#userMsg').innerText = `Heyy foo you wagered the maximum bet. Maximum bet is ${maxBet}`;
    //wage 100 tokens  
    currentWager = maxBet;
    console.log('current Wager: ' + currentWager);//get rid of at end
    console.log('max Bet : ' + maxBet);//get rid of at end
  } else{ 
    //display you dont have enough tokens to wage 
    document.querySelector('#userMsg').innerText = `Heyy foo you dont have enough tokens to wage. Maximum bet is ${maxBet}`;
  }
}

//This function is used to bet all tokens 
function allTokens(){
 // can wage all tokens
  if( kimetsuPoints >= minBet){
    //display you waged all tokens
    document.querySelector('#userMsg').innerText = 'Heyy foo you wagered all of your kimitesu tokens.';
    //wage all tokens  
    currentWager = kimetsuPoints;
    console.log('current Wager: ' + currentWager);//get rid of at end
  } else{ 
    //display you dont have enough for a minimum bet for tokens to wage 
    document.querySelector('#userMsg').innerText = `Heyy foo you dont have enough tokens to wage. Minimum bet is ${minBet}`;
  }
}


//this function randomizes the slots 0-4 and tells you if the user won or lost and will update your current kimietsu tokens 
function spinSlotMachine(){

  //create condition if the user wages tokens
  if( currentWager){

    //slot one value
    let randomDemonNumSlotOne = Math.floor(Math.random() *5)
    document.querySelector('#slotone').innerText = randomDemonNumSlotOne

    //slot two value
    let randomDemonNumSlotTwo = Math.floor(Math.random() *5)
    document.querySelector('#slottwo').innerText = randomDemonNumSlotTwo

    //slot three value
    let randomDemonNumSlotThree = Math.floor(Math.random() *5)
    document.querySelector('#slotthree').innerText = randomDemonNumSlotThree

    console.log(randomDemonNumSlotOne)
    console.log(randomDemonNumSlotTwo)
    console.log(randomDemonNumSlotThree)

    //check if won  by matching the three slots
    if(randomDemonNumSlotOne == randomDemonNumSlotTwo && randomDemonNumSlotThree == randomDemonNumSlotTwo ){

      //displays that user won
      document.querySelector('#userMsg').innerText = 'You Won!'

      //update tokens 
      kimetsuPoints += currentWager;
      currentWager = 0; 
      console.log('updated current wager: ' + currentWager);
      document.querySelector('#kimetsuPoints').innerText ='Current Kimetsu Tokens: ' + kimetsuPoints;
      console.log('check to update new kimitesu points')
    } else{
      //displays that user lost
      document.querySelector('#userMsg').innerText = 'You ARE A LOOOOSER!'

      //update tokens 
      kimetsuPoints -= currentWager;
      currentWager = 0; 
      console.log('updated current wager: ' + currentWager);
      document.querySelector('#kimetsuPoints').innerText = 'Current Kimetsu Tokens: ' + kimetsuPoints;
      console.log('check to update new kimitesu points')
    }
 
  }
  //create else condition if the user doesnt have more then 10 tokens (min bet) to wager
  else {
     //display to user doesnt have enough tokens to wager min bet (10 tokens)
     document.querySelector('#userMsg').innerText = 'You have to select one of the options: min bet , max bet, or all in baby'
  }
   




}


