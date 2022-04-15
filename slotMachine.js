


document.querySelector('.enterBet').addEventListener(click, checkBet)
// I want check bet chck the random number function for the three slots and if random number match for all three slots the player wins.
// function checkBet() {
    // let slotOne = document.querySelector('#slotOne') 
    // let indexOne= rand(5);
    // let itemOne= reelItems[indexOne];
    //set slotOne src attribute to itemOne value
    
    //repeat code above for slotTwo and slotThree
    let slotTwo = document.querySelector('.slotTwo')
    let slotThree = document.querySelector('.slotThree')

   if ( indexOne === indexTwo && indexOne ===indexThree){
      document.querySelector('#money')
      //google how to pull a value from you html input
    
    // if they are all equal then the moneu the put into the imput gets doubled.
       // create a global variable for what the betting pot is. 
       // also create a variable for input and bet
   }
}
    let btnEnterBet = document.getElementsByClassName(enterBet).addEventListener( 'click', setBet )
function setBet(){
    let inputMoneyValue = document.getElementById('money').value 
    console.log('money')
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random())
    let slotOne = "slotOne";
    if (randomNumber < .33) {
        slotOne = "win";
    }
    else if (randomNumber < .6666) {
        slotOne = "lose";
    }
    return botsWeapon;
}

function rand( max) {
    let randomNum = Math.random() * max;
    return Math.floor(randomNum);
}
rand(5);

// replace with real img url.
const reelItems = [ 'imgOne','imgTwo', 'imgThree', 'imgFour', 'imgFive'];




//{
/* we are gonna have to assign a rndom number to each slot
then we are going to compare each slot assignment 
in a conditional we are goinh to say if slot one is th same as slot two and slot two is the same as slot three then the useer won and there total bet amoount should increase by that bet. 
else the user lost and there total bet amount should be decreased by there bet.
}*/